import React from 'react';
import Typed from 'typed.js';
import './jumbotron.css';

class Jumbotron extends React.Component {
  componentDidMount() {
    const strings = ['a full stack engineer.', 'also unemployed.'];
    const options = {
      strings,
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      backDelay: 2500,
    };

    this.typed = new Typed(this.el, options);
  }

  render() {
    return (
      <div className="container" id="container">
        <div className="jumbo" />
        <div className="centered">
          <div className="sad">
            <p className="jumbo-text">{'Hello, I\'m '}<span className="myName">Kevin Vo</span>{'. I am'}</p>
            <div className="typewriter jumbo-text">
              <span id="typed-js" ref={(el) => { this.el = el; }} />
            </div>
          </div>

          <a href="#projects"><button className="button"><span>View my work</span></button></a>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
