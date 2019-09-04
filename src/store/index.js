import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from "../reducers";
import {initialState} from "./initialState";
import thunk from 'redux-thunk';

let middleware = [thunk];
export const store = createStore(rootReducer, initialState, composeWithDevTools(
    applyMiddleware(...middleware)));