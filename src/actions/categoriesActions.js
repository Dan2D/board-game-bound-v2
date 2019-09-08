import * as types from "../constants/types";
import axios from 'axios';



export const getCategories = dispatch => {
    dispatch({type: types.GET_CATEGORIES});
    let categoryList = [2, 10, 12, 13, 20, 22, 33, 43, 67, 74, 76, 88];
    axios.get(`https://www.boardgameatlas.com/api/game/categories?pretty=true&client_id=7pxbmyR661`)
    .then(response => {
        let categories = {};
        categoryList.forEach((category) => {
            categories[response.data.categories[category]['name']] = response.data.categories[category]['id'];
        });
        dispatch({
            type: types.GET_CATEGORIES_SUCCESS,
            payload: categories
        })
    })
    .catch(err => dispatch({type: types.GET_CATEGORIES_FAIL, payload: err.message}))
}
