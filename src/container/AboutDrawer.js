import {connect} from 'react-redux'
import About from '../components/About/About'
import {toggleDrawer} from '../redux/actions'

const mapStateToProps = state =>({
  right:state.drawer.right
})

const mapDispatchToProps = dispatch =>({
  onOpenDrawer:()=>dispatch(toggleDrawer(true)),
  onCloseDrawer:()=>dispatch(toggleDrawer(false)),
})

export default connect(mapStateToProps,mapDispatchToProps)(About)
