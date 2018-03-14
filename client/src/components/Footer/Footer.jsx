import React, { Component } from 'react'
import footer from './footer.css'

export default class Footer extends Component {
  render() {
    return(
      <div className='footer'>
        <div className='center'>
          <div className='social'>
            <h3>in</h3>
            <h3>git</h3>
          </div>
          <h5>KEVIN DUY VO © 2018</h5>
        </div>
      </div>
    )
  }
}