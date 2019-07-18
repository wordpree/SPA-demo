import React from 'react'
import Fab from '@material-ui/core/Fab'
import ArrowLeft from '@material-ui/icons/ChevronLeft'
import ArrowRight from '@material-ui/icons/ChevronRight'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

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

const NavLeft = ({left,bp})=>{
  const classes=useStyles()
  return (
    <div className={classes.nav} style={{left:bp? '-20px':'-24px'}}>
      <Fab size={bp?'small':'medium'} classes={{secondary:classes.secondary}} color="secondary" aria-label="nav-left" onClick={left}>
        <ArrowLeft/>
      </Fab>
    </div>
  )
}

const NavRight = ({right,bp})=>{
  const classes=useStyles()
  return (
    <div className={classes.nav} style={{right:bp? '-20px':'-24px'}}>
      <Fab size={bp?'small':'medium'} classes={{secondary:classes.secondary}} color="secondary" aria-label="nav-right" onClick={right}>
        <ArrowRight/>
      </Fab>
    </div>
  )
}

const Arrow =({activeIndex,handleClickLeft,handleClickRight}) =>{
  const md = useMediaQuery('(max-width:960px)')
  return (
    <React.Fragment>
      <NavLeft bp={md} left={()=>handleClickLeft(activeIndex<1?3:activeIndex)} />
      <NavRight bp={md} right={()=>handleClickRight(activeIndex>2?-1:activeIndex)} />
    </React.Fragment>
  )
}

export default Arrow
