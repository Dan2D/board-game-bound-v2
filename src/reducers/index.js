import {combineReducers} from 'redux';
import defaultReducer from "./defaultReducers";
// import all your reducers here

export const rootReducer = combineReducers({default: defaultReducer});