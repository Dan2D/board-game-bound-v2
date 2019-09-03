import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import GameDetail from "../GameDetail/GameDetail";
import Search from "../Search/Search";

function App(props) {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/games" component={GameDetail}/>
          <Route path={["/search", "/category"]} component={Search}/>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
