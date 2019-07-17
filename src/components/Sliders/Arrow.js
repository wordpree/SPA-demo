import React from 'react'
import Fab from '@material-ui/core/Fab'
import ArrowLeft from '@material-ui/icons/ChevronLeft'
import ArrowRight from '@material-ui/icons/ChevronRight'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  nav:{
    position:'absolute',
    top:'50%',
    transform:'translateY(-50%)',
    zIndex:999,
  },
  secondary:{
    backgroundColor:'rgba(245, 0, 87,0.65)'
  }
})

const NavLeft = ({left})=>{
  const classes=useStyles()
  return (
    <div className={classes.nav} style={{left:'-13.5px'}}>
      <Fab size="medium" classes={{secondary:classes.secondary}} color="secondary" aria-label="nav-left" onClick={left}>
        <ArrowLeft/>
      </Fab>
    </div>
  )
}

const NavRight = ({right})=>{
  const classes=useStyles()
  return (
    <div className={classes.nav} style={{right:'-13.5px'}}>
      <Fab size="medium" classes={{secondary:classes.secondary}} color="secondary" aria-label="nav-right" onClick={right}>
        <ArrowRight/>
      </Fab>
    </div>
  )
}

const Arrow =({activeIndex,handleClickLeft,handleClickRight}) =>{
  return (
    <React.Fragment>
      <NavLeft  left={()=>handleClickLeft(activeIndex<1?3:activeIndex)} />
      <NavRight right={()=>handleClickRight(activeIndex>2?-1:activeIndex)} />
    </React.Fragment>
  )
}

export default Arrow
