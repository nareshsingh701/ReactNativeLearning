import { combineReducers } from 'redux';

//Custom Imports
import { counterReducer } from './reducers/counterReducers';
import { usersReducer } from './reducers/usersReducer';
import { postReducer } from './reducers/postReducer'
import { userReducerOne } from './reducers/userReducerOne';
const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
    naresh: postReducer,
    sugreev: userReducerOne,
});

export default rootReducer;