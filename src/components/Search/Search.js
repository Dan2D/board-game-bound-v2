import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import {handleSearchScroll,  handleSearchTitle} from "../../utils/compUtils";
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
    const searchTitle = handleSearchTitle(searchParams);

    useEffect(() => {
        window.scrollTo(0,0);
        let searchParams = queryString.parse(props.location.search);
        let searchVal = searchParams.name;

        if (searchParams.type === "category") {
            searchVal = props.categories[searchParams.name];
        }
        getSearchGames(searchVal, searchParams.type);
        setTimeout(() => {window.addEventListener('scroll', handleSearchScroll);}, 800);
        return () => {
            window.removeEventListener('scroll', handleSearchScroll);
        }
    }, [getSearchGames, props.location, props.categories]);
 
    return (
        <div className="search-container">
            <Filter />
            <h2 className="list-full__title" id="list-full__title">{searchTitle}</h2>
            <List gameType="search" listType="full"/>
        </div>
    )
}

Search.propTypes = {
    search: PropTypes.shape({
        list: PropTypes.arrayOf(PropTypes.object),
        modList: PropTypes.arrayOf(PropTypes.object),
        pg: PropTypes.number,
        isLoading: PropTypes.bool
    }),
    categories: PropTypes.arrayOf(PropTypes.object),
    getSearchGames: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        search: state.games.search,
        categories: state.categories.list
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
