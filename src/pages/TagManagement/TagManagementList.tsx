import React, { useEffect, useState } from 'react'
import { Box, Button, IconButton, Tooltip } from '@mui/material'
import { Close, Edit, RadioButtonUnchecked, TaskAlt } from '@mui/icons-material'
import TagManagementFormDialog from './Dialog/TagManagementFormDialog'
import { ColorTokens, DialogState } from '@app/store/commonStore/CommonStore'
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

const StyledList = styled.div<{
  colorTokens?: ColorTokens
}>`
  border-radius: 10px;
  padding: 20px;
  background-color: ${({ colorTokens }) => `${colorTokens?.primary[400]}`};

  .styled-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${({ colorTokens }) => `${colorTokens?.blueAccent[800]}`};
  }
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
}

export type TagManagementSpecification = {
  name?: string
}

type TagManagementListProps = {
  handleSelect?: (val: TagManagement[] | TagManagement | undefined) => void
  selectedTag?: TagManagement[] | TagManagement
  mode?: 'single' | 'multiple'
}

const TagManagementList: React.FC<TagManagementListProps> = (props: TagManagementListProps) => {
  const { selectedTag, mode, handleSelect } = props
  const { loadingStatus, dataList } = useSelector((state: RootState) => state.tagManagementStore)
  const { colorTokens } = useSelector((state: RootState) => state.commonStore)

  const [tagManagementFormDialogMode, setTagManagementFormDialogMode] =
    useState<DialogState>('none')

  const [specification, setSpecification] = useState<TagManagementSpecification>({})

  const [name, setName] = React.useState<string | undefined>(undefined)

  const tagManagementList = dataList?.filter((it) => it.name?.includes(name?.trim() ?? '')) || []

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
    }))
    dispatch(tagManagementStore.actions.setLoadingStatus('NotLoad'))
  }

  return (
    <StyledList colorTokens={colorTokens}>
      {loadingStatus !== 'Loaded' && <LoadingComponent />}
      {tagManagementFormDialogMode !== 'none' && (
        <TagManagementFormDialog
          mode={tagManagementFormDialogMode}
          onReturn={handleReturnFormDialog}
        />
      )}
      <Box mb={1} mt={1} display='flex' flexDirection='row-reverse' alignItems='center' gap={1}>
        {!mode && (
          <>
            <Button variant='outlined' onClick={handleClickAddNew}>
              Add new
            </Button>
            <Button color='error' variant='contained' onClick={handleSetSpecification}>
              Search
            </Button>
          </>
        )}
        <Box display='flex'>
          <TextInputField
            variant='filled'
            type='text'
            label='Name'
            labelWidth={0}
            id='name-search'
            name='name'
            value={name}
            onChange={(value) => setName(value)}
          />
        </Box>
      </Box>

      <Box>
        {tagManagementList.map((tagManagement) => {
          const displayChecked = Boolean(mode)
          const isChecked = Array.isArray(selectedTag)
            ? selectedTag.map((it) => it.id)?.includes(tagManagement.id)
            : selectedTag?.id === tagManagement.id

          const handleCheckedTag = () => {
            if (!handleSelect) {
              return
            }
            if (mode === 'multiple' && Array.isArray(selectedTag)) {
              handleSelect(
                isChecked
                  ? selectedTag.filter((it) => it.id !== tagManagement.id)
                  : selectedTag.concat([tagManagement]),
              )
            } else if (mode === 'single' && !Array.isArray(selectedTag)) {
              handleSelect(isChecked ? undefined : tagManagement)
            }
          }

          return (
            <div
              className='styled-item'
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
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button
                  sx={{ color: ColorUtils.getContrastingColor(tagManagement?.color) }}
                  onClick={() => handleClickEditTagManagement(tagManagement)}
                >
                  <Edit fontSize='small' />
                </Button>
                <Popconfirm
                  title='Are you sure you want to delete this tagManagement?'
                  onConfirm={() => handleClickDeleteTagManagement(tagManagement)}
                  okText='Yes'
                  cancelText='No'
                >
                  <Button
                    sx={{ color: ColorUtils.getContrastingColor(tagManagement?.color) }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Close />
                  </Button>
                </Popconfirm>
              </div>
            </div>
          )
        })}
      </Box>
    </StyledList>
  )
}

export default TagManagementList
