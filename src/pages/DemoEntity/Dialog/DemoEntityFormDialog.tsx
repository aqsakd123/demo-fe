import React, { useEffect } from 'react'
import Dialog from '@app/components/common/Dialog/Dialog'
import { useDispatch, useSelector } from 'react-redux'
import useConfirm from '@app/components/common/ConfirmDialog/useConfirm'
import DemoEntityFormInput from './DemoEntityFormInput'
import { DemoEntityInput, DemoEntity } from '../DemoEntityList'
import { RootState } from '@app/store/store'
import { DialogState, Loading } from '@app/store/commonStore/CommonStore'
import {
  fetchDemoEntityList,
  insertDemoEntity,
  deleteDemoEntity,
  updateDemoEntity,
  fetchDemoEntityDetail,
} from '@app/api/demoEntity/demo-entity-api'

import demoEntityStore from '@app/store/demoEntityStore/DemoEntityStore'
import dayjs from 'dayjs'
import useHandleApiError from '@app/config/hanldeApiError/useHandleApiError'
import LoadingComponent from '@app/components/common/Loading/Loading'

type FormProps = {
  mode: DialogState
  onReturn: () => void
}

const DemoEntityFormDialog: React.FC<FormProps> = (props: FormProps) => {
  const { onReturn, mode } = props

  const { editItem, dirty: isDirty } = useSelector((state: RootState) => state.demoEntityStore)
  const isLoadingMode = (mode === 'edit' || mode === 'view') && editItem?.id
  const [detailLoadingStatus, setDetailLoadingStatus] = React.useState<Loading>(
    isLoadingMode ? 'NotLoad' : 'Loaded',
  )

  const confirm = useConfirm()
  const handleApiError = useHandleApiError()
  const dispatch = useDispatch()

  useEffect(() => {
    const handleFetchData = async () => {
      try {
        setDetailLoadingStatus('Loading')
        const fetchedData = await fetchDemoEntityDetail(editItem?.id as string)
        dispatch(demoEntityStore.actions.setEditItem(fetchedData))
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

  const handleSubmit = async (data: DemoEntity) => {
    try {
      if (mode === 'add') {
        await insertDemoEntity({
          ...data,
        })
      } else if (mode === 'edit' && editItem?.id) {
        const newData: DemoEntity = {
          ...editItem,
          ...data,
        }
        await updateDemoEntity(editItem?.id, newData)
      }
      dispatch(demoEntityStore.actions.setLoadingStatus('NotLoad'))
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

  let defaultValue: DemoEntityInput | undefined = undefined
  if (isLoadingMode) {
    defaultValue = {
      ...editItem,
      testDateInput1: dayjs(editItem?.testDateInput1),
      testDateInput2: dayjs(editItem?.testDateInput2),
      testDateInput3: dayjs(editItem?.testDateInput3),
      testHourInput: dayjs(editItem?.testHourInput),
    }
  }

  return (
    <Dialog
      open
      title={`${mode} form`}
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
        <DemoEntityFormInput
          id={mode === 'add' ? 'add-demoEntity' : 'edit-demoEntity'}
          mode={mode}
          defaultValues={defaultValue}
          onSubmit={handleSubmit}
        />
      )}
    </Dialog>
  )
}

export default DemoEntityFormDialog
