import React from 'react'
import Dialog from '@app/components/common/Dialog/Dialog'
import { useDispatch, useSelector } from 'react-redux'
import useConfirm from '@app/components/common/ConfirmDialog/useConfirm'
import CodingFeatureFormInput from './CodingFeatureFormInput'
import { CodingFeatureInput, CodingFeature } from '../CodingFeatureList'
import { RootState } from '@app/store/store'
import { DialogState } from '@app/store/commonStore/CommonStore'
import { insertCodingFeature, updateCodingFeature } from '@app/api/codingFeature/coding-feature-api'

import codingFeatureStore from '@app/store/codingFeatureStore/CodingFeatureStore'

type FormProps = {
  mode: DialogState
  language: string
  onReturn: () => void
}

const CodingFeatureFormDialog: React.FC<FormProps> = (props: FormProps) => {
  const { onReturn, mode, language } = props

  const { editItem, dirty: isDirty } = useSelector((state: RootState) => state.codingFeatureStore)

  const confirm = useConfirm()
  const dispatch = useDispatch()

  const handleSubmit = async (data: CodingFeature) => {
    try {
      if (mode === 'add') {
        await insertCodingFeature({
          ...data,
        })
      } else if (mode === 'edit' && editItem?.id) {
        const newData: CodingFeature = {
          ...editItem,
          ...data,
        }
        await updateCodingFeature(editItem?.id, newData)
      }
      dispatch(codingFeatureStore.actions.setLoadingStatus('NotLoad'))
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

  let defaultValue: CodingFeatureInput | undefined = undefined
  if (mode === 'edit' && editItem) {
    defaultValue = { ...editItem }
  }

  return (
    <Dialog
      open
      title={mode === 'add' ? 'Add Coding Feature' : 'Edit Coding Feature'}
      onClickReturn={handleClickReturn}
      fullWidth
      selfContentAndActions
    >
      <CodingFeatureFormInput
        id={mode === 'add' ? 'add-codingFeature' : 'edit-codingFeature'}
        defaultValues={defaultValue}
        language={language}
        onSubmit={handleSubmit}
      />
    </Dialog>
  )
}

export default CodingFeatureFormDialog
