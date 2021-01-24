import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//components
import TopNavbar from "./components/TopNavbar";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import Episodes from "./components/Episodes";

// import PropTypes from 'prop-types'

export default class Router extends Component {
  
  // static propTypes = {

  // } will be implemented

  constructor(props){
    super(props);
    this.state = { data: [] }
  }

  render() {
    return (
      <BrowserRouter>
          <Route path="/" component={TopNavbar} />
          <Route path="/" exact component={Characters} />
          <Route path="/characters" component={Characters} />
          <Route path="/locations" component={Locations} />
          <Route path="/episodes" component={Episodes} />
      </BrowserRouter>
    )
  }
}