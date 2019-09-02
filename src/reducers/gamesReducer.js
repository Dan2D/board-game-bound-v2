import * as types from "../constants/types";

let initialState = {};

const gamesReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_NEW_GAMES:
            return {
                ...state,
                new: {
                    ...state.new,
                    isLoading: true
                }
            }
            case types.GET_NEW_GAMES_SUCCESS:
                return {
                    ...state,
                    new: {
                        ...state.new,
                        list: action.payload,
                        isLoading: false
                    }
                }
        case types.GET_LIST_GAMES_FAIL:
            return {
                ...state,
                new: {
                    ...state.new,
                    list: [],
                    error: action.payload,
                    isLoading: false
                }
            }
        case types.GET_LIST_GAMES:
            return {
                ...state,
                [action.name]: {
                    ...state.trending,
                    isLoading: true
                },
            }
        case types.GET_LIST_GAMES_SUCCESS:
            return {
                ...state,
                [action.name]: {
                    ...state.trending,
                    list: action.payload,
                    isLoading: false
                },
            }
        case types.GET_LIST_GAMES_FAIL:
            return {
                ...state,
                [action.name]: {
                    ...state.trending,
                    list: [],
                    error: action.payload,
                    isLoading: false
                }
            }
        default:
            return state;
    }
}

export default gamesReducer;