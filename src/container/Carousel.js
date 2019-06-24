import SliderLists from '../components/Sliders/SliderLists'
import {clickRightNav,clickLeftNav,clickFav,clickShareIcon} from '../redux/actions'
import {connect} from 'react-redux'

const mapStateToProps= state =>({
  activeIndex:state.slider.activeIndex,
  favIcon:state.icon.favIcon,
  shareIcon:state.icon.shareIcon,
})
const mapDispatchToProps=dispatch=>({
  handleClickLeft:activeIndex=>dispatch( clickLeftNav(activeIndex) ),
  handleClickRight:activeIndex=>dispatch( clickRightNav(activeIndex) ),
  handleClickFav:id=>dispatch( clickFav(id) ),
  handleClickShare:(shareIcon,id)=>dispatch( clickShareIcon(shareIcon,id) ),
})

export default connect(mapStateToProps,mapDispatchToProps)(SliderLists)
