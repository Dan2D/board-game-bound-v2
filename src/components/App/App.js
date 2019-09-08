import React, {useEffect} from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import {getCategories} from "../../actions/categoriesActions";
import { connect } from 'react-redux'


import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import GameDetail from "../GameDetail/GameDetail";
import Search from "../Search/Search";
import Footer from "../Footer/Footer";

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => {
      dispatch(getCategories);
    }
  }
}


function App(props) {
  const {getCategories} = props;
  useEffect(() => {
    getCategories();
  }, [getCategories])

  return (
    <Router>
      <div className="App" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.6) 10%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.9) 90%), url("${require("../../Images/pattern-bg.gif")}")`}}>
          <header className="App-header">
            <Nav />
          </header>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/games" component={GameDetail}/>
            <Route path="/search" component={Search}/>
          </Switch>          
        <Footer />
      </div>
    </Router>
  );
}



export default connect(null, mapDispatchToProps)(App);
