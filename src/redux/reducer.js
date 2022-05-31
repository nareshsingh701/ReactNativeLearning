import { combineReducers } from 'redux';

//Custom Imports
import { counterReducer } from './reducers/counterReducers';
import { usersReducer } from './reducers/usersReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
});

export default rootReducer;