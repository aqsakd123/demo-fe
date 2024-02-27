import CalendarPickerField from '@app/components/common/CalendarPicker/CalendarPickerField'
import CheckboxField from '@app/components/common/Checkbox/CheckboxField'
import { defaultColors } from '@app/components/common/ColorInput/ColorInput'
import ColorInputField from '@app/components/common/ColorInput/ColorInputField'
import RadioField from '@app/components/common/Radio/RadioField'
import MultiSelectField from '@app/components/common/SelectComponent/MultiSelectField'
import SelectField from '@app/components/common/SelectComponent/SelectField'
import TextInputField from '@app/components/common/TextInputField/TextInputField'
import { Box, Grid, Hidden } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { useFormsBuilderContext } from '@app/config/FormProvider'
import { UseFormBuilderProps } from './action-hooks/useFormBuilder'
import CheckboxInner from '@app/components/common/Checkbox/Checkbox'
import { callApi } from './utils/form-builder-utils'
import useSnackbar from '@app/config/useSnackbar'
import { Schema } from './utils/form-builder-types'

const GRID_SIZE = 12

type Props = {
  defaultValues?: object
  formMethods: UseFormReturn<any, any, undefined> & UseFormBuilderProps<any>
  onSubmit?: (v: object) => void
  onReset?: (v: object) => void
  onSaveDraft?: (v: object) => void
}

const FormBuilder: React.FC<Props> = (props: Props) => {
  const { formMethods } = props
  const { control, formState, getValues } = formMethods
  const { errors } = formState

  const { forms } = useFormsBuilderContext()
  const { snackbarError } = useSnackbar()

  const { schema } = formMethods

  const data = useMemo(() => {
    const dataSchema = [...schema]
    const orderedData = dataSchema.sort((a, b) => {
      const positionA = a.position !== undefined && a.position !== null ? a.position : Infinity
      const positionB = b.position !== undefined && b.position !== null ? b.position : Infinity

      return positionA - positionB
    })
    return orderedData
  }, [schema])

  const [schemaData, setSchemaData] = React.useState<Schema<any>[]>(data)

  useEffect(() => {
    const fetchDataAndLog = async () => {
      const newSchema = await fetchData()
      setSchemaData(newSchema)
    }
    fetchDataAndLog()
  }, [])

  const fetchOptions = async (apiString: string) => {
    try {
      const { data } = await callApi(apiString)
      return Array.isArray(data) ? data : []
    } catch (error) {
      // @ts-ignore
      const errorMessage = 'Call API Failed. Please check!'
      snackbarError(errorMessage)
      return []
    }
  }

  const fetchData = async () => {
    const promises = data.map(async (item) => {
      if (item.fetchApi) {
        const optionData = await fetchOptions(item.fetchApi)
        const data = optionData.map((itemF) => ({
          value: itemF[`${item.apiValueCode}`],
          label: itemF[`${item.apiLabelCode}`],
        }))
        return {
          ...item,
          options: data.concat(item.options || []),
        }
      }
      return item
    })

    const newSchema = await Promise.all(promises)

    return newSchema
  }

  return (
    <Grid container alignItems='center' columnSpacing={2}>
      {schemaData?.map((item) => {
        const [reload, setReload] = useState(false)
        const {
          tooltip,
          codeName,
          label,
          type,
          options,
          required,
          colorList,
          useDefaultList,
          display,
          size,
        } = item

        const props = {
          id: `${String(codeName)}-id`,
          name: `${String(codeName)}`,
          label,
          tooltip,
          control,
          required,
          error: Boolean(errors[`${String(codeName)}`]?.message),
          errorMessage: errors[`${String(codeName)}`]?.message as string,
          onChange: () => {
            setReload(!reload)
          },
        }
        const positionList = schemaData.filter((itemD) => itemD.position === item.position)
        const posIdx = positionList.findIndex((itemP) => itemP.codeName === item.codeName)
        const defaultSize = item.position
          ? size || GRID_SIZE / positionList.length
          : size || GRID_SIZE

        let displayHidden = false

        if (positionList.length === 1 || (posIdx !== -1 && posIdx !== positionList.length - 1)) {
          displayHidden = true
        }

        let listColor: string[] = []

        if (type === 'color') {
          if (useDefaultList && colorList) {
            listColor = defaultColors.concat(colorList)
          } else if (!useDefaultList && colorList) {
            listColor = colorList
          } else {
            listColor = defaultColors
          }
        }

        const formConfigItem = forms.find((configItem) => configItem.type === type)

        if (formConfigItem) {
          const FormComponent = formConfigItem.component
          return (
            <Grid item xs={defaultSize} key={String(codeName)}>
              {/* @ts-ignore */}
              <FormComponent {...props} />
            </Grid>
          )
        }

        if ((display && typeof display === 'function' && display(getValues())) || !display) {
          return (
            <Grid key={String(codeName)} item xs={defaultSize}>
              {type === 'textfield' && <TextInputField variant='outlined' type='text' {...props} />}
              {type === 'textarea' && (
                <TextInputField
                  variant='outlined'
                  type='textarea'
                  rowsMax={10}
                  rowsMin={3}
                  {...props}
                />
              )}
              {type === 'number' && <TextInputField variant='outlined' type='number' {...props} />}
              {type === 'checkbox' && options?.length && options?.length > 1 && (
                <CheckboxField checkboxes={options || []} {...props} />
              )}
              {type === 'checkbox' && options?.length === 1 && <CheckboxInner {...props} />}

              {type === 'color' && <ColorInputField {...props} colors={listColor} clearable />}
              {type === 'radio' && <RadioField {...props} radios={options || []} />}
              {type === 'combobox' && <SelectField {...props} options={options || []} />}
              {type === 'combobox_multi' && <MultiSelectField {...props} options={options || []} />}
              {type === 'calendar_single' && <CalendarPickerField {...props} />}
              {type === 'calendar_range' && (
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                  <CalendarPickerField {...props} />
                  <span style={{ marginRight: '10px' }}>~</span>
                  <CalendarPickerField {...props} />
                </Box>
              )}
              {displayHidden && <Hidden />}
            </Grid>
          )
        }
      })}
    </Grid>
  )
}

export default FormBuilder
