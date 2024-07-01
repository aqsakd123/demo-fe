import {
  Box,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Switch,
} from '@mui/material'
import React, { FormEvent, useRef, useState } from 'react'
import { LabelAndValue } from '../formBuilder/utils/form-builder-types'
import CloseIcon from '@mui/icons-material/Close'

export const regex = /\$\[([A-Z]+)_([A-Z]+)_(\d+)_([^\]]+)\]/g

// @ts-ignore
export const parseStringToElements = (
  str: string,
  componentMapping: any,
  fuctionalList: LabelAndValue[],
  preview: boolean,
  onDelete?: (functional: string, index: string, uuid: string, deleteText: boolean) => void,
  onClick?: (text: 'FUNCTIONAL' | 'SLOTCOMMON', index: string, uuid: string) => void,
) => {
  const parts = []
  let lastIndex = 0

  let match
  while ((match = regex.exec(str)) !== null) {
    const [fullMatch, position, functional, vIndex, uuid] = match
    const index = match.index

    // Add text before component
    if (lastIndex < index) {
      // Thêm vào parts phần text trước khi match
      const textBeforeMatch = str.substring(lastIndex, index)
      parts.push(parseTextWithBreakRow(textBeforeMatch))
    }

    // Add component
    if (componentMapping['LabelFunctional']) {
      parts.push(
        React.createElement(componentMapping['LabelFunctional'], {
          key: index,
          position,
          functional,
          index: vIndex,
          uuid,
          fuctionalList,
          preview,
          onDelete,
          onClick,
        }),
      )
    }

    lastIndex = index + fullMatch.length
  }

  // Add remaining text after last match
  if (lastIndex < str.length) {
    const remainingText = str.substring(lastIndex)
    parts.push(parseTextWithBreakRow(remainingText))
  }

  return parts
}

const BreakRowComponent = () => (
  <div
    className='break'
    role='break'
    style={{
      flexBasis: '100%',
      height: 0,
    }}
  />
)

