import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  card: {
    minWidth: 485,
    margin:12,
    flex:1,
  },
  menu:{
    display: 'flex',
  },
})

const Slider = ({data,handleClickFav,favIcon,handleClickShare,shareIcon})=>{
  const classes = useStyles()
  const {url,title,content,id}=data

  return (
      <Card className={classes.card}>
        <Link to={`/${id}`} style={{textDecoration:'none',color:'inherit'}}>
          <CardActionArea>
            <CardMedia
              style={{paddingTop:'56.25%',height:0}}
              image={url}
              title={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography component="p">
                {content}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <IconButton aria-label="Add to favorites" onClick={()=>handleClickFav(id)}>
            <FavoriteIcon color={favIcon[id] ? 'secondary':'inherit'}/>
          </IconButton>
          <IconButton aria-label="More" style={{marginLeft:'auto'}}>
            <MoreVertIcon />
          </IconButton>
        </CardActions>
      </Card>
  )
}
export default Slider
