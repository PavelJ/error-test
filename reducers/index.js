import { combineReducers } from 'redux'
import NavigationReducer from './navigation-reducer';
// redux-form reducer
import { reducer as formReducer } from 'redux-form'

const app = combineReducers({
  navigation: NavigationReducer
});

export default app