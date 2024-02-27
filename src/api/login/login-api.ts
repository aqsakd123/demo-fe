import { getJwtToken } from '@app/helpers/TokenStoreUtils'
import axiosInstance from '../axios'

export async function loginByUsernameAndPassword(email: string, password: string): Promise<any> {
  return await axiosInstance.post('/api/admin/auth', undefined, {
    params: {
      email,
      password,
    },
  })
}

export async function postLogout(): Promise<any> {
  const jwtToken = getJwtToken()
  return await axiosInstance.post('/api/admin/revoke', {
    jwtToken,
  })
}
