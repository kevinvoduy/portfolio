import React, { Component } from 'react'
import './jumbotron.css'

export default class Jumobtron extends Component {
  render() {
    return (
      <div>
        <img className='jumbo' src='https://www.hdwallpapers.in/walls/sunset_horizon_minimal_4k-HD.jpg'/>

        <div className='centered'>
          <p className='jumbo-text'>Hello, I'm <span className='myName'>Kevin Vo</span>.</p>
          <p className='jumbo-text'>I'm a full-stack web developer.</p>
          <button className='button'>View my work</button>
        </div>
      </div>
    )
  }
}