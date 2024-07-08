import React, { useState } from 'react'
import { Chip, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '@app/store/store'
import { Add, Close } from '@mui/icons-material'
import { Popconfirm } from 'antd'

interface Type2ItemProps {
  uuid: string
  id: string
  isTextContentPrev: boolean
  isTextContentNext: boolean
  handleAddItem: (id: string, position: 'prev' | 'next') => void
  handleDelete: (id: string) => void
}

const Type2Item: React.FC<Type2ItemProps> = ({
  id,
  uuid,
  isTextContentNext,
  isTextContentPrev,
  handleAddItem,
  handleDelete,
}) => {
  const { codeCommonList } = useSelector((state: RootState) => state.projectStore)
  const [openDialog, setOpenDialog] = useState(false)
  const [showButtons, setShowButtons] = useState(false)

  const itemDetail = codeCommonList.find((item) => item.id === uuid)

  const handleDialogOpen = () => {
    setOpenDialog(true)
  }

  const handleDialogClose = () => {
    setOpenDialog(false)
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
        onClick={handleDialogOpen}
      >
        {itemDetail?.name ?? 'Unknown'}
        <Chip label='CM' size='small' style={{ marginLeft: '5px' }} color='warning' />
        <Popconfirm
          title='Are you sure to delete this item?'
          onConfirm={() => handleDelete(id)}
          okText='Yes'
          cancelText='No'
        >
          <IconButton
            size='small'
            color='secondary'
            onClick={(e) => {
              e?.preventDefault()
              e?.stopPropagation()
            }}
          >
            <Close />
          </IconButton>
        </Popconfirm>
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
      <Dialog open={openDialog} onClose={handleDialogClose} fullWidth>
        <DialogTitle style={{ fontWeight: 600 }}>Detail Code Common Information</DialogTitle>
        <DialogContent>
          <div>
            <p>Name: {itemDetail?.name}</p>
            <p>UUID: {uuid}</p>
            <p>Content: {itemDetail?.content}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Type2Item
