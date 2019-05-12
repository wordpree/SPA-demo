import React from 'react'
import Bgi from '../Bgi/Bgi'
import Work from '../Work/Work'
import AboutDrawer from '../../container/AboutDrawer'

const Layout = ()=>{
  return (
    <Bgi>
      <Work />
      <AboutDrawer />
    </Bgi>
  )
}

export default Layout
