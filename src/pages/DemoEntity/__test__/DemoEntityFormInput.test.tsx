/* eslint-disable testing-library/no-unnecessary-act */
import { testOptionalFieldOptions, testRadioFieldOptions } from '../Dialog/DemoEntityFormInput'
import { act, fireEvent, render, waitFor, within } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import AppProvider from '@app/config/AppProvider'
import { Provider } from 'react-redux'
import { store } from '@app/store/store'
import { screen } from '@testing-library/dom'
import { mockApi } from '@app/helpers/test-helpers/api-mock'
import DemoEntityFormDialog from '../Dialog/DemoEntityFormDialog'
import userEvent from '@testing-library/user-event'
import { generateRandomString } from '@app/helpers/test-helpers/test-utils'
import { useForm } from 'react-hook-form'

const renderComponent = () => {
  return render(
    <BrowserRouter>
      <Provider store={store}>
        <AppProvider>
          <DemoEntityFormDialog mode='add' onReturn={() => jest.fn()} />
        </AppProvider>
      </Provider>
    </BrowserRouter>,
  )
}

const typeField = async (node: HTMLElement, value: string) => {
  await act(async () => {
    userEvent.clear(node)
    await userEvent.type(node, value)
  })
}

const clickSubmitBtn = async () => {
  await act(async () => {
    const submitBtn = screen.getByTestId('form-submit-button')
    expect(submitBtn).toBeInTheDocument()
    userEvent.click(submitBtn)
  })
}

const changeStringValue = async (testId: string) => {
  await act(async () => {
    const input = screen.getByTestId(testId)
    expect(input).toBeInTheDocument()
    userEvent.type(input, 'New Value')
  })
}

