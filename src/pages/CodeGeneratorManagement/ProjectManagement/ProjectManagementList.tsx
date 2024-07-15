import React, { useEffect, useState } from 'react'
import { Box, Button, Chip, IconButton, Tooltip } from '@mui/material'
import { Close, Edit, RadioButtonUnchecked, TaskAltSharp } from '@mui/icons-material'
import ProjectManagementFormDialog from './Dialog/ProjectManagementFormDialog'
import { DialogState } from '@app/store/commonStore/CommonStore'
import { useDispatch, useSelector } from 'react-redux'
import projectManagementStore from '@app/store/projectManagementStore/ProjectManagementStore'
import { RootState } from '@app/store/store'
import { useUnmount } from 'react-use'
import { Popconfirm } from 'antd'
import styled from 'styled-components'
import TextInputField from '@app/components/common/TextInputField/TextInputField'

import SelectField from '@app/components/common/SelectComponent/SelectField'
import LoadingComponent from '@app/components/common/Loading/Loading'
import {
  fetchProjectManagementList,
  deleteProjectManagement,
} from '@app/api/projectManagement/project-management-api'

import {
  frontendLanguageOptions,
  templateFrontendUsedOptions,
  backendLanguageOptions,
  templateBackendUsedOptions,
} from './Dialog/ProjectManagementFormInput'
import projectStore from '@app/store/projectStore/ProjectStore'
import useConfirm from '@app/components/common/ConfirmDialog/useConfirm'

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

export type ProjectManagement = {
  id: string
} & ProjectManagementBase

export type ProjectManagementInput = {
  id?: string
} & ProjectManagementBase

type ProjectManagementBase = {
  name: string
  description?: string
  color?: string
  frontendLanguage?: string
  templateFrontendUsed?: string
  backendLanguage?: string
  templateBackendUsed?: string
}

export type ProjectManagementSpecification = {
  name?: string
  frontendLanguage?: string
  backendLanguage?: string
}

