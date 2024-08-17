import React, { ReactNode } from 'react'
import InlineForm from '../Form/InlineForm'
import SelectComponent, { SelectProps } from './SelectComponent'

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

const SelectField: React.FC<Props> = (props: Props) => {
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
      <SelectComponent
        id={id}
        name={name}
        error={error}
        style={style}
        disabled={disabled}
        {...others}
      />
    </InlineForm>
  )
}

export default SelectField
