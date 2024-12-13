export type LabelAndValue = {
  value: string
  label: string
  id?: string
  disabled?: boolean
}

export interface FormItem<T = Record<string, any>> {
  id?: string
  regrex?: string
  maxLength?: number
  max?: number
  min?: number
  tooltip?: string
  type: DefaultTypes
  codeName: keyof T
  label: string
  options?: Array<{ value: string; label: string }>
  required?: boolean
  referenceValue?: string
  referenceCodeName?: string
  apiLabelCode?: string
  apiValueCode?: string
  taxonomy?: string
  fetchApi?: string
  size?: 'large' | 'medium' | 'small'
  order?: number
  debounceTime?: number
  fieldChildren?: FormItem[]
  display?: (val: any) => boolean
  onDebounce?: (val: any) => void
  onChange?: (val: any) => void
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
