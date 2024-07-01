import { DialogContent } from '@app/components/common/Dialog/Dialog'
import DialogActionButton from '@app/components/common/Dialog/DialogActionButton'
import TextInput from '@app/components/common/TextInputField/TextInput'
import useSnackbar from '@app/config/useSnackbar'
import FormBuilder from '@app/pages/formBuilder/FormBuilder'
import useFormBuilder from '@app/pages/formBuilder/action-hooks/useFormBuilder'
import {
  DefaultTypes,
  LabelAndValue,
  Schema,
  SchemaItem,
  defaultTypes,
} from '@app/pages/formBuilder/utils/form-builder-types'
import formBuilderStore from '@app/store/formBuilderPageStore/FormBuilderStore'
import { RootState } from '@app/store/store'
import { DeleteForeverOutlined } from '@mui/icons-material'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button/Button'
import DialogActions from '@mui/material/DialogActions/DialogActions'
import IconButton from '@mui/material/IconButton/IconButton'
import React, { useEffect } from 'react'
import { useFieldArray } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

export type DataFormType = SchemaItem & {
  id?: string
  codeName: string
  type: DefaultTypes
} & ReferenceDisplay &
  FetchOnChange

type ReferenceDisplay = {
  referenceCodeName?: string
  referenceValue?: string
}
type FetchOnChange = {
  changeCodeName?: string
  changeApiData?: OnChangeType[]
}

type OnChangeType = {
  textSequence: string
  textCodeName: string
}

export const typeCombobox = defaultTypes.map((item) => ({
  value: item,
  label: `${item
    .split('_')
    .map((itemT) => itemT.charAt(0).toUpperCase() + itemT.slice(1))
    .join(' ')}`,
}))

const schemaDataFormInput = (
  totalFields?: DataFormType[],
  formData?: DataFormType,
): Schema<DataFormType>[] => {
  const currentFields = totalFields?.filter((item) => item.codeName !== formData?.codeName) || []
  const referenceCodeList = currentFields?.map((item) => ({
    value: item.codeName,
    label: `${item.label}(${item.codeName})`,
  }))
  let referenceType: DefaultTypes = 'textfield'
  let referenceOptions: LabelAndValue[] = []
  const referenceSelect = currentFields?.find(
    (item) => item.codeName === formData?.referenceCodeName,
  )

  if (formData?.referenceCodeName && referenceSelect) {
    referenceType = referenceSelect?.type
    referenceOptions = referenceSelect?.options || []
  }
  return [
    {
      codeName: 'label',
      label: 'Label',
      type: 'textfield',
      tooltip: 'Label of the inputted field',
      maxLength: 30,
      position: 1,
      required: true,
    },
    {
      codeName: 'codeName',
      label: 'Code Name',
      type: 'textfield',
      tooltip:
        'Code name should be unique. There should be only 1 word, only a-z, A-Z, 0-9 characters.',
      maxLength: 30,
      position: 2,
      required: true,
      regrex: '^[a-zA-Z0-9]+(?:[_-][a-zA-Z0-9]+)?$',
    },
    {
      codeName: 'type',
      label: 'Type',
      type: 'combobox',
      tooltip: 'Pick type of field.',
      required: true,
      options: typeCombobox,
      position: 3,
    },
    {
      codeName: 'required',
      label: 'Required',
      type: 'checkbox',
      options: [{ value: 'true', label: 'True' }],
      position: 4,
    },
    {
      codeName: 'sequence',
      label: 'Sequence',
      type: 'number',
      position: 4,
    },
    {
      codeName: 'tooltip',
      label: 'Tooltip',
      type: 'textarea',
      position: 3.1,
      maxLength: 100,
    },
    // text field avaiable
    {
      codeName: 'maxLength',
      label: 'MaxLength',
      type: 'number',
      position: 5,
      size: 6,
      display(data) {
        return data.type === 'textarea' || data.type === 'textfield'
      },
    },
    {
      codeName: 'regrex',
      label: 'Regrex',
      type: 'textfield',
      position: 6,
      size: 6,
      display(data) {
        return data.type === 'textarea' || data.type === 'textfield'
      },
    },

    // number field avaibale
    {
      codeName: 'maxNumber',
      label: 'Max',
      type: 'number',
      position: 5,
      size: 6,
      display(data) {
        return data.type === 'number'
      },
    },
    {
      codeName: 'minNumber',
      label: 'Min',
      type: 'number',
      position: 5,
      size: 6,
      display(data) {
        return data.type === 'number'
      },
    },

    // Color input
    {
      codeName: 'colorList',
      label: 'Min',
      type: 'textfield',
      position: 5,
      size: 6,
      display(data) {
        return data.type === 'color'
      },
    },
    {
      codeName: 'useDefaultList',
      label: 'Use Color Default List',
      type: 'radio',
      position: 5,
      size: 6,
      display(data) {
        return data.type === 'color'
      },
      options: [
        { value: 'yes', label: 'Yes' },
        { value: '', label: 'No' },
      ],
    },
    // utils
    {
      codeName: 'fetchApi',
      label: 'Api Fetch',
      type: 'textfield',
      position: 5,
      size: 12,
      display(data) {
        const dataType: DefaultTypes[] = IS_NEEDED_OPTION
        return dataType.includes(data.type)
      },
    },
    {
      codeName: 'apiValueCode',
      label: 'Value Code',
      type: 'textfield',
      position: 5.1,
      size: 6,
      required: true,
      display(data) {
        const dataType: DefaultTypes[] = IS_NEEDED_OPTION
        return Boolean(dataType.includes(data.type) && data.fetchApi)
      },
    },
    {
      codeName: 'apiLabelCode',
      label: 'Label Code',
      type: 'textfield',
      position: 5.2,
      size: 6,
      required: true,
      display(data) {
        const dataType: DefaultTypes[] = IS_NEEDED_OPTION
        return Boolean(dataType.includes(data.type) && data.fetchApi)
      },
    },

    {
      codeName: 'taxonomy',
      label: 'API Taxonomy',
      type: 'textfield',
      position: 5.4,
      size: 6,
      maxLength: 30,
      display(data) {
        const dataType: DefaultTypes[] = IS_NEEDED_OPTION
        return dataType.includes(data.type)
      },
    },

    // reference
    {
      codeName: 'referenceCodeName',
      label: 'Reference Code',
      type: 'combobox',
      options: referenceCodeList || [],
      position: 7,
      size: 12,
      maxLength: 30,
    },
    {
      codeName: 'referenceValue',
      label: 'Reference Value',
      type: referenceType,
      options: referenceOptions,
      position: 7,
      size: 12,
      maxLength: 30,
    },
  ]
}

