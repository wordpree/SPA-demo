import React from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Link } from 'react-router-dom'
import {Email,Twitter,Linkedin,Facebook,LinkPlus,ArrowLeftCircle} from 'mdi-material-ui'
import { FbShareBtn,TwShareBtn } from './SocialMedia';
import data from '../../imageData/imageData'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    flexGrow:1,
  },
  img:{
    maxWidth:'100%'
  },
  menu:{
    display: 'flex',
  },
  icon:{
    margin:'0.5em',
    alignSelf:'center'
  },
  social:{
    alignSelf:'center'
  },
  iconBtn:{
    display:'flex',
    alignItems: 'center'
  },
})

const CardSingle = (props)=>{

  const classes = useStyles()
  const {shareIcon,favIcon,match,handleClickShare,handleClickFav} = props
  const card = data.find(item=>item.id === parseInt(match.params.cardId,10))
  const {url,title,content,id}=card

  return (
    <Container maxWidth='xl'>
      <Grid container className={classes.root} spacing={6}>
        <Grid item xs={12} md={6}>
          <img className={classes.img} alt="complex" src={url} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography component="p">
            {content}
          </Typography>
          <Divider variant="middle" style={{margin:'1.25em 0'}}/>
          <div className={classes.iconBtn} >
            <IconButton aria-label="Add to favorites" onClick={()=>handleClickFav(id)}>
              <FavoriteIcon color={favIcon[id] ? 'secondary':'inherit'}/>
            </IconButton>
            <IconButton aria-label="Share" onClick={evt=>handleClickShare(evt.currentTarget,id)}>
              <ShareIcon />
            </IconButton>
            <IconButton aria-label="go back" style={{marginLeft:'auto'}}>
              <Link to={'/'} style={{color:'inherit'}}>
                <ArrowLeftCircle />
              </Link>
            </IconButton>
          </div>
          <Menu
            className={classes.menu}
            id="share-menu"
            anchorEl={shareIcon[id]}
            keepMounted
            open={Boolean(shareIcon[id])}
            onClose={()=>handleClickShare(null,id)}
          >
            <MenuItem>
              <LinkPlus className={classes.icon} />Copy Link
            </MenuItem>
            <MenuItem>
              <Email className={classes.icon} />Email
            </MenuItem>
            <MenuItem>
              <Linkedin className={classes.icon} /><span>Linkedin</span>
            </MenuItem>
            <MenuItem>
              <TwShareBtn><Twitter className={classes.icon} /><span className={classes.social}>Twitter</span></TwShareBtn>
            </MenuItem>
            <MenuItem>
              <FbShareBtn id={id}><Facebook className={classes.icon} /><span className={classes.social}>Facebook</span></FbShareBtn>
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CardSingle