describe('DemoEntityFormInput', () => {
  test('should render all input fields', async () => {
    await act(() => renderComponent())

    expect(screen.getByTestId('inline-form-input-name')).toBeInTheDocument()
    expect(screen.getByTestId('inline-form-input-description')).toBeInTheDocument()
    expect(screen.getByTestId('inline-form-input-testTextarea')).toBeInTheDocument()
    expect(screen.getByTestId('inline-form-input-testCombobox')).toBeInTheDocument()
    expect(screen.getByTestId('inline-form-input-testMultiCombobox')).toBeInTheDocument()
    expect(screen.getByTestId('inline-form-input-testOptionalField')).toBeInTheDocument()
    expect(screen.getByTestId('inline-form-input-testRadioField')).toBeInTheDocument()
    expect(screen.getByTestId('inline-form-input-testNumberInput')).toBeInTheDocument()
    expect(screen.getByTestId('inline-form-input-testSwitch')).toBeInTheDocument()
    expect(screen.getByTestId('inline-form-input-testDateInput1')).toBeInTheDocument()
    expect(screen.getByTestId('inline-form-input-testDateInput2')).toBeInTheDocument()
    expect(screen.getByTestId('inline-form-input-testDateInput3')).toBeInTheDocument()
    expect(screen.getByTestId('inline-form-input-testHourInput')).toBeInTheDocument()
    expect(screen.getByTestId('inline-form-input-testColorInput')).toBeInTheDocument()
    expect(screen.getByTestId('input-testCheckboxGroup')).toBeInTheDocument()
    expect(screen.getByTestId('input-testCheckbox')).toBeInTheDocument()
  })

  test('name change value', async () => {
    await act(() => renderComponent())

    const nameInput = screen.getByTestId('input-name')
    expect(nameInput).toBeInTheDocument()
    await userEvent.type(nameInput, 'New Name')
    expect(nameInput).toHaveValue('New Name')
  })

  test('description change value', async () => {
    await act(() => renderComponent())

    const descriptionInput = screen.getByTestId('input-description')
    expect(descriptionInput).toBeInTheDocument()
    await userEvent.type(descriptionInput, 'New Description')
    expect(descriptionInput).toHaveValue('New Description')
  })

  test('testTextarea change value', async () => {
    await act(() => renderComponent())

    const testTextareaInput = screen.getByTestId('input-testTextarea')
    expect(testTextareaInput).toBeInTheDocument()
    await userEvent.type(testTextareaInput, 'New TestTextareaInput')
    expect(testTextareaInput).toHaveValue('New TestTextareaInput')
  })

  test('testCombobox change value', async () => {
    await act(() => renderComponent())

    expect(screen.getByTestId('input-testCombobox')).toBeInTheDocument()
  })

  test('testMultiCombobox change value', async () => {
    await act(() => renderComponent())

    expect(screen.getByTestId('input-testMultiCombobox')).toBeInTheDocument()
  })

  test('testOptionalField change value', async () => {
    await act(() => renderComponent())

    const testOptionalFieldInput = screen.getByTestId('input-testOptionalField')
    expect(testOptionalFieldInput).toBeInTheDocument()

    const testOptionalFieldOption1 = screen.getByTestId(
      `input-testOptionalField-${testOptionalFieldOptions[0].value}`,
    )
    const testOptionalFieldOption2 = screen.getByTestId(
      `input-testOptionalField-${testOptionalFieldOptions[1].value}`,
    )

    expect(testOptionalFieldOption1).not.toBeNull()
    expect(testOptionalFieldOption2).not.toBeNull()
    expect(screen.getByText(testOptionalFieldOptions[2].label)).not.toBeNull()
    await userEvent.click(testOptionalFieldOption1)
    expect(testOptionalFieldOption1).toHaveClass('Mui-selected')
    await userEvent.click(testOptionalFieldOption2)
    expect(testOptionalFieldOption1).not.toHaveClass('Mui-selected')
    expect(testOptionalFieldOption2).toHaveClass('Mui-selected')
  })

  test('testRadioField change value', async () => {
    await act(() => renderComponent())

    const testRadioFieldInput = screen.getByTestId('input-testRadioField')
    expect(testRadioFieldInput).toBeInTheDocument()
    const testRadioFieldOption1 = screen.getByText(testRadioFieldOptions[0].label)
    const testRadioFieldOption2 = screen.getByText(testRadioFieldOptions[1].label)
    const testRadioFieldOption3 = screen.getByText(testRadioFieldOptions[2].label)

    expect(testRadioFieldOption1).toBeInTheDocument()
    expect(testRadioFieldOption2).toBeInTheDocument()
    expect(testRadioFieldOption3).toBeInTheDocument()
    await userEvent.click(testRadioFieldOption1)
  })

  test('testNumberInput change value', async () => {
    await act(() => renderComponent())

    const testNumberInput = screen.getByTestId('input-testNumberInput')
    expect(testNumberInput).toBeInTheDocument()
    await typeField(testNumberInput, '123')
    expect(testNumberInput).toHaveValue(123)
    await typeField(testNumberInput, 'abc')
    expect(testNumberInput).toHaveValue(null)
    await typeField(testNumberInput, '123abc')
    expect(testNumberInput).toHaveValue(123)
  })

  test('testSwitchInput change value', async () => {
    await act(() => renderComponent())

    const testSwitchInput = screen.getByTestId('input-testSwitch')
    expect(testSwitchInput).toBeInTheDocument()
    expect(testSwitchInput).not.toBeChecked()
    await userEvent.click(testSwitchInput)
    expect(testSwitchInput).toBeChecked()
  })

  test('testDateInput1 change value', async () => {
    await act(() => renderComponent())

    const testDateInput1Input = screen.getByTestId('input-testDateInput1')
    expect(testDateInput1Input).toBeInTheDocument()
  })

  test('testHourInput change value', async () => {
    await act(() => renderComponent())

    expect(screen.getByTestId('inline-form-input-testHourInput')).toBeInTheDocument()
  })

  test('testColorInput change value', async () => {
    await act(() => renderComponent())

    expect(screen.getByTestId('input-testColorInput')).toBeInTheDocument()
  })

  test('testCheckboxGroupInput change value', async () => {
    await act(() => renderComponent())

    const testCheckboxGroupInput = screen.getByTestId('input-testCheckboxGroup')
    expect(testCheckboxGroupInput).toBeInTheDocument()
    expect(screen.getByText('Select 1')).toBeInTheDocument()
    expect(screen.getByText('Select 2')).toBeInTheDocument()
    expect(screen.getByText('Select 3')).toBeInTheDocument()
    const testCheckboxGroupInputOption1 = screen.getByLabelText('Select 1')
    await userEvent.click(testCheckboxGroupInputOption1)
    expect(testCheckboxGroupInputOption1).toBeChecked()
    await userEvent.click(testCheckboxGroupInputOption1)
    expect(testCheckboxGroupInputOption1).not.toBeChecked()
  })

  test('testCheckbox change value', async () => {
    await act(() => renderComponent())

    const testCheckbox = screen.getByTestId('input-testCheckbox')
    expect(testCheckbox).toBeInTheDocument()
    expect(screen.getByText('TestCheckboxGroup')).toBeInTheDocument()
    await userEvent.click(testCheckbox)
    expect(testCheckbox).toBeChecked()
    await userEvent.click(testCheckbox)
    expect(testCheckbox).not.toBeChecked()
  })
})

