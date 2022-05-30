import {combineReducers} from 'redux';

//Custom Imports
import { counterReducer } from './reducers/counterReducers';

const rootReducer = combineReducers({
 counter: counterReducer,
});

export default rootReducer;