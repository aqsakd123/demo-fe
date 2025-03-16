import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  IconButton,
  Chip,
} from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'
import AddMemoDialog from './AddMemoDialog'
import styled from 'styled-components'
import { RootState } from '@app/store/store'
import { Memo, memoStore, Tag } from '@app/store/memoStore/memoStore'
import QuillEditor from '@app/components/common/QuillEditor/QuillEditor'
import { Popconfirm } from 'antd'
import ColorUtils from '@app/helpers/ColorUtils'

// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 1500px;
  margin: auto;
`

const MemoCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgb(91 97 137);
  margin-top: 10px;
  margin-bottom: 20px;
`

const MemoDetails = styled.div`
  flex: 1;
`

const MemoActions = styled.div`
  display: flex;
  gap: 10px;
`

function MemoList() {
  const dispatch = useDispatch()
  const memos = useSelector((state: RootState) => state.memoStore.memoList)
  const tags = useSelector((state: RootState) => state.memoStore.tagList)
  const [search, setSearch] = useState('')
  const [selectedTags, setSelectedTags] = useState<number[]>([])
  const [open, setOpen] = useState(false)
  const [editMemo, setEditMemo] = useState<Memo | null>(null)
  const [importData, setImportData] = useState<string>('')

  const handleImportData = () => {
    const dataValue: { tagList: Tag[]; memoList: Memo[] } = JSON.parse(importData)
    dataValue.memoList.forEach((it) => {
      dispatch(memoStore.actions.addMemo(it))
    })
    dataValue.tagList.forEach((it) => {
      dispatch(memoStore.actions.addTag(it))
    })
  }

  const handleExportData = () => {
    const exportData = {
      memoList: memos,
      tagList: tags,
    }
    navigator.clipboard.writeText(JSON.stringify(exportData))
    alert('Copy done! Please parse to github!')
  }

  const filteredMemos = memos.filter(
    (memo) =>
      memo.title.toLowerCase().includes(search.toLowerCase()) &&
      (selectedTags.length === 0 || selectedTags.some((tag) => memo.tags.includes(tag))),
  )

  return (
    <Container>
      {/* TODO: parse link github pages here */}
      <TextField
        fullWidth
        label='Import Data'
        variant='outlined'
        value={importData}
        onChange={(e) => setImportData(e.target.value)}
      />

      <TextField
        fullWidth
        label='Search Memos'
        variant='outlined'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginTop: '10px' }}
      />
      <FormControl fullWidth style={{ marginTop: '10px' }}>
        <InputLabel>Tags</InputLabel>
        <Select
          multiple
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
      <Button
        variant='contained'
        style={{ marginTop: '10px' }}
        onClick={() => {
          setEditMemo(null)
          setOpen(true)
        }}
      >
        Add Memo
      </Button>
      <Button
        variant='contained'
        style={{ marginTop: '10px', marginLeft: '20px' }}
        onClick={handleExportData}
      >
        Export Data
      </Button>

      <Button
        variant='contained'
        style={{ marginTop: '10px', marginLeft: '20px' }}
        disabled={!importData}
        onClick={handleImportData}
      >
        Import Data
      </Button>

      {filteredMemos.map((memo) => (
        <MemoCard key={memo.id}>
          <MemoDetails>
            <h3>{memo.title}</h3>
            <QuillEditor value={memo.content} readOnly />
            <p>
              <strong>Tags:</strong>{' '}
              {memo.tags.map((tagId) => {
                const tag = tags.find((tag) => tag.id === tagId)

                return (
                  <Chip
                    id={tagId + ''}
                    label={tag?.label}
                    size='small'
                    style={{
                      backgroundColor: tag?.backgroundColor,
                      color: tag?.backgroundColor
                        ? ColorUtils.getContrastingColor(tag?.backgroundColor)
                        : undefined,
                      border: tag?.backgroundColor
                        ? '1px solid ' + ColorUtils.getContrastingColor(tag?.backgroundColor)
                        : undefined,
                      marginRight: '8px',
                    }}
                  />
                )
              })}
            </p>
          </MemoDetails>
          <MemoActions>
            <IconButton
              onClick={() => {
                setEditMemo(memo)
                setOpen(true)
              }}
            >
              <Edit />
            </IconButton>
            <Popconfirm
              title='Are you sure you want to delete this memo?'
              onConfirm={() => dispatch(memoStore.actions.deleteMemo(memo.id))}
              okText='Yes'
              cancelText='No'
            >
              <IconButton
                data-testid={`delete-detail-pop-confirm-button`}
                onClick={(e) => e.stopPropagation()}
              >
                <Delete />
              </IconButton>
            </Popconfirm>
          </MemoActions>
        </MemoCard>
      ))}
      {open && <AddMemoDialog open={open} onClose={() => setOpen(false)} editMemo={editMemo} />}
    </Container>
  )
}

export default MemoList
