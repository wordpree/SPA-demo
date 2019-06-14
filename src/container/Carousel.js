import SliderLists from '../components/Sliders/SliderLists'
import {clickRightNav,clickLeftNav,clickFav} from '../redux/actions'
import {connect} from 'react-redux'

const mapStateToProps= state =>({
  activeIndex:state.slider.activeIndex,
  favIcon:state.favorite.favIcon,
})
const mapDispatchToProps=dispatch=>({
  handleClickLeft:activeIndex=>dispatch( clickLeftNav(activeIndex) ),
  handleClickRight:activeIndex=>dispatch( clickRightNav(activeIndex) ),
  handleClickFav:id=>dispatch( clickFav(id) )
})

export default connect(mapStateToProps,mapDispatchToProps)(SliderLists)
