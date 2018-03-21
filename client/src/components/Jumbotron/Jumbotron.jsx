import React from 'react';
import './jumbotron.css';

const Jumbotron = () => (
  <div>
    <img className="jumbo" alt="" src="https://www.hdwallpapers.in/walls/sunset_horizon_minimal_4k-HD.jpg" />

    <div className="centered animated fadeIn">
      <p className="jumbo-text">{'Hello, I\'m '}<span className="myName">Kevin Vo</span>.</p>
      <p className="jumbo-text">{'I\'m a full stack web developer.'}</p>
      <button className="button" href="#projects">View my work<i className="chevron right icon" /></button>
    </div>
  </div>
);

export default Jumbotron;