const IS_NEEDED_OPTION: DefaultTypes[] = ['checkbox', 'radio', 'combobox_multi', 'combobox']

export type FormProps = {
  id: string
  defaultValues?: DataFormType
  onSubmit: (data: any) => void | ((data: any) => Promise<void>)
}

const DataFormInput: React.FC<FormProps> = (props: FormProps) => {
  const { id, defaultValues, onSubmit } = props

  const totalFields = useSelector((state: RootState) => state.formBuilderStore.formDataList) || []

  const dispatch = useDispatch()
  const snackbar = useSnackbar()

  const [formSchema, setFormSchema] = React.useState<Schema<DataFormType>[]>(
    schemaDataFormInput(totalFields, defaultValues) || [],
  )

  const formMethods = useFormBuilder<any>({
    schema: formSchema,
    defaultValues: { ...defaultValues },
  })

  const { handleSubmit, control, watch, getValues, formState } = formMethods
  const { isDirty, errors } = formState

  const referenceCodeName = watch('referenceCodeName')
  const typeForm = watch('type')

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'options',
  })

  useEffect(() => {
    if (referenceCodeName) {
      const schema = schemaDataFormInput(totalFields, getValues())
      setFormSchema(schema)
    }
  }, [referenceCodeName])

  useEffect(() => {
    dispatch(formBuilderStore.actions.setDirty(isDirty))
  }, [isDirty])

  const handleSubmitForm = handleSubmit(async (data: DataFormType) => {
    if (
      totalFields
        .filter((it) => it.id !== defaultValues?.id)
        .map((it) => it.codeName)
        .includes(data.codeName)
    ) {
      snackbar.snackbarError('Code name is duplicated. Please fix!')
      return
    }
    const savedData: DataFormType = {
      ...data,
      required: Boolean(data?.required),
    }
    console.log(savedData)
    onSubmit(savedData)
  })
  console.log(errors)
  return (
    <>
      <DialogContent>
        <FormBuilder formMethods={formMethods} />
        {IS_NEEDED_OPTION.includes(typeForm) && (
          <>
            <Typography mt={2} style={{ alignItems: 'center' }}>
              Options
              <Button
                type='button'
                variant='outlined'
                onClick={() => {
                  append({ value: '', label: '' })
                }}
                sx={{ marginLeft: '10px' }}
              >
                Add Option
              </Button>
            </Typography>
            {fields.map((item, index) => {
              console.log(item)
              return (
                <Box key={item.id} sx={{ mt: 2, display: 'flex' }}>
                  <TextInput
                    id={`${index}-input-field-value`}
                    label='Value'
                    fullWidth
                    name={`options.${index}.value`}
                    control={control}
                    maxLength={30}
                  />
                  <TextInput
                    id={`${index}-input-field-label`}
                    label='Label'
                    fullWidth
                    name={`options.${index}.label`}
                    control={control}
                    maxLength={30}
                  />
                  <IconButton type='button' onClick={() => remove(index)} sx={{ mt: 1 }}>
                    <DeleteForeverOutlined />
                  </IconButton>
                </Box>
              )
            })}
          </>
        )}
      </DialogContent>

      <DialogActions>
        <DialogActionButton
          variant='contained'
          id={`${id}-form-submit-button`}
          onClick={handleSubmitForm}
        >
          Submit
        </DialogActionButton>
      </DialogActions>
    </>
  )
}

export default DataFormInput
