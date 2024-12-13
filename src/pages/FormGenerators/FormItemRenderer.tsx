import { FC, useState } from 'react'
import { Form, Input, Select, Checkbox, Radio, DatePicker, Col, ColorPicker } from 'antd'
import { useDebounce } from 'react-use'
import { getColSpan } from './Utils/form-builder-utils'
import { FormItem } from './Utils/form-builder-types'

interface FormItemProps {
  item: FormItem
  formValues: Record<string, any>
}

const FormItemRenderer: FC<FormItemProps> = ({ item, formValues }) => {
  const {
    type,
    codeName,
    label,
    options,
    required,
    tooltip,
    maxLength,
    regrex,
    size,
    referenceCodeName,
    referenceValue,
    display,
    order,
    onDebounce,
    onChange,
    debounceTime = 1000,
  } = item

  // Determine if the form item should be displayed
  const shouldDisplay =
    (display && typeof display === 'function' && display(formValues)) ||
    (!display && (!referenceCodeName || formValues[referenceCodeName] === referenceValue))

  if (!shouldDisplay) {
    return null
  }

  // Define validation rules for the form item
  const rules = []
  if (required) {
    rules.push({ required: true, message: `${label} is required` })
  }
  if (regrex) {
    rules.push({ pattern: new RegExp(regrex), message: `Invalid format for ${label}` })
  }
  if (maxLength) {
    rules.push({ max: maxLength, message: `Maximum length is ${maxLength}` })
  }

  const props = {
    key: codeName.toString(),
    label: label,
    tooltip: tooltip,
    name: codeName.toString(),
    rules: rules,
    preserve: false,
  }
  const [debouncedValue, setDebouncedValue] = useState<any>(null)

  useDebounce(
    () => {
      if (onDebounce && debouncedValue && (!regrex || new RegExp(regrex).test(debouncedValue))) {
        onDebounce(debouncedValue)
      }
    },
    debounceTime,
    [debouncedValue],
  )

  const handleChange = (value: any) => {
    if (onChange) {
      onChange(value)
    }
    if (onDebounce) {
      setDebouncedValue(value)
    }
  }

  // Render the form item based on its type
  let formElement = null
  switch (type) {
    case 'textfield':
      formElement = (
        <Form.Item {...props}>
          <Input onChange={(e) => handleChange(e.target.value)} />
        </Form.Item>
      )
      break

    case 'textarea':
      formElement = (
        <Form.Item {...props}>
          <Input.TextArea
            allowClear
            count={{ show: true, max: maxLength }}
            onChange={(e) => handleChange(e.target.value)}
          />
        </Form.Item>
      )
      break

    case 'combobox':
      formElement = (
        <Form.Item {...props}>
          <Select
            allowClear
            autoClearSearchValue
            showSearch
            options={options || []}
            onChange={handleChange}
          />
        </Form.Item>
      )
      break

    case 'combobox_multi':
      formElement = (
        <Form.Item {...props}>
          <Select
            mode='multiple'
            allowClear
            autoClearSearchValue
            showSearch
            options={options || []}
            onChange={handleChange}
          />
        </Form.Item>
      )
      break

    case 'checkbox':
      formElement = (
        <Form.Item {...props} valuePropName='checked'>
          <Checkbox.Group options={options || []} onChange={handleChange} />
        </Form.Item>
      )
      break

    case 'radio':
      formElement = (
        <Form.Item {...props}>
          <Radio.Group options={options || []} onChange={handleChange} />
        </Form.Item>
      )
      break

    case 'number':
      formElement = (
        <Form.Item {...props}>
          <Input type='number' onChange={(e) => handleChange(e.target.value)} />
        </Form.Item>
      )
      break

    case 'color':
      formElement = (
        <Form.Item {...props}>
          <ColorPicker onChange={(color) => handleChange(color)} />
        </Form.Item>
      )
      break

    case 'calendar_single':
      formElement = (
        <Form.Item {...props}>
          <DatePicker onChange={(date) => handleChange(date)} />
        </Form.Item>
      )
      break

    case 'calendar_range':
      formElement = (
        <Form.Item {...props}>
          <DatePicker.RangePicker onChange={(dates) => handleChange(dates)} />
        </Form.Item>
      )
      break

    default:
      break
  }

  // Render the form element within a responsive Col based on size
  return (
    <Col key={codeName.toString()} span={getColSpan(size)} order={order}>
      {formElement}
    </Col>
  )
}

export default FormItemRenderer
