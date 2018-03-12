import React, { Component } from 'react'
import './projects.css'

export default class Projects extends Component {
  componentDidMount = () => {
    const slider = document.querySelector('.projects');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', () => {
      isDown = true;
      slider.classList.add('active');
    })

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.add('active');
    })

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.add('active');
    })

    slider.addEventListener('mousemove', () => {
      if(!isDown) return;
      console.count(isDown);
    })
  }

  render () {
    return (
      <div className='projects'>
        <h2>Recent Projects</h2>
        <div className='project GoWithMe'>GoWithMe</div>
        <div className='project CodeSling'>codeSling</div>
        <div className='project CoffeeMeetsFido'>CoffeeMeetsFido</div>
        <div className='project TrippyTrip'>TrippyTrip</div>
      </div>
    )
  }
}