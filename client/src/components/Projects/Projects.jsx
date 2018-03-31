import React from 'react';
import AOS from 'aos';
import project1 from '../../../public/dist/gowithme.png';
import project2 from '../../../public/dist/coffeemeetsfido.png';
import project3 from '../../../public/dist/trippy.png';
import '../../../../node_modules/aos/dist/aos.css';
import './projects.css';

class Projects extends React.Component {
  constructor() {
    super();
    AOS.init();
  }
  render() {
    return (
      <div id="linkToProjects">
        <h2 id="projects">Recent Projects.</h2>
        <div className="row" id="firstRow">
          <div className="project odd" id="imgRight" >

            <div
              className="projectBio"
              id="right"
              data-aos="fade-right"
              data-aos-offset="600"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <h2>Go With Me</h2>
              <span id="responsibilities">Built on scalable service oriented Node infrastructure and continuous delivery pipeline</span>

              <h4>Technology</h4>
              <p>Built Redis cache with cron workers and load balancer for optimized content delivery. Designed backend architecture and ORM/ODM database schemas. Created search and itineary building modules.</p>

              <button>Info</button>
            </div>
            <div
              className="prjectImage"
              data-aos="fade-left"
              data-aos-offset="600"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <img src={project1} alt="Go With Me App" />
            </div>
            <div className="techStack">
              <h3>React/Redux - Node - Mongo/MySQL - Redis - AWS - Nginx</h3>
            </div>

          </div>
        </div>
        <div className="row" id="secondRow">
          <div className="project even" id="imgLeft">

            <div
              className="prjectImage"
              data-aos="fade-up-right"
              data-aos-offset="600"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <img src={project2} alt="Go With Me App" />
            </div>
            <div
              className="projectBio"
              id="left"
              data-aos="fade-up-left"
              data-aos-offset="600"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <h2>Coffee Meets Fido</h2>
              <span id="responsibilities">Utilizes web sockets and Google Maps API for instant notifications and updates</span>

              <h4>Technology</h4>
              <p>Built on Node infrastructure and React framework. Integrates with Google Maps API for address lookup and location services. Uses a Firebase layer as middle-man for delpoyments and authenitication strategies.</p>

              <button>Info</button>
            </div>
            <div className="techStack">
              <h3>React - Node - SQLite - Google API - Socket.io - Firebase</h3>
            </div>

          </div>
        </div>
        <div className="row" id="lastRow">
          <div className="project odd" id="imgRight">

            <div
              className="projectBio"
              id="right"
              data-aos="zoom-out-up"
              data-aos-offset="600"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <h2>Trippy Trip</h2>
              <span id="responsibilities">Takes advantage of jQuery and Boostrap libraries for rapid design work</span>

              <h4>Technology</h4>
              <p>Hey Leo why were you such a bad dog today? You ate my birthday cake and made one of the kids at the party cry. Please try not to do that again Leo.</p>

              <button>Info</button>
            </div>
            <div
              className="prjectImage"
              data-aos="zoom-out-up"
              data-aos-offset="600"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <img src={project3} alt="Go With Me App" />
            </div>
            <div className="techStack">
              <h3>jQuery - Bootstrap - MySQL - Heroku</h3>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

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
