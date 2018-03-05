import thunk from 'redux-thunk'
import {applyMiddleware, combineReducers, createStore} from 'redux'

import user from './user'
import habits from './habits'

const rootReducer = combineReducers({user, habits})

export function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk))
}
