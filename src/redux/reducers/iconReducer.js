const initState ={favIcon: [false,false,false,false,false,false],expandedIcon:[null,null,null,null,null,null]}
const favReducer = (state=initState,actions)=>{
  switch (actions.type) {
    case 'FAVORITEICON_CLICK':
      let favIcon=state.favIcon.map((item,index)=>actions.payload.id === index? !item:item)
      return {
        ...state,
        favIcon
      }
    case 'EXPANDEDICON_CLICK':
      let shareIcon = state.shareIcon.map((item,index)=>actions.payload.id === index ? item=actions.payload.shareIcon:item)
      return {
        ...state,
        shareIcon
      }
    default:
      return state
  }
}

export default favReducer
