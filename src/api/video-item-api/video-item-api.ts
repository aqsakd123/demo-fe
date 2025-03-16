import axios from 'axios'
import { vi } from 'date-fns/locale';

const API_BASE_URL = 'http://localhost:5000'
const axiosInstance = axios.create({ baseURL: API_BASE_URL })

// ✅
export async function insertVideoItem(
  videoItem: { idea: string; type: string; sub_type: string }[],
) {
  return await axiosInstance.post('/insert', videoItem)
}

// ✅
export async function updateVideoItem(itemId: string, videoItem: any) {
  return await axiosInstance.put(`/update/${itemId}`, { ...videoItem })
}

// ✅
export async function deleteVideoItem(itemId: string) {
  return await axiosInstance.delete(`/delete/${itemId}`)
}

// ✅
export async function listVideoItems(statusFilter?: string) {
  return await axiosInstance.get('/list', { params: { status: statusFilter } })
}

// ✅
export async function getVideoItemDetail(itemId: string) {
  return await axiosInstance.get(API_BASE_URL + `/detail/${itemId}`)
}

export async function getChildrenImages(ids: string[]) {
  // Cân nhắc thay thế, sử dụng 1 prompt để trực tiếp copy path trong project
  return await axiosInstance.post('/get_children_images', { ids })
}

export async function deleteImage(uuid: string) {
  return await axiosInstance.delete(`/delete-image/${uuid}`)
}

// ✅
export async function generateAudio(videoItem: any) {
  return await axiosInstance.post('/generate_audio', videoItem)
}

// ✅
export async function getTags() {
  return await axiosInstance.get('/get_tags')
}

export async function scheduleVideos(scheduleData: any) {
  return await axiosInstance.post('/schedule-videos', scheduleData)
}

export async function generateChildrenVideo(videoItemId: string, videoItem: any) {
  return await axiosInstance.post(`/generate-children-video/${videoItemId}`, videoItem)
}

export async function generateFinalVideo(videoItem: any) {
  return await axiosInstance.post('/generate-final-video', videoItem)
}
