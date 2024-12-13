import { FormItem } from './form-builder-types'

export const fetchOptions = async (url: string) => {
  const response = await fetch(url)
  return response.json()
}

// Main fetchData function for fetching data for each form item
export const fetchDataOptions = async (data: FormItem[]) => {
  const promises = data.map(async (item) => {
    if (item.fetchApi) {
      const optionData = await fetchOptions(item.fetchApi)
      const options = optionData.map((itemF: any) => ({
        value: itemF[`${item.apiValueCode}`],
        label: itemF[`${item.apiLabelCode}`],
      }))
      return {
        ...item,
        options: options.concat(item.options || []),
      }
    }
    return item
  })

  const newSchema = await Promise.all(promises)
  return newSchema
}

export const getColSpan = (size: FormItem['size']) => {
  // Determine the column span based on the item's size
  switch (size) {
    case 'large':
      return 24 // Full width
    case 'medium':
      return 12 // Half width
    case 'small':
      return 6 // Quarter width
    default:
      return 24
  }
}
