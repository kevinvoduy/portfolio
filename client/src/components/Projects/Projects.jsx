import React from 'react';
import project1 from '../../../public/dist/gowithme.png';
import project2 from '../../../public/dist/coffeemeetsfido.png';
import slope from './slope.svg';

import './projects.css';

const Projects = () => (
  <div id="linkToProjects">
    <h2 id="projects">Recent Projects.</h2>
    <div className="row">
      <div className="project" id="imgRight">

        <div className="projectBio">
          <h2>Go With Me</h2>
          <p>{'itinerary app that doesn\'t work yet.'}</p>
        </div>
        <div className="prjectImage">
          <img src={project1} alt="Go With Me App" />
        </div>
        <div className="techStack">
          <h3>React - Node - Mongo/MySQL - AWS</h3>
        </div>

      </div>
    </div>
    <div className="row">
      <div className="project" id="imgLeft">

        <div className="prjectImage">
          <img src={project2} alt="Go With Me App" />
        </div>
        <div className="projectBio">
          <h2>Coffee Meets Fido</h2>
          <p>{'itinerary app that doesn\'t work yet.'}</p>
        </div>
        <div className="techStack">
          <h3>React - Node - SQLite - Firebase - Google API - Socket.io</h3>
        </div>

      </div>
    </div>
    <div className="slope"><img alt="" src={slope} /></div>
  </div>
);

export default Projects;

// DRAG / HORIZONTAL SCROLL
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
