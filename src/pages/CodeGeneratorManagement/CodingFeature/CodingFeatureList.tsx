import React, { useEffect, useState } from 'react'
import { Box, Button } from '@mui/material'
import { Close, Edit } from '@mui/icons-material'
import CodingFeatureFormDialog from './Dialog/CodingFeatureFormDialog'
import { DialogState } from '@app/store/commonStore/CommonStore'
import { useDispatch, useSelector } from 'react-redux'
import codingFeatureStore from '@app/store/codingFeatureStore/CodingFeatureStore'
import { RootState } from '@app/store/store'
import { useUnmount } from 'react-use'
import { Popconfirm } from 'antd'
import styled from 'styled-components'
import TextInputField from '@app/components/common/TextInputField/TextInputField'

import LoadingComponent from '@app/components/common/Loading/Loading'
import {
  fetchCodingFeatureList,
  deleteCodingFeature,
} from '@app/api/codingFeature/coding-feature-api'
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

export type CodingFeature = {
  id: string
} & CodingFeatureBase

export type CodingFeatureInput = {
  id?: string
} & CodingFeatureBase

type CodingFeatureBase = {
  name: string
  description?: string
  color?: string
  projectId?: string
  language: string
  importCodeContent?: any /* TODO: replace any by relation */
  codeContent?: any /* TODO: replace any by relation */
  tagList?: any /* TODO: replace any by relation */
}

const languageCollection = [
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
]

export type CodingFeatureSpecification = {
  name?: string
  projectId?: string
  language?: string
}

const CodingFeatureList: React.FC = () => {
  const { loadingStatus, dataList } = useSelector((state: RootState) => state.codingFeatureStore)
  const { currentProjectId, currentLanguageList } = useSelector(
    (state: RootState) => state.projectStore,
  )

  const [name, setName] = React.useState<string | undefined>(undefined)
  const [language, setLanguage] = React.useState<string>(languageCollection[0]?.value)
  const [specification, setSpecification] = useState<CodingFeatureSpecification>({
    projectId: currentProjectId,
    language: currentLanguageList[language],
  })
  const [codingFeatureFormDialogMode, setCodingFeatureFormDialogMode] =
    useState<DialogState>('none')

  const codingFeatureList = dataList || []

  const dispatch = useDispatch()

  useEffect(() => {
    const handleFetchData = async () => {
      try {
        dispatch(codingFeatureStore.actions.setLoadingStatus('Loading'))
        const fetchedData = await fetchCodingFeatureList(specification)
        dispatch(codingFeatureStore.actions.setCodingFeatureList(fetchedData || []))
      } catch (error) {
        console.error(error)
      } finally {
        dispatch(codingFeatureStore.actions.setLoadingStatus('Loaded'))
      }
    }
    if (loadingStatus === 'NotLoad') {
      handleFetchData()
    }
  }, [loadingStatus, specification])

  useUnmount(() => {
    dispatch(codingFeatureStore.actions.clearAll())
  })

  const handleClickEditCodingFeature = (item: CodingFeature) => {
    dispatch(codingFeatureStore.actions.setEditItem(item))
    setCodingFeatureFormDialogMode('edit')
  }

  const handleClickAddNew = () => {
    setCodingFeatureFormDialogMode('add')
  }

  const handleReturnFormDialog = () => {
    setCodingFeatureFormDialogMode('none')
    dispatch(codingFeatureStore.actions.setEditItem(undefined))
  }

  const handleClickDeleteCodingFeature = async (item: CodingFeature) => {
    try {
      if (item.id) {
        await deleteCodingFeature(item.id)
        dispatch(codingFeatureStore.actions.setLoadingStatus('NotLoad'))
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
  }

  useEffect(() => {
    if (loadingStatus !== 'NotLoad') {
      dispatch(codingFeatureStore.actions.setLoadingStatus('NotLoad'))
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
      {codingFeatureFormDialogMode !== 'none' && (
        <CodingFeatureFormDialog
          mode={codingFeatureFormDialogMode}
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
        {codingFeatureList.map((codingFeature) => {
          return (
            <StyledItem
              key={codingFeature.id}
              style={{
                backgroundColor: codingFeature.color,
                color: ColorUtils.getContrastingColor(codingFeature?.color),
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 600, fontSize: '18px' }}> {codingFeature.name}</span>
                <span>
                  <span style={{ fontWeight: 600 }}>Description:</span> {codingFeature.description}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button onClick={() => handleClickEditCodingFeature(codingFeature)}>
                  <Edit fontSize='small' />
                </Button>
                <Popconfirm
                  title='Are you sure you want to delete this codingFeature?'
                  onConfirm={() => handleClickDeleteCodingFeature(codingFeature)}
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

export default CodingFeatureList
