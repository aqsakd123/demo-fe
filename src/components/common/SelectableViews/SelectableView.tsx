import React, { ReactNode, useState } from 'react'
import { Button, Chip, Stack } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import ColorUtils from '@app/helpers/ColorUtils'
import SelectableDialog from './SelectableDialog'
import InlineForm from '../Form/InlineForm'

export interface SelectableOption {
  label: React.ReactNode
  value: string
  color?: string
  backgroundColor?: string
}

export interface SelectableButtonProps {
  id: string
  name: string
  required?: boolean
  label?: ReactNode
  labelWidth?: number
  error?: boolean
  errorMessage?: ReactNode
  tooltip?: string
  height?: string
  selectedValue?: string | string[]
  size: 'small' | 'medium'
  defaultColor?: string
  options: SelectableOption[]
  disabled?: boolean
  onChange: (val: string | string[]) => void
}

const SelectableView: React.FC<SelectableButtonProps> = ({
  id,
  required,
  name,
  label = '',
  labelWidth,
  error,
  errorMessage,
  tooltip,
  height,
  selectedValue,
  onChange,
  size,
  defaultColor = '#0000ff',
  options,
  disabled = false, // Default to false
}) => {
  const [dialogOpen, setDialogOpen] = useState(false)

  const getOption = (value?: string) => {
    return options.find((option) => option.value === value)
  }

  const isArray = Array.isArray(selectedValue)

  const handleButtonClick = () => {
    if (disabled) return
    setDialogOpen(true)
  }

  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  const handleDialogSave = (value: string | string[]) => {
    onChange(value)
    setDialogOpen(false)
  }

  return (
    <InlineForm
      id={id}
      label={labelWidth === 0 ? undefined : label}
      labelWidth={labelWidth}
      required={required}
      error={error}
      disabled={disabled}
      tooltip={tooltip}
      errorMessage={errorMessage as string}
      height={height}
    >
      <Stack direction='row' spacing={1} alignItems='center'>
        <>
          {dialogOpen && (
            <SelectableDialog
              id={id}
              name={name}
              open={dialogOpen}
              onClose={handleDialogClose}
              selectedValue={selectedValue}
              onChange={handleDialogSave}
              options={options}
              size={size}
              defaultColor={defaultColor}
              disabled={disabled}
            />
          )}
          {isArray ? (
            <>
              {selectedValue.map((value) => {
                const option = getOption(value)
                return option ? (
                  <Chip
                    key={value}
                    label={option.label}
                    size={size}
                    style={{
                      color:
                        option.color ??
                        ColorUtils.getContrastingColor(option.backgroundColor ?? defaultColor),
                      backgroundColor: option.backgroundColor ?? defaultColor,
                    }}
                  />
                ) : null
              })}
              <Button
                variant='contained'
                size={size}
                onClick={handleButtonClick}
                disabled={disabled}
              >
                <AddIcon />
                Select
              </Button>
            </>
          ) : (
            <Button
              variant='contained'
              size={size}
              style={{
                color:
                  getOption(selectedValue)?.color ??
                  ColorUtils.getContrastingColor(
                    getOption(selectedValue)?.backgroundColor ?? defaultColor,
                  ),
                backgroundColor: getOption(selectedValue)?.backgroundColor || defaultColor,
              }}
              onClick={handleButtonClick}
              disabled={disabled}
            >
              {getOption(selectedValue)?.label || (
                <>
                  <AddIcon />
                  Select
                </>
              )}
            </Button>
          )}
        </>
      </Stack>
    </InlineForm>
  )
}

export default SelectableView
