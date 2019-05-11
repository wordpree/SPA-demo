import React from 'react'
import Face from '@material-ui/icons/Face'
import Tooltip from '@material-ui/core/Tooltip'

const About = (props)=>{
  return (
    <Tooltip title="About me" aria-label="About me">
      <Face style={{cursor:'pointer'}} fontSize="large"/>
    </Tooltip>
  )
}

export default About
