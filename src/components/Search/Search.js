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
    }, [getSearchGames, props.location, props.categories])

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

    function handleScroll() {
        const FOOTER_POS = document.body.offsetHeight - 250;
        const BOTTOM_WIN_POS = window.scrollY + window.innerHeight;
        const FILTER = document.getElementById("filter-container");
        const SORT = document.getElementById("sort-container");
        const TITLE = document.getElementById("list-full__title");
        if (BOTTOM_WIN_POS > FOOTER_POS && FILTER.classList.contains("fixed")) {
            FILTER.classList.remove("fixed");
            FILTER.classList.add("relative");
            TITLE.classList.remove("fixed");
            TITLE.classList.add("relative");
            SORT.classList.remove("fixed");
            SORT.classList.add("relative");
        }
        else if (BOTTOM_WIN_POS < FOOTER_POS && FILTER.classList.contains("relative")){
            FILTER.classList.remove("relative");
            FILTER.classList.add("fixed");
            TITLE.classList.remove("relative");
            TITLE.classList.add("fixed");
            SORT.classList.remove("relative");
            SORT.classList.add("fixed");
        }
        
    }

    return (
        <div className="search-container">
            <Filter />
            <List listTitle={title} gameType="search" listType="full"/>
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
