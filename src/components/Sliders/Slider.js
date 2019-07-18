import React,{useEffect} from 'react'
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
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Link } from 'react-router-dom'
import throttle from 'lodash/throttle'

const useStyles = makeStyles({
  card: {
    minWidth: 485,
    marginRight:'1.25em',
    flex:1,

  },
  menu:{
    display: 'flex',
  },
})

const Slider = ({data,handleClickFav,favIcon,handleResizeWidth,cardWidth})=>{
  const classes = useStyles()
  const {url,title,content,id}=data
  const lg = useMediaQuery('(min-width:1280px)')
  const md = useMediaQuery('(max-width:960px)')

  const handleWidth = (mgn,number,percent)=> (window.innerWidth*percent-mgn)/number
  cardWidth =  md ? handleWidth(0,1,0.9) : lg ? handleWidth(17.5,3,0.85): handleWidth(17.5,2,0.85)
  useEffect(()=>{
    const throttleHandleResize = throttle(()=>handleResize(),250)
    function handleResize(){
        const cWidth =  md ? handleWidth(0,1,0.9) : lg ? handleWidth(17.5,3,0.85): handleWidth(17.5,2,0.85)
        handleResizeWidth(cWidth)
      }
    window.addEventListener('resize',throttleHandleResize)
    return ()=>window.removeEventListener('resize',throttleHandleResize)
  })

  return (
      <Card className={classes.card} style={{minWidth:cardWidth+'px'}}>
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
