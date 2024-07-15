import React from 'react'
import Dialog from '@app/components/common/Dialog/Dialog'
import { useDispatch, useSelector } from 'react-redux'
import useConfirm from '@app/components/common/ConfirmDialog/useConfirm'
import ProjectManagementFormInput from './ProjectManagementFormInput'
import { ProjectManagementInput, ProjectManagement } from '../ProjectManagementList'
import { RootState } from '@app/store/store'
import { DialogState } from '@app/store/commonStore/CommonStore'
import {
  insertProjectManagement,
  updateProjectManagement,
} from '@app/api/projectManagement/project-management-api'

import projectManagementStore from '@app/store/projectManagementStore/ProjectManagementStore'

type FormProps = {
  mode: DialogState
  onReturn: () => void
}

const ProjectManagementFormDialog: React.FC<FormProps> = (props: FormProps) => {
  const { onReturn, mode } = props

  const { editItem, dirty: isDirty } = useSelector(
    (state: RootState) => state.projectManagementStore,
  )

  const confirm = useConfirm()
  const dispatch = useDispatch()

  const handleSubmit = async (data: ProjectManagement) => {
    try {
      if (mode === 'add') {
        await insertProjectManagement({
          ...data,
        })
      } else if (mode === 'edit' && editItem?.id) {
        const newData: ProjectManagement = {
          ...editItem,
          ...data,
        }
        await updateProjectManagement(editItem?.id, newData)
      }
      dispatch(projectManagementStore.actions.setLoadingStatus('NotLoad'))
      onReturn()
    } catch (error) {
      console.error(error)
    }
  }

  const handleClickReturn = async () => {
    if (
      isDirty &&
      !(await confirm({
        title: 'Confirm',
        message: 'Are you sure to close dialog? All your data will be lost!',
      }))
    ) {
      return
    }
    onReturn()
  }

  let defaultValue: ProjectManagementInput | undefined = undefined
  if (mode === 'edit' && editItem) {
    defaultValue = { ...editItem }
  }

  return (
    <Dialog
      open
      title={mode === 'add' ? 'Add Project' : 'Edit Project'}
      onClickReturn={handleClickReturn}
      fullWidth
      selfContentAndActions
    >
      <ProjectManagementFormInput
        id={mode === 'add' ? 'add-projectManagement' : 'edit-projectManagement'}
        defaultValues={defaultValue}
        onSubmit={handleSubmit}
      />
    </Dialog>
  )
}

export default ProjectManagementFormDialog
