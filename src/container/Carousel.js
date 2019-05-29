import SliderLists from '../components/Sliders/SliderLists'
import {clickRightNav,clickLeftNav} from '../redux/actions'
import {connect} from 'react-redux'

const mapStateToProps= state =>({
  activeIndex:state.slider.activeIndex
})
const mapDispatchToProps=dispatch=>({
  handleClickLeft:(activeIndex)=>dispatch(clickLeftNav(activeIndex)),
  handleClickRight:(activeIndex)=>dispatch(clickRightNav(activeIndex))
})

export default connect(mapStateToProps,mapDispatchToProps)(SliderLists)
