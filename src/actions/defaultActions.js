import * as types from './types';
import axios from 'axios';
// dispatch is for async
export const defaultAction =  dispatch => {
    axios.get(`https://www.boardgameatlas.com/api/search?order_by=popularity&limit=50&client_id=7pxbmyR661`)
    .then(response => {
        let dataArray = [];
        Object.keys(response.data.games).forEach(game => dataArray.push(response.data.games[game]));
        console.log(dataArray)
       return dispatch({
            type: types.DEFAULT_ACTION,
            payload: dataArray
             })
        }
        
    )
}