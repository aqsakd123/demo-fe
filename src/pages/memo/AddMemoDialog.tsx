import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material'
import styled from 'styled-components'
import { RootState } from '@app/store/store'
import { memoStore } from '@app/store/memoStore/memoStore'
import QuillEditor from '@app/components/common/QuillEditor/QuillEditor'
import Dialog from '@app/components/common/Dialog/Dialog'

// Styled Components
const DialogContent = styled.div`
  padding: 20px;
  min-width: 800px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`

interface AddMemoDialogProps {
  open: boolean
  onClose: () => void
  editMemo: { id: number; title: string; content: string; tags: number[] } | null
}

function AddMemoDialog({ open, onClose, editMemo }: AddMemoDialogProps) {
  const dispatch = useDispatch()
  const tags = useSelector((state: RootState) => state.memoStore.tagList)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState(editMemo?.content ?? '')
  const [selectedTags, setSelectedTags] = useState<number[]>([])

  useEffect(() => {
    if (editMemo) {
      setTitle(editMemo.title)
      setContent(editMemo.content)
      setSelectedTags(editMemo.tags)
    } else {
      setTitle('')
      setContent('')
      setSelectedTags([])
    }
  }, [editMemo, editMemo?.content])

  const handleSubmit = () => {
    if (!title || !content || !(selectedTags?.length > 0)) return
    if (editMemo) {
      dispatch(
        memoStore.actions.updateMemo({ id: editMemo.id, title, content, tags: selectedTags }),
      )
    } else {
      dispatch(memoStore.actions.addMemo({ title, content, tags: selectedTags }))
    }
    onClose()
  }

  return (
    <Dialog title='Memo' open={open} onClickReturn={onClose} fullWidth selfContentAndActions>
      <DialogContent>
        <TextField
          fullWidth
          label='Title'
          variant='outlined'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <QuillEditor value={content} handleChange={(e) => setContent(e)} />
        <FormControl fullWidth>
          <InputLabel>Tags</InputLabel>
          <Select
            multiple
            size='small'
            value={selectedTags}
            onChange={(e) => setSelectedTags(e.target.value as number[])}
          >
            {tags.map((tag) => (
              <MenuItem key={tag.id} value={tag.id}>
                {tag.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <ActionButtons>
          <Button variant='outlined' onClick={onClose}>
            Cancel
          </Button>
          <Button variant='contained' onClick={handleSubmit}>
            {editMemo ? 'Update' : 'Add'}
          </Button>
        </ActionButtons>
      </DialogContent>
    </Dialog>
  )
}

export default AddMemoDialog
