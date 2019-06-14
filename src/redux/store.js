import { createStore,applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import  rootReducer from './reducers'

const initState ={
  drawer:{right:false,top:false},
  slider:{activeIndex:0},
  favorite:{favIcon:[false,false,false,false,false,false]}
}
const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(
    applyMiddleware(logger,thunk)
  )
)

export default store
