import { createNavigationEnabledStore } from '@expo/ex-navigation';
import { combineReducers, createStore, applyMiddleware  } from 'redux';
import Reducers from './reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { syncTranslationWithStore } from 'react-redux-i18n';

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation'
});
const logger = createLogger();
//const store = createStoreWithNavigation(Reducers, applyMiddleware(thunk, logger));
const store = createStoreWithNavigation(Reducers, applyMiddleware(thunk));
syncTranslationWithStore(store)

export default store;