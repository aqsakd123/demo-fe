import { clearAll } from '@app/helpers/LocalStorageUtils'
import { getJwtToken } from '@app/helpers/TokenStoreUtils'
import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_KEY
const jwtToken = getJwtToken()

const options = {
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer `,
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
}

if (jwtToken !== null) {
  options.headers = {
    Authorization: `Bearer ${jwtToken}`,
    'Content-type': 'application/json',
    Accept: 'application/json',
  }
}

export const loggingOut = () => {
  clearAll()
  window.location.href = '/login'
}

const axiosInstance = axios.create(options)

axiosInstance.interceptors.request.use(async (request: any) => {
  Object.assign(request.headers, {
    Authorization: `Bearer ${jwtToken}`,
    'Content-type': 'application/json',
  })
  return request
})

axiosInstance.interceptors.response.use(
  (response: any) => {
    return response
  },
  async (error) => {
    // if (error.response?.status === 403 || error.response?.status === 401) {
    //   loggingOut()
    // }
    return Promise.reject(error)
  },
)

export default axiosInstance
