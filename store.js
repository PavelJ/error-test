import { createNavigationEnabledStore } from '@expo/ex-navigation';
import { combineReducers, createStore, applyMiddleware  } from 'redux';
import Reducers from './reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation'
});
const logger = createLogger();
//const store = createStoreWithNavigation(Reducers, applyMiddleware(thunk, logger));
const store = createStoreWithNavigation(Reducers, applyMiddleware(thunk));

export default store;