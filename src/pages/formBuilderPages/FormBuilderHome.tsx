import { Box, Button } from '@mui/material'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@app/store/store'
import { DataFormType, typeCombobox } from './Dialog/DataFormInput'
import DataGrid from '@app/components/common/DataGrid/DataGrid'
import { GridColDef, GridRowsProp } from '@mui/x-data-grid'
import AddIcon from '@mui/icons-material/Add'
import { Visibility } from '@mui/icons-material'
import formBuilderStore, { DialogState } from '@app/store/formBuilderPageStore/FormBuilderStore'
import FormDialog from './Dialog/FormDialog'
import PreviewDialog from './Dialog/PreviewDialog'

const FormBuilderHome: React.FC = () => {
  const totalFields = useSelector((state: RootState) => state.formBuilderStore.formDataList) || []

  const [formDialog, setFormDialog] = useState<DialogState>('none')
  const [previewDialog, setPreviewDialog] = useState<boolean>(false)

  const dispatch = useDispatch()

  const tableData = useMemo(() => {
    const value: GridRowsProp<DataFormType> = [...totalFields]
    return value
  }, [totalFields])

  const columns = useMemo(() => {
    const columnData: GridColDef<DataFormType>[] = [
      {
        field: 'label',
        headerName: 'Label',
        flex: 1,
      },
      {
        field: 'codeName',
        headerName: 'Code Name',
        flex: 1,
      },
      {
        field: 'type',
        headerName: 'Type',
        flex: 1,
        renderCell(params) {
          return typeCombobox.filter((item) => item.value === params.value)[0].label
        },
      },
      {
        field: 'tooltip',
        headerName: 'Tooltip',
        flex: 1,
      },
      {
        field: 'required',
        headerName: 'Required',
        flex: 1,
        type: 'boolean',
      },
    ]
    return columnData
  }, [])

  const handleClickOpenDialog = () => {
    setFormDialog('add')
  }

  const handleClickCloseDialog = () => {
    setFormDialog('none')
  }

  const toolbarList = () => {
    return [
      {
        name: 'add',
        component: (
          <Button variant='text' startIcon={<AddIcon />} onClick={handleClickOpenDialog}>
            Add
          </Button>
        ),
      },
      {
        name: 'preview',
        component: (
          <Button variant='text' startIcon={<Visibility />} onClick={() => setPreviewDialog(true)}>
            Preview
          </Button>
        ),
      },
    ]
  }

  return (
    <Box>
      {formDialog !== 'none' && <FormDialog mode={formDialog} onReturn={handleClickCloseDialog} />}
      {previewDialog && <PreviewDialog onReturn={() => setPreviewDialog(false)} />}
      Form Builder:
      <DataGrid
        customGridToolbar={toolbarList()}
        columns={columns}
        rows={tableData}
        handleDelete={(value) => console.log('delete', value)}
        handleEdit={(value) => {
          setFormDialog('edit')
          dispatch(formBuilderStore.actions.setDataFormEdit(value))
        }}
      />
    </Box>
  )
}

export default FormBuilderHome
