import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, DefaultValues } from 'react-hook-form'
import * as yup from 'yup'
import { generateYupSchema } from '../utils/form-builder-utils'
import { FormConfigItem, useFormsBuilderContext } from '@app/config/FormProvider'
import { useEffect } from 'react'
import { Schema, defaultTypes } from '../utils/form-builder-types'

export type UseFormBuilderProps<T extends yup.AnyObject> = {
  defaultValues?: DefaultValues<T>
  yupSchema?: yup.ObjectSchema<T>
  schema: Schema<T>[]
}

const validateSchema = <T extends Record<string, any>>(
  schema: Schema<T>[] | undefined,
  availableForms: FormConfigItem[],
): Schema<T>[] => {
  if (!schema) {
    return []
  }

  const validatedSchema = schema.filter((item) => {
    const isValid =
      defaultTypes.includes(item.type) || availableForms.find((itemF) => itemF.type === item.type)
    if (!isValid) {
      // @ts-ignore
      const typeList = defaultTypes.concat(availableForms.map((itemF) => itemF.type))
      console.error(
        `Form type '${
          item.type
        }' is not available in the forms context. Available types is [ ${typeList.join(', ')}]`,
      )
    }
    return isValid
  })

  return validatedSchema
}

const useFormBuilder = <T extends Record<string, any>>({
  defaultValues,
  yupSchema,
  schema,
}: UseFormBuilderProps<T>) => {
  const methods = useForm<T>({
    mode: 'onChange',
    defaultValues,
    // @ts-ignore
    resolver: yupSchema ? yupResolver(yupSchema) : yupResolver(generateYupSchema(schema)),
  })

  const { forms } = useFormsBuilderContext()

  useEffect(() => {
    validateSchema(schema, forms)
  }, [])

  return {
    ...methods,
    schema,
  }
}

export default useFormBuilder
