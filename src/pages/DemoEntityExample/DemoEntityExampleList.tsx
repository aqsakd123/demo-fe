import React, { useEffect } from 'react'
import { Button } from '@mui/material'
import { Close, Edit, RemoveRedEye } from '@mui/icons-material'
import { ColorTokens } from '@app/store/commonStore/CommonStore'
import { useDispatch, useSelector } from 'react-redux'
import demoEntityExampleStore from '@app/store/demoEntityExampleStore/DemoEntityExampleStore'
import { RootState } from '@app/store/store'
import { useUnmount } from 'react-use'
import { Popconfirm } from 'antd'
import styled from 'styled-components'
import {
  fetchDemoEntityExampleList,
  deleteDemoEntityExample,
  importDemoEntityExample,
  exportDemoEntityExample,
} from '@app/api/DemoEntityExample/demo-entity-example-api'
import { getLabel } from '@app/common/DisplayUtils'
import {
  testComboboxOptions,
  testMultiComboboxOptions,
  testRadioFieldOptions,
  testCheckboxGroupOptions,
} from './Dialog/DemoEntityExampleFormInput'

import { paths } from '@app/config/routes'
import { useNavigate } from 'react-router-dom'
import TextInputField from '@app/components/common/TextInputField/TextInputField'
import LoadingComponent from '@app/components/common/Loading/Loading'

import useHandleApiError from '@app/config/hanldeApiError/useHandleApiError'
import { Dayjs } from 'dayjs'
import { PagingRequest } from '@app/api/type'
import DownloadUtils from '@app/helpers/DownloadUtils'
import DateUtils from '@app/helpers/DateUtils'
import { buildPath } from '@app/helpers/ApiUtils'

const StyledList = styled.div<{ colorTokens?: ColorTokens }>`
  border-radius: 10px;
  padding: 20px;
  background-color: ${({ colorTokens }) => `${colorTokens?.primary[400]}`};

  .filter-fields {
    margin-bottom: 8px;
    margin-top: 8px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    .search-fields {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
  }

  .field-details {
    width: 100%;
    border-radius: 4px;
    display: flex;
    margin-bottom: 8px;
    padding: 8px;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ colorTokens }) => `${colorTokens?.blueAccent[800]}`};
  }

  .btn-fields {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
`

export type DemoEntityExample = {
  id: string
} & DemoEntityExampleBase

export type DemoEntityExampleInput = {
  id?: string
} & DemoEntityExampleBase

type DemoEntityExampleBase = {
  name: string
  description?: string
  childDemoId?: string
  childDemo?: any // TODO: replace any with type of ChildDemo
  childrenDemo?: any[] // TODO: replace any with type of ChildDemo
  childDemoList?: any[] // TODO: replace any with type of ChildDemo
  testTextarea?: string
  testCombobox?: string
  testMultiCombobox?: [string]
  testOptionalField?: string
  testRadioField?: string
  testNumberInput?: number
  testSwitch?: boolean
  testDateInput1?: Dayjs // Date
  testDateInput2?: Dayjs // Date
  testDateInput3?: Dayjs // Date
  testHourInput?: Dayjs // Date
  testColorInput?: string
  testCheckboxGroup?: [string]
  testCheckbox?: boolean
  testIcon?: string
  testEditor?: string
}

export type DemoEntityExampleSpecification = {
  name?: string
  description?: string
} & PagingRequest

