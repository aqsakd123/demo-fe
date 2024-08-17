/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/no-unnecessary-act */
import axios from 'axios'
import { BASE_URL } from '@app/api/constant'
import {
  DELETE_DEMO_ENTITY,
  GET_DETAIL_DEMO_ENTITY,
  GET_LIST_DEMO_ENTITY,
} from '@app/api/demoEntity/demo-entity-type-graphql'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@app/store/store'
import AppProvider from '@app/config/AppProvider'
import DemoEntityList from '../DemoEntityList'
import userEvent from '@testing-library/user-event'

// // Mock axios instance
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockData = {
  data: {
    data: {
      getListDemoEntity: [
        {
          id: 'id-of-the-1-item',
          name: 'Name 1 item',
          description: 'Description 1 item',
        },
        {
          id: 'id-of-the-2-item',
          name: 'Name 2 item',
          description: 'Description 2 item',
        },
      ],
      getDetailDemoEntity: {
        id: 'id-of-the-1-item',
        name: 'Name 1 item',
        description: 'Description 1 item',
      },
    },
  },
}

const clickSubmitBtn = async () => {
  const submitBtn = screen.getByTestId('form-submit-button')
  expect(submitBtn).toBeInTheDocument()
  await userEvent.click(submitBtn)
}

const renderComponent = () => {
  return render(
    <BrowserRouter>
      <Provider store={store}>
        <AppProvider>
          <DemoEntityList />
        </AppProvider>
      </Provider>
    </BrowserRouter>,
  )
}

