export type LabelAndValue = {
  value: string
  label: string
  id?: string
  disabled?: boolean
}

export type CustomType = 'custom'

export type DefaultTypes =
  | 'textfield'
  | 'combobox'
  | 'combobox_multi'
  | 'checkbox'
  | 'radio'
  | 'number'
  | 'color'
  | 'calendar_single'
  | 'calendar_range'
  | 'textarea'
  | CustomType

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

export type Schema<T> = SchemaItem & {
  codeName: keyof T

  // utils
  display?: (data: T) => boolean | boolean
  disable?: (data: T) => boolean | boolean
}

export type SchemaItem = {
  // common
  label: string
  type: DefaultTypes
  tooltip?: string
  position?: number
  sequence?: number
  required?: boolean
  size?: number

  // utils
  fetchApi?: string
  apiValueCode?: string
  apiLabelCode?: string
  taxonomy?: string

  // text field only
  maxLength?: number
  regrex?: string

  // number only
  maxNumber?: number
  minNumber?: number

  // radios, combobox, checkbox only
  options?: LabelAndValue[]

  // color only
  colorList?: string[]
  useDefaultList?: boolean
}
