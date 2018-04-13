import React from 'react';
import desk from '../../../public/dist/desk.jpg';
import oceanalt from '../../../public/dist/ocean-alt.jpg';
import './jumbotron.css';

const Jumbotron = () => (
  <div className="container">
    <img className="jumbo" src={desk} alt="" />
    <img className="jumbo-alt" alt="" />

    <div className="centered">
      <p className="jumbo-text">{'Hello, I\'m '}<span className="myName">Kevin Vo</span>.</p>
      <div className="typewriter jumbo-text">
        <p>{'I\'m a full stack engineer.'}</p>
      </div>

      <a href="#projects"><button className="button"><span>View my work</span></button></a>
    </div>
  </div>
);

export default Jumbotron;
