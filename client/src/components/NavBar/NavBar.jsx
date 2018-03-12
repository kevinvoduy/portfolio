import React, { Component } from 'react'
import './navbar.css'

export default class NavBar extends Component {
  state = {
    topOfNav: 0,
    paddingOffset: 0,
  }
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);

    const nav = document.querySelector('.nav');
    this.setState({
      topOfNav: nav.offsetTop,
      paddingOffset: nav.offsetHeight,
    });
  }

  handleScroll = () => {
    if (window.scrollY >= this.state.topOfNav) {
      document.body.style.paddingTop = this.state.paddingOffset + 'px';
      document.body.classList.add('fixed-nav');
    } else {
      document.body.style.paddingTop = 0;
      document.body.classList.remove('fixed-nav');
    }
  }

  render() {
    return (
      <div className="nav">
        <ul>
          <li>LOGO.</li>
          <li>home</li>
          <li>projects</li>
          <li>connect</li>
        </ul>
      </div>
    );
  }
}