import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import GameDetail from "../GameDetail/GameDetail";






function App(props) {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/games" component={GameDetail}/>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
