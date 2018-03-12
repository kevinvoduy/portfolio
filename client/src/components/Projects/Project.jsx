import React, { Component } from 'react'
import './projects.css'

export default class Project extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className='project'>
        <div className="ui link cards">
          <div className="card">

            <div className="image">
              <img src="https://marriedbiography.com/wp-content/uploads/2017/07/Levy-Tran.jpg"/>
            </div>

            <div className="content">
              <div className="header">this.props.title</div>
              <div className="meta">
                <a>this.props.meta</a>
              </div>
              <div className="description">
                this.props.description
              </div>
            </div>

            <div className="extra content">
              <span className="right floated">
                Joined in 2013
              </span>
              <span>
                <i className="user icon"></i>
                7500 Friends
              </span>
            </div>

          </div>
        </div>
      </div>
    )
  }
}