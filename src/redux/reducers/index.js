import {combineReducers} from 'redux'
import drawerReducer from './drawerReducer'
import sliderReducer from './sliderReducer'
import favoriteReducer from './favReducer'

export default combineReducers(
  {
    drawer:drawerReducer,
    slider:sliderReducer,
    favorite:favoriteReducer,
  }
)
