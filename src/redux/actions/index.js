
export const toggleDrawerRight = open =>{

  return {
    type:'TOGGLE_DRAWER_RIGHT',
    payload:open,
  }
}

export const toggleDrawerTop = open =>{

  return {
    type:'TOGGLE_DRAWER_TOP',
    payload:open,
  }
}

export const clickRightNav = activeIndex =>{

  return {
    type:'ARROW_CLICK',
    payload:activeIndex+1,
  }
}

export const clickLeftNav = activeIndex =>{

  return {
    type:'ARROW_CLICK',
    payload:activeIndex-1,
  }
}

export const clickFav = id=>{

  return {
    type:'FAVORITEICON_CLICK',
    payload:{id},
  }
}

export const clickShareIcon = (shareIcon,id)=>{

  return {
    type:'EXPANDEDICON_CLICK',
    payload:{shareIcon,id},
  }
}

export const handleWidth = width=>{

  return {
    type:'WINDOW_RESIZE',
    payload:width,
  }
}
