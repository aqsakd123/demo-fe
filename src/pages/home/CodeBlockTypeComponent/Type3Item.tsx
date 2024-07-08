import React, { useState } from 'react'
import { IconButton, Chip, Dialog, DialogTitle, DialogActions, Button } from '@mui/material'
import { Add, Close } from '@mui/icons-material'
import { POSITION } from '../Home'
import FunctionDetailDialog from '../CodeBlockDialog/FunctionDetailDialog'
import { useSelector } from 'react-redux'
import { RootState } from '@app/store/store'

interface Type3ItemProps {
  id: string
  uuid: string
  position: POSITION
  indexFunctional: number
  isTextContentPrev: boolean
  isTextContentNext: boolean
  params: { name: string; value: string }[]
  handleAddItem: (id: string, position: 'prev' | 'next') => void
  handleDelete: (
    uuid: string,
    indexFunctional: number,
    deleteOption: 'ALL' | 'SINGLE' | 'CANCEL',
  ) => void
  onSaveParams: (
    uuid: string,
    indexFunctional: number,
    updatedParams: { [key: string]: string },
  ) => void
}

const Type3Item: React.FC<Type3ItemProps> = ({
  id,
  uuid,
  position,
  indexFunctional,
  handleDelete,
  params,
  onSaveParams,
  isTextContentNext,
  isTextContentPrev,
  handleAddItem,
}) => {
  const { functionalList } = useSelector((state: RootState) => state.projectStore)

  const [showDetail, setShowDetail] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [showButtons, setShowButtons] = useState(false)

  const getDetailFromFunction = (uuid: string) => {
    const functionItem = functionalList.find((item) => item.id === uuid)
    return functionItem ? functionItem : { name: 'Unknown', params: [] }
  }

  const functionDetail = getDetailFromFunction(uuid)

  const handleOpenDetail = () => {
    setShowDetail(true)
  }

  const handleCloseDetail = () => {
    setShowDetail(false)
  }

  const handleDeleteClick = () => {
    setShowDeleteDialog(true)
  }

  const handleConfirmDelete = (deleteOption: 'ALL' | 'SINGLE' | 'CANCEL') => {
    setShowDeleteDialog(false)
    if (deleteOption !== 'CANCEL') {
      handleDelete(uuid, indexFunctional, deleteOption)
    }
  }

  return (
    <div
      style={{ display: 'flex' }}
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      {isTextContentPrev && showButtons && (
        <IconButton
          size='small'
          color='primary'
          onClick={(e) => {
            e.stopPropagation()
            handleAddItem(id, 'prev')
          }}
        >
          <Add />
        </IconButton>
      )}
      <div
        style={{
          padding: '5px',
          minWidth: '100px',
          backgroundColor: 'lightblue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '36.5px',
        }}
        onClick={handleOpenDetail}
      >
        <Chip
          label={`${position} FUNC`}
          size='small'
          style={{ marginRight: '5px' }}
          color='primary'
        />
        {functionDetail.name}
        <IconButton
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            handleDeleteClick()
          }}
          size='small'
          color='secondary'
        >
          <Close />
        </IconButton>
      </div>
      {isTextContentNext && showButtons && (
        <IconButton
          size='small'
          color='primary'
          onClick={(e) => {
            e.stopPropagation()
            handleAddItem(id, 'next')
          }}
        >
          <Add />
        </IconButton>
      )}
      {showDetail && (
        <FunctionDetailDialog
          uuidFunctional={uuid}
          indexFunctional={indexFunctional}
          open={showDetail}
          onClose={handleCloseDetail}
          onSave={onSaveParams}
          itemParams={params}
        />
      )}
      <Dialog open={showDeleteDialog} onClose={() => setShowDeleteDialog(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogActions>
          <Button onClick={() => handleConfirmDelete('ALL')} color='secondary'>
            Delete All
          </Button>
          <Button onClick={() => handleConfirmDelete('SINGLE')} color='secondary'>
            Delete Single
          </Button>
          <Button onClick={() => handleConfirmDelete('CANCEL')} color='primary'>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Type3Item
