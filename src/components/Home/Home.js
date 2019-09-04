import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import {getListGames, getNewGames} from "../../actions/gamesActions";
import {getCategories} from "../../actions/categoriesActions";
import {TRENDING_GAMES, TOP_GAMES} from "../../constants/apiConstants";

import Hero from "../Hero/Hero";
import Categories from "../Categories/Categories";
import List from "../List/List";


const mapDispatchToProps = dispatch => {
    return {
      getListGames: (list) => {
        dispatch(getListGames(list));
      },
      getNewGames: () => {
        dispatch(getNewGames);
      },
      getCategories: () => {
        dispatch(getCategories);
      }
    }
  }

function Home(props) {
    const {getListGames, getNewGames, getCategories} = props

    useEffect(() => {
      getNewGames();
      getListGames(TRENDING_GAMES);
      getListGames(TOP_GAMES);
      getCategories();
    }, [getListGames, getNewGames, getCategories])
    return (
        <div>
            <Hero />
            <Categories />
            <List listTitle="Trending Games" gameType="trending" listType="summary" />
            <List listTitle="Top Games" gameType="top" listType="summary" />
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Home);
