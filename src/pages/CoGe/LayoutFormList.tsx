import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DataGrid, GridColDef, GridExpandMoreIcon } from '@mui/x-data-grid'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  IconButton,
  Checkbox,
  TextField,
  Box,
  Typography,
  Collapse,
  Select,
  MenuItem,
} from '@mui/material'
import { History, Edit, Visibility } from '@mui/icons-material'
import { v4 as uuidv4 } from 'uuid'
import { useForm, useFieldArray, Controller } from 'react-hook-form'
import { RootState } from '@app/store/store'
import JSZip from 'jszip'
import {
  FileData,
  HistoryItem,
  LayoutFormStoreItem,
  LayoutForm as LayoutFormInterfae,
  addLayoutForm,
  updateHistoryItem,
  addHistoryItem,
} from '@app/store/memoStore/layoutFormStore'

interface EditFormData {
  fileData: FileData[]
}

enum PROJECT {
  MOCK_PROJECT,
}

const settingData = (project: PROJECT | undefined, selectedHistory?: HistoryItem | null) => {
  if (!selectedHistory || !project) return []

  const methods = selectedHistory?.layoutForm.commonInfoFields.find(
    (it) => it.field === 'methods',
  )?.value
  const isBackend = selectedHistory.layoutForm.commonInfoFields.find(
    (it) => it.field === 'backendprojectname',
  )
  const isFrontend = selectedHistory.layoutForm.commonInfoFields.find(
    (it) => it.field === 'frontendprojectname',
  )
  const graphqlType = selectedHistory.layoutForm.commonInfoFields.find(
    (it) => it.field === 'apimethod',
  )?.value

  const isUpsertUsage = methods?.includes('insert') || methods?.includes('update')
  const entityName = selectedHistory.layoutForm.mainEntity.entityName

  if ('MOCK_PROJECT' === project) {
    return [
      {
        type: 'react',
        fileType: 'listComponent',
        fileName: 'a.txt',
        fileLink: 'b',
        usage: methods?.includes('getList'),
        prompt: `
                Create for me a ${entityName}List.tsx (using react typescript)
    
                The ${entityName}List.tsx should have these features:
                
                `,
      },
      {
        type: 'react',
        fileType: 'addEditDialogContainerComponent',
        fileName: '',
        fileLink: '',
        usage: isUpsertUsage,
        prompt: ``,
      },
      {
        type: 'react',
        fileType: 'addEditDialogFormInputComponent',
        fileName: '',
        fileLink: '',
        usage: isUpsertUsage,
        prompt: ``,
      },
      {
        type: 'java',
        fileType: 'controller',
        fileName: '',
        fileLink: '',
        usage: true,
        prompt: ``,
      },
      {
        type: 'java',
        fileType: 'dao',
        fileName: '',
        fileLink: '',
        usage: true,
        prompt: ``,
      },
      {
        type: 'java',
        fileType: 'entity',
        fileName: '',
        fileLink: '',
        usage: true,
        prompt: ``,
      },
      {
        type: 'java',
        fileType: 'entityDTO',
        fileName: '',
        fileLink: '',
        usage: true,
        prompt: ``,
      },
      {
        type: 'java',
        fileType: 'service',
        fileName: '',
        fileLink: '',
        usage: true,
        prompt: ``,
      },
      {
        type: 'java',
        fileType: 'serviceImpl',
        fileName: '',
        fileLink: '',
        usage: true,
        prompt: ``,
      },
      {
        type: 'java',
        fileType: 'repository',
        fileName: '',
        fileLink: '',
        usage: true,
        prompt: ``,
      },
      {
        type: 'java',
        fileType: 'graphqlSchema',
        fileName: '',
        fileLink: '',
        usage: graphqlType?.toLowerCase() === 'graphql',
        prompt: ``,
      },
    ].filter((it) => {
      return (isBackend && it.type === 'java') || (isFrontend && it.type === 'react')
    })
  }
  return []
}

