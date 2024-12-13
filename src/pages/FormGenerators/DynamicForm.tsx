import { useEffect, useState } from 'react'
import { Form, Row, FormInstance } from 'antd'
import FormItemRenderer from './FormItemRenderer'
import { FormItem } from './Utils/form-builder-types'
import { fetchDataOptions } from './Utils/form-builder-utils'

interface DynamicFormProps<T> {
  items: FormItem<T>[]
  form: FormInstance<any>
}

const DynamicForm = <T extends Record<string, any>>({
  items,
  form,
}: DynamicFormProps<T>): JSX.Element => {
  const [formItems, setFormItems] = useState<FormItem[]>([])

  Form.useWatch([], form)

  useEffect(() => {
    const loadItems = async () => {
      // @ts-ignore
      const updatedItems = await fetchDataOptions(items)
      setFormItems(updatedItems)
    }
    loadItems()
  }, [items])

  const renderFormItem = (item: FormItem) => {
    const formValues = form.getFieldsValue()

    return <FormItemRenderer item={item} formValues={formValues} />
  }

  return <Row gutter={[16, 16]}>{formItems.map(renderFormItem)}</Row>
}

export default DynamicForm
