import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import bicycle from '../../assets/image/henry-co-unsplash.jpg'
import wall from '../../assets/image/leonardo-yip-unsplash.jpg'
import book from '../../assets/image/raychan-unsplash.jpg'
import hall from '../../assets/image/adam-muise-unsplash.jpg'
import adv from '../../assets/image/dahee-son-unsplash.jpg'

const Bgi = (props)=>{
  const img = [bicycle, wall, book, hall, adv]
  const radUrl = Math.floor(Math.random()*5)
  return (
    <div style={{height:'61vh',overflow: 'hidden'}}>
    <CardMedia className="bgi" image={img[radUrl]} style={{height:0,paddingTop:'43.75%'}}>
      <div
        className="icons"
        style={
          {
            width:'12%',
            display:'flex',
            position:'absolute',
            top:  '3em',
            right: '3em',
            justifyContent:'space-around',
          }
        }>
        {props.children}
      </div>
    </CardMedia>
    </div>
  )

}
export default Bgi
