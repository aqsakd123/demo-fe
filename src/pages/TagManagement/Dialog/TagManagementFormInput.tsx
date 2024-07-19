import { DialogContent } from '@app/components/common/Dialog/Dialog'
import DialogActionButton from '@app/components/common/Dialog/DialogActionButton'
import Box from '@mui/material/Box'
import DialogActions from '@mui/material/DialogActions/DialogActions'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { TagManagementInput } from '../TagManagementList'
import { yup } from '@app/helpers/yup'
import { yupResolver } from '@hookform/resolvers/yup'
import TextInputField from '@app/components/common/TextInputField/TextInputField'
import ColorInputField from '@app/components/common/ColorInput/ColorInputField'
import { useDispatch } from 'react-redux'
import tagManagementStore from '@app/store/tagManagementStore/TagManagementStore'

const validationSchema = yup.object().shape({
  name: yup.string().nullable().label('Name').required().max(50),
  description: yup.string().nullable().label('Description').max(2500),
})

export type FormProps = {
  id: string
  defaultValues?: TagManagementInput
  onSubmit: ((data: any) => void) | ((data: any) => Promise<void>)
}

const TagManagementFormInput: React.FC<FormProps> = (props: FormProps) => {
  const { id, defaultValues, onSubmit } = props

  const dispatch = useDispatch()

  const formMethods = useForm<any>({
    mode: 'onChange',
    defaultValues: { ...defaultValues },
    resolver: yupResolver(validationSchema),
  })

  const { handleSubmit, control, formState } = formMethods
  const { errors, isDirty } = formState

  useEffect(() => {
    dispatch(tagManagementStore.actions.setDirty(isDirty))
  }, [isDirty])

  const handleSubmitForm = handleSubmit(async (data: TagManagementInput) => {
    const submitData: TagManagementInput = { ...data }
    onSubmit(submitData)
  })

  return (
    <>
      <DialogContent>
        <Box width='100%'>
          <div>
            <TextInputField
              variant='outlined'
              type='text'
              id={`input-name-${id}`}
              name='name'
              label='Name'
              control={control}
              error={Boolean(errors['name']?.message)}
              errorMessage={errors['name']?.message as string}
              required
              maxLength={50}
            />
          </div>
          <div>
            <TextInputField
              variant='outlined'
              type='textarea'
              rowsMax={10}
              rowsMin={3}
              id={`input-description-${id}`}
              name='description'
              label='Description'
              control={control}
              error={Boolean(errors['description']?.message)}
              errorMessage={errors['description']?.message as string}
              maxLength={2500}
            />
          </div>
          <div>
            <ColorInputField
              id={`input-color-${id}`}
              name='color'
              label='Color'
              control={control}
            />
          </div>
        </Box>
      </DialogContent>

      <DialogActions>
        <DialogActionButton variant='contained' id='form-submit-button' onClick={handleSubmitForm}>
          Submit
        </DialogActionButton>
      </DialogActions>
    </>
  )
}

export default TagManagementFormInput