describe('DemoEntityFormInput Validation', () => {
  test('When click submit, show required errors', async () => {
    await act(() => renderComponent())
    await clickSubmitBtn()
    await expect(screen.getByText('Name is a required field')).toBeInTheDocument()
  })

  test('onChange fields, lose required errors', async () => {
    await act(() => renderComponent())

    await clickSubmitBtn()

    // Info: data-testid="input-name", id="input-name", label="InputName"
    // When change value of data-testid='input-name', lose required error message
    await changeStringValue('input-name')
    expect(screen.queryByText('Name is a required field')).not.toBeInTheDocument()

    const testNumberInput = screen.getByTestId('input-testNumberInput')
    await typeField(testNumberInput, '123')
    expect(testNumberInput).toHaveValue(123)

    await clickSubmitBtn()
  })

  test('maxLength fields: cannot input more than maxLength', async () => {
    await act(() => renderComponent())

    // Info: data-testid="input-name", id="input-name", label="InputName"
    // Cannot input more than 50 characters
    const inputName = screen.getByTestId('input-name')
    expect(inputName).toBeInTheDocument()
    const inputNameValue = generateRandomString(100)
    await userEvent.type(inputName, inputNameValue)
    expect(inputName).toHaveValue(inputNameValue.substring(0, 50))
  })
})

describe('DemoMCategories useFieldArray Test', () => {
  test('should render the Add button', async () => {
    await act(() => renderComponent())
    expect(screen.getByTestId('add-demoMCategories')).toBeInTheDocument()
  })

  test('should add a new field when Add button is clicked', async () => {
    await act(() => renderComponent())

    const addButton = screen.getByTestId('add-demoMCategories')
    await userEvent.click(addButton)

    expect(screen.getAllByTestId('demoMCategories')).toHaveLength(1)

    await userEvent.click(addButton)
    expect(screen.getAllByTestId('demoMCategories')).toHaveLength(2)
  })

  test('should remove a field when Delete button is clicked', async () => {
    await act(() => renderComponent())

    const addButton = screen.getByTestId('add-demoMCategories')
    await userEvent.click(addButton)
    await userEvent.click(addButton)

    expect(screen.getAllByTestId('demoMCategories')).toHaveLength(2)

    const deleteButton = screen.getByTestId('remove-0-demoMCategories')
    await userEvent.click(deleteButton)

    expect(screen.getAllByTestId('demoMCategories')).toHaveLength(1)
    expect(screen.getByTestId('demoMCategories-0-name')).toBeInTheDocument()
    expect(screen.queryByTestId('demoMCategories-1-name')).not.toBeInTheDocument()
  })
})