const DemoEntityExampleList: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleApiError = useHandleApiError()

  const [name, setName] = React.useState<string>()
  const [description, setDescription] = React.useState<string>()

  const { loadingStatus, dataList: demoEntityExampleList } = useSelector(
    (state: RootState) => state.demoEntityExampleStore,
  )
  const { colorTokens } = useSelector((state: RootState) => state.commonStore)

  useEffect(() => {
    const handleFetchData = async () => {
      try {
        dispatch(demoEntityExampleStore.actions.setLoadingStatus('Loading'))
        const fetchedData = await fetchDemoEntityExampleList({
          name,
          description,
        })
        dispatch(demoEntityExampleStore.actions.setDemoEntityExampleList(fetchedData || []))
      } catch (error) {
        handleApiError(error)
      } finally {
        dispatch(demoEntityExampleStore.actions.setLoadingStatus('Loaded'))
      }
    }
    if (loadingStatus === 'NotLoad') {
      handleFetchData()
    }
  }, [loadingStatus])

  useUnmount(() => {
    dispatch(demoEntityExampleStore.actions.clearAll())
  })

  const handleClickEditDemoEntityExample = async (
    item: DemoEntityExample,
    mode: 'edit' | 'view',
  ) => {
    dispatch(demoEntityExampleStore.actions.setEditItem(item))
    navigate(
      buildPath(
        mode === 'edit' ? paths.demoEntityExampleEditPath : paths.demoEntityExampleDetailPath,
        {
          id: item?.id,
        },
      ),
    )
  }

  const handleClickAddNew = async () => {
    navigate(paths.demoEntityExampleAddPath)
  }

  const handleClickDeleteDemoEntityExample = async (item: DemoEntityExample) => {
    try {
      if (item.id) {
        await deleteDemoEntityExample(item.id)
        dispatch(demoEntityExampleStore.actions.setLoadingStatus('NotLoad'))
      }
    } catch (e) {
      handleApiError(e)
    }
  }

  const handleClickSearch = () => {
    dispatch(demoEntityExampleStore.actions.setLoadingStatus('NotLoad'))
  }

  const handleExport = async () => {
    try {
      const data = await exportDemoEntityExample({
        name,
        description,
      })
      DownloadUtils.createDownloadLink(new Blob([data]), 'demo_entity_example.xlsx')
    } catch (error) {
      handleApiError(error)
    }
  }

  const handleImport = async (event: any) => {
    const file = event.target.files[0]
    if (!file) return

    try {
      await importDemoEntityExample(file)
      alert('Import successful')
    } catch (error) {
      handleApiError(error)
    }
  }
  return (
    <StyledList colorTokens={colorTokens}>
      {loadingStatus !== 'Loaded' && <LoadingComponent />}
      <div className='filter-fields'>
        <div className='search-fields'>
          <TextInputField
            variant='outlined'
            type='text'
            id='search-name'
            name='name'
            label='Name'
            value={name}
            onChange={setName}
          />

          <TextInputField
            variant='outlined'
            type='text'
            id='search-description'
            name='description'
            label='Description'
            value={description}
            onChange={setDescription}
          />
        </div>
      </div>
      <div className='btn-fields'>
        <Button variant='contained' color='primary' onClick={handleExport}>
          Export DemoEntityExample
        </Button>

        <Button
          variant='contained'
          color='secondary'
          onClick={() => document.getElementById('import-demo-entity-example-file-input')?.click()}
          style={{ marginLeft: '10px' }}
        >
          Import DemoEntityExample
          <input
            id='import-demo-entity-example-file-input'
            type='file'
            hidden
            onChange={handleImport}
          />
        </Button>

        <Button data-testid='add-button' variant='outlined' onClick={handleClickAddNew}>
          Add new
        </Button>

        <Button data-testid='search-button' variant='contained' onClick={handleClickSearch}>
          Search
        </Button>
      </div>
      <div>
        <div className='list-container'>
          {demoEntityExampleList.map((item) => {
            return (
              <div className='field-details' key={item.id}>
                <div
                  style={{ display: 'flex', flexDirection: 'column' }}
                  data-testid={`demoEntityExample-${item.id}`}
                >
                  <span>Id: {item.id}</span>
                  <span>Name: {item.name}</span>
                  <span>Description: {item.description}</span>
                  <span>Test Textarea: {item.testTextarea}</span>
                  <span>Test Combobox: {getLabel(testComboboxOptions, item.testCombobox)}</span>
                  <span>
                    Test Multi Combobox:{' '}
                    {getLabel(testMultiComboboxOptions, item.testMultiCombobox)}
                  </span>
                  <span>Test Optional Field: {item.testOptionalField}</span>
                  <span>
                    Test Radio Field: {getLabel(testRadioFieldOptions, item.testRadioField)}
                  </span>
                  <span>Test Number Input: {item.testNumberInput}</span>
                  <span>Test Switch: {item.testSwitch}</span>
                  <span>Test Date Input1: {DateUtils.getDateString(item.testDateInput1)}</span>
                  <span>Test Date Input2: {DateUtils.getDateString(item.testDateInput2)}</span>
                  <span>Test Date Input3: {DateUtils.getDateString(item.testDateInput3)}</span>
                  <span>Test Hour Input: {DateUtils.getDateString(item.testHourInput)}</span>
                  <span>Test Color Input: {item.testColorInput}</span>
                  <span>
                    Test Checkbox Group:{' '}
                    {getLabel(testCheckboxGroupOptions, item.testCheckboxGroup)}
                  </span>
                  <span>Test Checkbox: {item.testCheckbox}</span>
                  <span>Test Icon: {item.testIcon}</span>
                  <span>Test Editor: {item.testEditor}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Button
                    data-testid={`view-detail-${item.id}-button`}
                    onClick={() => handleClickEditDemoEntityExample(item, 'view')}
                  >
                    <RemoveRedEye fontSize='small' />
                  </Button>

                  <Button
                    data-testid={`edit-detail-${item.id}-button`}
                    onClick={() => handleClickEditDemoEntityExample(item, 'edit')}
                  >
                    <Edit fontSize='small' />
                  </Button>

                  <Popconfirm
                    title='Are you sure you want to delete this demoEntityExample?'
                    onConfirm={() => handleClickDeleteDemoEntityExample(item)}
                    okText='Yes'
                    cancelText='No'
                  >
                    <Button
                      data-testid={`delete-detail-${item.id}-button`}
                      variant='text'
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Close />
                    </Button>
                  </Popconfirm>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </StyledList>
  )
}

export default DemoEntityExampleList
