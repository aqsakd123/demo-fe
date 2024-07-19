import React from 'react'
import Dialog from '@app/components/common/Dialog/Dialog'
import TagManagementList, { TagManagement } from '../TagManagementList'

type FormProps = {
  webPart?: string
  handleSelect?: (val: TagManagement[] | TagManagement | undefined) => void
  selectedTag?: TagManagement[] | TagManagement
  mode?: 'single' | 'multiple'
  handleReturn: () => void
}

const SelectTagDialog: React.FC<FormProps> = (props: FormProps) => {
  const { handleReturn, ...othersProps } = props

  return (
    <Dialog open title={'Select Tag'} onClickReturn={handleReturn} selfContentAndActions>
      <TagManagementList {...othersProps} />
    </Dialog>
  )
}

export default SelectTagDialog
