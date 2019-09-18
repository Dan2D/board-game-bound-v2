import * as types from "../constants/types";


let initialState = {};

const categoriesReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_CATEGORIES:
            return {
                ...state,
                list: {},
                error: null,
                isLoading: true
            }
        case types.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                list: action.payload,
                isLoading: false
            }
        case types.GET_CATEGORIES_FAIL:
            return {
                ...state,
                list: {},
                error: action.payload,
                isLoading: false
            }
        default:
            return state
    }
} 

export default categoriesReducer;