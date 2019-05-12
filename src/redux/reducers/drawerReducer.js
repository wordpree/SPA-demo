
const drawer = (state={right:false},actions) => {
  switch (actions.type) {
    case 'TOGGLE_DRAWER':
      return {
        ...state,
        right:actions.payload
      }
    default:
      return state
  }
}

export default drawer
