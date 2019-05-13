import React from 'react'
import Divider from '@material-ui/core/Divider'
import Bgi from '../Bgi/Bgi'
import WorkDrawer from '../../container/WorkDrawer'
import AboutDrawer from '../../container/AboutDrawer'

const Layout = ()=>{
  return (
    <React.Fragment>
      <Bgi>
        <WorkDrawer />
        <AboutDrawer />
      </Bgi>
      <Divider variant="middle" />

    </React.Fragment>
  )
}

export default Layout
