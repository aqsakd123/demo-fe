import React from 'react'
import Dialog from '@app/components/common/Dialog/Dialog'
import formBuilderStore, { DialogState } from '@app/store/formBuilderPageStore/FormBuilderStore'
import { RootState } from '@app/store/store'
import { useSelector, useDispatch } from 'react-redux'
import DataFormInput, { DataFormType } from './DataFormInput'
import useConfirm from '@app/components/common/ConfirmDialog/useConfirm'

type FormProps = {
  mode: DialogState
  onReturn: () => void
}

const FormDialog: React.FC<FormProps> = (props: FormProps) => {
  const { onReturn, mode } = props

  const totalFields = useSelector((state: RootState) => state.formBuilderStore.formDataList) || []
  const formEditData = useSelector((state: RootState) => state.formBuilderStore.formEditData)
  const isDirty = useSelector((state: RootState) => state.formBuilderStore.isDirty)

  // @ts-ignore
  const defaultValues: DataFormType =
    mode === 'edit'
      ? { ...formEditData, required: formEditData?.required ? ['true'] : undefined }
      : undefined

  const dispatch = useDispatch()
  const confirm = useConfirm()

  const handleSubmit = (data: DataFormType) => {
    const newValue = [...totalFields]
    if (mode === 'add') {
      const savedData = { id: `${new Date().getTime()}`, ...data }
      newValue.push(savedData)
      dispatch(formBuilderStore.actions.setDataFormList(newValue))
    } else {
      const idx = newValue.findIndex((it) => it.id === formEditData?.id)
      if (idx !== -1) {
        newValue[idx] = { id: formEditData?.id, ...data }
        dispatch(formBuilderStore.actions.setDataFormList(newValue))
      }
    }
    onReturn()
  }

  const handleClickReturn = async () => {
    if (
      isDirty &&
      !(await confirm({ title: 'Confirm', message: 'Are you sure to close dialog?' }))
    ) {
      return
    }
    onReturn()
  }

  return (
    <Dialog
      open
      title={mode === 'add' ? 'Add Form' : 'Edit Form'}
      onClickReturn={handleClickReturn}
      fullWidth
      selfContentAndActions
    >
      <DataFormInput
        id={mode === 'add' ? 'add-form' : 'edit-form'}
        defaultValues={defaultValues}
        onSubmit={handleSubmit}
      />
    </Dialog>
  )
}

export default FormDialog
