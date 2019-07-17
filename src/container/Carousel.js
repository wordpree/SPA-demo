import SliderLists from '../components/Sliders/SliderLists'
import {clickRightNav,clickLeftNav,clickFav,clickShareIcon,handleWidth} from '../redux/actions'
import {connect} from 'react-redux'

const mapStateToProps= state =>({
  activeIndex:state.slider.activeIndex,
  width:state.slider.width,
  favIcon:state.icon.favIcon,
  shareIcon:state.icon.shareIcon,

})
const mapDispatchToProps=dispatch=>({
  handleClickLeft:activeIndex=>dispatch( clickLeftNav(activeIndex) ),
  handleClickRight:activeIndex=>dispatch( clickRightNav(activeIndex) ),
  handleResizeWidth:width=>dispatch(handleWidth(width) ),
  handleClickFav:id=>dispatch( clickFav(id) ),
  handleClickShare:(shareIcon,id)=>dispatch( clickShareIcon(shareIcon,id) ),
})

export default connect(mapStateToProps,mapDispatchToProps)(SliderLists)
