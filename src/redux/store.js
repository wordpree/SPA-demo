import { createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import  rootReducer from './reducers'

const initState ={
  drawer:{right:false}
}
const store = createStore(
  rootReducer,
  initState,
  compose( applyMiddleware(logger,thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
