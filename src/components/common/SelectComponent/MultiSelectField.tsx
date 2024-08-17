import React, { ReactNode } from 'react'
import InlineForm from '../Form/InlineForm'
import { SelectProps } from './SelectComponent'
import MultiSelectComponent from './MultiSelectComponent'

type Props = {
  id: string
  name: string
  required?: boolean
  label?: ReactNode
  labelWidth?: number
  errorMessage?: string
  tooltip?: string
  height?: string
  isLoading?: boolean
} & SelectProps

const MultiSelectField: React.FC<Props> = (props: Props) => {
  const {
    id,
    name,
    required,
    label,
    labelWidth,
    error,
    disabled,
    errorMessage,
    tooltip,
    style,
    height,
    isLoading,
    ...others
  } = props

  return (
    <InlineForm
      id={id}
      label={label}
      labelWidth={labelWidth}
      required={required}
      error={error}
      disabled={disabled}
      tooltip={tooltip}
      errorMessage={errorMessage}
      height={height}
      isLoading={isLoading}
    >
      <MultiSelectComponent id={id} name={name} style={style} disabled={disabled} {...others} />
    </InlineForm>
  )
}

export default MultiSelectField