const LabelFunctional = (props: {
  position: string
  functional: string
  index: string
  preview: boolean
  uuid: string
  fuctionalList: LabelAndValue[]
  onDelete?: (functional: string, index: string, uuid: string, deleteText: boolean) => void
  onClick?: (text: 'FUNCTIONAL' | 'SLOTCOMMON', index: string, uuid: string) => void
}) => {
  const {
    position,
    functional,
    index,
    uuid,
    fuctionalList = [],
    onDelete,
    onClick,
    preview,
  } = props
  const labelName = fuctionalList?.find((it) => it.value === uuid)?.label
  const [open, setOpen] = useState(false)

  const handleOpenDialog = () => setOpen(true)
  const handleCloseDialog = () => setOpen(false)

  const handleDelete = (deleteTextOption: boolean) => {
    if (onDelete) {
      onDelete(functional, index, uuid, deleteTextOption)
      handleCloseDialog()
    }
  }

  const handleClick = () => {
    if (onClick && (functional === 'FUNCTIONAL' || functional === 'SLOTCOMMON')) {
      onClick(functional, index, uuid)
    }
  }

  return (
    <>
      <span
        style={{
          backgroundColor: 'orange',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '4px',
          border: '1px solid orange',
          padding: '5px',
          width: 'fit-content',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
        }}
        contentEditable={false}
        onClick={handleClick}
        role={`$[${position}_${functional}_${index}_${uuid}]`}
        datatype={index}
      >
        {!preview ? (
          <span>{`$[${position}_${functional}_${index}_${uuid}]`}</span>
        ) : (
          <>
            <Chip
              size='small'
              label={position}
              style={{ backgroundColor: 'red', color: 'white', marginRight: '5px' }}
            />
            <Chip
              size='small'
              label={functional}
              style={{ backgroundColor: 'blue', color: 'white', marginRight: '5px' }}
            />
            {labelName}
            {onDelete && (
              <IconButton
                size='small'
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  handleOpenDialog()
                }}
                style={{ marginLeft: '5px', color: 'white' }}
              >
                <CloseIcon />
              </IconButton>
            )}
          </>
        )}
      </span>
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>
          <b>Confirm Delete</b>
        </DialogTitle>
        <DialogContent>
          <p>Are you sure you want to delete this item?</p>
          <p>{`UUID: ${uuid}`}</p>
          <p>{`Index: ${index}`}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDelete(false)} color='primary'>
            Delete
          </Button>
          <Button onClick={() => handleDelete(true)} color='secondary'>
            Delete with text
          </Button>
          <Button onClick={handleCloseDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

// Hàm parseTextWithBreakRow để thay thế \n bằng BreakRowComponent
const parseTextWithBreakRow = (text: string) => {
  return text.split('\n').map((line, index, arr) => {
    if (index > 0) {
      return (
        <React.Fragment key={index}>
          <span>{line}</span>
          {index > 0 && index < arr.length - 1 && <BreakRowComponent />}
        </React.Fragment>
      )
    }
    return (
      <React.Fragment key={index}>
        {line}
        {arr?.length > 1 && <BreakRowComponent />}
      </React.Fragment>
    )
  })
}

const fuctionalList = [
  { value: '08p3u81u32480fjdhjsdhjhdsf', label: 'F1' },
  { value: '18p3u81u32480fjdhjsdhjhdsf', label: 'F2' },
  { value: '28p3u81u32480fjdhjsdhjhdsf', label: 'F3' },
  { value: '38p3u81u32480fjdhjsdhjhdsf', label: 'F4' },
]

const valText =
  'Hello World, this is $[START_FUNCTIONAL_1_08p3u81u32480fjdhjsdhjhdsf]. \n Welcome1!\nHello1\n World, this is $[END_FUNCTIONAL_1_08p3u81u32480fjdhjsdhjhdsf]. Welcome!Hello World, this is $[START_SLOTCOMMON_2_18p3u81u32480fjdhjsdhjhdsf]. Welcome!Hello World, this is $[START_SLOTCOMMON_3_28p3u81u32480fjdhjsdhjhdsf]. Welcome!Hello World, this is $[END_SLOTCOMMON_3_28p3u81u32480fjdhjsdhjhdsf]. Welcome!Hello World, this is $[END_SLOTCOMMON_2_18p3u81u32480fjdhjsdhjhdsf]. Welcome!'

const TestComponentList: React.FC = () => {
  const [elements, setElements] = useState([])
  const [functionalContent, setFunctionalContent] = useState([])
  const [slotCommonUUID, setSlotCommonUUID] = useState<string>()

  const [text, setText] = useState('')
  const [dialogOpen, setDialogOpen] = useState<'FUNCTIONAL' | 'SLOTCOMMON' | 'NONE'>('NONE')
  const [preview, setPreview] = useState(false)

  const componentMapping = { LabelFunctional }
  const textRef = useRef(null)

  const handleDelete = (functional: string, index: string, uuid: string, deleteText: boolean) => {
    let newText = text

    if (deleteText) {
      // Xóa cả văn bản giữa START và END
      const startTag = `$[START_${functional}_${index}_${uuid}]`
      const endTag = `$[END_${functional}_${index}_${uuid}]`

      const startIndex = newText.indexOf(startTag)
      const endIndex = newText.indexOf(endTag) + endTag.length

      if (startIndex !== -1 && endIndex !== -1 && startIndex < endIndex) {
        newText = newText.slice(0, startIndex) + newText.slice(endIndex)
      }
    } else {
      // Chỉ xóa START và END
      const startTag = `$[START_${functional}_${index}_${uuid}]`
      const endTag = `$[END_${functional}_${index}_${uuid}]`

      newText = newText.replace(startTag, '')
      newText = newText.replace(endTag, '')
    }

    // const newElements = parseStringToElements(
    //   newText,
    //   componentMapping,
    //   fuctionalList,
    //   handleDelete,
    // )
    setText(newText)
    // setElements(newElements)
  }

  const handleClickFunctionalLabel = (
    functional: 'FUNCTIONAL' | 'SLOTCOMMON',
    index: string,
    uuid: string,
  ) => {
    setDialogOpen(functional)
    setSlotCommonUUID(uuid)

    const startTag = `$[START_${functional}_${index}_${uuid}]`
    const endTag = `$[END_${functional}_${index}_${uuid}]`

    const startIndex = text.indexOf(startTag)
    const endIndex = text.indexOf(endTag) + endTag.length

    if (startIndex !== -1 && endIndex !== -1 && startIndex < endIndex) {
      const newText = text.slice(startIndex, endIndex)
      const initialElements = parseStringToElements(
        newText,
        componentMapping,
        fuctionalList,
        false,
        undefined,
        undefined,
      )
      // @ts-ignore
      setFunctionalContent(initialElements)
    }
  }

  const handleCloseFunctionalDialog = () => {
    setDialogOpen('NONE')
    setFunctionalContent([])
    setSlotCommonUUID('')
  }

  React.useEffect(() => {
    const initialElements = parseStringToElements(
      text,
      componentMapping,
      fuctionalList,
      preview,
      handleDelete,
      handleClickFunctionalLabel,
    )
    // @ts-ignore
    setElements(initialElements)
    if (!text) {
      setText(valText)
    }
  }, [text, preview])

  const handleContentChange = (event: FormEvent<HTMLDivElement>) => {
    console.log(event.target?.textContent)
    console.log(text)
    console.log(event.target?.textContent === text)
  }

  return (
    <>
      {dialogOpen === 'FUNCTIONAL' && (
        <Dialog open onClose={handleCloseFunctionalDialog} maxWidth='lg' fullWidth>
          <DialogTitle style={{ fontWeight: 600 }}>Code Block (Function)</DialogTitle>
          <DialogContent style={{ height: '800px', maxHeight: '800px' }}>
            <Box display='flex' flexWrap='wrap' alignItems='center' gap='10px'>
              {functionalContent}
            </Box>
          </DialogContent>
        </Dialog>
      )}
      {dialogOpen === 'SLOTCOMMON' && (
        <Dialog open onClose={handleCloseFunctionalDialog} maxWidth='lg' fullWidth>
          <DialogTitle style={{ fontWeight: 600 }}>Slot Common Detail</DialogTitle>
          <DialogContent style={{ height: '800px', maxHeight: '800px' }}>
            Detail of Slot Common: {slotCommonUUID}
          </DialogContent>
        </Dialog>
      )}

      <h1>Code Field</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Switch checked={preview} onChange={() => setPreview(!preview)} />
        <span>Preview</span>
      </div>
      <Box
        display='flex'
        flexWrap='wrap'
        alignItems='center'
        gap='10px'
        ref={textRef}
        contentEditable={!preview}
        onInput={handleContentChange}
        suppressContentEditableWarning
      >
        {elements}
      </Box>
    </>
  )
}

export default TestComponentList
