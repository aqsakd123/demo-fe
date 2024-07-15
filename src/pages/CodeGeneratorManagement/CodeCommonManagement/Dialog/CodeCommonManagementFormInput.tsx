import { DialogContent } from '@app/components/common/Dialog/Dialog'
import DialogActionButton from '@app/components/common/Dialog/DialogActionButton'
import Box from '@mui/material/Box'
import DialogActions from '@mui/material/DialogActions/DialogActions'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { CodeCommonManagementInput } from '../CodeCommonManagementList'
import { yup } from '@app/helpers/yup'
import { yupResolver } from '@hookform/resolvers/yup'
import TextInputField from '@app/components/common/TextInputField/TextInputField'
import ColorInputField from '@app/components/common/ColorInput/ColorInputField'
import { useDispatch, useSelector } from 'react-redux'
import codeCommonManagementStore from '@app/store/codeCommonManagementStore/CodeCommonManagementStore'
import { RootState } from '@app/store/store'

const validationSchema = yup.object().shape({
  name: yup.string().nullable().label('Name').required().max(50),
  description: yup.string().nullable().label('Description').max(2500),
})

export type FormProps = {
  id: string
  language: string
  defaultValues?: CodeCommonManagementInput
  onSubmit: ((data: any) => void) | ((data: any) => Promise<void>)
}

const CodeCommonManagementFormInput: React.FC<FormProps> = (props: FormProps) => {
  const { id, defaultValues, onSubmit, language } = props

  const { currentLanguageList, currentProjectId } = useSelector(
    (state: RootState) => state.projectStore,
  )

  const dispatch = useDispatch()

  const formMethods = useForm<any>({
    mode: 'onChange',
    defaultValues: { ...defaultValues },
    resolver: yupResolver(validationSchema),
  })

  const { handleSubmit, control, formState } = formMethods
  const { errors, isDirty } = formState

  useEffect(() => {
    dispatch(codeCommonManagementStore.actions.setDirty(isDirty))
  }, [isDirty])

  const handleSubmitForm = handleSubmit(async (data: CodeCommonManagementInput) => {
    if (!language) {
      return
    }
    const submitData: CodeCommonManagementInput = {
      ...data,
      projectId: currentProjectId,
      language: currentLanguageList[language],
    }
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

export default CodeCommonManagementFormInput
