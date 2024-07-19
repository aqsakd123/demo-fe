import './Header.scss'

import { AppContext } from '@app/config/context'
import { useContext } from 'react'
import React from 'react'
import Sidebar, { drawerWidth, linkItems } from './Sidebar'
import styled from '@emotion/styled'
import { MenuItem, Box, IconButton, Menu, Divider } from '@mui/material'
import { Person } from '@mui/icons-material'
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline'
import { loggingOut } from '@app/api/axios'
import { postLogout } from '@app/api/login/login-api'
import { useSelector } from 'react-redux'
import { RootState } from '@app/store/store'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import { useDispatch } from 'react-redux'
import commonStore from '@app/store/commonStore/CommonStore'

type HeaderProps = {
  displaySidebar: boolean
  handleChangeSideStatus: () => void
}

const StyledMenu = styled(MenuItem)`
  width: 220px;
`

const Header = (props: HeaderProps) => {
  const { displaySidebar, handleChangeSideStatus } = props
  const dispatch = useDispatch()

  const { darkMode } = useSelector((state: RootState) => state.commonStore)

  const { removeUser } = useContext(AppContext)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [title, setTitle] = React.useState<string>(
    linkItems.filter((item) => location.pathname.split('/')[1] === item?.link.replace('/', ''))[0]
      ?.text,
  )

  const displayMenu = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleLogout = () => {
    try {
      postLogout()
      removeUser()
      loggingOut()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div
      className='header'
      style={{
        marginLeft: displaySidebar ? `${drawerWidth}px` : '0px',
        transition: 'all 0.2s ease',
        height: '64px',
        backgroundColor: '#111827',
      }}
    >
      <Box style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
        <Sidebar open={displaySidebar} setTitle={setTitle} />
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <IconButton onClick={handleChangeSideStatus} style={{ color: '#94a3b8' }}>
            <ViewHeadlineIcon />
          </IconButton>
          <Divider
            orientation='vertical'
            color='#94a3b8'
            style={{ marginLeft: '5px', height: '25px', marginRight: '15px' }}
          />
          <span className='header-title'>{title || 'Demo-FE'}</span>
        </div>
      </Box>

      <div className='header-right'>
        <IconButton
          onClick={() => dispatch(commonStore.actions.setDarkmode(!darkMode))}
          sx={{ color: 'white' }}
        >
          {darkMode ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>
        <IconButton onClick={handleClick} sx={{ color: 'white' }}>
          <Person />
        </IconButton>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={displayMenu}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <StyledMenu onClick={handleLogout}>Logout</StyledMenu>
        </Menu>
      </div>
    </div>
  )
}

export default Header
