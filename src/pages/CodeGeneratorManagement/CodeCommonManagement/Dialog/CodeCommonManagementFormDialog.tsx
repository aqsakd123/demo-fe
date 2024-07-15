import React from 'react'
import Dialog from '@app/components/common/Dialog/Dialog'
import { useDispatch, useSelector } from 'react-redux'
import useConfirm from '@app/components/common/ConfirmDialog/useConfirm'
import CodeCommonManagementFormInput from './CodeCommonManagementFormInput'
import { CodeCommonManagementInput, CodeCommonManagement } from '../CodeCommonManagementList'
import { RootState } from '@app/store/store'
import { DialogState } from '@app/store/commonStore/CommonStore'
import {
  insertCodeCommonManagement,
  updateCodeCommonManagement,
} from '@app/api/codeCommonManagement/code-common-management-api'

import codeCommonManagementStore from '@app/store/codeCommonManagementStore/CodeCommonManagementStore'

type FormProps = {
  mode: DialogState
  language: string
  onReturn: () => void
}

const CodeCommonManagementFormDialog: React.FC<FormProps> = (props: FormProps) => {
  const { onReturn, mode, language } = props

  const { editItem, dirty: isDirty } = useSelector(
    (state: RootState) => state.codeCommonManagementStore,
  )
  const confirm = useConfirm()
  const dispatch = useDispatch()

  const handleSubmit = async (data: CodeCommonManagement) => {
    try {
      if (mode === 'add') {
        await insertCodeCommonManagement({
          ...data,
        })
      } else if (mode === 'edit' && editItem?.id) {
        const newData: CodeCommonManagement = {
          ...editItem,
          ...data,
        }
        await updateCodeCommonManagement(editItem?.id, newData)
      }
      dispatch(codeCommonManagementStore.actions.setLoadingStatus('NotLoad'))
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

  let defaultValue: CodeCommonManagementInput | undefined = undefined
  if (mode === 'edit' && editItem) {
    defaultValue = { ...editItem }
  }

  return (
    <Dialog
      open
      title={mode === 'add' ? 'Add Code Common' : 'Edit Code Common'}
      onClickReturn={handleClickReturn}
      fullWidth
      selfContentAndActions
    >
      <CodeCommonManagementFormInput
        id={mode === 'add' ? 'add-codeCommonManagement' : 'edit-codeCommonManagement'}
        defaultValues={defaultValue}
        language={language}
        onSubmit={handleSubmit}
      />
    </Dialog>
  )
}

export default CodeCommonManagementFormDialog
