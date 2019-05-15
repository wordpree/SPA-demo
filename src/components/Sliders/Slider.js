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
import Grid from '@material-ui/core/Grid'

const Slider = ({data})=>{
  return (
    <Grid item lg={4}>
      <Card style={{maxWidth:375,margin:'0 auto'}}>
        <CardActionArea>
          <CardMedia
            style={{height:140}}
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
    </Grid>
  )
}
export default Slider
