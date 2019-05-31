import React from 'react'
import Fab from '@material-ui/core/Fab'
import ArrowLeft from '@material-ui/icons/ChevronLeft'
import ArrowRight from '@material-ui/icons/ChevronRight'

const NavLeft = ({left})=>{
  return (
    <div className="navLeft" style={{position:'absolute',top:'50%',left:'-5%'}}>
      <Fab size="medium" color="secondary" aria-label="nav-left" onClick={left}>
        <ArrowLeft/>
      </Fab>
    </div>
  )
}

const NavRight = ({right})=>{
  return (
    <div className="navRight" style={{position:'absolute',top:'50%',right:'-5%'}}>
      <Fab size="medium" color="secondary" aria-label="nav-right" onClick={right}>
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
