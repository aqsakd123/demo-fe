import React, { useState, useEffect } from 'react'
import { Image as AntDImage, Input } from 'antd'
import { DownloadOutlined, Visibility } from '@mui/icons-material'
import styled from 'styled-components'
import DownloadUtils from '@app/helpers/DownloadUtils'
import { Button, IconButton } from '@mui/material'
import axiosInstance from '@app/api/axios'
import folderCover from '@app/assets/image/folder_cover.jpg'

const UploadContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`

const FileInput = styled(Input)`
  display: block;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
  width: 100%;
`

const UploadButton = styled(Button)`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px;
`
const CHUNK_SIZE = 5 * 1024 * 1024 // 10MB
const PARALLEL_CHUNKS = 3
const AWS_LINK = '192.168.100.3'

interface ImageWithPlaceholderProps {
  //   src: string
  alt: string
  onDownload: () => void
}

const COVER_IMAGES = {
  pdf: '@app/',
  doc: 'https://en.m.wikipedia.org/wiki/File:.docx_icon.svg',
  xls: 'https://en.m.wikipedia.org/wiki/File:.xlsx_icon.svg',
}

const FileItem = (props: {
  fileName: string
  downloadMethod?: (val: string) => void
  downloadUrl?: string
}) => {
  const { fileName = '', downloadUrl, downloadMethod } = props
  const [isDownloading, setIsDownloading] = useState(false)
  const [progress, setProgress] = useState(0)

  // Determine the file type from the file extension
  const fileType = fileName?.split('.')?.pop()?.toLowerCase()
  const isImage = ['jpg', 'jpeg', 'png', 'gif'].includes(fileType ?? '')

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      if (downloadMethod) {
        // @ts-ignore
        await downloadMethod(fileName, setProgress)
      } else if (downloadUrl) {
        const url = downloadUrl

        // Create an anchor element and simulate a click to start the download
        const link = document.createElement('a')
        link.href = url
        link.target = '_top'
        link.rel = 'noopener noreferrer'
        link.download = fileName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    } catch (error) {
      console.error('Error downloading file:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div style={{ marginBottom: '10px', position: 'relative' }}>
      {isDownloading && (
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'rgba(0,0,0,0.5)',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div>Loading... {progress}%</div>
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {isImage ? (
          <img
            src={`${downloadUrl ?? `http://${AWS_LINK}:4566/image/${fileName}`}`}
            alt={fileName}
            style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'cover' }}
          />
        ) : (
          <img
            // @ts-ignore
            src={COVER_IMAGES[fileType] || folderCover}
            alt={fileName}
            style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'cover' }}
          />
        )}
        <div style={{ marginLeft: '10px' }}>
          <div>{fileName}</div>
          <button onClick={handleDownload} disabled={isDownloading}>
            {isDownloading ? 'Downloading...' : 'Download'}
          </button>
        </div>
      </div>
    </div>
  )
}

const ImageWithPlaceholder: React.FC<ImageWithPlaceholderProps> = ({ alt = '', onDownload }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const height = alt.split('_')[2]

  return (
    <div style={{ position: 'relative', width: '20%' }}>
      {!isLoaded && (
        <img
          src={`http://${AWS_LINK}:4566/placeholder/${alt}`}
          alt={alt}
          style={{ width: '300px', height: height ?? '100%' }}
        />
      )}
      <AntDImage
        src={`http://${AWS_LINK}:4566/image/${alt}`}
        style={isLoaded ? { width: '100%', height: 'auto' } : { width: '0%', height: '0%' }}
        onLoad={() => setIsLoaded(true)}
        preview={{
          mask: (
            <>
              <div>
                <Visibility
                  // @ts-ignore
                  fontSize='10px'
                />
                Preview
              </div>
              <IconButton
                style={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  border: 'none',
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  onDownload()
                }}
              >
                <DownloadOutlined />
              </IconButton>
            </>
          ),
        }}
      />
    </div>
  )
}

