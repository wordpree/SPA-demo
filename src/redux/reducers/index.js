import {combineReducers} from 'redux'
import drawerReducer from './drawerReducer'
import sliderReducer from './sliderReducer'
import iconReducer from './iconReducer'

export default combineReducers(
  {
    drawer:drawerReducer,
    slider:sliderReducer,
    icon:iconReducer,
  }
)
