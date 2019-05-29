import React from 'react'
import Slider from './Slider'
import Arrow from './Arrow'
import data from '../../imageData/imageData'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { CSSTransition } from 'react-transition-group'
import store from '../../redux/store'
import './slider.css'

const wrapper = {
  display:'flex',
  justifyContent: 'space-around',
  overflow: 'hidden',
  flexWrap:'wrap',
}
const SliderLists = (props)=>{
  return (
    <div className="carousel" style={{maxWidth:'82%',margin:'0 auto',position:'relative'}}>

      <Arrow {...props}/>
      <div className="wrapper" style={wrapper}>
        <CSSTransition
          in={true}
          timeout={300}
          classNames='slider'
          unmountOnExit
          onEnter={() =>{} }
          onExited={() =>{} }
        >
          <GridList cols={3} cellHeight='auto' spacing={10} style={{flexWrap:'nowrap',overflow: 'hidden'}}>
            {data.map(item=><GridListTile key={item.id}><Slider data={item}/></GridListTile>)}
          </GridList>
        </CSSTransition>
      </div>
    </div>
  )
}

export default SliderLists
