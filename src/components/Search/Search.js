import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import {getSearchGames} from "../../actions/gamesActions";
import { connect } from 'react-redux'

import Filter from "../Filter/Filter";
import List from "../List/List";

const mapDispatchToProps = dispatch => {
    return {
        getSearchGames: (searchVal, type) => {
            dispatch(getSearchGames(searchVal, type))
        }
    }
};

function Search(props) {
    const {getSearchGames} = props;
    let searchParams = queryString.parse(props.location.search);
    useEffect(() => {
        let searchParams = queryString.parse(props.location.search);
        getSearchGames(searchParams.name, searchParams.type);
    }, [getSearchGames, props.location])

    let title;

    switch(searchParams.type){
        case "category":
                title = `Category: ${searchParams.name}`;
                break
        case "query":
            title = `Search: ${searchParams.name}`;
            break
        case "top":
            title = "TOP GAMES"
            break
        case "trending":
            title = "TRENDING GAMES"
            break
        default:
            title = "SEARCH";
    }

    return (
        <div>
            <Filter />
            <List listTitle={title} gameType="search" listType="full"/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        search: state.games.search
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)