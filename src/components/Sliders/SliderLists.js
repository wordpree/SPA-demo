import React from 'react'
import Slider from './Slider'
import Arrow from './Arrow'
import { withStyles  } from '@material-ui/core/styles'
import data from '../../imageData/imageData'

const styles = theme =>({
  wrapper: {
    position:'absolute',
    display:'flex',
    transition:'transform 0.5s ease-in-out'
  },
  carouselEntry:{
    [theme.breakpoints.up('md')]:{
      maxWidth:'85%',
    },
    maxWidth:'90%',
    margin:'0 auto',
    position:'relative'
  },
  carousel:{
    position:'relative',
    minHeight:'528px',
    overflow:'hidden'
  },
})

const SliderLists = (props)=>{
  const {classes} = props
  return (
    <div className={classes.carouselEntry} >
      <Arrow {...props}/>
      <div className={classes.carousel}>
        <div className={classes.wrapper} style={{transform:`translateX(${-100/data.length*props.activeIndex}%)`}}>
          {data.map(item=><Slider key={item.id} data={item} {...props}/>)}
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(SliderLists)
