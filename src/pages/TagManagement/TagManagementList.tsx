import React, { useEffect, useState } from 'react'
import { Box, Button, Chip, IconButton, Tooltip } from '@mui/material'
import { Close, Edit, RadioButtonUnchecked, TaskAlt } from '@mui/icons-material'
import TagManagementFormDialog from './Dialog/TagManagementFormDialog'
import { DialogState } from '@app/store/commonStore/CommonStore'
import { useDispatch, useSelector } from 'react-redux'
import tagManagementStore from '@app/store/tagManagementStore/TagManagementStore'
import { RootState } from '@app/store/store'
import { useUnmount } from 'react-use'
import { Popconfirm } from 'antd'
import styled from 'styled-components'
import TextInputField from '@app/components/common/TextInputField/TextInputField'

import LoadingComponent from '@app/components/common/Loading/Loading'
import {
  fetchTagManagementList,
  deleteTagManagement,
} from '@app/api/tagManagement/tag-management-api'
import ColorUtils from '@app/helpers/ColorUtils'
import { webPartOptions } from './Dialog/TagManagementFormInput'
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

export type TagManagement = {
  id: string
} & TagManagementBase

export type TagManagementInput = {
  id?: string
} & TagManagementBase

type TagManagementBase = {
  name: string
  description?: string
  color?: string
  projectId: string
  webPart?: string
}

export type TagManagementSpecification = {
  name?: string
  projectId?: string
}

type TagManagementListProps = {
  webPart?: string
  handleSelect?: (val: string[] | string | undefined) => void
  selectedId?: string[] | string
  mode?: 'single' | 'multiple'
}

const TagManagementList: React.FC<TagManagementListProps> = (props: TagManagementListProps) => {
  const { webPart, selectedId, mode, handleSelect } = props
  const { currentProjectId } = useSelector((state: RootState) => state.projectStore)
  const { loadingStatus, dataList } = useSelector((state: RootState) => state.tagManagementStore)

  const [tagManagementFormDialogMode, setTagManagementFormDialogMode] =
    useState<DialogState>('none')

  const [specification, setSpecification] = useState<TagManagementSpecification>({
    projectId: currentProjectId,
  })

  const [name, setName] = React.useState<string | undefined>(undefined)
  const [webPartSelected, setWebPartSelected] = React.useState<string | undefined>(webPart)

  const tagManagementList = dataList || []

  const dispatch = useDispatch()

  useEffect(() => {
    const handleFetchData = async () => {
      try {
        dispatch(tagManagementStore.actions.setLoadingStatus('Loading'))
        const fetchedData = await fetchTagManagementList(specification)
        dispatch(tagManagementStore.actions.setTagManagementList(fetchedData || []))
      } catch (error) {
        console.error(error)
      } finally {
        dispatch(tagManagementStore.actions.setLoadingStatus('Loaded'))
      }
    }
    if (loadingStatus === 'NotLoad') {
      handleFetchData()
    }
  }, [loadingStatus])

  useUnmount(() => {
    dispatch(tagManagementStore.actions.clearAll())
  })

  const handleClickEditTagManagement = (item: TagManagement) => {
    dispatch(tagManagementStore.actions.setEditItem(item))
    setTagManagementFormDialogMode('edit')
  }

  const handleClickAddNew = () => {
    setTagManagementFormDialogMode('add')
  }

  const handleReturnFormDialog = () => {
    setTagManagementFormDialogMode('none')
    dispatch(tagManagementStore.actions.setEditItem(undefined))
  }

  const handleClickDeleteTagManagement = async (item: TagManagement) => {
    try {
      if (item.id) {
        await deleteTagManagement(item.id)
        dispatch(tagManagementStore.actions.setLoadingStatus('NotLoad'))
      }
    } catch (e) {
      console.error(e)
    }
  }

  const handleSetSpecification = () => {
    setSpecification((prev) => ({
      ...prev,
      name,
      projectId: currentProjectId,
    }))
    dispatch(tagManagementStore.actions.setLoadingStatus('NotLoad'))
  }

  return (
    <StyledList>
      {loadingStatus !== 'Loaded' && <LoadingComponent />}
      {tagManagementFormDialogMode !== 'none' && (
        <TagManagementFormDialog
          mode={tagManagementFormDialogMode}
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
            options={webPartOptions}
            id={`input-webPart-select`}
            name='webPart'
            label='Front/Backend'
            value={webPartSelected}
            onChange={(value) => setWebPartSelected(value)}
          />
        </Box>
      </Box>

      <Box>
        {tagManagementList
          ?.filter((it) => (webPartSelected ? it.webPart === webPartSelected : true))
          .map((tagManagement) => {
            const displayChecked = Boolean(mode)
            const isChecked = Array.isArray(selectedId)
              ? selectedId?.includes(tagManagement.id)
              : selectedId === tagManagement.id

            const handleCheckedTag = () => {
              if (!handleSelect) {
                return
              }
              if (mode === 'multiple' && Array.isArray(selectedId)) {
                handleSelect(
                  isChecked
                    ? selectedId.filter((it) => it === tagManagement.id)
                    : selectedId.concat([tagManagement.id]),
                )
              } else if (mode === 'single' && !Array.isArray(selectedId)) {
                handleSelect(isChecked ? undefined : tagManagement.id)
              }
            }

            return (
              <StyledItem
                key={tagManagement.id}
                style={{
                  backgroundColor: tagManagement.color,
                  color: ColorUtils.getContrastingColor(tagManagement?.color),
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  {displayChecked && (
                    <IconButton onClick={handleCheckedTag}>
                      {isChecked ? <TaskAlt /> : <RadioButtonUnchecked />}
                    </IconButton>
                  )}
                  <Tooltip title={tagManagement.description} arrow>
                    <span style={{ fontWeight: 600, fontSize: '18px', marginBottom: 1 }}>
                      {tagManagement.name}
                    </span>
                  </Tooltip>
                  {tagManagement.webPart && (
                    <Chip
                      size='small'
                      label={
                        webPartOptions?.find((it) => it.value === tagManagement.webPart)?.label
                      }
                    />
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Button onClick={() => handleClickEditTagManagement(tagManagement)}>
                    <Edit fontSize='small' />
                  </Button>
                  <Popconfirm
                    title='Are you sure you want to delete this tagManagement?'
                    onConfirm={() => handleClickDeleteTagManagement(tagManagement)}
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

export default TagManagementList
