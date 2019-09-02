import {combineReducers} from 'redux';
import gamesReducer from "./gamesReducer";
// import all your reducers here

export const rootReducer = combineReducers({games: gamesReducer});