import { DialogContent } from '@app/components/common/Dialog/Dialog'
import DialogActionButton from '@app/components/common/Dialog/DialogActionButton'
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

import { Button, Divider, DialogActions } from '@mui/material'
import { DialogState } from '@app/store/commonStore/CommonStore'

export const testComboboxOptions = [
  { value: 'select-1', label: 'Select-1' },
  { value: 'select-2', label: 'Select_2' },
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
  { value: 'select-1-|-select-2-|-select-3', label: 'Select 1 | select 2 | select 3' },
]

const validationSchema = yup.object().shape({
  name: yup.string().nullable().label('Name').required().max(50),
  description: yup.string().nullable().label('Description').max(2500),
})

export type FormProps = {
  id: string
  mode: DialogState
  defaultValues?: DemoEntityInput
  onSubmit: ((data: any) => void) | ((data: any) => Promise<void>)
}

const DemoEntityFormInput: React.FC<FormProps> = (props: FormProps) => {
  const { defaultValues, onSubmit, mode } = props

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
    dispatch(demoEntityStore.actions.setDirty(isDirty))
  }, [isDirty, dirtyFields])

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'demoMCategories',
  })

  const handleSubmitForm = handleSubmit(async (data: DemoEntityInput) => {
    const submitData: DemoEntityInput = {
      ...data,
      testNumberInput: data?.testNumberInput ? Number(data?.testNumberInput) : undefined,
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
          <div style={{ marginTop: '8px', marginBottom: '8px' }}>Custom demoMCategory (Custom)</div>
          <Button
            variant='contained'
            type='button'
            data-testid='add-demoMCategories'
            onClick={() => append({})}
          >
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
                  <div
                    id={`demoMCategories-${index}`}
                    style={{ display: 'flex', alignItems: 'center' }}
                    data-testid={`demoMCategories-${index}`}
                  >
                    <TextInputField
                      variant='outlined'
                      type='text'
                      id='demoMCategories-${index}-name'
                      name='demoMCategories[${index}].name'
                      label='Name'
                      control={control}
                      disabled={isDisableFields}
                      error={Boolean(errorsField['demoMCategories[${index}].name']?.message)}
                      errorMessage={
                        errorsField['demoMCategories[${index}].name']?.message as string
                      }
                      required
                      maxLength={50}
                    />
                    <TextInputField
                      variant='outlined'
                      type='textarea'
                      rowsMax={10}
                      rowsMin={3}
                      id='demoMCategories-${index}-description'
                      name='demoMCategories[${index}].description'
                      label='Description'
                      control={control}
                      disabled={isDisableFields}
                      error={Boolean(errorsField['demoMCategories[${index}].description']?.message)}
                      errorMessage={
                        errorsField['demoMCategories[${index}].description']?.message as string
                      }
                      maxLength={2500}
                    />

                    <Button
                      id={`remove-${index}-demoMCategories`}
                      variant='outlined'
                      data-testid={`remove-${index}-demoMCategories`}
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
          <div style={{ marginTop: '8px', marginBottom: '8px' }}>
            Custom demoMCategoryList (Custom)
          </div>
          <TextInputField
            variant='outlined'
            type='textarea'
            rowsMax={10}
            rowsMin={3}
            id='input-test_textarea'
            name='testTextarea'
            label='Test Textarea'
            control={control}
            disabled={isDisableFields}
          />
          <SelectField
            options={testComboboxOptions}
            id='input-test_combobox'
            name='testCombobox'
            label='Test Combobox'
            control={control}
            disabled={isDisableFields}
          />
          <MultiSelectField
            options={testMultiComboboxOptions}
            id='input-test_multi_combobox'
            name='testMultiCombobox'
            label='Test Multi Combobox'
            control={control}
            disabled={isDisableFields}
          />
          <OptionButtonField
            options={testOptionalFieldOptions}
            id='input-test_optional_field'
            name='testOptionalField'
            label='Test Optional Field'
            control={control}
            disabled={isDisableFields}
          />
          <RadioField
            radios={testRadioFieldOptions}
            id='input-test_radio_field'
            name='testRadioField'
            label='Test Radio Field'
            control={control}
            disabled={isDisableFields}
          />
          <TextInputField
            variant='outlined'
            type='number'
            id='input-test_number_input'
            name='testNumberInput'
            label='Test Number Input'
            control={control}
            disabled={isDisableFields}
          />
          <SwitchInputField
            id='input-test_switch'
            name='testSwitch'
            label='Test Switch'
            control={control}
            disabled={isDisableFields}
          />
          <CalendarPickerField
            id='input-test_date_input1'
            name='testDateInput1'
            label='Test Date Input1'
            control={control}
            disabled={isDisableFields}
          />
          <CalendarPickerField
            id='input-test_date_input2'
            name='testDateInput2'
            label='Test Date Input2'
            control={control}
            disabled={isDisableFields}
          />
          <CalendarPickerField
            id='input-test_date_input3'
            name='testDateInput3'
            label='Test Date Input3'
            control={control}
            disabled={isDisableFields}
          />
          <HourInputField
            id='input-test_hour_input'
            name='testHourInput'
            label='Test Hour Input'
            control={control}
            disabled={isDisableFields}
          />
          <ColorInputField
            id='input-test_color_input'
            name='testColorInput'
            label='Test Color Input'
            control={control}
            disabled={isDisableFields}
          />
          <CheckboxInputField
            checkboxes={testCheckboxGroupOptions}
            id='input-test_checkbox_group'
            name='testCheckboxGroup'
            label='Test Checkbox Group'
            control={control}
            disabled={isDisableFields}
          />
          <CheckboxInner
            id='input-test_checkbox'
            name='testCheckbox'
            label='Test Checkbox'
            control={control}
            disabled={isDisableFields}
          />
          <IconPickerInputField
            id='input-test_icon'
            name='testIcon'
            label='Test Icon'
            control={control}
            disabled={isDisableFields}
          />
          <div style={{ marginTop: '8px', marginBottom: '8px' }}>Custom testEditor (Editor)</div>
        </div>
      </DialogContent>

      {!isDisableFields && (
        <DialogActions>
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

export default DemoEntityFormInput
