import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Jumbotron from './components/Jumbotron/Jumbotron'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Jumbotron/>
      </div>
    )
  }
}