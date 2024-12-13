import React, { useState } from 'react'
import DynamicForm from '@app/pages/FormGenerators/DynamicForm'
import Modal from 'antd/es/modal/Modal'
import { Button, Form } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from '@app/store/store'
import styled from 'styled-components'

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 0px;
  }
`
type FormProps = {
  onReturn: () => void
}

const PreviewDialog: React.FC<FormProps> = (props: FormProps) => {
  const { onReturn } = props
  const totalFields = useSelector((state: RootState) => state.formBuilderStore.formDataList) || []
  const [form] = Form.useForm()
  const [isDirty, setIsDirty] = useState(false)

  const handleClickReturn = async () => {
    if (isDirty) {
      const confirmLeave = window.confirm(
        'You have unsaved changes. Are you sure you want to leave?',
      )
      if (!confirmLeave) return
    }
    onReturn()
  }

  const handleSubmit = async (value: any) => {
    alert({
      title: 'Result',
      message: 'Form submitted with values:' + JSON.stringify(value),
    })
  }

  return (
    <Modal open title='Preview' onCancel={handleClickReturn} width='900px' footer={null}>
      <StyledForm
        form={form}
        initialValues={{
          ITEM_1: '',
        }}
        layout='vertical'
        validateTrigger={['onBlur', 'onInput']}
        onFieldsChange={() => {
          setIsDirty(true)
        }}
        onFinish={handleSubmit}
      >
        <DynamicForm form={form} items={totalFields} />
        <Form.Item style={{ marginTop: '20px', textAlign: 'right' }}>
          <Button style={{ marginRight: '8px' }} onClick={handleClickReturn}>
            Cancel
          </Button>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </StyledForm>
    </Modal>
  )
}

export default PreviewDialog
