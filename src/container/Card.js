import { connect } from 'react-redux'
import CardSingle from '../components/CardSingle/CardSingle'
import { clickFav,clickShareIcon } from '../redux/actions'

const mapStateToProps=state=>({
  favIcon:state.icon.favIcon,
  shareIcon:state.icon.shareIcon,
})
const mapDispatchToProps=dispatch=>({
  handleClickFav:id=>dispatch( clickFav(id) ),
  handleClickShare:(shareIcon,id)=>dispatch( clickShareIcon(shareIcon,id) ),
})
export default connect(mapStateToProps,mapDispatchToProps)(CardSingle)
