import React from 'react'
import Dialog from '@app/components/common/Dialog/Dialog'
import { useDispatch, useSelector } from 'react-redux'
import useConfirm from '@app/components/common/ConfirmDialog/useConfirm'
import CodingFileFormInput from './CodingFileFormInput'
import { CodingFileInput, CodingFile } from '../CodingFileList'
import { RootState } from '@app/store/store'
import { DialogState } from '@app/store/commonStore/CommonStore'
import { insertCodingFile, updateCodingFile } from '@app/api/codingFile/coding-file-api'

import codingFileStore from '@app/store/codingFileStore/CodingFileStore'

type FormProps = {
  mode: DialogState
  language: string
  onReturn: () => void
}

const CodingFileFormDialog: React.FC<FormProps> = (props: FormProps) => {
  const { onReturn, mode, language } = props

  const { editItem, dirty: isDirty } = useSelector((state: RootState) => state.codingFileStore)
  const { currentLanguageList } = useSelector((state: RootState) => state.projectStore)

  const confirm = useConfirm()
  const dispatch = useDispatch()

  const handleSubmit = async (data: CodingFile) => {
    try {
      if (mode === 'add') {
        await insertCodingFile({
          ...data,
        })
      } else if (mode === 'edit' && editItem?.id) {
        const newData: CodingFile = {
          ...editItem,
          ...data,
        }
        await updateCodingFile(editItem?.id, newData)
      }
      dispatch(codingFileStore.actions.setLoadingStatus('NotLoad'))
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

  let defaultValue: CodingFileInput | undefined = undefined
  if (mode === 'edit' && editItem) {
    defaultValue = { ...editItem, language: currentLanguageList[language] }
  }

  return (
    <Dialog
      open
      title={mode === 'add' ? 'Add Coding File' : 'Edit Coding File'}
      onClickReturn={handleClickReturn}
      fullWidth
      selfContentAndActions
    >
      <CodingFileFormInput
        id={mode === 'add' ? 'add-codingFile' : 'edit-codingFile'}
        defaultValues={defaultValue}
        language={language}
        onSubmit={handleSubmit}
      />
    </Dialog>
  )
}

export default CodingFileFormDialog
