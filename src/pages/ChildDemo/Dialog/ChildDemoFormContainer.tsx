import React, { useEffect } from 'react'
import Dialog from '@app/components/common/Dialog/Dialog'
import { useDispatch, useSelector } from 'react-redux'
import useConfirm from '@app/components/common/ConfirmDialog/useConfirm'
import ChildDemoFormInput from './ChildDemoFormInput'
import { ChildDemoInput, ChildDemo } from '../ChildDemoList'
import { RootState } from '@app/store/store'
import { DialogState, Loading } from '@app/store/commonStore/CommonStore'
import {
  fetchChildDemoDetail,
  insertChildDemo,
  updateChildDemo,
} from '@app/api/ChildDemo/child-demo-api'
import childDemoStore from '@app/store/childDemoStore/ChildDemoStore'
import useHandleApiError from '@app/config/hanldeApiError/useHandleApiError'
import LoadingComponent from '@app/components/common/Loading/Loading'
import { useParams } from 'react-router-dom'

type FormProps = {
  mode: DialogState
  onReturn: () => void
}

const ChildDemoFormContainer: React.FC<FormProps> = (props: FormProps) => {
  const { onReturn, mode } = props

  const confirm = useConfirm()
  const handleApiError = useHandleApiError()
  const dispatch = useDispatch()

  const { editItem, dirty: isDirty } = useSelector((state: RootState) => state.childDemoStore)
  const id = editItem?.id

  const isLoadingMode = (mode === 'edit' || mode === 'view') && id
  const [detailLoadingStatus, setDetailLoadingStatus] = React.useState<Loading>(
    isLoadingMode ? 'NotLoad' : 'Loaded',
  )

  useEffect(() => {
    const handleFetchData = async () => {
      try {
        setDetailLoadingStatus('Loading')
        const fetchedData = await fetchChildDemoDetail(id as string)
        dispatch(childDemoStore.actions.setEditItem(fetchedData))
      } catch (error) {
        handleApiError(error)
      } finally {
        setDetailLoadingStatus('Loaded')
      }
    }
    if (detailLoadingStatus === 'NotLoad' && isLoadingMode) {
      handleFetchData()
    }
  }, [detailLoadingStatus])

  const handleSubmit = async (data: ChildDemo) => {
    try {
      if (mode === 'add') {
        await insertChildDemo({
          ...data,
        })
      } else if (mode === 'edit' && id) {
        const newData: ChildDemo = {
          ...editItem,
          ...data,
        }
        await updateChildDemo(id, newData)
      }
      dispatch(childDemoStore.actions.setLoadingStatus('NotLoad'))
      onReturn()
    } catch (error) {
      handleApiError(error)
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

  let defaultValue: ChildDemoInput | undefined = undefined

  if (isLoadingMode) {
    defaultValue = {
      ...editItem,
    }
  }

  return (
    <Dialog
      open
      title={`${mode} form`}
      data-testid={`${mode}-form`}
      onClickReturn={handleClickReturn}
      fullWidth
      selfContentAndActions
    >
      {detailLoadingStatus !== 'Loaded' && (
        <div style={{ height: '200px' }}>
          <LoadingComponent />
        </div>
      )}
      {detailLoadingStatus === 'Loaded' && (
        <ChildDemoFormInput
          id={mode === 'add' ? 'add-childDemo' : 'edit-childDemo'}
          mode={mode}
          defaultValues={defaultValue}
          onSubmit={handleSubmit}
          onReturn={onReturn}
        />
      )}
    </Dialog>
  )
}

export default ChildDemoFormContainer
