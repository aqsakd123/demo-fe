import { Link } from 'react-router-dom'
import './Header.scss'

import styled from '@emotion/styled'
import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '@app/store/store'

export const drawerWidth = 240
type SidebarProps = {
  open: boolean
  setTitle: (str: string) => void
}

type LinkItemsType = {
  id: number
  text: string
  link: string
  disabled?: boolean
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

export const linkItems = (isProjected: boolean): LinkItemsType[] => {
  return [
    {
      id: 1,
      text: 'Excel',
      link: '/excel',
      disabled: true,
    },
    {
      id: 2,
      text: 'Form Builder',
      link: '/form-builder',
      disabled: true,
    },
    {
      id: 3,
      text: 'Project Management',
      link: '/project-management',
    },
    {
      id: 3.1,
      text: '- Tag Management',
      link: '/tag-management',
      disabled: !isProjected,
    },
    {
      id: 4,
      text: '- Code File Management',
      link: '/code-file-management',
      disabled: !isProjected,
    },
    {
      id: 5,
      text: '- Code Feature ',
      link: '/code-feature-management',
      disabled: !isProjected,
    },
    {
      id: 6,
      text: '- Code Common',
      link: '/code-common-management',
      disabled: !isProjected,
    },
  ]
}

const Sidebar = (props: SidebarProps) => {
  const { open, setTitle } = props
  const { currentProjectId } = useSelector((state: RootState) => state.projectStore)

  function handleChooseLink(item: LinkItemsType): void {
    setTitle(item.text)
  }

  return (
    <StyledDrawer variant='persistent' anchor='left' open={open}>
      <List>
        {linkItems(Boolean(currentProjectId)).map((item) => (
          <StyledLink
            key={item.id}
            to={item.link}
            style={{
              pointerEvents: item.disabled ? 'none' : undefined,
            }}
          >
            <ListItem
              onClick={() => handleChooseLink(item)}
              style={{ paddingTop: '0px', paddingBottom: '0px' }}
            >
              <ListItemButton
                selected={location.pathname.split('/')[1] === item?.link.replace('/', '')}
                disabled={item.disabled}
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
