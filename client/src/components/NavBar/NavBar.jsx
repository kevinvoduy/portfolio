import React, { Component } from 'react';
import _ from 'lodash';
import 'smoothscroll';
import './navbar.css';

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      topOfNav: 0,
      paddingOffset: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.updateSroll = this.updateScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', _.throttle(this.handleScroll, 100));
    this.updateScroll();
  }

  handleScroll() {
    if (window.scrollY >= this.state.topOfNav) {
      document.body.style.paddingTop = `${this.state.paddingOffset}px`;
      document.body.classList.add('fixed-nav');
    } else {
      document.body.style.paddingTop = 0;
      document.body.classList.remove('fixed-nav');
    }
  }

  updateScroll() {
    const nav = document.querySelector('.nav');
    this.setState({
      topOfNav: nav.offsetTop,
      paddingOffset: nav.offsetHeight,
    });
  }

  render() {
    return (
      <div className="nav">
        <ul>
          <li>LET GO.</li>
          <li><a href="/">home</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#connect">connect</a></li>
        </ul>
      </div>
    );
  }
}
