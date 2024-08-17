import React, { useState } from 'react'
import { Button, Chip, Stack } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import ColorUtils from '@app/helpers/ColorUtils'
import SelectableDialog from './SelectableDialog'

export interface SelectableOption {
  name: React.ReactNode
  value: string
  color?: string
  backgroundColor?: string
  [key: string]: any
}

export interface SelectableButtonProps {
  selectedValue: string | string[]
  onChange: (val: string | string[]) => void
  size: 'small' | 'medium'
  defaultColor?: string
  options: SelectableOption[]
  disabled?: boolean
}

const SelectableView: React.FC<SelectableButtonProps> = ({
  selectedValue,
  onChange,
  size,
  defaultColor = 'blue',
  options,
  disabled = false, // Default to false
}) => {
  const [dialogOpen, setDialogOpen] = useState(false)

  const getOption = (value: string) => {
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
    <Stack direction='row' spacing={1} alignItems='center'>
      {dialogOpen && (
        <SelectableDialog
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
                label={option.name}
                size={size}
                style={{
                  color:
                    option.color ??
                    ColorUtils.getContrastingColor(option.backgroundColor ?? defaultColor),
                  backgroundColor: option.backgroundColor,
                }}
              />
            ) : null
          })}
          <Button variant='contained' size={size} onClick={handleButtonClick} disabled={disabled}>
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
          {getOption(selectedValue)?.name || (
            <>
              <AddIcon />
              Select
            </>
          )}
        </Button>
      )}
    </Stack>
  )
}

export default SelectableView
