import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useConfirm from '@app/components/common/ConfirmDialog/useConfirm'
import DemoEntityExampleFormInput from './DemoEntityExampleFormInput'
import { DemoEntityExampleInput, DemoEntityExample } from '../DemoEntityExampleList'
import { RootState } from '@app/store/store'
import { DialogState, Loading } from '@app/store/commonStore/CommonStore'
import {
  fetchDemoEntityExampleDetail,
  insertDemoEntityExample,
  updateDemoEntityExample,
} from '@app/api/DemoEntityExample/demo-entity-example-api'
import demoEntityExampleStore from '@app/store/demoEntityExampleStore/DemoEntityExampleStore'
import dayjs from 'dayjs'
import useHandleApiError from '@app/config/hanldeApiError/useHandleApiError'
import LoadingComponent from '@app/components/common/Loading/Loading'
import { KeyboardArrowLeftOutlined } from '@mui/icons-material'
import { useParams } from 'react-router-dom'

type FormProps = {
  mode: DialogState
  onReturn: () => void
}

const DemoEntityExampleFormContainer: React.FC<FormProps> = (props: FormProps) => {
  const { onReturn, mode } = props

  const { id } = useParams()
  const confirm = useConfirm()
  const handleApiError = useHandleApiError()
  const dispatch = useDispatch()

  const { editItem, dirty: isDirty } = useSelector(
    (state: RootState) => state.demoEntityExampleStore,
  )
  const { darkMode, colorTokens } = useSelector((state: RootState) => state.commonStore)

  const isLoadingMode = (mode === 'edit' || mode === 'view') && id
  const [detailLoadingStatus, setDetailLoadingStatus] = React.useState<Loading>(
    isLoadingMode ? 'NotLoad' : 'Loaded',
  )

  const [dataLoadingStatus, setDataLoadingStatus] = React.useState<Loading>('NotLoad')

  useEffect(() => {
    const handleFetchOptionsData = async () => {
      try {
        setDataLoadingStatus('Loading')
        // TODO: replace fixed value with fetching api for
        const mockedDataListOptions = [
          {
            id: 'f556df9a-c34f-4909-94b2-6fb9a0c63d7a',
            name: 'Label Category 001',
            description:
              'Label Category 001 Description\nLabel Category 001 Description\nLabel Category 001 Description\nLabel Category 001 Description',
            modifiedAt: '2024-09-28T20:37:36.283594Z',
            modifiedBy: 'admin',
            createdAt: '2024-09-28T20:37:36.283594Z',
            createdBy: 'admin',
          },
          {
            id: 'f754e88d-9342-465a-a6e7-a4dc08e4a3c3',
            name: 'Label Category 002 - UPDATE',
            description:
              'Label Category 002 Description\nLabel Category 002 Description\nLabel Category 002 Description\nLabel Category 002 Description\n',
            modifiedAt: '2024-09-28T20:41:13.347538Z',
            modifiedBy: 'admin',
            createdAt: '2024-09-28T20:37:58.622050Z',
            createdBy: 'admin',
          },
          {
            id: '52b6421d-84ed-4881-ad81-ae39bc2bf0f4',
            name: 'Add form 003 ',
            description:
              'Add form 003 Add form 003 Add form 003 \nAdd form 003 Add form 003 Add form 003 \nAdd form 003 Add form 003 Add form 003 ',
            modifiedAt: '2024-09-28T20:41:34.070754Z',
            modifiedBy: 'admin',
            createdAt: '2024-09-28T20:41:34.070754Z',
            createdBy: 'admin',
          },
        ]

        dispatch(demoEntityExampleStore.actions.setChildDemoOptions(mockedDataListOptions))
        dispatch(demoEntityExampleStore.actions.setChildDemoListOptions(mockedDataListOptions))
      } catch (error) {
        handleApiError(error)
      } finally {
        setDataLoadingStatus('Loaded')
      }
    }
    if (dataLoadingStatus === 'NotLoad') {
      handleFetchOptionsData()
    }
  }, [dataLoadingStatus])

  useEffect(() => {
    const handleFetchData = async () => {
      try {
        setDetailLoadingStatus('Loading')
        const fetchedData = await fetchDemoEntityExampleDetail(id as string)
        dispatch(demoEntityExampleStore.actions.setEditItem(fetchedData))
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

  const handleSubmit = async (data: DemoEntityExample) => {
    try {
      if (mode === 'add') {
        await insertDemoEntityExample({
          ...data,
        })
      } else if (mode === 'edit' && id) {
        const newData: DemoEntityExample = {
          ...editItem,
          ...data,
        }
        await updateDemoEntityExample(id, newData)
      }
      dispatch(demoEntityExampleStore.actions.setLoadingStatus('NotLoad'))
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

  let defaultValue: DemoEntityExampleInput | undefined = undefined

  if (isLoadingMode) {
    defaultValue = {
      ...editItem,
      testDateInput1: editItem?.testDateInput1 ? dayjs(editItem?.testDateInput1) : undefined,
      testDateInput2: editItem?.testDateInput2 ? dayjs(editItem?.testDateInput2) : undefined,
      testDateInput3: editItem?.testDateInput3 ? dayjs(editItem?.testDateInput3) : undefined,
      testHourInput: editItem?.testHourInput ? dayjs(editItem?.testHourInput) : undefined,
    }
  }

  return (
    <div data-testid={`${mode}-form`}>
      <div
        style={{
          cursor: 'pointer',
          width: 'fit-content',
          display: 'flex',
          alignItems: 'center',
          marginRight: '20px',
        }}
        onClick={handleClickReturn}
      >
        <KeyboardArrowLeftOutlined />
        <span>Demo Entity</span>
      </div>
      <div>
        {mode === 'add' && <h3>Add New Demo Entity</h3>}
        {mode === 'edit' && <h3>Edit Demo Entity</h3>}
        {mode === 'view' && <h3>View Demo Entity</h3>}
      </div>
      {(detailLoadingStatus !== 'Loaded' || dataLoadingStatus !== 'Loaded') && (
        <div style={{ height: '200px' }}>
          <LoadingComponent />
        </div>
      )}
      {detailLoadingStatus === 'Loaded' && dataLoadingStatus === 'Loaded' && (
        <DemoEntityExampleFormInput
          id={mode === 'add' ? 'add-demoEntityExample' : 'edit-demoEntityExample'}
          mode={mode}
          defaultValues={defaultValue}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  )
}

export default DemoEntityExampleFormContainer
