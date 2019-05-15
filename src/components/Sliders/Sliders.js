import React from 'react'
import Slider from './Slider'
import Grid from '@material-ui/core/Grid'
import data from '../../imageData/imageData'

const Sliders = ()=>{
  return (
    <div className="carousel" style={{maxWidth:'85%',margin:'0 auto'}}>
      <Grid container justify='center' spacing={24}>
      {data.map(item=><Slider key={item.id} data={item}/>)}
      </Grid>
    </div>
  )
}

export default Sliders
