import React from 'react'
import Face from '@material-ui/icons/Face'
import Tooltip from '@material-ui/core/Tooltip'
import Drawer from '@material-ui/core/Drawer'

const pStyle ={
  width:350
}
const About = (props)=>{
  return (
    <div className='aboutMe'>
      <Tooltip title="About me" aria-label="About me">
        <Face style={{cursor:'pointer'}} fontSize="large" onClick={props.onOpenDrawerRight}/>
      </Tooltip>
      <Drawer anchor='right' open={props.right} onClose={props.onCloseDrawerRight} >
        <div
          tabIndex={0}
          role="button"
          onClick={props.onCloseDrawerRight}
          onKeyDown={props.onCloseDrawerRight}
        >
          <div style={pStyle}><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, libero finibus posuere congue, quam sapien tristique arcu, ut ullamcorper mi magna ac tortor. Cras sollicitudin, tortor quis ultrices maximus, leo magna ultricies nisl, vel rutrum mauris augue sed nisl. Pellentesque pulvinar tellus ex, ac feugiat purus euismod a. Proin ultricies tincidunt pellentesque. Aenean scelerisque, neque cursus iaculis consequat, lectus risus aliquam ante, sit amet commodo nisl odio in lorem. Fusce tellus ipsum, sollicitudin quis finibus a, facilisis id augue. Quisque varius diam non nibh aliquet, sed ultricies tellus cursus. Phasellus sagittis vel diam dapibus efficitur. Nunc quis orci finibus turpis cursus venenatis. Sed vel urna tortor. Aliquam fermentum, orci mattis vestibulum dictum, nisl dolor tincidunt orci, id consequat elit risus at mi.</span></div>
        </div>
      </Drawer>
    </div>
  )
}

export default About
