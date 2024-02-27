import { yupDate, yupNumber, yup } from '@app/helpers/yup'
import { CustomType, Schema } from './form-builder-types'
import axiosInstance from '@app/api/axios'

export const generateYupSchema = (mockData: Schema<any>[]) => {
  const schemaObject = {}

  // Iterate through mockData to generate yup schema
  mockData.forEach((field) => {
    const { codeName, label, regrex, type, required, maxLength, options, minNumber, maxNumber } =
      field

    let yupType

    if (type === 'number') {
      yupType = yupNumber()
    } else if (type === 'checkbox' || type === 'combobox_multi') {
      if (type === 'checkbox' && options?.length === 1) {
        yupType = yup.string()
      } else {
        yupType = yup.array().of(yup.string())
      }
    } else if (type === 'calendar_single') {
      yupType = yupDate()
    } else {
      yupType = yup.string()
    }
    yupType = yupType.label(label)

    if (required) {
      yupType = yupType.required()
      if (type === 'checkbox') {
        yupType = yupType.min(1)
      }
    }

    if (type === 'textfield') {
      if (maxLength) {
        yupType = yupType.max(maxLength)
      }
      if (regrex) {
        // @ts-ignore
        yupType = yupType.matches(new RegExp(regrex), { message: `${label} is not valid` })
      }
    } else if (type === 'number') {
      if (minNumber) {
        yupType = yupType.min(minNumber)
      }
      if (maxNumber) {
        yupType = yupType.max(maxNumber)
      }
    }
    // @ts-ignore
    schemaObject[codeName] = yupType.label(label)
  })

  return yup.object().shape(schemaObject)
}

export const callApi = async (apiEndpoint: string) => {
  return await axiosInstance.get(apiEndpoint)
}

export const mockData: Schema<any>[] = [
  {
    codeName: 'textfield_1',
    label: 'Text field 1',
    type: 'textfield',
    tooltip: 'Enter your text',
    position: 1,
    size: 7,
    maxLength: 30,
    required: true,
  },
  {
    codeName: 'textfield_2',
    label: 'Text area 1',
    type: 'textarea',
    tooltip: 'Enter your text',
    maxLength: 500,
    position: 1,
    size: 5,
    required: true,
  },
  {
    codeName: 'calendar_input_single',
    label: 'Calendar Input 1',
    type: 'calendar_single',
    tooltip: 'Pick a Date',
    position: 7,
    required: true,
  },
  {
    codeName: 'calendar_input_range',
    label: 'Calendar Input Range 2',
    type: 'calendar_range',
    tooltip: 'Pick a Date',
    position: 3,
    required: true,
  },
  {
    codeName: 'combobox_1',
    label: 'Combobox 1',
    type: 'combobox',
    tooltip: 'Select an option',
    position: 2,
    required: true,
    size: 4,
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
  {
    codeName: 'combobox_multi_1',
    label: 'Multiple Selection 1',
    type: 'combobox_multi',
    tooltip: 'Select an option',
    position: 2,
    required: true,
    size: 3,
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4' },
      { value: 'option5', label: 'Option 5' },
      { value: 'option6', label: 'Option 6' },
    ],
  },

  {
    codeName: 'checkbox_1',
    label: 'Checkbox 1',
    type: 'checkbox',
    tooltip: 'Check this box',
    position: 3,
    required: true,
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
  {
    codeName: 'radio_1',
    label: 'Radio 1',
    type: 'radio',
    tooltip: 'Select a radio option',
    position: 4,
    required: true,
    options: [
      { value: 'radioOption1', label: 'Radio Option 1' },
      { value: 'radioOption2', label: 'Radio Option 2' },
    ],
  },
  {
    codeName: 'number_1',
    label: 'Number 1',
    type: 'number',
    tooltip: 'Enter a number',
    position: 5,
    required: true,
    maxNumber: 100,
  },
  {
    codeName: 'color_1',
    label: 'Color 1',
    type: 'color',
    tooltip: 'Pick a color',
    position: 6,
    required: true,
    useDefaultList: true,
    colorList: ['red', 'black'],
  },
  {
    codeName: 'custom1',
    label: 'Color 1',
    type: 'customForm1' as CustomType,
  },
  {
    codeName: 'custom2',
    label: 'Color 1',
    type: 'customForm2' as CustomType,
  },
  {
    codeName: 'custom3',
    label: 'Color 1',
    type: 'customForm3' as CustomType,
  },
  {
    codeName: 'custom4',
    label: 'Color 1',
    type: 'customForm4' as CustomType,
  },
]
