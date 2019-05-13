import {connect} from 'react-redux'
import About from '../components/About/About'
import {toggleDrawerRight} from '../redux/actions'

const mapStateToProps = state =>({
  right:state.drawer.right
})

const mapDispatchToProps = dispatch =>({
  onOpenDrawerRight:()=>dispatch(toggleDrawerRight(true)),
  onCloseDrawerRight:()=>dispatch(toggleDrawerRight(false)),
})

export default connect(mapStateToProps,mapDispatchToProps)(About)
