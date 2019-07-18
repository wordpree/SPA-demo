const initState={
  activeIndex:0,
  cardWidth:0,
}
const slider = (state=initState,actions)=>{
  switch (actions.type) {
    case 'ARROW_CLICK':
      return {
        ...state,
        activeIndex:actions.payload
      }
    case 'WINDOW_RESIZE':
      return {
        ...state,
        cardWidth:actions.payload
      }
    default:
      return state
  }
}

export default slider
