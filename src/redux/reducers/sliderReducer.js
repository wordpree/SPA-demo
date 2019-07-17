const initState={
  activeIndex:0,
  width:0,
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
        width:actions.payload
      }
    default:
      return state
  }
}

export default slider
