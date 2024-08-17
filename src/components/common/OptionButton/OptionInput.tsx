import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Control, Controller } from 'react-hook-form'

import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import { useControlled } from '@mui/material'
import { RootState } from '@app/store/store'
import { useSelector } from 'react-redux'
import { ColorTokens } from '@app/store/commonStore/CommonStore'

const FormToggleButtonGroup = styled(ToggleButtonGroup)`
  display: inline-flex;
  flex-direction: row;
  width: 100%;
` as typeof ToggleButtonGroup

const StyledToggle = styled.div`
  width: 100%;
  .toggle-button {
    border-radius: 25px;
    font-size: 16px;
  }

  .btn-toggle: first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
  }

  .btn-toggle: last-of-type {
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
  }
`
const FormToggleButton = styled(ToggleButton)<{
  $disabledWithColor?: boolean
  colorTokens?: ColorTokens
}>`
  height: 32px;
  width: 100%;
  padding: 7px;
  line-height: 0.7;
  border-radius: 25px;
  flex: 1;
  border: 0;
  background-color: ${({ colorTokens }) => colorTokens?.grey[700]};
  &.Mui-selected {
    color: #ffffff !important;
    background-color: #1b4fbb !important;
    &:hover {
      background-color: #1118278c;
    }
  }
  &.Mui-disabled {
    color: #757575;
    &.Mui-selected {
      color: #ffffff;
      background-color: ${({ $disabledWithColor }) =>
        $disabledWithColor ? '#ff7b9cb7' : '#b1b1b1'};
    }
  }
  &.MuiToggleButton-sizeSmall {
    line-height: 0.4;
    height: 20px;
  }
`

export type OptionType = { label: string | ReactNode; value: string | any }

type Props = {
  id: string
  name: string
  options: Array<OptionType>
  value?: string | any
  size?: 'small' | 'medium'
  control?: Control
  onChange?: (value: string) => void
  disabled?: boolean
  defaultValue?: string
  disabledWithColor?: boolean
}

const OptionButtonInternal: React.FC<Props> = (props: Props) => {
  const {
    id,
    name,
    options,
    size = 'medium',
    value: valueProp,
    onChange,
    disabled,
    defaultValue,
    disabledWithColor,
  } = props
  const { colorTokens } = useSelector((state: RootState) => state.commonStore)

  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'ToggleButtonGroup',
  })

  React.useEffect(() => {
    if (valueProp) {
      setValue(valueProp)
    }
  }, [valueProp, setValue])

  const handleChange = (e: React.MouseEvent<HTMLElement>, val: string) => {
    if (!val) {
      return
    }

    setValue(val)

    if (onChange) {
      onChange(val)
    }
  }

  return (
    <StyledToggle>
      <FormToggleButtonGroup
        id={id}
        size={size}
        value={value}
        onChange={handleChange}
        exclusive
        defaultValue={defaultValue}
        data-testid={id}
        className='toggle-button'
      >
        {options.map((option) => (
          <FormToggleButton
            name={name}
            size={size}
            key={option.value}
            value={option.value}
            className='btn-toggle'
            disabled={disabled}
            data-testid={`${id}-${option.value}`}
            $disabledWithColor={disabledWithColor}
            colorTokens={colorTokens}
          >
            {option.label}
          </FormToggleButton>
        ))}
      </FormToggleButtonGroup>
    </StyledToggle>
  )
}

const OptionButton: React.FC<Props> = (props: Props) => {
  const { control, ...others } = props
  if (control) {
    const { name, defaultValue, onChange } = others

    return (
      <Controller
        render={({ field: { onChange: handleChange, value } }) => (
          <OptionButtonInternal
            {...props}
            value={value}
            onChange={(newChecked) => {
              handleChange(newChecked)
              if (onChange) {
                onChange(newChecked)
              }
              return newChecked
            }}
          />
        )}
        control={control}
        name={name}
        defaultValue={defaultValue}
      />
    )
  }
  return <OptionButtonInternal {...others} />
}

export default OptionButton
