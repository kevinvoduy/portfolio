import React from 'react';
import project1 from '../../../public/dist/gowithme.png';
import project2 from '../../../public/dist/coffeemeetsfido.png';
import project3 from '../../../public/dist/trippy.png';
import slope from './slope.svg';

import './projects.css';

const Projects = () => (
  <div id="linkToProjects">
    <h2 id="projects">Recent Projects.</h2>
    <div className="row">
      <div className="project odd" id="imgRight">

        <div className="projectBio" id="right">
          <h2>Go With Me</h2>
          <p>Super chub you are doin me a concern what a nice floof most angery pupper I have ever seen the neighborhood pupper big ol, borking doggo much ruin diet shibe fat boi. sub woofer adorable doggo. Very hand that feed shibe adorable doggo noodle horse wow very biscit, heckin.</p><br />
          <p>Many pats h*ck yapper, super chub. Puggorino heck ur givin me a spook you are doin me a concern fluffer, doge super chub heckin, borkf long woofer pupperino.</p>
          <button>Info</button>
        </div>
        <div className="prjectImage">
          <img src={project1} alt="Go With Me App" />
        </div>
        <div className="techStack">
          <h3>React/Redux - Node - Mongo/MySQL - AWS</h3>
        </div>

      </div>
    </div>
    <div className="row">
      <div className="project even" id="imgLeft">

        <div className="prjectImage">
          <img src={project2} alt="Go With Me App" />
        </div>
        <div className="projectBio" id="left">
          <h2>Coffee Meets Fido</h2>
          <p>Super chub you are doin me a concern what a nice floof most angery pupper I have ever seen the neighborhood pupper big ol, borking doggo much ruin diet shibe fat boi. sub woofer adorable doggo. Very hand that feed shibe adorable doggo noodle horse wow very biscit, heckin.</p><br />
          <p>Many pats h*ck yapper, super chub. Puggorino heck ur givin me a spook you are doin me a concern fluffer, doge super chub heckin, borkf long woofer pupperino.</p>
          <button>Info</button>
        </div>
        <div className="techStack">
          <h3>React - Node - SQLite - Firebase - Google API - Socket.io</h3>
        </div>

      </div>
    </div>
    <div className="row">
      <div className="project odd" id="imgRight">

        <div className="projectBio" id="right">
          <h2>Trippy Trip</h2>
          <p>Super chub you are doin me a concern what a nice floof most angery pupper I have ever seen the neighborhood pupper big ol, borking doggo much ruin diet shibe fat boi. sub woofer adorable doggo. Very hand that feed shibe adorable doggo noodle horse wow very biscit, heckin.</p><br />
          <p>Many pats h*ck yapper, super chub. Puggorino heck ur givin me a spook you are doin me a concern fluffer, doge super chub heckin, borkf long woofer pupperino.</p>
          <button>Info</button>
        </div>
        <div className="prjectImage">
          <img src={project3} alt="Go With Me App" />
        </div>
        <div className="techStack">
          <h3>React - Bootstrap - MySQL - Heroku</h3>
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
