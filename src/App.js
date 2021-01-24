import React, { Component } from 'react'
import Router from "./Router"
// import PropTypes from 'prop-types'

export default class App extends Component {
  
  // static propTypes = {

  // } will be implemented

  constructor(props){
    super(props);
    this.state = { data: [] }
  }

  render() {
    return (
      <Router />
    )
  }
}