import React from 'react';
import './jumbotron.css';

const Jumbotron = () => (
  <div className="container">
    <div className="jumbo" />

    <div className="centered">
      <div className="sad">
        <p className="jumbo-text">{'Hello, I\'m '}<span className="myName">Kevin Vo</span>.</p>
        <div className="typewriter jumbo-text">
          <p>{'I\'m a full stack engineer.'}</p>
        </div>
      </div>

      <a href="#projects"><button className="button"><span>View my work</span></button></a>
    </div>
  </div>
);
export default Jumbotron;
