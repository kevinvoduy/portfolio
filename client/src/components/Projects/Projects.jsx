import React, { Component } from 'react';
// import Project from './Project';
import slope from './slope.svg';
import './projects.css';
import project1 from '../../../public/dist/gowithme.png';

export default class Projects extends Component {
  componentDidMount() {
    // const slider = document.querySelector('.projects');
    // let isDown = false;
    // let startX;
    // let scrollLeft;

    // slider.addEventListener('mousedown', (e) => {
    //   isDown = true;
    //   slider.classList.add('active');
    //   startX = e.pageX - slider.offsetLeft;
    //   scrollLeft = slider.scrollLeft;
    // });

    // slider.addEventListener('mouseleave', () => {
    //   isDown = false;
    //   slider.classList.add('active');
    // });

    // slider.addEventListener('mouseup', () => {
    //   isDown = false;
    //   slider.classList.add('active');
    // });

    // slider.addEventListener('mousemove', (e) => {
    //   if (!isDown) return;
    //   e.preventDefault();
    //   const x = e.pageX - slider.offsetLeft;
    //   const walk = x - startX;
    //   slider.scrollLeft = scrollLeft - walk;
    // });
  }

  render() {
    // do not add a className to first div of return
    return (
      <div id="linkToProjects">
        <h2 id="projects">Recent Projects.</h2>
        <div className="row">
          <div id="project1">
            <img src={project1} alt="Go With Me App" />
          </div>
        </div>


        <div className="slope"><img alt="" src={slope} /></div>
      </div>
    );
  }
}

// SEMANTIC PROJECT TEMPLATE
// <div className="projects" id="scroll">
//   <Project
//     title="Levy Tran"
//     meta="Ex Girlfriend"
//     description="Jaes new girlfriend"
//   />
//   <Project
//     title="Levy Tran"
//     meta="Ex Girlfriend"
//     description="Jaes new girlfriend"
//   />
//   <Project
//     title="Levy Tran"
//     meta="Ex Girlfriend"
//     description="Jaes new girlfriend"
//   />
//   <Project
//     title="Levy Tran"
//     meta="Ex Girlfriend"
//     description="Jaes new girlfriend"
//   />
//   <Project
//     title="Levy Tran"
//     meta="Ex Girlfriend"
//     description="Jaes new girlfriend"
//   />
// </div>
