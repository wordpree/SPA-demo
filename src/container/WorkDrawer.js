import {connect} from 'react-redux'
import Work from '../components/Work/Work'
import {toggleDrawerTop} from '../redux/actions'

const mapStateToProps = state =>({
  top:state.drawer.top
})

const mapDispatchToProps = dispatch =>({
  onOpenDrawerTop:()=>dispatch(toggleDrawerTop(true)),
  onCloseDrawerTop:()=>dispatch(toggleDrawerTop(false)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Work)
