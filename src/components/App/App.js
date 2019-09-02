import React, {useEffect} from 'react';
import Nav from "../Nav/Nav";
import Hero from "../Hero/Hero";
import List from "../List/List";
import { connect } from 'react-redux';
import {defaultAction} from "../../actions/defaultActions";


const mapDispatchToProps = dispatch => {
  return {
    defaultAction: () => {
      dispatch(defaultAction)
    }
  }
}

function App(props) {
  const {defaultAction} = props

  useEffect(() => {
    defaultAction();
  }, [defaultAction])

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Hero />
        <List listTitle="Trending Games"/>
      </header>
    </div>
  );
}



export default connect(null, mapDispatchToProps)(App);
