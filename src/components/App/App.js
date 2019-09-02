import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {getListGames, getNewGames} from "../../actions/gamesActions";
import {TRENDING_GAMES, TOP_GAMES} from "../../constants/apiConstants";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from "../Nav/Nav";
import Home from "../Home/Home";




const mapDispatchToProps = dispatch => {
  return {
    getListGames: (list) => {
      dispatch(getListGames(list))
    },
    getNewGames: () => {
      dispatch(getNewGames)
    }
  }
}

function App(props) {
  const {getListGames, getNewGames} = props

  useEffect(() => {
    getNewGames();
    getListGames(TRENDING_GAMES);
    getListGames(TOP_GAMES);
  }, [getListGames, getNewGames])

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}



export default connect(null, mapDispatchToProps)(App);
