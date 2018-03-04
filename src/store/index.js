import thunk from 'redux-thunk'
import {applyMiddleware, combineReducers, createStore} from 'redux'

import user from './user'

const rootReducer = combineReducers({user})

export function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk))
}
