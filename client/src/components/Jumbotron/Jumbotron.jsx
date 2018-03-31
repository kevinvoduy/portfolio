import React from 'react';
import ocean from '../../../public/dist/ocean.jpg';
import './jumbotron.css';

const Jumbotron = () => (
  <div className="container">
    <img className="jumbo" src={ocean} alt="" />

    <div className="centered">
      <p className="jumbo-text">{'Hello, I\'m '}<span className="myName">Kevin Vo</span>.</p>
      <div className="typewriter jumbo-text">
        <p>{'I\'m a full stack web developer.'}</p>
      </div>

      <a href="#projects"><button className="button"><span>View my work</span></button></a>
    </div>
  </div>
);

export default Jumbotron;
