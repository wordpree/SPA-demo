import React from 'react'
import Slider from './Slider'
import Arrow from './Arrow'
import data from '../../imageData/imageData'

const wrapper = {
  position:'absolute',
  display:'flex',
  transition:'transform 0.5s ease-in-out'
}

const SliderLists = (props)=>{
  return (
    <div className="carousel-entry" style={{maxWidth:'81%',margin:'0 auto',position:'relative'}}>
      <Arrow {...props}/>
      <div className="carousel" style={{position:'relative',minHeight:'528px',overflow:'hidden'}}>
        <div className="wrapper" style={{...wrapper,transform:`translateX(${-100/data.length*props.activeIndex}%)`}}>
            {data.map(item=><Slider key={item.id} data={item} {...props}/>)}
        </div>
      </div>
    </div>
  )
}

export default SliderLists
