import React, { useEffect, useState } from 'react'
import { Box, Button, ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material'
import ColorUtils from '@app/helpers/ColorUtils'
import { Close, Edit, RemoveRedEye } from '@mui/icons-material'
import DemoEntityFormDialog from './Dialog/DemoEntityFormDialog'
import { ColorTokens, DialogState, Loading } from '@app/store/commonStore/CommonStore'
import { useDispatch, useSelector } from 'react-redux'
import demoEntityStore from '@app/store/demoEntityStore/DemoEntityStore'
import { RootState } from '@app/store/store'
import { useUnmount } from 'react-use'
import { Popconfirm } from 'antd'
import styled from 'styled-components'
import TextInputField from '@app/components/common/TextInputField/TextInputField'

import SelectField from '@app/components/common/SelectComponent/SelectField'
import CalendarPickerField from '@app/components/common/CalendarPicker/CalendarPickerField'
import LoadingComponent from '@app/components/common/Loading/Loading'
import {
  fetchDemoEntityList,
  insertDemoEntity,
  deleteDemoEntity,
  updateDemoEntity,
} from '@app/api/demoEntity/demo-entity-api'

import {
  testComboboxOptions,
  testMultiComboboxOptions,
  testOptionalFieldOptions,
  testRadioFieldOptions,
  testCheckboxGroupOptions,
} from './Dialog/DemoEntityFormInput'

import useHandleApiError from '@app/config/hanldeApiError/useHandleApiError'

const StyledList = styled.div<{
  colorTokens?: ColorTokens
}>`
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
`

export type DemoEntity = {
  id: string
} & DemoEntityBase

export type DemoEntityInput = {
  id?: string
} & DemoEntityBase

type DemoEntityBase = {
  name: string
  description?: string
  categoryId?: number
  demoMCategory?: any /* TODO: replace any by relation */
  demoMCategories?: any /* TODO: replace any by relation */
  demoMCategoryList?: any /* TODO: replace any by relation */
  testTextarea?: string
  testCombobox?: string
  testMultiCombobox?: string
  testOptionalField?: string
  testRadioField?: string
  testNumberInput?: number
  testSwitch?: string
  testDateInput1?: Date
  testDateInput2?: Date
  testDateInput3?: Date
  testHourInput?: Date
  testColorInput?: string
  testMultiDateInput?: Date
  testCheckboxGroup?: string
  testCheckbox?: boolean
  testIcon?: string
  testEditor?: string
}

export type DemoEntitySpecification = {
  name?: string
  testCombobox?: string
  testMultiCombobox?: string
  testDateInput1?: Date
  startTestDateInput2?: Date
  endTestDateInput2?: Date
  testDateInput3?: Date
}

const DemoEntityList: React.FC = () => {
  const [demoEntityFormDialogMode, setDemoEntityFormDialogMode] = useState<DialogState>('none')
  const [specification, setSpecification] = useState<DemoEntitySpecification>({})

  const [name, setName] = React.useState<string | undefined>(undefined)
  const [testCombobox, setTestCombobox] = React.useState<string | undefined>(undefined)
  const [testMultiCombobox, setTestMultiCombobox] = React.useState<string | undefined>(undefined)
  const [testDateInput1, setTestDateInput1] = React.useState<Date | undefined>(undefined)
  const [startTestDateInput2, setStartTestDateInput2] = React.useState<Date | undefined>(undefined)
  const [endTestDateInput2, setEndTestDateInput2] = React.useState<Date | undefined>(undefined)
  const [testDateInput3, setTestDateInput3] = React.useState<Date | undefined>(undefined)

  const { loadingStatus, dataList } = useSelector((state: RootState) => state.demoEntityStore)
  const { darkMode, colorTokens } = useSelector((state: RootState) => state.commonStore)

  const demoEntityList = dataList || []

  const dispatch = useDispatch()
  const handleApiError = useHandleApiError()

  useEffect(() => {
    const handleFetchData = async () => {
      try {
        dispatch(demoEntityStore.actions.setLoadingStatus('Loading'))
        const fetchedData = await fetchDemoEntityList(specification)
        dispatch(demoEntityStore.actions.setDemoEntityList(fetchedData || []))
      } catch (error) {
        handleApiError(error)
      } finally {
        dispatch(demoEntityStore.actions.setLoadingStatus('Loaded'))
      }
    }
    if (loadingStatus === 'NotLoad') {
      handleFetchData()
    }
  }, [loadingStatus])

  useUnmount(() => {
    dispatch(demoEntityStore.actions.clearAll())
  })

  const handleClickEditDemoEntity = (item: DemoEntity, mode: 'edit' | 'view') => {
    dispatch(demoEntityStore.actions.setEditItem(item))
    setDemoEntityFormDialogMode(mode)
  }

  const handleClickAddNew = () => {
    setDemoEntityFormDialogMode('add')
  }

  const handleReturnFormDialog = () => {
    setDemoEntityFormDialogMode('none')
    dispatch(demoEntityStore.actions.setEditItem(undefined))
  }

  const handleClickDeleteDemoEntity = async (item: DemoEntity) => {
    try {
      if (item.id) {
        await deleteDemoEntity(item.id)
        dispatch(demoEntityStore.actions.setLoadingStatus('NotLoad'))
      }
    } catch (e) {
      handleApiError(e)
    }
  }

  const handleSetSpecification = () => {
    setSpecification({
      name,
      testCombobox,
      testMultiCombobox,
      testDateInput1,
      startTestDateInput2,
      endTestDateInput2,
      testDateInput3,
    })
    dispatch(demoEntityStore.actions.setLoadingStatus('NotLoad'))
  }

  return (
    <StyledList colorTokens={colorTokens}>
      {loadingStatus !== 'Loaded' && <LoadingComponent />}
      {demoEntityFormDialogMode !== 'none' && (
        <DemoEntityFormDialog mode={demoEntityFormDialogMode} onReturn={handleReturnFormDialog} />
      )}
      <div className='filter-fields'>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button variant='outlined' onClick={handleClickAddNew}>
            Add new
          </Button>
          <Button variant='contained' onClick={handleSetSpecification}>
            Search
          </Button>
        </div>
        <div className='search-fields'>
          <TextInputField
            variant='outlined'
            type='text'
            label='Name'
            id='name-search'
            name='name'
            value={name}
            onChange={(value) => setName(value)}
          />
          <CalendarPickerField
            label='TestDateInput1'
            id='testDateInput1-search'
            name='testDateInput1'
            value={testDateInput1}
            onChange={(value) => setTestDateInput1(value)}
            views={['month', 'year']}
          />
          <CalendarPickerField
            label='Start TestDateInput2'
            maxDate={endTestDateInput2}
            value={startTestDateInput2}
            onChange={(value) => setStartTestDateInput2(value)}
            id='start-date-testDateInput2-search'
            name='start-datetestDateInput2'
          />
          <CalendarPickerField
            label='End TestDateInput2'
            minDate={startTestDateInput2}
            value={endTestDateInput2}
            onChange={(value) => setEndTestDateInput2(value)}
            id='end-date-testDateInput2-search'
            name='end-datetestDateInput2'
          />
          <CalendarPickerField
            label='TestDateInput3'
            id='testDateInput3-search'
            name='testDateInput3'
            value={testDateInput3}
            onChange={(value) => setTestDateInput3(value)}
          />
        </div>
      </div>

      <div>
        {demoEntityList.map((demoEntity) => {
          return (
            <div className='field-details' key={demoEntity.id}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span>Id: {demoEntity.id}</span>
                <span>Name: {demoEntity.name}</span>
                <span>Description: {demoEntity.description}</span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button onClick={() => handleClickEditDemoEntity(demoEntity, 'view')}>
                  <RemoveRedEye fontSize='small' />
                </Button>

                <Button onClick={() => handleClickEditDemoEntity(demoEntity, 'edit')}>
                  <Edit fontSize='small' />
                </Button>
                <Popconfirm
                  title='Are you sure you want to delete this demoEntity?'
                  onConfirm={() => handleClickDeleteDemoEntity(demoEntity)}
                  okText='Yes'
                  cancelText='No'
                >
                  <Button variant='text' onClick={(e) => e.stopPropagation()}>
                    <Close />
                  </Button>
                </Popconfirm>
              </div>
            </div>
          )
        })}
      </div>
    </StyledList>
  )
}

export default DemoEntityList
