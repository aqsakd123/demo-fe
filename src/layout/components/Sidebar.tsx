import { Link } from 'react-router-dom'
import './Header.scss'

import React from 'react'
import styled from '@emotion/styled'
import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material'

export const drawerWidth = 240
type SidebarProps = {
  open: boolean
  setTitle: (str: string) => void
}

type LinkItemsType = {
  id: number
  text: string
  link: string
}

const StyledDrawer = styled(Drawer)`
  width: ${drawerWidth}px;
  flex-shrink: 0;

  & .MuiDrawer-paper {
    width: ${drawerWidth}px;
    box-sizing: border-box;
  }

  .css-azpq5 {
    padding: 0px;
  }
`

const StyledLink = styled(Link)`
  width: 100%;
  padding: 0px;
`

export const linkItems: LinkItemsType[] = [
  {
    id: 1,
    text: 'Excel',
    link: '/excel',
  },
  {
    id: 2,
    text: 'Form Builder',
    link: '/form-builder',
  },
]

const Sidebar = (props: SidebarProps) => {
  const { open, setTitle } = props

  function handleChooseLink(item: LinkItemsType): void {
    setTitle(item.text)
  }

  return (
    <StyledDrawer variant='persistent' anchor='left' open={open}>
      <List>
        {linkItems.map((item) => (
          <StyledLink key={item.id} to={item.link}>
            <ListItem
              onClick={() => handleChooseLink(item)}
              style={{ paddingTop: '0px', paddingBottom: '0px' }}
            >
              <ListItemButton
                selected={location.pathname.split('/')[1] === item?.link.replace('/', '')}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </StyledLink>
        ))}
      </List>
    </StyledDrawer>
  )
}

export default Sidebar
