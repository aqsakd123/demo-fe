import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { Close, Edit, RemoveRedEye } from '@mui/icons-material'
import ChildDemoFormContainer from './Dialog/ChildDemoFormContainer'
import { ColorTokens } from '@app/store/commonStore/CommonStore'
import { DialogState } from '@app/common/type'
import { useDispatch, useSelector } from 'react-redux'
import childDemoStore from '@app/store/childDemoStore/ChildDemoStore'
import { RootState } from '@app/store/store'
import { useUnmount } from 'react-use'
import { Popconfirm } from 'antd'
import styled from 'styled-components'
import { fetchChildDemoList, deleteChildDemo } from '@app/api/ChildDemo/child-demo-api'

import { useNavigate } from 'react-router-dom'
import LoadingComponent from '@app/components/common/Loading/Loading'

import useHandleApiError from '@app/config/hanldeApiError/useHandleApiError'
import useConfirm from '@app/components/common/ConfirmDialog/useConfirm'

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

export type ChildDemo = {
  id: string
} & ChildDemoBase

export type ChildDemoInput = {
  id?: string
} & ChildDemoBase

type ChildDemoBase = {
  name: string
  description?: string
}

const ChildDemoList: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const confirm = useConfirm()
  const handleApiError = useHandleApiError()

  const [childDemoFormContainerMode, setChildDemoFormContainerMode] = useState<DialogState>('none')
  const {
    loadingStatus,
    dataList: childDemoList,
    dirty: isDirty,
  } = useSelector((state: RootState) => state.childDemoStore)
  const { darkMode, colorTokens } = useSelector((state: RootState) => state.commonStore)

  useEffect(() => {
    const handleFetchData = async () => {
      try {
        dispatch(childDemoStore.actions.setLoadingStatus('Loading'))
        const fetchedData = await fetchChildDemoList()
        dispatch(childDemoStore.actions.setChildDemoList(fetchedData || []))
      } catch (error) {
        handleApiError(error)
      } finally {
        dispatch(childDemoStore.actions.setLoadingStatus('Loaded'))
      }
    }
    if (loadingStatus === 'NotLoad') {
      handleFetchData()
    }
  }, [loadingStatus])

  useUnmount(() => {
    dispatch(childDemoStore.actions.clearAll())
  })

  const handleClickEditChildDemo = async (item: ChildDemo, mode: 'edit' | 'view') => {
    dispatch(childDemoStore.actions.setEditItem(item))
    setChildDemoFormContainerMode(mode)
  }

  const handleClickAddNew = async () => {
    setChildDemoFormContainerMode('add')
  }

  const handleReturnFormContainer = () => {
    setChildDemoFormContainerMode('none')
    dispatch(childDemoStore.actions.setEditItem(undefined))
  }

  const handleClickDeleteChildDemo = async (item: ChildDemo) => {
    try {
      if (item.id) {
        await deleteChildDemo(item.id)
        dispatch(childDemoStore.actions.setLoadingStatus('NotLoad'))
      }
    } catch (e) {
      handleApiError(e)
    }
  }
  return (
    <StyledList colorTokens={colorTokens}>
      {loadingStatus !== 'Loaded' && <LoadingComponent />}
      {childDemoFormContainerMode !== 'none' && (
        <ChildDemoFormContainer
          mode={childDemoFormContainerMode}
          onReturn={handleReturnFormContainer}
        />
      )}
      <div className='filter-fields'></div>
      <div className='btn-fields'>
        <Button data-testid='add-button' variant='outlined' onClick={handleClickAddNew}>
          Add new
        </Button>
      </div>
      <div>
        <div className='list-container'>
          {childDemoList.map((item) => {
            return (
              <div className='field-details' key={item.id}>
                <div
                  style={{ display: 'flex', flexDirection: 'column' }}
                  data-testid={`childDemo-${item.id}`}
                >
                  <span>Id: {item.id}</span>
                  <span>Name: {item.name}</span>
                  <span>Description: {item.description}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Button
                    data-testid={`view-detail-${item.id}-button`}
                    onClick={() => handleClickEditChildDemo(item, 'view')}
                  >
                    <RemoveRedEye fontSize='small' />
                  </Button>

                  <Button
                    data-testid={`edit-detail-${item.id}-button`}
                    onClick={() => handleClickEditChildDemo(item, 'edit')}
                  >
                    <Edit fontSize='small' />
                  </Button>

                  <Popconfirm
                    title='Are you sure you want to delete this childDemo?'
                    onConfirm={() => handleClickDeleteChildDemo(item)}
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

export default ChildDemoList
