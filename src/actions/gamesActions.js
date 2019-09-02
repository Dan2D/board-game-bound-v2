import * as types from "../constants/types";
import * as apiUtil from "../utils/apiUtils";
import * as apiConst from "../constants/apiConstants";
import axios from 'axios';



// dispatch is for async


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
            payload: gamesArr
        })
    })
    .catch(err => dispatch({type: types.GET_LIST_GAMES_FAIL, payload: err.message}));
};

export const getListGames = list => dispatch => {
    dispatch({type: types.GET_LIST_GAMES});
    let name = list === apiConst.TRENDING_GAMES ? "trending" : "top";
    return axios.get(`https://www.boardgameatlas.com/api/search?order_by=${list}&limit=50&client_id=7pxbmyR661`)
            .then(response => {
                let gamesArray =  apiUtil.genArrayFromObj(response.data.games);
                dispatch({
                    type: types.GET_LIST_GAMES_SUCCESS,
                    payload: gamesArray,
                    name
                })
            })
            .catch(err => dispatch({type: types.GET_LIST_GAMES_FAIL, payload: err.message}))
}