import { combineReducers } from 'redux';

//Custom Imports
import { counterReducer } from './reducers/counterReducers';
import { usersReducer } from './reducers/usersReducer';
import {ankushReducer} from './reducers/ankushReducer';
import { postReducer } from './reducers/postReducer'
import { userReducerOne } from './reducers/userReducerOne';
const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
    ankush:ankushReducer,
    naresh: postReducer,
    sugreev: userReducerOne,
});

export default rootReducer;