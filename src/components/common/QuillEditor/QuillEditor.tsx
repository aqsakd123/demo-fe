import { RootState } from '@app/store/store'
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useSelector } from 'react-redux'

interface MyEditorProps {
  value?: string
  handleChange?: (value: string) => void
  readOnly?: boolean
  modules?: any
  placeholder?: string
}

const defaultModules = {
  toolbar: [
    [{ font: [] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ header: 1 }, { header: 2 }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
  ],
  clipboard: {
    matchVisual: false,
  },
}

const QuillEditor: React.FC<MyEditorProps> = (props: MyEditorProps) => {
  const { value, handleChange, readOnly, modules = defaultModules, placeholder } = props
  const { darkMode } = useSelector((state: RootState) => state.commonStore)
  const colorText = darkMode ? '#f7cdcd' : 'gray'

  const [content, setContent] = useState<string>(value || '')
  const quillRef = React.useRef()

  const handleEditorChange = (value: string) => {
    setContent(value ?? '')
  }

  useEffect(() => {
    if (handleChange) {
      handleChange(content)
    }
  }, [content])

  return (
    <div style={{ height: '100%' }}>
      <Box
        sx={{
          height: '100%',
          '& .quill': {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            border: readOnly ? '1px solid' : undefined,
          },
          '& .ql-editor': {
            minHeight: '200px',
            maxHeight: '500px',
            height: '100%',
          },
          '& .ql-editor.ql-blank::before': {
            color: darkMode ? 'white' : 'black',
          },
          '& .ql-toolbar': {
            flex: '0 0 auto',
            display: readOnly ? 'none' : undefined,
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            '& button svg': {
              color: `${colorText} `,
              fill: `${colorText} `,
            },
            '& .ql-stroke ': {
              fill: 'none',
              stroke: `${colorText} `,
            },
            '& .ql-fill ': {
              fill: 'none',
              stroke: `${colorText} `,
            },
            '& .ql-picker ': {
              fill: `${colorText} `,
              color: `${colorText}`,
            },
          },
          '& .ql-container': {
            flex: 1,
            overflow: 'auto',
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
          },
          '& .ql-syntax': {
            backgroundColor: '#3e155b !important',
            borderLeft: '5px solid #9f1212',
            borderRadius: '8px',
            color: 'white',
          },
        }}
      >
        {!readOnly ? (
          <ReactQuill
            theme='snow'
            value={content}
            onChange={handleEditorChange}
            readOnly={readOnly}
            modules={modules}
            placeholder={placeholder}
            // @ts-ignore
            ref={quillRef}
          />
        ) : (
          <Box
            sx={{
              padding: '8px',
              minHeight: '200px',
              maxHeight: '500px',
              overflow: 'auto',
              height: '100%',
              '& p': {
                margin: '5px 0px',
                maxWidth: '100%',
              },
              '& pre': {
                whiteSpace: 'break-spaces',
              },
              '& .ql-syntax': {
                backgroundColor: '#3e155b !important',
                borderLeft: '5px solid #9f1212',
                borderRadius: '8px',
                paddingLeft: '5px',
              },
            }}
            dangerouslySetInnerHTML={{ __html: (value ?? '')?.replaceAll('<p>', '') }}
          />
        )}
      </Box>
    </div>
  )
}

export default QuillEditor
