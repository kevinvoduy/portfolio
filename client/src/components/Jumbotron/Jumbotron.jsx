import React, { Component } from 'react'
import './jumbotron.css'

export default class Jumobtron extends Component {
  render() {
    return (
      <div>
        <img className='jumbo' src='https://www.hdwallpapers.in/walls/mountains_after_sunset_4k_8k-wide.jpg'/>

        <div className='centered'>
          <h2>Hello, I'm <strong>Kevin Vo</strong>.</h2>
          <h2>I'm a full-stack web developer.</h2>
          <button className='button'>View my work</button>
        </div>
      </div>
    )
  }
}