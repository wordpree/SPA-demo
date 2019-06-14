const initState ={favIcon: [false,false,false,false,false,false]}
const favReducer = (state=initState,actions)=>{
  switch (actions.type) {
    case 'FAVORITEICON_CLICK':
      let favIcon=state.favIcon.map((item,index)=>actions.payload.id === index? !item:item)
      return {favIcon}
    default:
      return state
  }
}

export default favReducer
