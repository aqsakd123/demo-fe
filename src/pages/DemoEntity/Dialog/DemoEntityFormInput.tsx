import { DialogContent } from '@app/components/common/Dialog/Dialog'
import DialogActionButton from '@app/components/common/Dialog/DialogActionButton'
import DialogActions from '@mui/material/DialogActions/DialogActions'
import React, { useState, useEffect } from 'react'
import { FieldErrors, useFieldArray, useForm } from 'react-hook-form'
import { DemoEntity, DemoEntityInput } from '../DemoEntityList'
import { yupDate, yupNumber, yup } from '@app/helpers/yup'
import { yupResolver } from '@hookform/resolvers/yup'
import TextInputField from '@app/components/common/TextInputField/TextInputField'
import ColorInputField from '@app/components/common/ColorInput/ColorInputField'
import IconPickerInputField from '@app/components/common/IconPicker/IconPickerInputField'
import RadioField from '@app/components/common/Radio/RadioField'
import CheckboxInner from '@app/components/common/Checkbox/Checkbox'
import SelectField from '@app/components/common/SelectComponent/SelectField'
import { useDispatch } from 'react-redux'
import CalendarPickerField from '@app/components/common/CalendarPicker/CalendarPickerField'
import MultiSelectField from '@app/components/common/SelectComponent/MultiSelectField'
import CheckboxField from '@app/components/common/Checkbox/CheckboxField'
import { array } from 'yup'
import CheckboxInputField from '@app/components/common/Checkbox/CheckboxInputField'
import OptionButtonField from '@app/components/common/OptionButton/OptionInputField'
import SwitchInputField from '@app/components/common/Switch/SwitchInputField'
import HourInputField from '@app/components/common/HourInput/HourInputField'
import SunEditorInputField from '@app/components/common/SunEditor/SunEditorInputField'
import demoEntityStore from '@app/store/demoEntityStore/DemoEntityStore'

import { Button, Divider } from '@mui/material'
import { DialogState } from '@app/store/commonStore/CommonStore'

export const testComboboxOptions = [
  { value: 'select-1', label: 'Select 1' },
  { value: 'select-2', label: 'Select 2' },
  { value: 'select-3', label: 'Select 3' },
]

export const testMultiComboboxOptions = [
  { value: 'select-1', label: 'Select 1' },
  { value: 'select-2', label: 'Select 2' },
  { value: 'select-3', label: 'Select 3' },
]

export const testOptionalFieldOptions = [
  { value: 'select-1', label: 'Select 1' },
  { value: 'select-2', label: 'Select 2' },
  { value: 'select-3', label: 'Select 3' },
]

export const testRadioFieldOptions = [
  { value: 'select-1', label: 'Select 1' },
  { value: 'select-2', label: 'Select 2' },
  { value: 'select-3', label: 'Select 3' },
]

export const testCheckboxGroupOptions = [
  { value: 'select-1', label: 'Select 1' },
  { value: 'select-2', label: 'Select 2' },
  { value: 'select-3', label: 'Select 3' },
]

const validationSchema = yup.object().shape({
  name: yup.string().nullable().label('Name').required().max(50),
  description: yup.string().nullable().label('Description').max(2500),
  testTextarea: yup.string().nullable().label('TestTextarea').max(255),
})
export type FormProps = {
  id: string
  mode: DialogState
  defaultValues?: DemoEntityInput
  onSubmit: ((data: any) => void) | ((data: any) => Promise<void>)
}

