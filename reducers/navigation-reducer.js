import AppNavigator from '../navigation/app-navigator'

let defaultState = {
    index: 0, 
    routes: [ {key: 'login', routeName: 'login'} ]
}

const navigationReducer = (state = defaultState, action) => {
    // return AppNavigator.router.getStateForAction(action, state)
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
}

export default navigationReducer