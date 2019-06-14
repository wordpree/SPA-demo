const initState={
  activeIndex:0,
}
const slider = (state=initState,actions)=>{
  switch (actions.type) {
    case 'ARROW_CLICK':
      return {
        ...state,
        activeIndex:actions.payload
      }
    default:
      return state
  }
}

export default slider
