import {combineReducers} from 'redux'
import drawerReducer from './drawerReducer'
import sliderReducer from './sliderReducer'

export default combineReducers({drawer:drawerReducer,slider:sliderReducer})