const LayoutForm: React.FC = () => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.layoutFormStore.items)
  const [historyDialogOpen, setHistoryDialogOpen] = useState(false)
  const [viewDialogOpen, setViewDialogOpen] = useState(false)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<LayoutFormStoreItem | null>(null)
  const [selectedHistory, setSelectedHistory] = useState<HistoryItem | null>(null)
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())
  const [selectedProject, setSelectedProject] = useState<PROJECT | undefined>(undefined)

  const dataSetting = settingData(selectedProject, selectedHistory)

  const { control, handleSubmit, reset } = useForm<EditFormData>({
    defaultValues: { fileData: [] },
  })
  const { fields } = useFieldArray({
    control,
    name: 'fileData',
  })

  const handleToggleCollapse = (index: number) => {
    const newExpandedItems = new Set(expandedItems)
    if (newExpandedItems.has(index)) {
      newExpandedItems.delete(index)
    } else {
      newExpandedItems.add(index)
    }
    setExpandedItems(newExpandedItems)
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'name', headerName: 'Name', width: 200 },
    {
      field: 'uploadAt',
      headerName: 'Last Uploaded',
      width: 200,
      valueGetter: (params) => {
        const item = items.find((i) => i.id === params.row.id)
        return item?.history[item.history.length - 1]?.uploadAt || ''
      },
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => {
        const item = items.find((i) => i.id === params.row.id)
        const isLatestEditable = (item?.history?.length ?? 0) > 0

        if (!item) return <></>

        return (
          <>
            <IconButton disabled={!isLatestEditable} onClick={() => handleEdit(item)}>
              <Edit />
            </IconButton>
            <IconButton onClick={() => handleOpenHistory(item)}>
              <History />
            </IconButton>
          </>
        )
      },
    },
  ]

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (!selectedProject) {
      alert('Select a project')
      return
    }
    if (file) {
      const formData = new FormData()
      formData.append('excelFile', file)

      try {
        const response = await fetch('http://localhost:8080/api/excel/get-data-form-input', {
          method: 'POST',
          body: formData,
        })
        const layoutForm: LayoutFormInterfae = await response.json()
        const layoutData = settingData(selectedProject, {
          layoutForm: layoutForm,
          fileData: [],
          uploadAt: '',
        })
        const entityName = layoutForm.mainEntity.entityName

        // Kiểm tra xem đã có item nào cùng projectName và name chưa
        const existingItem = items.find(
          (item) => item.name === entityName && item.projectName === selectedProject,
        )

        if (existingItem) {
          // Nếu đã tồn tại, thêm vào history
          const newHistoryItem: HistoryItem = {
            layoutForm,
            fileData: layoutData?.map((it, index) => ({
              code: selectedProject + '_' + it.fileType,
              id: index,
              content: '',
              exportable: true,
              fileLink: it.fileLink,
              fileName: it.fileName,
              prompt: it.prompt,
            })),
            uploadAt: new Date().toISOString(),
          }

          dispatch(
            addHistoryItem({
              id: existingItem.id,
              historyItem: newHistoryItem,
            }),
          )
        } else {
          const newItem: LayoutFormStoreItem = {
            id: uuidv4(),
            name: entityName,
            projectName: selectedProject,
            history: [
              {
                layoutForm,
                fileData: layoutData?.map((it, index) => ({
                  code: selectedProject + '_' + it.fileType,
                  id: index,
                  content: '',
                  exportable: true,
                  fileLink: it.fileLink,
                  fileName: it.fileName,
                  prompt: it.prompt,
                })),
                uploadAt: new Date().toISOString(),
              },
            ],
          }

          dispatch(addLayoutForm(newItem))
        }
      } catch (error) {
        console.error('Error uploading file:', error)
      }
    }
  }

  const handleOpenHistory = (item: LayoutFormStoreItem) => {
    setSelectedItem(item)
    setHistoryDialogOpen(true)
  }

  const handleViewHistory = (historyItem: HistoryItem) => {
    reset({ fileData: historyItem.fileData })
    setSelectedHistory(historyItem)
    setViewDialogOpen(true)
  }

  const handleEdit = (item: LayoutFormStoreItem) => {
    const latestHistory = item.history[item.history.length - 1]
    reset({ fileData: latestHistory.fileData })
    setSelectedItem(item)
    setSelectedHistory(latestHistory)
    setEditDialogOpen(true)
  }

  const onSubmit = (data: EditFormData) => {
    if (selectedItem && selectedHistory) {
      const updatedHistory: HistoryItem = {
        ...selectedHistory,
        fileData: data.fileData.map((item) => ({
          ...item,
          id: item.id,
          fileName: item.fileName,
          fileLink: item.fileLink,
        })),
      }

      dispatch(
        updateHistoryItem({
          id: selectedItem.id,
          historyIndex: selectedItem.history.length - 1,
          historyItem: updatedHistory,
        }),
      )
      setEditDialogOpen(false)
    }
  }

  const generateZip = (fileDataArray: FileData[]) => {
    const zip = new JSZip()

    // Thêm các file từ fileDataArray vào ZIP
    fileDataArray.forEach((fileData) => {
      if (fileData.exportable) {
        const fileName = fileData.fileName
        const fileContent = fileData.content
        zip.file(fileName, fileContent)
      }
    })

    // Generate content cho files_to_move.txt
    let textFileContent = ''
    fileDataArray.forEach((fileData) => {
      if (fileData.exportable && fileData.fileName && fileData.fileLink) {
        textFileContent += `${fileData.fileName} ${fileData.fileLink}\n`
      }
    })

    if (textFileContent) {
      zip.file('files_to_move.txt', textFileContent)
    }

    // Generate và download ZIP
    zip.generateAsync({ type: 'blob' }).then((content) => {
      const link = document.createElement('a')
      link.href = URL.createObjectURL(content)
      link.download = 'output.zip'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(link.href)
    })
  }

  const handleDownloadZip = () => {
    if (selectedHistory) {
      generateZip(selectedHistory.fileData)
    }
  }

  return (
    <div>
      <Select
        size='small'
        value={selectedProject}
        onChange={(e) => setSelectedProject(e.target.value as PROJECT)}
      >
        {Object.keys(PROJECT)
          .filter((el) => {
            return isNaN(Number(el))
          })
          .map((it) => (
            <MenuItem key={it} value={it}>
              {it}
            </MenuItem>
          ))}
      </Select>
      <br />

      <input
        type='file'
        accept='.xlsx,.xls'
        disabled={!selectedProject}
        onChange={handleFileUpload}
      />
      <br />
      <DataGrid rows={items} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />

      {/* History Dialog */}
      <Dialog
        open={historyDialogOpen}
        onClose={() => setHistoryDialogOpen(false)}
        fullWidth
        maxWidth='lg'
      >
        <DialogTitle>History - {selectedItem?.name}</DialogTitle>
        <DialogContent>
          {selectedItem?.history.map((history, index) => (
            <div key={index}>
              <span>
                {history.uploadAt} - version {index + 1}
              </span>
              <Button onClick={() => handleViewHistory(history)}>
                <Visibility />
              </Button>
            </div>
          ))}
        </DialogContent>
      </Dialog>

      {/* View Data Dialog
      <Dialog
        open={viewDialogOpen}
        onClose={() => setViewDialogOpen(false)}
        fullWidth
        maxWidth='md'
      >
        <DialogTitle>View Data</DialogTitle>
        <DialogContent style={{ width: '100%' }}>
          <pre>{JSON.stringify(selectedHistory, null, 2)}</pre>
        </DialogContent>
      </Dialog> */}

      {/* Edit Dialog */}
      {(editDialogOpen || viewDialogOpen) && (
        <Dialog
          open={editDialogOpen || viewDialogOpen}
          onClose={() => {
            setEditDialogOpen(false)
            setViewDialogOpen(false)
          }}
          fullWidth
          maxWidth='lg'
          fullScreen={!viewDialogOpen}
          style={{ width: '100%' }}
        >
          <DialogTitle style={{ display: 'flex', justifyContent: 'space-between' }}>
            Edit File Data
            <IconButton
              onClick={() => {
                setEditDialogOpen(false)
                setViewDialogOpen(false)
              }}
            >
              ❌
            </IconButton>
          </DialogTitle>
          <DialogContent style={{ width: '100%' }}>
            <Button variant='outlined' style={{ marginBottom: '8px' }} onClick={handleDownloadZip}>
              Download zip file
            </Button>

            <form onSubmit={handleSubmit(onSubmit)}>
              {fields.map((field, index) => (
                <Box
                  key={field.id}
                  sx={{
                    marginBottom: 2,
                    border: '1px solid #e0e0e0',
                    borderRadius: 1,
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: 1,
                      cursor: 'pointer',
                    }}
                    onClick={() => handleToggleCollapse(index)}
                  >
                    <GridExpandMoreIcon
                      sx={{
                        transform: expandedItems.has(index) ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s',
                      }}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Typography variant='subtitle1' sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                      {field.fileName}&nbsp;&nbsp;{field.content ? '✔️' : ''}
                      <Typography
                        variant='body2'
                        sx={{ color: 'text.secondary', fontSize: '0.8rem' }}
                      >
                        {field.fileLink}
                      </Typography>
                    </Typography>
                    <Controller
                      name={`fileData.${index}.exportable`}
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <Checkbox
                          checked={value}
                          disabled={viewDialogOpen}
                          onChange={onChange}
                          onClick={(e) => e.stopPropagation()} // Ngăn click checkbox toggle collapse
                        />
                      )}
                    />
                  </Box>

                  <Collapse in={expandedItems.has(index)} color='red'>
                    <Box sx={{ padding: 2 }}>
                      {editDialogOpen && field.prompt && (
                        <Button
                          variant='contained'
                          style={{ marginBottom: '8px' }}
                          onClick={() => {
                            navigator.clipboard.writeText(field.prompt)
                            alert('Copy done sir')
                          }}
                        >
                          Create Prompt
                        </Button>
                      )}
                      <Controller
                        name={`fileData.${index}.content`}
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label='Content'
                            multiline
                            rows={20}
                            disabled={viewDialogOpen}
                            fullWidth
                            variant='outlined'
                          />
                        )}
                      />
                    </Box>
                  </Collapse>
                </Box>
              ))}
              <Button type='submit' variant='contained' color='primary'>
                Save
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

export default LayoutForm
