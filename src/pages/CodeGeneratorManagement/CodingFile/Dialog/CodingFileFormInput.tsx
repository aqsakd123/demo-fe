import { DialogContent } from '@app/components/common/Dialog/Dialog'
import DialogActionButton from '@app/components/common/Dialog/DialogActionButton'
import Box from '@mui/material/Box'
import DialogActions from '@mui/material/DialogActions/DialogActions'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { CodingFileInput } from '../CodingFileList'
import { yup } from '@app/helpers/yup'
import { yupResolver } from '@hookform/resolvers/yup'
import TextInputField from '@app/components/common/TextInputField/TextInputField'
import CheckboxInner from '@app/components/common/Checkbox/Checkbox'
import { useDispatch, useSelector } from 'react-redux'
import codingFileStore from '@app/store/codingFileStore/CodingFileStore'
import { RootState } from '@app/store/store'

const validationSchema = yup.object().shape({
  name: yup.string().nullable().label('Name').required().max(50),
  description: yup.string().nullable().label('Description').max(2500),
  filePath: yup.string().nullable().label('File Path').required().max(255),
  fileName: yup.string().nullable().label('File Name').required().max(255),
})

export type FormProps = {
  id: string
  defaultValues?: CodingFileInput
  language: string
  onSubmit: ((data: any) => void) | ((data: any) => Promise<void>)
}

const CodingFileFormInput: React.FC<FormProps> = (props: FormProps) => {
  const { id, defaultValues, onSubmit, language } = props

  const dispatch = useDispatch()
  const { currentLanguageList, currentProjectId } = useSelector(
    (state: RootState) => state.projectStore,
  )
  const isReadOnly = !currentProjectId

  const formMethods = useForm<any>({
    mode: 'onChange',
    defaultValues: { ...defaultValues, language: currentLanguageList[language] },
    resolver: yupResolver(validationSchema),
  })

  const { handleSubmit, control, formState } = formMethods
  const { errors, isDirty } = formState

  useEffect(() => {
    dispatch(codingFileStore.actions.setDirty(isDirty))
  }, [isDirty])

  const handleSubmitForm = handleSubmit(async (data: CodingFileInput) => {
    const submitData: CodingFileInput = { ...data, projectId: currentProjectId }
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
            <TextInputField
              variant='outlined'
              type='text'
              id={`input-name-${id}`}
              name='language'
              label='Language'
              control={control}
              error={Boolean(errors['language']?.message)}
              errorMessage={errors['language']?.message as string}
              required
              disabled
            />
          </div>
          <div>
            <TextInputField
              variant='outlined'
              type='text'
              id={`input-filePath-${id}`}
              name='filePath'
              label='File Path'
              control={control}
              error={Boolean(errors['filePath']?.message)}
              errorMessage={errors['filePath']?.message as string}
              required
              maxLength={255}
            />
          </div>
          <div>
            <TextInputField
              variant='outlined'
              type='text'
              id={`input-fileName-${id}`}
              name='fileName'
              label='File Name'
              control={control}
              error={Boolean(errors['fileName']?.message)}
              errorMessage={errors['fileName']?.message as string}
              required
              maxLength={255}
            />
          </div>
          <div>
            <CheckboxInner
              id={`input-needToExport-${id}`}
              name='needToExport'
              label='Exportable'
              control={control}
            />
          </div>
        </Box>
      </DialogContent>

      <DialogActions>
        <DialogActionButton
          variant='contained'
          id='form-submit-button'
          onClick={handleSubmitForm}
          disabled={isReadOnly}
        >
          Submit
        </DialogActionButton>
      </DialogActions>
    </>
  )
}

export default CodingFileFormInput
