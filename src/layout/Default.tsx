import { Outlet } from 'react-router-dom'
import React from 'react'
import Header from '@app/layout/components/Header'
import { drawerWidth } from './components/Sidebar'
import commonStore from '@app/store/commonStore/CommonStore'
import { useDispatch } from 'react-redux'

const Default = () => {
  const [displaySidebar, setDisplaySidebar] = React.useState<boolean>(false)
  const dispatch = useDispatch()

  const handleChangeSideStatus = () => {
    setDisplaySidebar(!displaySidebar)
    dispatch(commonStore.actions.setSidebar(!displaySidebar))
  }

  return (
    <>
      <Header displaySidebar={displaySidebar} handleChangeSideStatus={handleChangeSideStatus} />
      <div
        style={{
          marginLeft: displaySidebar ? `${drawerWidth}px` : '0px',
          width: displaySidebar ? `calc(100% - ${drawerWidth}px)` : '100%',
          transition: 'all 0.2s ease',
          padding: '20px',
        }}
      >
        <Outlet />
      </div>
    </>
  )
}

export default Default
