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
                    ...state[action.name],
                    isLoading: true
                },
            }
        case types.GET_LIST_GAMES_SUCCESS:
            return {
                ...state,
                [action.name]: {
                    ...state[action.name],
                    list: action.payload,
                    isLoading: false
                }
            }
        case types.GET_LIST_GAMES_FAIL:
            return {
                ...state,
                [action.name]: {
                    ...state[action.name],
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
        case types.SORT_GAMES:
                let sortedList = sortFilter(state, action);
                return {
                    ...state,
                    search: {
                        ...state.search,
                        modList: sortedList
                    }
                }
        case types.FILTER_GAMES:
                if (Object.keys(action.payload).length === 0){
                    return {
                        ...state,
                        search: {
                            ...state.search,
                            modList: state.search.list,
                            filter: false
                        }
                    }
                }

                let filteredList = sortFilter(state, action);

                return {
                    ...state,
                    search: {
                        ...state.search,
                        modList: filteredList,
                        filter: true
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
        case types.GET_LIST_GAMES_SUCCESS:
        case types.GET_NEW_GAMES_SUCCESS:
        case types.GET_SEARCH_GAMES_SUCCESS:
        case types.GET_CATEGORIES_SUCCESS:
            let isLoading = true;
            if (!state.new.isLoading && !state.trending.isLoading && !state.top.isLoading) {
                isLoading = false;
            }
            return {
                ...state,
                isLoading,
            }
        
        default:
            return state;
    }
}

export default gamesReducer;

const sortFilter = (state= [], action) => {
    switch(action.type) {
        case types.SORT_GAMES:
                let sortedList = [...state.search.modList];
                if (action.sort !== "none") {
                    sortedList = sortedList.sort((a,b) => {
                        if (action.flow === "high"){
                            if (action.sort === "name") {
                                return a[action.sort] > b[action.sort] ? 1 : -1;
                            }
                            return parseFloat(a[action.sort]) < parseFloat(b[action.sort]) ? 1 : -1;
                        }
                        else {
                            if (action.sort === "name") {
                                return a[action.sort] < b[action.sort] ? 1 : -1;
                            }
                            return parseFloat(a[action.sort]) > parseFloat(b[action.sort]) ? 1 : -1;
                        }
                    });
                }
                else {sortedList = [...state.search.list]}
                return sortedList;
        case types.FILTER_GAMES:
                let filteredList = state.search.list;
                if (action.checkVal){
                    filteredList = !state.search.filter ? state.search.list : state.search.modList;
                    if (action.payload[0].name.includes("-")){
                        filteredList = filteredList.filter(game => {
                            return game[action.payload[0].minName] >= action.payload[0].min && game[action.payload[0].maxName] <= action.payload[0].max;
                        });
                    }
                    else if (action.payload[0].name.includes("+")){
                        if (action.payload[0].max !== null){
                            filteredList = filteredList.filter(game => {
                                return game[action.payload[0].minName] > action.payload[0].min && game[action.payload[0].maxName] >= action.payload[0].max;
                            });
                        }
                        else {
                            filteredList = filteredList.filter(game => {
                                return game[action.payload[0].minName] >= action.payload[0].min;
                            });
                        }
                    }
                    else if (action.payload[0].name.includes("<")){
                        filteredList = filteredList.filter(game => {
                            return game[action.payload[0].maxName] <= action.payload[0].max;
                        });
                    }
                }
                else {
                    filteredList = state.search.list;
                    action.payload.forEach(filter => {
                        if (filter.name.includes("-")){
                            filteredList = filteredList.filter(game => {
                                return game[filter.minName] >= filter.min && game[filter.maxName] <= filter.max;
                            });
                        }
                        else if (filter.name.includes("+")){
                            if (filter.max !== null){
                            filteredList = filteredList.filter(game => {
                                return game[filter.minName] > filter.min && game[filter.maxName] >= filter.max;
                            });
                            }
                            else {
                                filteredList = filteredList.filter(game => {
                                    return game[filter.minName] >= filter.min;
                                });
                            }
                        }
                        else if (filter.name.includes("<")){
                            filteredList = filteredList.filter(game => {
                                return game[filter.maxName] <= filter.max;
                            });
                        }
                    })
                }
            return filteredList;
        default:
            return state
    }
} 