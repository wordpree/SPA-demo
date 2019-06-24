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
import EmailIcon from '@material-ui/icons/Email'
import LinkIcon from '@material-ui/icons/Link'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Icon from '@material-ui/core/Icon'
import { loadCSS } from 'fg-loadcss'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  card: {
    minWidth: 485,
    margin:12,
    flex:1,
  },
  menu:{
    display: 'flex',
  },
  icon:{
    margin:'0.5em'
  }
})

const Slider = ({data,handleClickFav,favIcon,handleClickShare,shareIcon})=>{
  const classes = useStyles()
  const {url,title,content,id}=data
  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css'
    )
  })
  return (
      <Card className={classes.card}>
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
        <CardActions>
          <IconButton aria-label="Add to favorites" onClick={()=>handleClickFav(id)}>
            <FavoriteIcon color={favIcon[id] ? 'secondary':'inherit'}/>
          </IconButton>
          <IconButton aria-label="Share" onClick={event=>handleClickShare(event.currentTarget,id)}>
            <ShareIcon />
          </IconButton>
        </CardActions>
        <Menu
          className={classes.menu}
          id="share-menu"
          anchorEl={shareIcon[id]}
          keepMounted
          open={Boolean(shareIcon[id])}
          onClose={()=>handleClickShare(null,id)}
        >
          <MenuItem><LinkIcon className={classes.icon}/> Copy Link</MenuItem>
          <MenuItem><EmailIcon className={classes.icon}/> Email</MenuItem>
          <MenuItem><Icon className={`${classes.icon} fab fa-linkedin`}/>Linkin</MenuItem>
        </Menu>
      </Card>
  )
}
export default Slider
