import React, { useState } from 'react'
import MarkdownIt from 'markdown-it'
// @ts-ignore
import taskLists from 'markdown-it-task-lists'
import { Tabs, Tab, Box } from '@mui/material'
import InlineForm from '@app/components/common/Form/InlineForm'

const mdParser = new MarkdownIt().use(taskLists)

type TextEditorFieldProps = {
  id: string
  name: string
  label?: string
  value: string
  onChange: (value: string) => void
  previewMode?: boolean // true = Preview only, false = Edit only, undefined = toggleable
  disabled?: boolean
  errors?: any
  errorMessage?: string
}

const TextEditorField: React.FC<TextEditorFieldProps> = ({
  id,
  name,
  label = '',
  value = '',
  onChange,
  previewMode = undefined,
  disabled = false,
  errors,
  errorMessage,
}) => {
  const [isPreview, setIsPreview] = useState(previewMode ?? false)

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    if (previewMode === undefined) {
      setIsPreview(newValue === 1)
    }
  }

  return (
    <InlineForm
      id={id}
      label={label}
      error={Boolean(errors)}
      errorMessage={errorMessage}
      disabled={disabled}
    >
      <div>
        {previewMode === undefined && (
          <Tabs value={isPreview ? 1 : 0} onChange={handleTabChange} aria-label='Editor Tabs'>
            <Tab label='Edit' />
            <Tab label='Preview' />
          </Tabs>
        )}

        <Box mt={2}>
          {isPreview ? (
            <div dangerouslySetInnerHTML={{ __html: mdParser.render(value) }} />
          ) : (
            <textarea
              id={`textarea-${name}`}
              name={name}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              disabled={disabled}
              rows={10}
              cols={50}
            />
          )}
        </Box>
      </div>
    </InlineForm>
  )
}

export default TextEditorField
