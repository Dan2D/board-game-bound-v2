import * as types from "../actions/types";

let initialState = {};

const defaultReducer = (state = initialState, action) => {
    switch(action.type){
        case types.DEFAULT_ACTION:
            return {
                ...state,
                games: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}

export default defaultReducer;