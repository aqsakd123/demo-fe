import { Box } from '@mui/material'
import TextField from '@mui/material/TextField'
import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'

interface Type1ItemProps {
  id: string
  content: string
  row: number
  sequence: number
  handleChange: (id: string, newContent: string) => void
  handleDelete: (id: string) => void
  handleAddRow: (id: string, beforeCursor?: string, afterCursor?: string) => void
  handleAddNewRows: (
    id: string,
    newRows: { content: string }[],
    beforeCursor?: string,
    afterCursor?: string,
  ) => void
}

const Type1Item: React.FC<Type1ItemProps> = ({
  id,
  content,
  handleChange,
  handleDelete,
  handleAddRow,
  handleAddNewRows,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const spanRef = useRef<HTMLSpanElement>(null)
  const [inputWidth, setInputWidth] = useState<number>(0)

  useEffect(() => {
    if (spanRef.current) {
      setInputWidth((spanRef.current.offsetWidth ?? 0) + 30) // Add some padding
    }
  }, [content])

  const handleBlur = () => {
    if (!content) {
      handleDelete(id)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const cursorPosition = inputRef.current?.selectionEnd ?? 0
      const beforeCursor = content.slice(0, cursorPosition)
      const afterCursor = content.slice(cursorPosition)
      handleAddRow(id, beforeCursor, afterCursor)
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    if (e.clipboardData.getData('text')?.includes('\n')) {
      e.preventDefault()
      const pasteText = e.clipboardData.getData('text')

      const lines = pasteText.split('\n')
      const newRows = lines.slice(1).map((line) => ({ content: line }))
      handleAddNewRows(id, newRows)
    }
  }

  return (
    <Box
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '0px',
        },
      }}
    >
      <TextField
        inputRef={inputRef}
        variant='outlined'
        size='small'
        value={content}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(id, e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        onPaste={handlePaste}
        style={{ width: `${inputWidth}px` }}
      ></TextField>
      <span ref={spanRef} style={{ visibility: 'hidden', position: 'absolute', whiteSpace: 'pre' }}>
        {content}
      </span>
    </Box>
  )
}

export default Type1Item
