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
    const FILTER_FIXED_OFFSET = 60;
    const FILTER_ABS_OFFSET = 15;
    const SORT_FIXED_OFFSET = 115;
    const SORT_ABS_OFFSET = 70;
    const TITLE_FIXED_OFFSET = 45;
    const TITLE_ABS_OFFSET = 0;
    let searchParams = queryString.parse(props.location.search);
    let searchTitle = "";

    useEffect(() => {
        window.scrollTo(0,0);
        let searchParams = queryString.parse(props.location.search);
        let searchVal = searchParams.name;
        if (searchParams.type === "category") {
            searchVal = props.categories[searchParams.name];
        }
        getSearchGames(searchVal, searchParams.type);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [getSearchGames, props.location, props.categories]);
 
    switch(searchParams.type){
        case "category":
                searchTitle = <><strong>Category:</strong> <br/> {searchParams.name}</>;
                break
        case "query":
            searchTitle = <><strong>Search:</strong> <br/> {searchParams.name}</>;
            break
        case "top":
            searchTitle = "TOP GAMES";
            break
        case "trending":
            searchTitle = "TRENDING GAMES";
            break
        case "deal":
            searchTitle = "HOT DEALS"
            break
        default:
            searchTitle = "SEARCH";
    };

    function handleScroll() {
        if (window.innerHeight >= 920) {
            return null;
        }
        const FOOTER_POS = document.body.offsetHeight - 250;
        const BOTTOM_WIN_POS = window.scrollY + window.innerHeight;
        const FILTER = document.getElementById("filter-container");
        const SORT = document.getElementById("sort-container");
        const TITLE = document.getElementById("list-full__title");
        if (BOTTOM_WIN_POS > FOOTER_POS && FILTER.style.position !== "absolute") {
            FILTER.style.position = "absolute";
            FILTER.style.top = window.scrollY + FILTER_ABS_OFFSET + "px";
            SORT.style.position = "absolute";
            SORT.style.top = window.scrollY + SORT_ABS_OFFSET + "px"
            TITLE.style.position = "absolute";
            TITLE.style.top = window.scrollY + TITLE_ABS_OFFSET + "px";
        }
        else if (BOTTOM_WIN_POS < FOOTER_POS && FILTER.style.position !== "fixed" ){
            FILTER.style.position = "fixed";
            FILTER.style.top = FILTER_FIXED_OFFSET + "px";
            SORT.style.position = "fixed";
            SORT.style.top = SORT_FIXED_OFFSET + "px"
            TITLE.style.position = "fixed";
            TITLE.style.top = TITLE_FIXED_OFFSET + "px";
        }
        
    }

    return (
        <div className="search-container">
            <Filter />
            <h2 className="list-full__title" id="list-full__title">{searchTitle}</h2>
            <List gameType="search" listType="full"/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        search: state.games.search,
        categories: state.categories.list
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
