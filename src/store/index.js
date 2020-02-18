import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore, compose} from 'redux';

import user from './user';
import habits from './habits';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({user, habits});

export const configureStore = () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
