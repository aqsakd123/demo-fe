import React, { useEffect, useState } from 'react'
import { Box, Button } from '@mui/material'
import { Close, Edit } from '@mui/icons-material'
import CodeCommonManagementFormDialog from './Dialog/CodeCommonManagementFormDialog'
import { DialogState } from '@app/store/commonStore/CommonStore'
import { useDispatch, useSelector } from 'react-redux'
import codeCommonManagementStore from '@app/store/codeCommonManagementStore/CodeCommonManagementStore'
import { RootState } from '@app/store/store'
import { useUnmount } from 'react-use'
import { Popconfirm } from 'antd'
import styled from 'styled-components'
import TextInputField from '@app/components/common/TextInputField/TextInputField'

import LoadingComponent from '@app/components/common/Loading/Loading'
import {
  fetchCodeCommonManagementList,
  deleteCodeCommonManagement,
} from '@app/api/codeCommonManagement/code-common-management-api'
import SelectField from '@app/components/common/SelectComponent/SelectField'
import ColorUtils from '@app/helpers/ColorUtils'

const StyledList = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  padding: 20px;
`

const StyledItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 8px;
`

export type CodeCommonManagement = {
  id: string
} & CodeCommonManagementBase

export type CodeCommonManagementInput = {
  id?: string
} & CodeCommonManagementBase

type CodeCommonManagementBase = {
  name: string
  description?: string
  color?: string
  projectId?: string
  language: string
  importCodeContent?: any /* TODO: replace any by relation */
  codeContent?: any /* TODO: replace any by relation */
}

const languageCollection = [
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
]

export type CodeCommonManagementSpecification = {
  name?: string
  projectId?: string
  language?: string
}

const CodeCommonManagementList: React.FC = () => {
  const { loadingStatus, dataList } = useSelector(
    (state: RootState) => state.codeCommonManagementStore,
  )
  const { currentProjectId, currentLanguageList } = useSelector(
    (state: RootState) => state.projectStore,
  )

  const [language, setLanguage] = React.useState<string>(languageCollection[0]?.value)
  const [codeCommonManagementFormDialogMode, setCodeCommonManagementFormDialogMode] =
    useState<DialogState>('none')
  const [specification, setSpecification] = useState<CodeCommonManagementSpecification>({
    projectId: currentProjectId,
    language: currentLanguageList[language],
  })
  const [name, setName] = React.useState<string | undefined>(undefined)

  const codeCommonManagementList = dataList || []

  const dispatch = useDispatch()

  useEffect(() => {
    const handleFetchData = async () => {
      try {
        dispatch(codeCommonManagementStore.actions.setLoadingStatus('Loading'))
        const fetchedData = await fetchCodeCommonManagementList(specification)
        dispatch(codeCommonManagementStore.actions.setCodeCommonManagementList(fetchedData || []))
      } catch (error) {
        console.error(error)
      } finally {
        dispatch(codeCommonManagementStore.actions.setLoadingStatus('Loaded'))
      }
    }
    if (loadingStatus === 'NotLoad') {
      handleFetchData()
    }
  }, [loadingStatus])

  useUnmount(() => {
    dispatch(codeCommonManagementStore.actions.clearAll())
  })

  const handleClickEditCodeCommonManagement = (item: CodeCommonManagement) => {
    dispatch(codeCommonManagementStore.actions.setEditItem(item))
    setCodeCommonManagementFormDialogMode('edit')
  }

  const handleClickAddNew = () => {
    setCodeCommonManagementFormDialogMode('add')
  }

  const handleReturnFormDialog = () => {
    setCodeCommonManagementFormDialogMode('none')
    dispatch(codeCommonManagementStore.actions.setEditItem(undefined))
  }

  const handleClickDeleteCodeCommonManagement = async (item: CodeCommonManagement) => {
    try {
      if (item.id) {
        await deleteCodeCommonManagement(item.id)
        dispatch(codeCommonManagementStore.actions.setLoadingStatus('NotLoad'))
      }
    } catch (e) {
      console.error(e)
    }
  }

  const handleSetSpecification = () => {
    setSpecification({
      name,
      projectId: currentProjectId,
      language: currentLanguageList[language],
    })
    dispatch(codeCommonManagementStore.actions.setLoadingStatus('NotLoad'))
  }

  useEffect(() => {
    if (loadingStatus !== 'NotLoad') {
      dispatch(codeCommonManagementStore.actions.setLoadingStatus('NotLoad'))
    }
  }, [specification])

  useEffect(() => {
    if (loadingStatus !== 'NotLoad') {
      handleSetSpecification()
    }
  }, [language])

  return (
    <StyledList>
      {loadingStatus !== 'Loaded' && <LoadingComponent />}
      {codeCommonManagementFormDialogMode !== 'none' && (
        <CodeCommonManagementFormDialog
          mode={codeCommonManagementFormDialogMode}
          language={language}
          onReturn={handleReturnFormDialog}
        />
      )}
      <Box mb={1} mt={1} display='flex' flexDirection='row-reverse' alignItems='center' gap={1}>
        <Button variant='outlined' onClick={handleClickAddNew}>
          Add new
        </Button>

        <Button variant='contained' onClick={handleSetSpecification}>
          Search
        </Button>

        <Box display='flex'>
          <TextInputField
            variant='outlined'
            type='text'
            label='Name'
            id='name-search'
            name='name'
            value={name}
            onChange={(value) => setName(value)}
          />
          <SelectField
            options={languageCollection}
            label='Frontend Language'
            id='frontendLanguage-search'
            name='frontendLanguage'
            value={language}
            onChange={setLanguage}
          />
        </Box>
      </Box>

      <Box>
        {codeCommonManagementList.map((codeCommonManagement) => {
          return (
            <StyledItem
              key={codeCommonManagement.id}
              style={{
                backgroundColor: codeCommonManagement.color,
                color: ColorUtils.getContrastingColor(codeCommonManagement?.color),
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 600, fontSize: '18px' }}>
                  {codeCommonManagement.name}
                </span>
                <span>
                  <span style={{ fontWeight: 600 }}>Description:</span>
                  {codeCommonManagement.description}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button onClick={() => handleClickEditCodeCommonManagement(codeCommonManagement)}>
                  <Edit fontSize='small' />
                </Button>
                <Popconfirm
                  title='Are you sure you want to delete this codeCommonManagement?'
                  onConfirm={() => handleClickDeleteCodeCommonManagement(codeCommonManagement)}
                  okText='Yes'
                  cancelText='No'
                >
                  <Button variant='text' onClick={(e) => e.stopPropagation()}>
                    <Close />
                  </Button>
                </Popconfirm>
              </div>
            </StyledItem>
          )
        })}
      </Box>
    </StyledList>
  )
}

export default CodeCommonManagementList
