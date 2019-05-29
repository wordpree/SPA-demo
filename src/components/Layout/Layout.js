import React from 'react'
import Divider from '@material-ui/core/Divider'
import Bgi from '../Bgi/Bgi'
import Carousel from '../../container/Carousel'
import WorkDrawer from '../../container/WorkDrawer'
import AboutDrawer from '../../container/AboutDrawer'
import Footer from '../Footer/Footer'

const Layout = ()=>{
  return (
    <React.Fragment>
      <Bgi>
        <WorkDrawer />
        <AboutDrawer />
      </Bgi>
      <Divider variant="middle" style={{margin:'1.25em 0'}}/>
      <Carousel />
      <Divider variant="middle" />
      <Footer />
    </React.Fragment>
  )
}

export default Layout