const S3Manager: React.FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [files, setFiles] = useState<FileList | null>(null)

  const [images, setImages] = useState<string[]>([])
  const [filesToDownload, setFilesToDownload] = useState({})

  const [progress, setProgress] = useState<{ [key: number]: number | undefined }>({})
  const [fileName, setFileName] = useState('')
  const [uploadId, setUploadId] = useState('')
  const [totalChunks, setTotalChunks] = useState(0)
  const [uploadStatus, setUploadStatus] = useState<
    'NotStart' | 'Start' | 'Started' | 'Uploading' | 'Complete' | 'Abort' | 'Completed'
  >('NotStart')

  console.log('Current upload status:', uploadStatus)

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const onMultipleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files)
    }
  }

  const onUpload = () => {
    if (file) {
      const formData = new FormData()
      formData.append('file', file)

      axiosInstance
        .post('http://localhost:8080/api/s3/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => alert(response.data))
        .then(() => fetchImages())
        .catch((error) => console.error('Error uploading file:', error))
    }
  }

  const onMultipleUpload = () => {
    if (files) {
      const formData = new FormData()
      Array.from(files).forEach((file) => {
        formData.append('files', file)
      })

      axiosInstance
        .post('http://localhost:8080/api/s3/uploadMultiple', formData)
        .then((response) => alert(response.data))
        .catch((error) => console.error('Error uploading files:', error))
    }
  }

  const fetchImages = () => {
    axiosInstance
      .get<string[]>('http://localhost:8080/api/s3/list')
      .then((response) => {
        setImages(response.data)
      })
      .catch((error) => console.error('Error fetching images:', error))
  }

  const fetchFileToDownload = () => {
    axiosInstance
      .get<string[]>('http://localhost:8080/api/s3/list-all')
      .then((response) => {
        setFilesToDownload(response.data)
      })
      .catch((error) => console.error('Error fetching files:', error))
  }

  useEffect(() => {
    fetchImages()
    fetchFileToDownload()
  }, [])

  const downloadImage = (key: string) => {
    axiosInstance
      .get(`http://localhost:8080/api/s3/detail?key=${key}`, {
        responseType: 'arraybuffer',
      })
      .then((response) => {
        const filename = key.split('_').slice(3).join('_')
        DownloadUtils.createDownloadLink(new Blob([response.data]), filename)
      })
      .catch((error) => console.error('Error downloading image:', error))
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFileName(file.name)
      const totalChunks = Math.ceil(file.size / CHUNK_SIZE)
      setTotalChunks(totalChunks)
      setFile(file)
      setProgress({})
      setUploadStatus('Start') // Update status to 'Start'
    }
  }

  const startMultipartUpload = async (file: File) => {
    try {
      if (!file) return

      const totalChunks = Math.ceil(file.size / CHUNK_SIZE)
      const response = await axiosInstance.post('/api/s3/start', undefined, {
        params: {
          fileName: file.name,
          totalChunks,
        },
      })
      setUploadId(response.data)
      setUploadStatus('Started')
    } catch (error) {
      console.error('Error starting multipart upload:', error)
      setUploadStatus('Abort') // Update status to 'Abort' on failure
    }
  }

  const uploadChunks = async (file: File) => {
    const totalChunks = Math.ceil(file.size / CHUNK_SIZE)
    let currentChunk = 0

    while (currentChunk < totalChunks) {
      const chunksToUpload = Math.min(PARALLEL_CHUNKS, totalChunks - currentChunk)
      const chunkUploadPromises: Promise<any>[] = []

      for (let i = 0; i < chunksToUpload; i++) {
        const chunkIndex = currentChunk + i
        const chunk = file.slice(chunkIndex * CHUNK_SIZE, (chunkIndex + 1) * CHUNK_SIZE)
        const formData = new FormData()

        formData.append('file', chunk)
        formData.append('partNumber', (chunkIndex + 1).toString())
        formData.append('uploadId', uploadId)
        formData.append('fileName', file.name)

        chunkUploadPromises.push(
          axiosInstance
            .post('/api/s3/upload-part', formData, {
              headers: { 'Content-Type': 'multipart/form-data' },
              onUploadProgress: (event) => {
                if (!event?.total) return
                const percent = Math.round((event.loaded / event.total) * 100)
                setProgress((prevProgress) => ({
                  ...prevProgress,
                  [chunkIndex]: percent,
                }))
              },
            })
            .catch(async (error) => {
              console.error('Error uploading chunk:', error)
              // Call the abort API if any chunk upload fails
              setUploadStatus('Abort')
              throw new Error(`Chunk ${chunkIndex + 1} upload failed. Aborting.`)
            }),
        )
      }

      await Promise.all(chunkUploadPromises)

      currentChunk += chunksToUpload
    }
    setUploadStatus('Complete')
  }

  const abortMultipartUpload = async () => {
    try {
      await axiosInstance.post('/api/s3/abort', undefined, {
        params: { uploadId, fileName },
      })
      console.log('Multipart upload aborted successfully')
    } catch (abortError) {
      console.error('Error aborting multipart upload:', abortError)
    }
  }

  const completeMultipartUpload = async () => {
    try {
      await axiosInstance.post('/api/s3/complete', undefined, {
        params: {
          uploadId: uploadId,
          fileName: fileName,
          partNumbers: totalChunks,
        },
      })
      console.log('Upload completed successfully')
      setUploadStatus('Completed')
      setFile(null)
    } catch (error) {
      console.error('Error completing multipart upload:', error)
      setUploadStatus('Abort')
      setFile(null)
    }
  }

  useEffect(() => {
    if (!file || uploadStatus === 'NotStart') return
    if (uploadStatus === 'Start') startMultipartUpload(file)
    if (uploadStatus === 'Started') uploadChunks(file)
    if (uploadStatus === 'Complete') completeMultipartUpload()
    if (uploadStatus === 'Abort') abortMultipartUpload()
  }, [uploadStatus])

  const calculateOverallProgress = () => {
    if (uploadStatus === 'NotStart' || uploadStatus === 'Abort' || uploadStatus === 'Completed')
      return uploadStatus
    if (uploadStatus === 'Complete') return 'Processing...'

    if (!file) return null
    let totalProgress = 0

    Object.values(progress).forEach((chunkProgress) => {
      totalProgress += chunkProgress ? chunkProgress / totalChunks : 0
    })

    return Math.round(totalProgress) + '%'
  }

  const handleDownload = async (fileName: string, setProgressDownload?: (val: number) => void) => {
    try {
      // Construct the download URL
      const url = `/api/s3/download?fileName=${encodeURIComponent(fileName)}`

      // Use axios to fetch the file
      const response = await axiosInstance({
        url: url,
        method: 'GET',
        responseType: 'blob', // Important for handling binary data
        onDownloadProgress: (event) => {
          if (!event?.total) return
          const percent = Math.round((event.loaded / event.total) * 100)
          if (setProgressDownload) {
            setProgressDownload(percent ?? 0)
          }
        },
      })

      // Create a link element to trigger the download
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(new Blob([response.data]))
      link.download = fileName
      link.click()
      window.URL.revokeObjectURL(link.href) // Clean up the URL object
    } catch (error) {
      console.error('Error downloading file:', error)
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <UploadContainer>
        <Title>Upload a File</Title>
        <FileInput type='file' accept='image/*' onChange={onFileChange} />
        <UploadButton variant='contained' onClick={onUpload}>
          Upload
        </UploadButton>

        <Title>Upload Multiple Files</Title>
        <FileInput type='file' onChange={onMultipleFileChange} multiple />
        <UploadButton variant='contained' onClick={onMultipleUpload}>
          Upload Multiple
        </UploadButton>
        <Title>Upload Progress: {calculateOverallProgress()}</Title>
        <FileInput type='file' onChange={handleFileChange} />
      </UploadContainer>
      <h1>Image List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {images.map((key, index) => {
          return (
            <ImageWithPlaceholder key={index} alt={key} onDownload={() => downloadImage(key)} />
          )
        })}
      </div>
      <div>
        <h1>File List (Use Pre-assigned URL of AWS)</h1>
        <ul>
          {Array.from(Object.keys(filesToDownload))
            .filter((key) => !(key.endsWith('.jpg') || key.endsWith('.mp4')))
            .map((key) => {
              // @ts-ignore
              const url = filesToDownload[key] as string
              return <FileItem fileName={key} downloadUrl={url} />
            })}
        </ul>
      </div>
      <div>
        <h1>File List (Use /api/s3/download-file)</h1>
        <ul>
          {Array.from(Object.keys(filesToDownload))
            .filter((key) => !(key.endsWith('.jpg') || key.endsWith('.mp4')))
            .map((key) => {
              return <FileItem fileName={key} downloadMethod={handleDownload} />
            })}
        </ul>
      </div>
      <div>
        <h1>File List (Use /api/s3/download-file)</h1>
        <ul>
          {Array.from(Object.keys(filesToDownload))
            .filter((key) => key.endsWith('.mp4'))
            .map((key) => {
              // @ts-ignore
              const url = filesToDownload[key] as string

              return (
                <video width='600' controls>
                  <source src={url} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

export default S3Manager
