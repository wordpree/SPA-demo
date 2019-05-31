import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  card: {
    minWidth: 485,
    margin:12,
    flex:1,
  }
})

const Slider = ({data})=>{
  const classes = useStyles()
  return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            style={{paddingTop:'56.25%',height:0}}
            image={data.url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data.title}
            </Typography>
            <Typography component="p">
              {data.content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Add to favorites">
              <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
  )
}
export default Slider
