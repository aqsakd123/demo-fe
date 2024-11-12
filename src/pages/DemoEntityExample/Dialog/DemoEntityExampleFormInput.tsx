import { DialogContent } from '@app/components/common/Dialog/Dialog'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FieldErrors, useFieldArray, useForm } from 'react-hook-form'
import { DemoEntityExampleInput } from '../DemoEntityExampleList'
import { yup } from '@app/helpers/yup'
import { yupResolver } from '@hookform/resolvers/yup'
import TextInputField from '@app/components/common/TextInputField/TextInputField'
import ColorInputField from '@app/components/common/ColorInput/ColorInputField'
import IconPickerInputField from '@app/components/common/IconPicker/IconPickerInputField'
import RadioField from '@app/components/common/Radio/RadioField'
import CheckboxInner from '@app/components/common/Checkbox/Checkbox'
import SelectField from '@app/components/common/SelectComponent/SelectField'
import CalendarPickerField from '@app/components/common/CalendarPicker/CalendarPickerField'
import MultiSelectField from '@app/components/common/SelectComponent/MultiSelectField'
import CheckboxInputField from '@app/components/common/Checkbox/CheckboxInputField'
import OptionButtonField from '@app/components/common/OptionButton/OptionInputField'
import SwitchInputField from '@app/components/common/Switch/SwitchInputField'
import HourInputField from '@app/components/common/HourInput/HourInputField'
import demoEntityExampleStore from '@app/store/demoEntityExampleStore/DemoEntityExampleStore'
import { Button, Divider, Fab } from '@mui/material'
import { DialogState } from '@app/store/commonStore/CommonStore'
import { RootState } from '@app/store/store'
import QuillEditor from '@app/components/common/QuillEditor/QuillEditor'
import { Save } from '@mui/icons-material'
import SelectableView from '@app/components/common/SelectableViews/SelectableView'
import styled from 'styled-components'

const StyledDiv = styled.div`
  border-radius: 10px;

  .MuiCheckbox-root {
    display: none;
  }

  .MuiFormControlLabel-label {
    position: relative;
    display: inline-block;
    background: #6f6fbb;
    padding: 8px;
    padding-top: 6px;
    padding-bottom: 10px;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    text-align: center;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .ant-checkbox-wrapper-checked {
    span {
      background: blue;
      color: white;
    }
    span:before {
      content: '';
      position: absolute;
      top: 50%;
      left: -1px;
      width: 110%;
      height: 50%;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 0 0 20px 20px;
    }
  }
`

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
  { value: 'select-1', label: 'Select 1' },
  { value: 'select-2', label: 'Select 2' },
  { value: 'select-3', label: 'Select 3' },
]

const validationSchema = yup.object().shape({
  name: yup.string().nullable().label('Name').required().max(50),
  description: yup.string().nullable().label('Description').max(2500),
  childrenDemo: yup.array().of(
    yup.object().shape({
      name: yup.string().nullable().label('Name').required().max(50),
      description: yup.string().nullable().label('Description').max(2500),
    }),
  ),
})

export type FormProps = {
  id: string
  mode: DialogState
  defaultValues?: DemoEntityExampleInput
  onSubmit: ((data: any) => void) | ((data: any) => Promise<void>)
}

