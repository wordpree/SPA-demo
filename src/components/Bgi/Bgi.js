import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import flower from '../../assets/image/flower.jpeg'
import sunset from '../../assets/image/sunset.jpeg'
import dessert from '../../assets/image/dessert.jpeg'
import train from '../../assets/image/train.jpeg'

const Bgi = (props)=>{
  const img = [dessert,flower,sunset,train]
  const radUrl = Math.floor(Math.random()*4)
  return (
    <CardMedia className="bgi" image={img[radUrl]} style={{height:0,paddingTop:'56.25%'}}>
      {props.children}
    </CardMedia>
  )

}
export default Bgi
