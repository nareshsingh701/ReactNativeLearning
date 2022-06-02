import { combineReducers } from 'redux';

//Custom Imports
import { counterReducer } from './reducers/counterReducers';
import { usersReducer } from './reducers/usersReducer';
import {ankushReducer} from './reducers/ankushReducer';
const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
    ankush:ankushReducer,
});

export default rootReducer;