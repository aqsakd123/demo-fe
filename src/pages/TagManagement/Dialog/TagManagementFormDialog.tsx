import React from 'react'
import Dialog from '@app/components/common/Dialog/Dialog'
import { useDispatch, useSelector } from 'react-redux'
import useConfirm from '@app/components/common/ConfirmDialog/useConfirm'
import TagManagementFormInput from './TagManagementFormInput'
import { TagManagementInput, TagManagement } from '../TagManagementList'
import { RootState } from '@app/store/store'
import { DialogState } from '@app/store/commonStore/CommonStore'
import { insertTagManagement, updateTagManagement } from '@app/api/tagManagement/tag-management-api'

import tagManagementStore from '@app/store/tagManagementStore/TagManagementStore'

type FormProps = {
  mode: DialogState
  onReturn: () => void
}

const TagManagementFormDialog: React.FC<FormProps> = (props: FormProps) => {
  const { onReturn, mode } = props

  const { editItem, dirty: isDirty } = useSelector((state: RootState) => state.tagManagementStore)

  const confirm = useConfirm()
  const dispatch = useDispatch()

  const handleSubmit = async (data: TagManagement) => {
    try {
      if (mode === 'add') {
        await insertTagManagement({
          ...data,
        })
      } else if (mode === 'edit' && editItem?.id) {
        const newData: TagManagement = {
          ...editItem,
          ...data,
        }
        await updateTagManagement(editItem?.id, newData)
      }
      dispatch(tagManagementStore.actions.setLoadingStatus('NotLoad'))
      onReturn()
    } catch (error) {
      console.error(error)
    }
  }

  const handleClickReturn = async () => {
    if (
      isDirty &&
      !(await confirm({
        title: 'Confirm',
        message: 'Are you sure to close dialog? All your data will be lost!',
      }))
    ) {
      return
    }
    onReturn()
  }

  let defaultValue: TagManagementInput | undefined = undefined
  if (mode === 'edit' && editItem) {
    defaultValue = { ...editItem }
  }

  return (
    <Dialog
      open
      title={mode === 'add' ? 'Add Tag' : 'Edit Tag'}
      onClickReturn={handleClickReturn}
      fullWidth
      selfContentAndActions
    >
      <TagManagementFormInput
        id={mode === 'add' ? 'add-tagManagement' : 'edit-tagManagement'}
        defaultValues={defaultValue}
        onSubmit={handleSubmit}
      />
    </Dialog>
  )
}

export default TagManagementFormDialog
