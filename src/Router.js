import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//components
import Banner from "./components/Banner";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import Episodes from "./components/Episodes";

// import PropTypes from 'prop-types'

export default class Router extends Component {
  
  // static propTypes = {

  // } will be implemented

  render() {
    return (
      <BrowserRouter>
            <Route path="/" component={Banner} />
            <Route path="/" exact component={Characters} />
            <Route path="/characters" exact component={Characters} />
            <Route path="/locations" exact component={Locations} />
            <Route path="/episodes" exact component={Episodes} />
      </BrowserRouter>
    )
  }
}