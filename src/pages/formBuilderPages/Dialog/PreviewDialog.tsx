import React from 'react'
import Dialog, { DialogContent } from '@app/components/common/Dialog/Dialog'
import { RootState } from '@app/store/store'
import { useSelector } from 'react-redux'
import FormBuilder from '@app/pages/formBuilder/FormBuilder'
import useFormBuilder from '@app/pages/formBuilder/action-hooks/useFormBuilder'
import { DataFormType } from './DataFormInput'

type FormProps = {
  onReturn: () => void
}

const generateSchemaFromDataForm = (dataForm: DataFormType[]) => {
  const valueData = [...dataForm]
  return valueData.map((item: DataFormType) => {
    if (item.referenceCodeName) {
      return {
        ...item,
        display(data: any) {
          return data[`${item.referenceCodeName}`] === item.referenceValue
        },
      }
    }
    return item
  })
}

const PreviewDialog: React.FC<FormProps> = (props: FormProps) => {
  const { onReturn } = props

  const totalFields = useSelector((state: RootState) => state.formBuilderStore.formDataList) || []

  const formMethods = useFormBuilder<any>({
    schema: generateSchemaFromDataForm(totalFields),
  })

  const handleClickReturn = async () => {
    onReturn()
  }

  return (
    <Dialog open title='Preview' onClickReturn={handleClickReturn} fullWidth selfContentAndActions>
      <DialogContent>
        <FormBuilder formMethods={formMethods} />
      </DialogContent>
    </Dialog>
  )
}

export default PreviewDialog
