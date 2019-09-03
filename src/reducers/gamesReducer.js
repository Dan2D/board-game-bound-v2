import * as types from "../constants/types";


let initialState = {};

const gamesReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_NEW_GAMES:
            return {
                ...state,
                content: "home",
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
        case types.GET_NEW_GAMES_FAIL:
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
                }
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
        case types.SET_DETAIL_GAME:
            return {
                ...state,
                content: "detail",
                detail: {
                    game: {},
                    bg: null,
                    cover: null,
                    error: null,
                    isLoading: true
                }
            }
        case types.SET_DETAIL_GAME_SUCCESS :
            return {
                ...state,
                detail: {
                    ...state.detail,
                    game: action.payload,
                    bg: action.bg,
                    purchaseInfo: action.purchaseInfo,
                    isLoading: false
                }
            }
        case types.SET_DETAIL_GAME_FAIL:
                return {
                    ...state,
                    detail: {
                        ...state.detail,
                        game: {},
                        cover: null,
                        error: action.payload,
                        isLoading: false
                    }
                }
        case types.SET_DETAIL_IMG:
            return {
                ...state,
                detail: {
                    ...state.detail,
                    cover: action.payload,
                    isLoading: true
                }
            }
        case types.GET_SEARCH_GAMES:
            return {
                ...state,
                content: "search",
                search: {
                    list: [],
                    modList: [],
                    pg: 0,
                    isLoading: true
                }
            }
        case types.GET_SEARCH_GAMES_SUCCESS:
            return {
                ...state,
                search: {
                    ...state.search,
                    list: action.payload,
                    modList: action.payload,
                    isLoading: false
                }
            }
        case types.GET_SEARCH_GAMES_FAIL:
            return {
                ...state,
                search: {
                    list: [],
                    modList: [],
                    pg: 0,
                    error: action.payload,
                    isLoading: false
                }
            }
        case types.GET_NEW_PAGE:
            return {
                ...state,
                search: {
                    ...state.search,
                    pg: action.payload
                }
            }
        default:
            return state;
    }
}

export default gamesReducer;