const DemoEntityFormInput: React.FC<FormProps> = (props: FormProps) => {
  const { id, defaultValues, onSubmit, mode } = props

  const dispatch = useDispatch()
  const isDisableFields = mode === 'view'

  const formMethods = useForm<any>({
    mode: 'onChange',
    defaultValues: { ...defaultValues },
    resolver: yupResolver(validationSchema),
  })

  const { handleSubmit, control, formState } = formMethods
  const { errors, isDirty } = formState

  useEffect(() => {
    dispatch(demoEntityStore.actions.setDirty(isDirty))
  }, [isDirty])

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'demoMCategories',
  })

  const handleSubmitForm = handleSubmit(async (data: DemoEntityInput) => {
    const submitData: DemoEntityInput = {
      ...data,
      testNumberInput:
        Number(data?.testNumberInput) >= 0 ? Number(data?.testNumberInput) : undefined,
    }
    onSubmit(submitData)
  })

  return (
    <>
      <DialogContent>
        <div style={{ width: '100%' }}>
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
              disabled={isDisableFields}
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
              disabled={isDisableFields}
            />
          </div>
          <div>...Custom Input Field demoMCategories </div>
          <div>...Custom Input Field demoMCategoryList</div>
          <div>
            <TextInputField
              variant='outlined'
              type='textarea'
              rowsMax={10}
              rowsMin={3}
              id={`input-testTextarea-${id}`}
              name='testTextarea'
              label='TestTextarea'
              control={control}
              error={Boolean(errors['testTextarea']?.message)}
              errorMessage={errors['testTextarea']?.message as string}
              maxLength={255}
              disabled={isDisableFields}
            />
          </div>
          <div>
            <SelectField
              options={testComboboxOptions}
              id={`input-testCombobox-${id}`}
              name='testCombobox'
              label='TestCombobox'
              control={control}
              disabled={isDisableFields}
            />
          </div>
          <div>
            <MultiSelectField
              options={testMultiComboboxOptions}
              id={`input-testMultiCombobox-${id}`}
              name='testMultiCombobox'
              label='TestMultiCombobox'
              control={control}
              disabled={isDisableFields}
            />
          </div>
          <div>
            <OptionButtonField
              options={testOptionalFieldOptions}
              id={`input-testOptionalField-${id}`}
              name='testOptionalField'
              label='TestOptionalField'
              control={control}
              disabled={isDisableFields}
            />
          </div>
          <div>
            <RadioField
              radios={testRadioFieldOptions}
              id={`input-testRadioField-${id}`}
              name='testRadioField'
              label='TestRadioField'
              control={control}
              disabled={isDisableFields}
            />
          </div>
          <div>
            <TextInputField
              variant='outlined'
              type='number'
              id={`input-testNumberInput-${id}`}
              name='testNumberInput'
              label='TestNumberInput'
              control={control}
              disabled={isDisableFields}
            />
          </div>
          <div>
            <SwitchInputField
              id={`input-testSwitch-${id}`}
              name='testSwitch'
              label='TestSwitch'
              control={control}
              disabled={isDisableFields}
            />
          </div>
          <div>
            <CalendarPickerField
              id={`input-testDateInput1-${id}`}
              name='testDateInput1'
              label='TestDateInput1'
              control={control}
              disabled={isDisableFields}
            />
          </div>
          <div>
            <CalendarPickerField
              id={`input-testDateInput2-${id}`}
              name='testDateInput2'
              label='TestDateInput2'
              control={control}
              disabled={isDisableFields}
            />
          </div>
          <div>
            <CalendarPickerField
              id={`input-testDateInput3-${id}`}
              name='testDateInput3'
              label='TestDateInput3'
              control={control}
              disabled={isDisableFields}
            />
          </div>
          <div>
            <HourInputField
              id={`input-testHourInput-${id}`}
              name='testHourInput'
              label='TestHourInput'
              control={control}
              disabled={isDisableFields}
            />
          </div>
          <div>
            <ColorInputField
              id={`input-testColorInput-${id}`}
              name='testColorInput'
              label='TestColorInput'
              control={control}
              disabled={isDisableFields}
            />
          </div>
          <div>...Implemeting Input Field testMultiDateInput </div>
          <div>
            <CheckboxInputField
              checkboxes={testCheckboxGroupOptions}
              id={`input-testCheckboxGroup-${id}`}
              name='testCheckboxGroup'
              label='TestCheckboxGroup'
              control={control}
              disabled={isDisableFields}
            />
          </div>
          <div>
            <CheckboxInner
              id={`input-testCheckbox-${id}`}
              name='testCheckbox'
              label='TestCheckbox'
              control={control}
              disabled={isDisableFields}
            />
          </div>
          <div>
            <IconPickerInputField
              id={`input-testIcon-${id}`}
              name='testIcon'
              label='TestIcon'
              control={control}
              disabled={isDisableFields}
            />
          </div>
          <div>
            <SunEditorInputField
              id={`input-testEditor-${id}`}
              name='testEditor'
              label='TestEditor'
              control={control}
              readOnly={isDisableFields}
            />
          </div>
        </div>
        <Button variant='contained' type='button' onClick={() => append({})}>
          Add
        </Button>
        <div style={{ padding: '5px', border: '1px dashed gray' }}>
          {fields.map((field, index) => {
            const errorsField: FieldErrors = errors?.demoMCategories
              ? // @ts-ignore
                errors?.demoMCategories[index]
              : {}
            return (
              <div key={field.id}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <TextInputField
                    variant='outlined'
                    type='text'
                    id={`demoMCategories-${index}-name`}
                    name={`demoMCategories[${index}].name`}
                    label='Name'
                    labelWidth={85}
                    control={control}
                    error={Boolean(errorsField?.name?.message)}
                    errorMessage={errorsField && (errorsField?.name?.message as string)}
                    required
                    maxLength={50}
                    disabled={isDisableFields}
                  />
                  <Button
                    variant='outlined'
                    onClick={() => remove(index)}
                    disabled={isDisableFields}
                  >
                    Delete
                  </Button>
                </div>
                <Divider sx={{ mt: 2, mb: 2 }} />
              </div>
            )
          })}
        </div>
      </DialogContent>

      {!isDisableFields && (
        <DialogActions>
          <DialogActionButton
            variant='contained'
            id='form-submit-button'
            onClick={handleSubmitForm}
          >
            Submit
          </DialogActionButton>
        </DialogActions>
      )}
    </>
  )
}

export default DemoEntityFormInput
