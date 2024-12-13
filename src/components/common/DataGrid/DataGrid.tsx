import * as React from 'react'
import { Box } from '@mui/material'
import {
  DataGrid as MUIDataGrid,
  GridColDef,
  GridRowsProp,
  DataGridProps,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarQuickFilter,
  GridActionsCellItem,
} from '@mui/x-data-grid'
import styled from 'styled-components'
import { Delete, Edit, Visibility } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { RootState } from '@app/store/store'

// eslint-disable-next-line no-empty-pattern
// @ts-ignore
const StyledGridOverlay = styled('div')(({ darkMode }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  minHeight: '200px',
  '& .ant-empty-img-1': {
    fill: darkMode ? '#4b5563' : '#aeb8c2',
  },
  '& .ant-empty-img-2': {
    fill: darkMode ? '#697688' : '#f5f5f7',
  },
  '& .ant-empty-img-3': {
    fill: darkMode ? '#374151' : '#dce0e6',
  },
  '& .ant-empty-img-4': {
    fill: darkMode ? '#1a202c' : '#fff',
  },
  '& .ant-empty-img-5': {
    fillOpacity: '0.8',
    fill: darkMode ? '#4b5563' : '#f5f5f5',
  },
}))

function CustomNoRowsOverlay() {
  const { darkMode } = useSelector((state: RootState) => state.commonStore)

  return (
    <StyledGridOverlay
      // @ts-ignore
      darkMode={darkMode}
    >
      <svg width='120' height='100px' viewBox='0 0 184 152' aria-hidden focusable='false'>
        <g fill='none' fillRule='evenodd'>
          <g transform='translate(24 31.67)'>
            <ellipse className='ant-empty-img-5' cx='67.797' cy='106.89' rx='67.797' ry='12.668' />
            <path
              className='ant-empty-img-1'
              d='M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z'
            />
            <path
              className='ant-empty-img-2'
              d='M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z'
            />
            <path
              className='ant-empty-img-3'
              d='M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z'
            />
          </g>
          <path
            className='ant-empty-img-3'
            d='M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z'
          />
          <g className='ant-empty-img-4' transform='translate(149.65 15.383)'>
            <ellipse cx='20.654' cy='3.167' rx='2.849' ry='2.815' />
            <path d='M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z' />
          </g>
        </g>
      </svg>
      <Box sx={{ mt: 1 }}>No Rows</Box>
    </StyledGridOverlay>
  )
}

const CustomToolbar: React.FC<DataGridProp> = (props: DataGridProp) => {
  const {
    // defaultGridToolbar = ['columns', 'density', 'export', 'filter', 'search'],
    defaultGridToolbar = [],
    customGridToolbar,
  } = props

  return (
    <GridToolbarContainer>
      {defaultGridToolbar?.map((item) => {
        if (item === 'columns') return <GridToolbarColumnsButton key={item} />
        if (item === 'filter') return <GridToolbarFilterButton key={item} />
        if (item === 'density') return <GridToolbarDensitySelector key={item} />
        if (item === 'export') return <GridToolbarExport key={item} />
        if (item === 'search') return <GridToolbarQuickFilter key={item} />
      })}
      {customGridToolbar?.map((itemGrid, index) => {
        // @ts-ignore
        return React.cloneElement(itemGrid.component, { key: index })
      })}
    </GridToolbarContainer>
  )
}

type GridToolBar = 'density' | 'columns' | 'filter' | 'export' | 'search' | CustomButton
export type CustomButton = 'custom'

type DataGridProp = {
  columns: GridColDef<any>[]
  rows: GridRowsProp<any>
  pageSize?: number
  page?: number
  defaultGridToolbar?: GridToolBar[]
  customGridToolbar?: Array<{ name?: string; component: React.ReactNode | JSX.Element }>
  handleEdit?: (data: any) => void
  handleDetail?: (data: any) => void
  handleDelete?: (data: any) => void
  selectCheckboxes?: boolean
} & DataGridProps

const renderColumns = (props: DataGridProp) => {
  const { columns } = props
  return columns
}
const DataGrid: React.FC<DataGridProp> = (props: DataGridProp) => {
  const {
    rows,
    columns,
    selectCheckboxes,
    handleDelete,
    handleEdit,
    handleDetail,
    pageSize,
    page,
    ...restProps
  } = props

  const { darkMode } = useSelector((state: RootState) => state.commonStore)

  const columnsField: GridColDef<any>[] = React.useMemo(() => {
    return columns.findIndex(
      (column) => column.field === 'action' && column.headerName === 'Actions',
    ) === -1 && !(handleDelete || handleEdit || handleDetail)
      ? renderColumns(props)
      : renderColumns(props).concat([
          {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            pinnable: true,
            getActions: ({ row }) => {
              const actionList = []
              if (handleDetail) {
                actionList.push(
                  <GridActionsCellItem
                    icon={<Visibility />}
                    label='Detail'
                    className='textPrimary'
                    // @ts-ignore
                    onClick={() => handleDetail(row)}
                    color='inherit'
                  />,
                )
              }
              if (handleEdit) {
                actionList.push(
                  <GridActionsCellItem
                    icon={<Edit />}
                    label='Edit'
                    className='textPrimary'
                    // @ts-ignore
                    onClick={() => handleEdit(row)}
                    color='inherit'
                  />,
                )
              }
              if (handleDelete) {
                actionList.push(
                  <GridActionsCellItem
                    icon={<Delete />}
                    label='Delete'
                    className='textPrimary'
                    // @ts-ignore
                    onClick={() => handleDelete(row)}
                    color='inherit'
                  />,
                )
              }

              return actionList
            },
          },
        ])
  }, [columns, handleDelete, handleEdit])

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <MUIDataGrid
        slots={{
          noRowsOverlay: CustomNoRowsOverlay,
          toolbar: () => <CustomToolbar {...props} />,
        }}
        rows={rows}
        columns={columnsField}
        checkboxSelection={selectCheckboxes}
        disableRowSelectionOnClick
        paginationModel={
          pageSize || page ? { pageSize: pageSize ?? 25, page: page ?? 0 } : undefined
        }
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
          '& .MuiDataGrid-columnHeadersInner': {
            backgroundColor: darkMode ? '#2a2d64' : 'lightblue',
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 'bold',
          },
          '& .MuiDataGrid-columnSeparator': {
            color: '#111827',
          },
          '& .MuiDataGrid-sortIcon': {
            color: '#111827',
          },
        }}
        {...restProps}
      />
    </div>
  )
}

export default DataGrid
