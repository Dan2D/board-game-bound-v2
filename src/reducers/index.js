import {combineReducers} from 'redux';
import gamesReducer from "./gamesReducer";
import categoriesReducer from "./categoriesReducer";
// import all your reducers here

export const rootReducer = combineReducers({games: gamesReducer, categories: categoriesReducer});