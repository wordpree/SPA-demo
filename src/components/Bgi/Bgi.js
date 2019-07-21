import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import bicycle from '../../assets/image/henry-co-unsplash.jpg'
import wall from '../../assets/image/leonardo-yip-unsplash.jpg'
import book from '../../assets/image/raychan-unsplash.jpg'
import hall from '../../assets/image/adam-muise-unsplash.jpg'
import adv from '../../assets/image/dahee-son-unsplash.jpg'
import snap from '../../assets/image/1.jpg'
const useStyles = makeStyles({
  icons:{
    width:'12%',
    display:'flex',
    position:'absolute',
    top:  '3em',
    right: '3em',
    justifyContent:'space-around',
  }
})

const Bgi = (props)=>{
  const classes= useStyles()
  const img = [bicycle, wall, book, hall, adv]
  const radUrl = Math.floor(Math.random()*5)
  console.log(snap)
  return (
    <CardMedia className="bgi" image={img[radUrl]} style={{height:0,paddingTop:'43.75%'}}>
      <div className={classes.icons} >
        {props.children}
      </div>
    </CardMedia>
  )

}
export default Bgi
