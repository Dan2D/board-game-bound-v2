import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import {handleSearchScroll,  handleSearchTitle} from "../../utils/compUtils";
import {DEAL_GAMES} from "../../constants/apiConstants";
import {getSearchGames, getListGames} from "../../actions/gamesActions";
import { connect } from 'react-redux'

import Categories from "../Categories/Categories";
import Filter from "../Filter/Filter";
import List from "../List/List";
import NotFound from "../NotFound/NotFound";

const mapDispatchToProps = dispatch => {
    return {
        getSearchGames: (searchVal, type) => {
            dispatch(getSearchGames(searchVal, type))
        },
        getListGames: (list) => {
            dispatch(getListGames(list));
        }
    }
};

function Search(props) {
    const {getSearchGames, getListGames} = props;
    let searchParams = queryString.parse(props.location.search);
    const searchTitle = handleSearchTitle(searchParams);
    const [sideContent, setSideContent] = useState(window.innerWidth > 1100 ? true : false);

    useEffect(() => {
        window.scrollTo(0,0);
        let searchParams = queryString.parse(props.location.search);
        let searchVal = searchParams.name;
        
        if (searchParams.type === "category") {
            searchVal = props.categories[searchParams.name];
        }
        if (props.deal.length < 1){
            getListGames(DEAL_GAMES);
        }
        
        getSearchGames(searchVal, searchParams.type);
        setTimeout(() => {
            window.addEventListener('scroll', handleSearchScroll);
            window.addEventListener('resize', () => handleSearchResize(sideContent))}, 800);

        return () => {
            window.removeEventListener('scroll', handleSearchScroll);
            window.removeEventListener('resize', () => handleSearchResize(sideContent));
        }
    }, [getSearchGames, getListGames, props.location, props.categories, props.deal, sideContent]);

    if (props.search.error) {
        return <NotFound />
    }
 
    function handleSearchResize (sideContent) {
        if (window.innerWidth < 1100 && sideContent) {
            setSideContent(false)
        }
        else if (window.innerWidth > 1100 && !sideContent) {
            setSideContent(true)
        }
    }


    return (
        <div className="search-container">
            <Filter />
            <div className="search-column-main">
                <h2 className="list-full__title" id="list-full__title">{searchTitle}</h2>
                <List gameType="search" listType="full"/>
            </div>
            {sideContent && (
            <div>
                <Categories />
                {searchTitle !== "HOT DEALS" && <List listTitle="Hot Deals" gameType="deal" listType="summary" />}
            </div>)}
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
    categories: PropTypes.object,
    getSearchGames: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        search: state.games.search,
        deal: state.games.deal.list,
        categories: state.categories.list
    }
}

const MemoSearch = React.memo(Search, (prevProps, nextProps) => {
    if (prevProps.search.list === nextProps.search.list) {
        return false
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MemoSearch)
