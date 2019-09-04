import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import GameDetail from "../GameDetail/GameDetail";
import Search from "../Search/Search";

function App(props) {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.6) 10%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.6) 90%), url("${require("../../Images/pattern-bg.gif")}")`}}>
        <div className="App-bg" >
          <header className="App-header">
            <Nav />
          </header>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/games" component={GameDetail}/>
            <Route path={["/search", "/category"]} component={Search}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}



export default App;
