import React from 'react'
import Modal from 'antd/es/modal/Modal'
import { LabelAndValue } from '@app/common/type'
import { Button, Form } from 'antd'
import styled from 'styled-components'
import { CustomType, DefaultTypes, FormItem } from '../Utils/form-builder-types'
import DynamicForm from '../DynamicForm'

type FormProps = {
  onReturn: () => void
  onSubmit: (val: FormItem) => void
}

export const defaultTypes: DefaultTypes[] = [
  'number',
  'color',
  'textarea',
  'textfield',
  'combobox',
  'combobox_multi',
  'checkbox',
  'radio',
  'calendar_single',
  'calendar_range',
]

export const typeCombobox = defaultTypes.map((item) => ({
  value: item,
  label: `${item
    .split('_')
    .map((itemT) => itemT.charAt(0).toUpperCase() + itemT.slice(1))
    .join(' ')}`,
}))

const IS_NEEDED_OPTION: DefaultTypes[] = ['checkbox', 'radio', 'combobox_multi', 'combobox']

export const StyledModalForm = styled(Modal)`
  margin-bottom: 8px;
`

export const schemaDataFormInput = (
  totalFields?: FormItem[],
  formData?: FormItem,
): FormItem<FormItem>[] => {
  const currentFields = totalFields?.filter((item) => item.codeName !== formData?.codeName) || []
  const referenceCodeList = currentFields?.map((item) => ({
    value: item.codeName,
    label: `${item?.label} (${item?.codeName})`,
  }))
  let referenceType: DefaultTypes = 'textfield'
  let referenceOptions: LabelAndValue[] = []
  const referenceSelect = currentFields?.find(
    (item) => item.codeName === formData?.referenceCodeName,
  )

  if (formData?.referenceCodeName && referenceSelect) {
    referenceType = referenceSelect?.type
    referenceOptions = referenceSelect?.options || []
  }
  return [
    {
      codeName: 'label',
      label: 'Label',
      type: 'textfield',
      tooltip: 'Label of the inputted field',
      maxLength: 30,
      order: 1,
      required: true,
    },
    {
      codeName: 'codeName',
      label: 'Code Name',
      type: 'textfield',
      tooltip:
        'Code name should be unique. There should be only 1 word, only a-z, A-Z, 0-9 characters.',
      maxLength: 30,
      order: 2,
      required: true,
      regrex: '^[a-zA-Z0-9]+(?:[_-][a-zA-Z0-9]+)?$',
    },
    {
      codeName: 'type',
      label: 'Type',
      type: 'combobox',
      tooltip: 'Pick type of field.',
      required: true,
      options: typeCombobox,
      order: 3,
    },
    {
      codeName: 'required',
      label: 'Required',
      type: 'checkbox',
      size: 'medium',
      options: [{ value: 'true', label: 'True' }],
      order: 4,
    },
    {
      codeName: 'order',
      label: 'Order',
      size: 'medium',
      type: 'number',
      order: 5,
    },
    {
      codeName: 'tooltip',
      label: 'Tooltip',
      type: 'textarea',
      order: 3,
      maxLength: 100,
    },
    // text field avaiable
    {
      codeName: 'maxLength',
      label: 'Max Length',
      type: 'number',
      order: 5,
      size: 'medium',
      display(data) {
        return data.type === 'textarea' || data.type === 'textfield'
      },
    },
    {
      codeName: 'regrex',
      label: 'Regrex',
      type: 'textfield',
      order: 6,
      size: 'medium',
      display(data) {
        return data.type === 'textarea' || data.type === 'textfield'
      },
    },

    // number field avaibale
    {
      codeName: 'max',
      label: 'Max',
      type: 'number',
      order: 5,
      size: 'medium',
      display(data) {
        return data.type === 'number'
      },
    },
    {
      codeName: 'min',
      label: 'Min',
      type: 'number',
      order: 5,
      size: 'medium',
      display(data) {
        return data.type === 'number'
      },
    },
    {
      codeName: 'fetchApi',
      label: 'Api Fetch',
      type: 'textfield',
      order: 6,
      size: 'large',
      display(data) {
        const dataType: DefaultTypes[] = IS_NEEDED_OPTION
        return dataType.includes(data.type)
      },
    },
    {
      codeName: 'apiValueCode',
      label: 'Value Code',
      type: 'textfield',
      order: 7,
      size: 'medium',
      required: true,
      display(data) {
        const dataType: DefaultTypes[] = IS_NEEDED_OPTION
        return Boolean(dataType.includes(data.type) && data.fetchApi)
      },
    },
    {
      codeName: 'apiLabelCode',
      label: 'Label Code',
      type: 'textfield',
      order: 8,
      size: 'medium',
      required: true,
      display(data) {
        const dataType: DefaultTypes[] = IS_NEEDED_OPTION
        return Boolean(dataType.includes(data.type) && data.fetchApi)
      },
    },

    {
      codeName: 'taxonomy',
      label: 'API Taxonomy',
      type: 'textfield',
      order: 9,
      size: 'medium',
      maxLength: 30,
      display(data) {
        const dataType: DefaultTypes[] = IS_NEEDED_OPTION
        return dataType.includes(data.type)
      },
      // onChange(value) {
      //   console.log(value)
      // },
      onDebounce(value) {
        console.log(value)
      },
    },

    // reference
    {
      codeName: 'referenceCodeName',
      label: 'Reference Code',
      type: 'combobox',
      options: referenceCodeList || [],
      order: 10,
      size: 'large',
      maxLength: 30,
    },
    {
      codeName: 'referenceValue',
      label: 'Reference Value',
      type: referenceType,
      options: referenceOptions,
      order: 10,
      size: 'large',
      maxLength: 30,
    },
    {
      codeName: 'fieldChildren',
      label: 'Field Array',
      type: 'field_array' as CustomType,
      order: 8,
      size: 'medium',
      required: true,
      display(data) {
        const dataType: DefaultTypes[] = IS_NEEDED_OPTION
        return Boolean(dataType.includes(data.type) && data.fetchApi)
      },
    },
  ]
}

const DataInputForm: React.FC<FormProps> = (props: FormProps) => {
  const { onReturn, onSubmit } = props
  const [form] = Form.useForm()

  const handleClickReturn = async () => {
    onReturn()
  }

  const handleSubmit = async (value: any) => {
    const errors = await form.validateFields()
    console.log('Form submitted with values:', value, errors)
    onSubmit(value)
    onReturn()
  }

  return (
    <StyledModalForm open title='Add Form' onCancel={handleClickReturn} width='900px' footer={null}>
      <Form
        form={form}
        layout='horizontal'
        labelCol={{ flex: '130px', style: { textAlign: 'left' } }}
        wrapperCol={{ flex: 'auto' }}
        validateTrigger={['onBlur', 'onInput']}
        onFinish={handleSubmit}
      >
        <DynamicForm form={form} items={schemaDataFormInput()} />
        <Form.Item style={{ marginTop: '20px', textAlign: 'right' }}>
          <Button style={{ marginRight: '8px' }} onClick={handleClickReturn}>
            Cancel
          </Button>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </StyledModalForm>
  )
}

export default DataInputForm
