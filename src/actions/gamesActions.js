import * as types from "../constants/types";
import * as apiUtil from "../utils/apiUtils";
import * as apiConst from "../constants/apiConstants";
import axios from 'axios';




const QUERY = "query";
const CATEGORY = "category";
const TOP = "top";
const TRENDING = "trending";
const DEAL = "deal";

export const getNewGames = dispatch => {
    dispatch({type: types.GET_NEW_GAMES});
    apiUtil.getGameIds(`https://www.boardgamegeek.com/xmlapi2/hot?type=boardgame`, 5)
    .then(ids => {
        return apiUtil.fetchXML(`https://www.boardgamegeek.com/xmlapi2/thing?type=boardgame&id=${ids}`)
    })
    .then(response => {
        return apiUtil.genNewGamesArr(response);
    })
    .then(gamesArr => {
        dispatch({
            type: types.GET_NEW_GAMES_SUCCESS,
            payload: gamesArr,
            page: "home"
        })
    })
    .catch(err => dispatch({type: types.GET_NEW_GAMES_FAIL, payload: err.message}));
};

export const getListGames = (list) => dispatch => {
    let name = list === apiConst.TRENDING_GAMES ? "trending" : list === apiConst.TOP_GAMES ? "top" : "deal";
    dispatch({type: types.GET_LIST_GAMES, name});
    
    return axios.get(`https://www.boardgameatlas.com/api/search?order_by=${list}&limit=50&client_id=7pxbmyR661`)
            .then(response => {
                let gamesArray =  apiUtil.genArrayFromObj(response.data.games);               
                dispatch({
                    type: types.GET_LIST_GAMES_SUCCESS,
                    payload: gamesArray,
                    name,
                    page: "list"
                })
            })
            .catch(err => dispatch({type: types.GET_LIST_GAMES_FAIL, payload: err.message}))
};

export const getGameDetail = (name, year) => dispatch => {
    dispatch({type: types.SET_DETAIL_GAME})
    name = apiUtil.modifyName(name);
    axios.get(`https://www.boardgameatlas.com/api/search?name=${name}&year_published=${year}&limit=1&client_id=7pxbmyR661`)
    .then (response => {
        let game = response.data.games[0];
        let id = game.id;
        let backupImg = game.images.medium;
        getDetailBG(game, id, backupImg, dispatch);
    })
    .catch(err => dispatch({type: types.SET_DETAIL_GAME_FAIL, payload: err.message}))
};

export const getDetailBG = (game, id, backupImg, dispatch) => {
    axios.get(`https://www.boardgameatlas.com/api/game/images?game_id=${id}&limit=5&client_id=7pxbmyR661`)
    .then(response => {
        let lng = response.data.images.length - 1;
        let bg = response.data.images ? response.data.images[lng].large : backupImg;
        getDetailPrice(game, id, backupImg, bg, dispatch);
    });
};

export const getDetailPrice = (game, id, backupImg, bg, dispatch) => {
    axios.get(`https://www.boardgameatlas.com/api/game/prices?game_id=${id}&client_id=7pxbmyR661`)
    .then(response => {
        let purchaseInfo = response.data.prices.sort((a,b) => {
            let aPrice = a.price_text;
            let bPrice = b.price_text;
            aPrice = aPrice[0] === "$" ? aPrice.substr(1) : 999.99;
            bPrice = bPrice[0] === "$" ? bPrice.substr(1) : 999.99;
            return (parseFloat(aPrice) - parseFloat(bPrice));
        })
        .filter(item => item.price_text.toLowerCase() !== "out of stock");
        dispatch({
            type: types.SET_DETAIL_GAME_SUCCESS,
            payload: game,
            backupImg,
            bg,
            purchaseInfo
        })
    })
    .catch(err => dispatch({type: types.SET_DETAIL_GAME_FAIL, payload: err.message}))
};

export const setDetailImg = imgUrl => dispatch => {
    return (
        dispatch({
            type: types.SET_DETAIL_IMG,
            payload: imgUrl     
        }))
};

export const getSearchGames = (searchVal = "", type) => dispatch => {
    dispatch({type: types.GET_SEARCH_GAMES});
    let url;
    switch(type){
        case QUERY:
            url = `https://www.boardgameatlas.com/api/search?name=${searchVal}&client_id=7pxbmyR661`;
            break
        case CATEGORY:
            url = `https://www.boardgameatlas.com/api/search?categories=${searchVal}&client_id=7pxbmyR661`;
            break
        case TOP:
                url = `https://www.boardgameatlas.com/api/search?order_by=popularity&client_id=7pxbmyR661`;
                break
        case TRENDING:
                url =  `https://www.boardgameatlas.com/api/search?order_by=reddit_week_count&client_id=7pxbmyR661`;
                break
        case DEAL:
        url =  `https://www.boardgameatlas.com/api/search?order_by=discount&client_id=7pxbmyR661`;
        break
        default:
            url =  `https://www.boardgameatlas.com/api/search?name=&client_id=7pxbmyR661`
    }
    axios.get(url)
    .then(response => {
       return dispatch({
            type: types.GET_SEARCH_GAMES_SUCCESS,
            payload: response.data.games,
            page: "search"
        })
    })
    .catch(err => dispatch({type: types.GET_SEARCH_GAMES_FAIL, payload: err.message}))
};

export const sortGames = (sort, flow) => dispatch => {
    dispatch({type: types.SORT_GAMES, sort, flow})
}

export const filterGames = (filterObj, filterName, checkVal) => dispatch => {
    dispatch({
        type: types.FILTER_GAMES,
        payload: filterObj,
        filterName,
        checkVal
    })
}

export const newPage = pg => dispatch => {
    dispatch({type: types.GET_NEW_PAGE, payload: pg})
}