describe('fetchDemoEntityList', () => {
  it('should render two items in the list after fetching data', async () => {
    mockedAxios.post.mockResolvedValue(mockData)

    await act(() => renderComponent())

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith(BASE_URL, {
        query: GET_LIST_DEMO_ENTITY,
        variables: {
          specification: {},
        },
      })
      expect(screen.getByTestId(`demoEntity-id-of-the-1-item`)).toBeInTheDocument()
      expect(screen.getByTestId(`demoEntity-id-of-the-2-item`)).toBeInTheDocument()
    })
  })

  it('should fetch again after click search button', async () => {
    mockedAxios.post.mockResolvedValue(mockData)

    await act(() => renderComponent())

    const nameInput = screen.getByTestId('search-name')
    expect(nameInput).toBeInTheDocument()
    await userEvent.type(nameInput, 'New Name')
    expect(nameInput).toHaveValue('New Name')

    const searchButton = screen.getByTestId('search-button')
    expect(searchButton).toBeInTheDocument()

    await userEvent.click(searchButton)

    // when click search, run api at least once
    expect(mockedAxios.post).toHaveBeenCalledWith(BASE_URL, {
      query: GET_LIST_DEMO_ENTITY,
      variables: {
        specification: {
          name: 'New Name',
        },
      },
    })
  })

  it('click add button', async () => {
    await act(() => renderComponent())
    await waitFor(async () => {
      const addButton = screen.getByTestId('add-button')
      await userEvent.click(addButton)
      expect(screen.getByText('add form')).toBeInTheDocument()
    })
  })

  it('click detail button', async () => {
    mockedAxios.post.mockResolvedValue(mockData)
    const resultList = mockData.data.data.getListDemoEntity

    await act(() => renderComponent())

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith(BASE_URL, {
        query: GET_LIST_DEMO_ENTITY,
        variables: {
          specification: {},
        },
      })

      expect(screen.getByTestId(`view-detail-${resultList[0].id}-button`)).toBeInTheDocument()
      expect(screen.getByTestId(`view-detail-${resultList[1].id}-button`)).toBeInTheDocument()
    })

    await userEvent.click(screen.getByTestId(`view-detail-${resultList[0].id}-button`))

    await waitFor(() => {
      expect(screen.getByText('view form')).toBeInTheDocument()
      expect(mockedAxios.post).toHaveBeenCalledWith(BASE_URL, {
        query: GET_DETAIL_DEMO_ENTITY,
        variables: {
          id: resultList[0].id,
        },
      })
    })

    await waitFor(async () => {
      const closeButton = screen.getByTestId('CloseButton')
      expect(closeButton).toBeInTheDocument()
      await userEvent.click(closeButton)
      expect(screen.queryByText('view form')).not.toBeInTheDocument()
    })
  })

  it('click edit button and close', async () => {
    mockedAxios.post.mockResolvedValue(mockData)
    const resultList = mockData.data.data.getListDemoEntity

    await act(() => renderComponent())

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith(BASE_URL, {
        query: GET_LIST_DEMO_ENTITY,
        variables: {
          specification: {},
        },
      })

      expect(screen.getByTestId(`edit-detail-${resultList[0].id}-button`)).toBeInTheDocument()
      expect(screen.getByTestId(`edit-detail-${resultList[1].id}-button`)).toBeInTheDocument()
    })

    await userEvent.click(screen.getByTestId(`edit-detail-${resultList[0].id}-button`))

    await waitFor(() => {
      expect(screen.getByText('edit form')).toBeInTheDocument()
      expect(mockedAxios.post).toHaveBeenCalledWith(BASE_URL, {
        query: GET_DETAIL_DEMO_ENTITY,
        variables: {
          id: resultList[0].id,
        },
      })
    })

    const nameInput = await waitFor(() => screen.findByTestId('input-name'))
    expect(nameInput).toBeInTheDocument()
    expect(nameInput).toHaveValue(resultList[0].name)
    await userEvent.type(nameInput, 'New Name')
    expect(nameInput).toHaveValue(resultList[0].name + 'New Name')

    const closeButton = await waitFor(() => screen.findByTestId('CloseButton'))

    await waitFor(async () => {
      await userEvent.click(closeButton)
      expect(
        screen.getByText('Are you sure to close dialog? All your data will be lost!'),
      ).toBeInTheDocument()
      await userEvent.click(screen.getByTestId('confirm-dialog-ok-button'))
      expect(screen.queryByText('view form')).not.toBeInTheDocument()
    })
  })

  it('click edit button and save', async () => {
    mockedAxios.post.mockResolvedValue(mockData)
    const resultList = mockData.data.data.getListDemoEntity

    await act(() => renderComponent())

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith(BASE_URL, {
        query: GET_LIST_DEMO_ENTITY,
        variables: {
          specification: {},
        },
      })

      expect(screen.getByTestId(`edit-detail-${resultList[0].id}-button`)).toBeInTheDocument()
      expect(screen.getByTestId(`edit-detail-${resultList[1].id}-button`)).toBeInTheDocument()
    })

    await userEvent.click(screen.getByTestId(`edit-detail-${resultList[0].id}-button`))

    await waitFor(() => {
      expect(screen.getByText('edit form')).toBeInTheDocument()
      expect(mockedAxios.post).toHaveBeenCalledWith(BASE_URL, {
        query: GET_DETAIL_DEMO_ENTITY,
        variables: {
          id: resultList[0].id,
        },
      })
    })

    const nameInput = await waitFor(() => screen.findByTestId('input-name'))
    expect(nameInput).toBeInTheDocument()
    expect(nameInput).toHaveValue(resultList[0].name)
    await userEvent.type(nameInput, 'New Name')
    expect(nameInput).toHaveValue(resultList[0].name + 'New Name')

    await clickSubmitBtn()
  })

  it('click delete button', async () => {
    mockedAxios.post.mockResolvedValue(mockData)
    const resultList = mockData.data.data.getListDemoEntity

    await act(() => renderComponent())

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith(BASE_URL, {
        query: GET_LIST_DEMO_ENTITY,
        variables: {
          specification: {},
        },
      })

      expect(screen.getByTestId(`delete-detail-${resultList[0].id}-button`)).toBeInTheDocument()
      expect(screen.getByTestId(`delete-detail-${resultList[1].id}-button`)).toBeInTheDocument()
    })

    await userEvent.click(screen.getByTestId(`delete-detail-${resultList[0].id}-button`))
    expect(
      await screen.findByText(/Are you sure you want to delete this demoEntity/i),
    ).toBeInTheDocument()
    await userEvent.click(screen.getByText('Yes'))

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith(BASE_URL, {
        query: DELETE_DEMO_ENTITY,
        variables: {
          id: resultList[0].id,
        },
      })
    })
  })
})
