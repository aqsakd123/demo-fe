import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from '@mui/material'
import { RootState } from '@app/store/store'
import { TYPE_VALUE } from '@app/store/projectStore/ProjectStore'

interface FunctionDetailDialogProps {
  uuidFunctional: string
  indexFunctional: number
  open: boolean
  onClose: () => void
  onSave: (uuid: string, indexFunctional: number, updatedParams: { [key: string]: string }) => void
  itemParams: { name: string; value: string }[]
}

const FunctionDetailDialog: React.FC<FunctionDetailDialogProps> = ({
  uuidFunctional,
  open,
  indexFunctional,
  onClose,
  onSave,
  itemParams,
}) => {
  const { functionalList } = useSelector((state: RootState) => state.projectStore)

  const functionDetail = functionalList.find((item) => item.id === uuidFunctional)

  if (!functionDetail) {
    return null
  }

  const [updatedParams, setUpdatedParams] = useState<{ [key: string]: string }>({})

  const handleParamChange = (paramName: string, value: string) => {
    setUpdatedParams({
      ...updatedParams,
      [paramName]: value,
    })
  }

  const handleSave = () => {
    onSave(uuidFunctional, indexFunctional, updatedParams)
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Function Detail</DialogTitle>
      <DialogContent>
        <div>
          <TextField
            label='Name'
            value={functionDetail.name}
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            variant='outlined'
            margin='dense'
          />
          <TextField
            label='UUID'
            value={uuidFunctional}
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            variant='outlined'
            margin='dense'
          />
          <div>Parameters:</div>
          {functionDetail.params.map((param) => (
            <div
              key={param.id}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}
            >
              <TextField
                label='Name'
                value={param.name}
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                variant='outlined'
                margin='dense'
              />
              {param.type === TYPE_VALUE.NUMBER && (
                <TextField
                  label='Value'
                  type='number'
                  placeholder={param.defaultValue}
                  value={
                    updatedParams[param.name] ??
                    itemParams.find((p) => p.name === param.name)?.value ??
                    ''
                  }
                  fullWidth
                  onChange={(e) => handleParamChange(param.name, e.target.value)}
                  variant='outlined'
                  margin='dense'
                />
              )}
              {param.type === TYPE_VALUE.TEXT && (
                <TextField
                  label='Value'
                  placeholder={param.defaultValue}
                  value={
                    updatedParams[param.name] ??
                    itemParams.find((p) => p.name === param.name)?.value ??
                    ''
                  }
                  fullWidth
                  onChange={(e) => handleParamChange(param.name, e.target.value)}
                  variant='outlined'
                  margin='dense'
                />
              )}
              {param.type === TYPE_VALUE.BOOLEAN && (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Boolean(
                        updatedParams[param.name] ??
                          itemParams.find((p) => p.name === param.name)?.value,
                      )}
                      onChange={(e) =>
                        handleParamChange(param.name, e.target.checked ? 'checked' : '')
                      }
                    />
                  }
                  label='Value'
                />
              )}
            </div>
          ))}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave} color='primary'>
          Save
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}

export default FunctionDetailDialog