const DemoEntityExampleFormInput: React.FC<FormProps> = (props: FormProps) => {
  const { defaultValues, onSubmit, mode } = props
  const dispatch = useDispatch()

  const { childDemoOptions, childDemoListOptions } = useSelector(
    (state: RootState) => state.demoEntityExampleStore,
  )

  const childDemoLabeledOptions = childDemoOptions?.map((it) => ({
    ...it,
    value: it.id,
    label: it.name,
  }))
  const childDemoListLabeledOptions = childDemoListOptions?.map((it) => ({
    ...it,
    value: it.id,
    label: it.name,
  }))

  const [testEditor, setTestEditor] = useState(defaultValues?.testEditor)
  const [childDemo, setChildDemo] = useState(defaultValues?.childDemoId)
  const [childDemoList, setChildDemoList] = useState(
    (defaultValues?.childDemoList ?? [])?.map((it) => it.id),
  )
  const isDisableFields = mode === 'view'

  const formMethods = useForm<any>({
    mode: 'onChange',
    defaultValues: { ...defaultValues },
    resolver: yupResolver(validationSchema),
  })

  const { handleSubmit, control, formState, reset } = formMethods
  const { errors, isDirty, dirtyFields } = formState

  useEffect(() => {
    dispatch(demoEntityExampleStore.actions.setDirty(isDirty))
  }, [isDirty, dirtyFields])

  const {
    fields: fieldChildrenDemo,
    append: appendChildrenDemo,
    remove: removeChildrenDemo,
  } = useFieldArray({
    control,
    name: 'childrenDemo',
  })

  const handleSubmitForm = handleSubmit(async (data: DemoEntityExampleInput) => {
    const submitData: DemoEntityExampleInput = {
      ...data,
      childDemoId: childDemo,
      childDemoList: (childDemoListOptions ?? [])?.filter((it) => childDemoList?.includes(it.id)),
      testNumberInput: data?.testNumberInput ? Number(data?.testNumberInput) : undefined,
      testEditor: testEditor,
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
          <div style={{ marginTop: '8px', marginBottom: '8px' }}>
            <SelectableView
              id='childDemo'
              name='childDemo'
              selectedValue={childDemo}
              onChange={(v) => {
                if (!Array.isArray(v)) {
                  setChildDemo(v)
                }
              }}
              size='medium'
              options={childDemoLabeledOptions}
              disabled={isDisableFields}
            />
          </div>
          <Button
            variant='contained'
            type='button'
            data-testid='add-ChildrenDemo'
            onClick={() => appendChildrenDemo({})}
            disabled={isDisableFields}
          >
            Add
          </Button>
          <div style={{ padding: '5px', border: '1px dashed gray' }}>
            {fieldChildrenDemo.map((field, index) => {
              const errorsField: FieldErrors = errors?.childrenDemo
                ? // @ts-ignore
                  errors?.childrenDemo[index]
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
                      id={`childrenDemo-${index}-name`}
                      name={`childrenDemo[${index}].name`}
                      label='Name'
                      control={control}
                      disabled={isDisableFields}
                      error={Boolean(errorsField?.name?.message)}
                      errorMessage={errorsField?.name?.message as string}
                      required
                      maxLength={50}
                    />
                    <TextInputField
                      variant='outlined'
                      type='textarea'
                      rowsMax={10}
                      rowsMin={3}
                      id={`childrenDemo-${index}-description`}
                      name={`childrenDemo[${index}].description`}
                      label='Description'
                      control={control}
                      disabled={isDisableFields}
                      error={Boolean(errorsField?.description?.message)}
                      errorMessage={errorsField?.description?.message as string}
                      maxLength={2500}
                    />

                    <Button
                      id={`remove-${index}-childrenDemo`}
                      variant='outlined'
                      data-testid={`remove-${index}-childrenDemo`}
                      onClick={() => removeChildrenDemo(index)}
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
            <SelectableView
              id='childDemoList'
              name='childDemoList'
              selectedValue={childDemoList}
              onChange={(v) => {
                if (Array.isArray(v)) {
                  setChildDemoList(v)
                }
              }}
              size='medium'
              options={childDemoListLabeledOptions}
              disabled={isDisableFields}
            />
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
          <StyledDiv>
            <CheckboxInputField
              checkboxes={testCheckboxGroupOptions}
              id='input-test_checkbox_group'
              name='testCheckboxGroup'
              label='Test Checkbox Group'
              control={control}
              disabled={isDisableFields}
            />
          </StyledDiv>
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

          <QuillEditor
            value={testEditor}
            handleChange={(v) => setTestEditor(v)}
            readOnly={isDisableFields}
          />
        </div>
      </DialogContent>
      {!isDisableFields && (
        <Fab
          variant='extended'
          onClick={handleSubmitForm}
          id='form-submit-button'
          sx={{
            position: 'fixed',
            bottom: '16px',
            right: '16px',
            borderRadius: '4px',
            padding: '8px 16px',
          }}
        >
          <Save sx={{ mr: 1 }} />
          Submit
        </Fab>
      )}
    </>
  )
}

export default DemoEntityExampleFormInput
