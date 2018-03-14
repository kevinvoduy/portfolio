import React, { Component } from 'react'
import footer from './footer.css'
import linkedin from '../../../public/dist/linkedin.svg'
import git from '../../../public/dist/github.svg'

export default class Footer extends Component {
  render() {
    return(
      <div className='footer'>
        <div className='center'>
          <div className='social'>
            <h3><img src={linkedin}/></h3>
            <h3><img src={git}/></h3>
          </div>
          <h5>KEVIN DUY VO <span id='cc'>©2018</span></h5>
        </div>
      </div>
    )
  }
}