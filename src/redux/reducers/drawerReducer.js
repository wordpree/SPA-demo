
const initState ={
  right:false,
  top:false
}
const drawer = (state=initState,actions) => {
  switch (actions.type) {
    case 'TOGGLE_DRAWER_RIGHT':
      return {
        ...state,
        right:actions.payload
      }
    case 'TOGGLE_DRAWER_TOP':
      return {
        ...state,
        top:actions.payload
      }
    default:
      return state
  }
}

export default drawer
