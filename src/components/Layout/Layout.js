import React from 'react'
import Divider from '@material-ui/core/Divider'
import CssBaseline from '@material-ui/core/CssBaseline'
import Bgi from '../Bgi/Bgi'
import Carousel from '../../container/Carousel'
import WorkDrawer from '../../container/WorkDrawer'
import AboutDrawer from '../../container/AboutDrawer'
import Card from '../../container/Card'
import { Route } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Layout = ()=>{
  return (
    <React.Fragment>
      <CssBaseline />
      <Bgi>
        <WorkDrawer />
        <AboutDrawer />
      </Bgi>
      <Divider variant="middle" style={{margin:'1.25em 0'}}/>
      <Route exact path='/' component={Carousel} />
      <Route path='/:cardId' component={Card} />
      <Divider variant="middle" />
      <Footer />
    </React.Fragment>
  )
}

export default Layout
