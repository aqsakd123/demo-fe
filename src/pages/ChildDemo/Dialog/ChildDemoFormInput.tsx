import { DialogContent } from '@app/components/common/Dialog/Dialog'
import DialogActionButton from '@app/components/common/Dialog/DialogActionButton'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { ChildDemoInput } from '../ChildDemoList'
import { yup } from '@app/helpers/yup'
import { yupResolver } from '@hookform/resolvers/yup'
import TextInputField from '@app/components/common/TextInputField/TextInputField'
import childDemoStore from '@app/store/childDemoStore/ChildDemoStore'
import { DialogActions } from '@mui/material'
import { DialogState } from '@app/store/commonStore/CommonStore'

const validationSchema = yup.object().shape({
  name: yup.string().nullable().label('Name').required().max(50),
  description: yup.string().nullable().label('Description').max(2500),
})

export type FormProps = {
  id: string
  mode: DialogState
  defaultValues?: ChildDemoInput
  onSubmit: ((data: any) => void) | ((data: any) => Promise<void>)
  onReturn: () => void
}

const ChildDemoFormInput: React.FC<FormProps> = (props: FormProps) => {
  const { defaultValues, onSubmit, mode, onReturn } = props
  const dispatch = useDispatch()

  const isDisableFields = mode === 'view'

  const formMethods = useForm<any>({
    mode: 'onChange',
    defaultValues: { ...defaultValues },
    resolver: yupResolver(validationSchema),
  })

  const { handleSubmit, control, formState } = formMethods
  const { errors, isDirty, dirtyFields } = formState

  useEffect(() => {
    dispatch(childDemoStore.actions.setDirty(isDirty))
  }, [isDirty, dirtyFields])

  const handleSubmitForm = handleSubmit(async (data: ChildDemoInput) => {
    const submitData: ChildDemoInput = {
      ...data,
    }
    onSubmit(submitData)
  })

  return (
    <>
      <DialogContent>
        <div style={{ width: '100%' }}>
          <TextInputField
            variant='outlined'
            type='text'
            id='input-name'
            name='name'
            label='Name'
            control={control}
            disabled={isDisableFields}
            error={Boolean(errors['name']?.message)}
            errorMessage={errors['name']?.message as string}
            required
            maxLength={50}
          />
          <TextInputField
            variant='outlined'
            type='textarea'
            rowsMax={10}
            rowsMin={3}
            id='input-description'
            name='description'
            label='Description'
            control={control}
            disabled={isDisableFields}
            error={Boolean(errors['description']?.message)}
            errorMessage={errors['description']?.message as string}
            maxLength={2500}
          />
        </div>
      </DialogContent>
      {!isDisableFields && (
        <DialogActions>
          <DialogActionButton
            variant='text'
            id='form-cancel-button'
            data-testid='form-cancel-button'
            onClick={onReturn}
          >
            Cancel
          </DialogActionButton>
          <DialogActionButton
            variant='contained'
            id='form-submit-button'
            data-testid='form-submit-button'
            onClick={handleSubmitForm}
          >
            Submit
          </DialogActionButton>
        </DialogActions>
      )}
    </>
  )
}

export default ChildDemoFormInput
