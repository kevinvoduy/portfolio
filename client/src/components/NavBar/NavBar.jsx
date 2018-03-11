import React, { Component } from 'react'
import './navbar.css'

export default class NavBar extends Component {
  state = {}
  render() {
    return (
      <div className="ui stackable menu">
        <div className="item">
          <img/>
        </div>
        <a className="item" name='Home'>Home</a>

        <a className="item" name='Projects'>Projects</a>

        <a className="item" name='Connect'>Connect</a>
      </div>
    )
  }
}