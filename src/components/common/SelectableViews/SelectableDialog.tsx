import React, { useState } from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
} from '@mui/material'
import {
  CheckCircle as CheckCircleIcon,
  RadioButtonUnchecked as RadioButtonUncheckedIcon,
} from '@mui/icons-material'
import ColorUtils from '@app/helpers/ColorUtils'
import { useConfirm } from '@app/components/common/ConfirmDialog/useConfirm'
import { SelectableButtonProps } from './SelectableView'
import { RootState } from '@app/store/store'
import { useSelector } from 'react-redux'

interface SelectableDialogProps extends SelectableButtonProps {
  open: boolean
  onClose: () => void
}

const SelectableDialog: React.FC<SelectableDialogProps> = ({
  open,
  onClose,
  selectedValue,
  onChange,
  options,
}) => {
  const confirm = useConfirm()
  const { darkMode } = useSelector((state: RootState) => state.commonStore)
  const defaultColor = darkMode ? '#0000ff' : '#52a0ef'
  const isArray = Array.isArray(selectedValue)

  const [localSelectedValues, setLocalSelectedValues] = useState<string[]>(
    isArray ? selectedValue : selectedValue ? [selectedValue] : [],
  )

  const handleSelect = (value: string) => {
    if (isArray) {
      setLocalSelectedValues((prevSelectedValues) =>
        prevSelectedValues.includes(value)
          ? prevSelectedValues.filter((v) => v !== value)
          : [...prevSelectedValues, value],
      )
    } else {
      setLocalSelectedValues([value])
    }
  }

  const isDifferent = (val1: string | string[], val2?: string | string[]): boolean => {
    if (Array.isArray(val1) && Array.isArray(val2)) {
      return val1.length !== val2.length || val1.some((value) => !val2.includes(value))
    }
    return Array.isArray(val1) ? val1[0] !== val2 : val1 !== val2
  }

  const handleSave = () => {
    onChange(isArray ? localSelectedValues : localSelectedValues[0])
    onClose()
  }

  const handleCancel = async () => {
    if (isDifferent(localSelectedValues, selectedValue)) {
      const confirmed = await confirm({
        title: 'Confirm',
        message: 'Are you sure you want to close the dialog? All unsaved changes will be lost!',
      })
      if (!confirmed) return
    }
    onClose()
  }

  return (
    <Dialog open={open} onClose={handleCancel} maxWidth='sm' fullWidth style={{ height: '400px' }}>
      <DialogTitle>Select Options</DialogTitle>
      <DialogContent>
        <List>
          {options.map((option) => {
            const isChecked = isArray
              ? localSelectedValues.includes(option.value)
              : localSelectedValues[0] === option.value
            return (
              <ListItem
                key={option.value}
                button
                onClick={() => handleSelect(option.value)}
                style={{
                  color:
                    option.color ??
                    ColorUtils.getContrastingColor(option.backgroundColor ?? defaultColor),
                  backgroundColor: option.backgroundColor ?? defaultColor,
                }}
              >
                <Checkbox
                  checked={isChecked}
                  color='primary'
                  icon={
                    <RadioButtonUncheckedIcon
                      sx={{
                        color:
                          option.color ??
                          ColorUtils.getContrastingColor(option.backgroundColor ?? defaultColor),
                      }}
                    />
                  }
                  checkedIcon={
                    <CheckCircleIcon
                      sx={{
                        color:
                          option.color ??
                          ColorUtils.getContrastingColor(option.backgroundColor ?? defaultColor),
                        backgroundColor: option.backgroundColor ?? defaultColor,
                      }}
                    />
                  }
                />
                <ListItemText primary={option.label} />
              </ListItem>
            )
          })}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color='primary'>
          Cancel
        </Button>
        <Button onClick={handleSave} color='primary' variant='contained'>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default SelectableDialog
