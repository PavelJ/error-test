import { combineReducers } from 'redux'
import NavigationReducer from './navigation-reducer';
// redux-form reducer
import { reducer as formReducer } from 'redux-form'
import { i18nReducer } from 'react-redux-i18n';

const app = combineReducers({
  navigation: NavigationReducer,
  i18n: i18nReducer
});

export default app