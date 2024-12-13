import React from 'react'
import formBuilderStore, { DialogState } from '@app/store/formBuilderPageStore/FormBuilderStore'
import { RootState } from '@app/store/store'
import { useSelector, useDispatch } from 'react-redux'
import useConfirm from '@app/components/common/ConfirmDialog/useConfirm'
import DataFormInput from './DataFormInput'
import { FormItem } from '../Utils/form-builder-types'

type FormProps = {
  mode: DialogState
  onReturn: () => void
}

const FormDialog: React.FC<FormProps> = (props: FormProps) => {
  const { onReturn, mode } = props

  const totalFields = useSelector((state: RootState) => state.formBuilderStore.formDataList) || []
  const formEditData = useSelector((state: RootState) => state.formBuilderStore.formEditData)
  const isDirty = useSelector((state: RootState) => state.formBuilderStore.isDirty)

  const dispatch = useDispatch()
  const confirm = useConfirm()

  const handleSubmit = (data: FormItem) => {
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

  return <DataFormInput onSubmit={handleSubmit} onReturn={handleClickReturn} />
}

export default FormDialog
