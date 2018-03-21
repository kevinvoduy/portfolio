import React from 'react';
import './projects.css';

const Project = props => (
  <div className="project">
    <div className="ui link cards">
      <div className="card">

        <div className="image">
          <img alt="" src="https://marriedbiography.com/wp-content/uploads/2017/07/Levy-Tran.jpg" />
        </div>

        <div className="content">
          <div className="header">{props.title}</div>
          <div className="meta">
            <a href="/">{props.meta}</a>
          </div>
          <div className="description">
            {props.description}
          </div>
        </div>

        <div className="extra content">
          <span className="right floated">
            Joined in 2013
          </span>
          <span>
            <i className="user icon" />
            7500 Friends
          </span>
        </div>

      </div>
    </div>
  </div>
);

Project.propTypes = {
  // title: React.PropTypes.string.isRequired,
//   meta: React.PropTypes.string.isRequired,
//   description: React.PropTypes.string.isRequired,
};


export default Project;
