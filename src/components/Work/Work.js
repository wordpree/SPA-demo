import React from 'react'
import Explore from '@material-ui/icons/Explore'
import Tooltip from '@material-ui/core/Tooltip'
import Drawer from '@material-ui/core/Drawer'

const pStyle ={
  height:300,
}
const Work = (props)=>{
  return (
    <div className="work">
      <Tooltip title="More works" aria-label="More works" >
          <Explore  style={{cursor:'pointer'}} fontSize="large" onClick={props.onOpenDrawerTop}/>
      </Tooltip>
      <Drawer anchor='top' open={props.top} onClose={props.onCloseDrawerTop} >
        <div
          tabIndex={0}
          role="button"
          onClick={props.onCloseDrawerTop}
          onKeyDown={props.onCloseDrawerTop}
        >
          <div style={pStyle}><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, libero finibus posuere congue, quam sapien tristique arcu, ut ullamcorper mi magna ac tortor. Cras sollicitudin, tortor quis ultrices maximus, leo magna ultricies nisl, vel rutrum mauris augue sed nisl. Pellentesque pulvinar tellus ex, ac feugiat purus euismod a. Proin ultricies tincidunt pellentesque. Aenean scelerisque, neque cursus iaculis consequat, lectus risus aliquam ante, sit amet commodo nisl odio in lorem. Fusce tellus ipsum, sollicitudin quis finibus a, facilisis id augue. Quisque varius diam non nibh aliquet, sed ultricies tellus cursus. Phasellus sagittis vel diam dapibus efficitur. Nunc quis orci finibus turpis cursus venenatis. Sed vel urna tortor. Aliquam fermentum, orci mattis vestibulum dictum, nisl dolor tincidunt orci, id consequat elit risus at mi.</span></div>
        </div>
      </Drawer>
    </div>
  )
}

export default Work
