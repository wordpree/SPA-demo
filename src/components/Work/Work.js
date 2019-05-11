import React from 'react'
import Explore from '@material-ui/icons/Explore'
import Tooltip from '@material-ui/core/Tooltip'

const Work = (props)=>{
  return (
    <Tooltip title="More works" aria-label="More works" >
        <Explore  style={{cursor:'pointer'}} fontSize="large"/>
    </Tooltip>
  )
}

export default Work