const ProjectManagementList: React.FC = () => {
  const [projectManagementFormDialogMode, setProjectManagementFormDialogMode] =
    useState<DialogState>('none')
  const [specification, setSpecification] = useState<ProjectManagementSpecification>({})

  const [name, setName] = React.useState<string | undefined>(undefined)
  const [frontendLanguage, setFrontendLanguage] = React.useState<string | undefined>(undefined)
  const [backendLanguage, setBackendLanguage] = React.useState<string | undefined>(undefined)
  const { loadingStatus, dataList } = useSelector(
    (state: RootState) => state.projectManagementStore,
  )
  const { currentProjectId } = useSelector((state: RootState) => state.projectStore)

  const projectManagementList = dataList || []

  const dispatch = useDispatch()
  const confirm = useConfirm()

  useEffect(() => {
    const handleFetchData = async () => {
      try {
        dispatch(projectManagementStore.actions.setLoadingStatus('Loading'))
        const fetchedData = await fetchProjectManagementList(specification)
        dispatch(projectManagementStore.actions.setProjectManagementList(fetchedData || []))
      } catch (error) {
        console.error(error)
      } finally {
        dispatch(projectManagementStore.actions.setLoadingStatus('Loaded'))
      }
    }
    if (loadingStatus === 'NotLoad') {
      handleFetchData()
    }
  }, [loadingStatus])

  useUnmount(() => {
    dispatch(projectManagementStore.actions.clearAll())
  })

  const handleClickEditProjectManagement = (item: ProjectManagement) => {
    dispatch(projectManagementStore.actions.setEditItem(item))
    setProjectManagementFormDialogMode('edit')
  }

  const handleClickAddNew = () => {
    setProjectManagementFormDialogMode('add')
  }

  const handleReturnFormDialog = () => {
    setProjectManagementFormDialogMode('none')
    dispatch(projectManagementStore.actions.setEditItem(undefined))
  }

  const handleSelectProject = async (item: ProjectManagement) => {
    if (
      currentProjectId &&
      !(await confirm({
        title: 'Confirm',
        message:
          'Are you sure to deactivated this Project. \n All other coding features will be de-activated until you active 1 project!',
      }))
    ) {
      return
    }
    if (currentProjectId === undefined) {
      dispatch(projectStore.actions.changeCurrentProjectId(item.id))
      dispatch(
        projectStore.actions.changeCurrentLanguageList({
          frontend: item.frontendLanguage,
          backend: item.backendLanguage,
        }),
      )
    } else {
      dispatch(projectStore.actions.changeCurrentProjectId(undefined))
      dispatch(projectStore.actions.changeCurrentLanguageList({}))
    }
  }

  const handleClickDeleteProjectManagement = async (item: ProjectManagement) => {
    try {
      if (item.id) {
        await deleteProjectManagement(item.id)
        dispatch(projectManagementStore.actions.setLoadingStatus('NotLoad'))
      }
    } catch (e) {
      console.error(e)
    }
  }

  const handleSetSpecification = () => {
    setSpecification({
      name,
      frontendLanguage,
      backendLanguage,
    })
    dispatch(projectManagementStore.actions.setLoadingStatus('NotLoad'))
  }

  return (
    <StyledList>
      {loadingStatus !== 'Loaded' && <LoadingComponent />}
      {projectManagementFormDialogMode !== 'none' && (
        <ProjectManagementFormDialog
          mode={projectManagementFormDialogMode}
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
            labelWidth={50}
            id='name-search'
            name='name'
            value={name}
            onChange={(value) => setName(value)}
          />
          <SelectField
            options={frontendLanguageOptions}
            label='Frontend Language'
            id='frontendLanguage-search'
            name='frontendLanguage'
            value={frontendLanguage}
            onChange={(value) => setFrontendLanguage(value)}
          />
          <SelectField
            options={backendLanguageOptions}
            label='Backend Language'
            id='backendLanguage-search'
            name='backendLanguage'
            value={backendLanguage}
            onChange={(value) => setBackendLanguage(value)}
          />
        </Box>
      </Box>

      <Box>
        {projectManagementList.map((projectManagement) => {
          const frontendLanguage = frontendLanguageOptions?.find(
            (option) => option.value === projectManagement.frontendLanguage,
          )?.label
          const frontendTemplate = templateFrontendUsedOptions?.find(
            (option) => option.value === projectManagement.templateFrontendUsed,
          )?.label

          const backendLanguage = backendLanguageOptions?.find(
            (option) => option.value === projectManagement.backendLanguage,
          )?.label

          const backendTemplate = templateBackendUsedOptions?.find(
            (option) => option.value === projectManagement.templateBackendUsed,
          )?.label

          return (
            <StyledItem
              key={projectManagement.id}
              style={{
                backgroundColor: projectManagement.color,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                <Tooltip title={projectManagement.description}>
                  <span style={{ fontWeight: 600, fontSize: '20px', marginBottom: 1 }}>
                    {projectManagement.name}
                  </span>
                </Tooltip>
                <div>
                  <Chip
                    label={`FE: ${frontendLanguage}`}
                    size='small'
                    style={{ marginRight: '10px' }}
                  />
                  <span> {frontendTemplate}</span>
                </div>
                <div>
                  <Chip
                    label={`BE: ${backendLanguage}`}
                    size='small'
                    style={{ marginRight: '10px' }}
                  />
                  <span> {backendTemplate}</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton onClick={() => handleSelectProject(projectManagement)}>
                  {currentProjectId === projectManagement.id ? (
                    <Tooltip title='This project is activated'>
                      <TaskAltSharp />
                    </Tooltip>
                  ) : (
                    <RadioButtonUnchecked />
                  )}
                </IconButton>
                <Button onClick={() => handleClickEditProjectManagement(projectManagement)}>
                  <Edit fontSize='small' />
                </Button>
                <Popconfirm
                  title='Are you sure you want to delete this projectManagement?'
                  onConfirm={() => handleClickDeleteProjectManagement(projectManagement)}
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

export default ProjectManagementList
