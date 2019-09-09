import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {getListGames, getNewGames} from "../../actions/gamesActions";
import {TRENDING_GAMES, TOP_GAMES, DEAL_GAMES} from "../../constants/apiConstants";
import {useMountEffect} from "../../utils/compUtils";

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
      }
    }
  }

function Home(props) {
    const {getListGames, getNewGames} = props

    useMountEffect(() => {
      if (props.newGames.length && props.trendingGames.length && 
        props.dealGames.length && props.topGames.length) {
        return;
      }
      getNewGames();
      getListGames(TRENDING_GAMES);
      getListGames(TOP_GAMES);
      if (window.innerWidth > 992) {
        getListGames(DEAL_GAMES);
      }
    })

    Home.propTypes = {
      getNewGames: PropTypes.func,
      getListGames: PropTypes.func,
      getCategories: PropTypes.func,
      newGames: PropTypes.arrayOf(PropTypes.object),
      trendingGames: PropTypes.arrayOf(PropTypes.object),
      topGames: PropTypes.arrayOf(PropTypes.object),
      dealGames: PropTypes.arrayOf(PropTypes.object),
    }

    console.log("HOME")
    return (
        <div>
            <Hero />
            <div className="content-container">
              <div className="flex-container flex-container--side">
                <Categories />
                <List listTitle="Hot Deals" gameType="deal" listType="summary" />
              </div>
              <div className="flex-container flex-container--main">
                <List listTitle="Trending Games" gameType="trending" listType="summary" />
                <List listTitle="Top Games" gameType="top" listType="summary" />
              </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
  return {
    newGames: state.games.new.list,
    trendingGames: state.games.trending.list,
    topGames: state.games.top.list,
    dealGames: state.games.deal.list
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
