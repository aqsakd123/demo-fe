export interface IBodyResponse {
  data: BlobPart
  success?: boolean
  message?: string | null
  output?: any
}

export type PagingRequest = {
  page: number
  size: number
}
