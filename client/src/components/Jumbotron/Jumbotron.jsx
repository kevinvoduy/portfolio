import React from 'react';
import ocean from '../../../public/dist/ocean.jpg';
import './jumbotron.css';

const Jumbotron = () => (
  <div className="container">
    <img className="jumbo" src={ocean} alt="" />

    <div className="centered">
      <p className="jumbo-text">{'Hello, I\'m '}<span className="myName">Kevin Vo</span>.</p>
      <p className="jumbo-text">{'I\'m a full stack web developer.'}</p>

      <span className="words-wrapper waiting">
        <b className="isHidden">
          <i className="out">H</i>
          <i className="out">e</i>
          <i className="out">l</i>
          <i className="out">l</i>
          <i className="out">o</i>
        </b>
      </span>

      <button className="button" href="#projects">View my work<i className="chevron right icon" /></button>
    </div>
  </div>
);

export default Jumbotron;

// https://www.hdwallpapers.in/walls/sunset_horizon_minimal_4k-HD.jpg
