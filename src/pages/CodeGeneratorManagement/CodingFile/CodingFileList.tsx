import React, { useEffect, useState } from 'react'
import { Box, Button, Chip } from '@mui/material'
import { Close, Edit } from '@mui/icons-material'
import CodingFileFormDialog from './Dialog/CodingFileFormDialog'
import { DialogState } from '@app/store/commonStore/CommonStore'
import { useDispatch, useSelector } from 'react-redux'
import codingFileStore from '@app/store/codingFileStore/CodingFileStore'
import { RootState } from '@app/store/store'
import { useUnmount } from 'react-use'
import { Popconfirm } from 'antd'
import styled from 'styled-components'
import TextInputField from '@app/components/common/TextInputField/TextInputField'

import LoadingComponent from '@app/components/common/Loading/Loading'
import { fetchCodingFileList, deleteCodingFile } from '@app/api/codingFile/coding-file-api'
import SelectField from '@app/components/common/SelectComponent/SelectField'

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

export type CodingFile = {
  id: string
} & CodingFileBase

export type CodingFileInput = {
  id?: string
} & CodingFileBase

type CodingFileBase = {
  name: string
  description?: string
  projectId?: string
  language: string
  needToExport?: boolean
  filePath: string
  fileName: string
  importCodeContent?: any /* TODO: replace any by relation */
  codeContent?: any /* TODO: replace any by relation */
  tagList?: any /* TODO: replace any by relation */
}

const languageCollection = [
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
]

export type CodingFileSpecification = {
  name?: string
  projectId?: string
  language?: string
  filePath?: string
  fileName?: string
}

const CodingFileList: React.FC = () => {
  const [codingFileFormDialogMode, setCodingFileFormDialogMode] = useState<DialogState>('none')

  const [name, setName] = React.useState<string | undefined>(undefined)
  const [language, setLanguage] = React.useState<string>(languageCollection[0]?.value)

  const { loadingStatus, dataList } = useSelector((state: RootState) => state.codingFileStore)
  const { currentProjectId, currentLanguageList } = useSelector(
    (state: RootState) => state.projectStore,
  )
  const [specification, setSpecification] = useState<CodingFileSpecification>({
    projectId: currentProjectId,
    language: currentLanguageList[language],
  })

  const codingFileList = dataList || []
  const isReadOnly = !currentProjectId

  const dispatch = useDispatch()

  useEffect(() => {
    const handleFetchData = async () => {
      try {
        dispatch(codingFileStore.actions.setLoadingStatus('Loading'))
        const fetchedData = await fetchCodingFileList(specification)
        dispatch(codingFileStore.actions.setCodingFileList(fetchedData || []))
      } catch (error) {
        console.error(error)
      } finally {
        dispatch(codingFileStore.actions.setLoadingStatus('Loaded'))
      }
    }
    if (loadingStatus === 'NotLoad') {
      handleFetchData()
    }
  }, [loadingStatus])

  useUnmount(() => {
    dispatch(codingFileStore.actions.clearAll())
  })

  const handleClickEditCodingFile = (item: CodingFile) => {
    dispatch(codingFileStore.actions.setEditItem(item))
    setCodingFileFormDialogMode('edit')
  }

  const handleClickAddNew = () => {
    setCodingFileFormDialogMode('add')
  }

  const handleReturnFormDialog = () => {
    setCodingFileFormDialogMode('none')
    dispatch(codingFileStore.actions.setEditItem(undefined))
  }

  const handleClickDeleteCodingFile = async (item: CodingFile) => {
    try {
      if (item.id) {
        await deleteCodingFile(item.id)
        dispatch(codingFileStore.actions.setLoadingStatus('NotLoad'))
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
    dispatch(codingFileStore.actions.setLoadingStatus('NotLoad'))
  }

  return (
    <StyledList>
      {loadingStatus !== 'Loaded' && <LoadingComponent />}
      {codingFileFormDialogMode !== 'none' && (
        <CodingFileFormDialog
          mode={codingFileFormDialogMode}
          onReturn={handleReturnFormDialog}
          language={language}
        />
      )}
      <Box mb={1} mt={1} display='flex' flexDirection='row-reverse' alignItems='center' gap={1}>
        <Box display='flex' sx={{ width: '200px', gap: '8px' }}>
          <Button variant='outlined' onClick={handleClickAddNew} disabled={isReadOnly}>
            Add new
          </Button>
          <Button variant='contained' onClick={handleSetSpecification}>
            Search
          </Button>
        </Box>
        <Box display='flex'>
          <TextInputField
            variant='outlined'
            type='text'
            label='Name'
            id='name-search'
            name='name'
            labelWidth={50}
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
        {codingFileList.map((codingFile) => {
          return (
            <StyledItem key={codingFile.id}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 600 }}> {codingFile.name}</span>
                <Chip label={`${codingFile.filePath}/${codingFile.fileName}`} />
                <span>Description: {codingFile.description}</span>
                <span>
                  Exportable: <input type='checkbox' checked={codingFile.needToExport} />
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button onClick={() => handleClickEditCodingFile(codingFile)}>
                  <Edit fontSize='small' />
                </Button>
                <Popconfirm
                  title='Are you sure you want to delete this codingFile?'
                  onConfirm={() => handleClickDeleteCodingFile(codingFile)}
                  okText='Yes'
                  cancelText='No'
                >
                  <Button variant='text' onClick={(e) => e.stopPropagation()} disabled={isReadOnly}>
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

export default CodingFileList
