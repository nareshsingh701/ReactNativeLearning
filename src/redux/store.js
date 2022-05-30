import thunk from "redux-thunk";
import { applyMiddleware, createStore  } from 'redux';

//Custom Imports
import rootReducer from "./reducer";

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;