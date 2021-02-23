import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Banner from "./components/Banner";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import Episodes from "./components/Episodes";
export default class Router extends Component {

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