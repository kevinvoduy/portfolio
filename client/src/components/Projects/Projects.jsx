import React from 'react';
import AOS from 'aos';
import './aos.css';
import './projects.css';

class Projects extends React.Component {
  constructor() {
    super();
    AOS.init({
      disable: 'phone',
    });
  }
  render() {
    return (
      <div id="linkToProjects">
        <h2 id="projects">Recent Projects.</h2>
        <div className="row" id="firstRow">
          <div className="project odd" id="imgLeft" >

            <div
              className="projectBio"
              id="left"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
            >
              <h2>Discor</h2>
              <span id="responsibilities">Built on AWS cloud infrastructure and scalable service oriented Node architecture</span>

              <h4>Technology</h4>
              <p>UX designed with Sass. Built on cloud infrastructure with elastic load balancing and storage. Leverages web sockets for real time message updates. Get image upload and resizing with AWS S3 and Lambda.</p>

              <a href="http://discor.us"><button><span>View</span></button></a>
            </div>
            <div
              className="prjectImage"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
            >
              <a href="http://discor.us"><img src="/dist/discor.png" alt="Discor App" /></a>
            </div>
            <div className="techStack">
              <h3>React/Redux - Node - AWS - DynamoDB/RDS - Nginx - Web Sockets</h3>
            </div>

          </div>
        </div>
        <div className="row" id="secondRow">
          <div className="project even" id="imgRight" >

            <div
              className="projectBio"
              id="right"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
            >
              <h2>Go With Me</h2>
              <span id="responsibilities">Built on scalable service oriented Node infrastructure and continuous delivery pipeline</span>

              <h4>Technology</h4>
              <p>Get optimized content delivery with Redis cache and cron workers. Modular backend architecture with ORM/ODM databases. Fully built search and itinerary modules.</p>

              <a href="https://github.com/GoWithMeL1FB"><button><span>Code</span></button></a>
            </div>
            <div
              className="prjectImage"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
            >
              <img src="/dist/gowithme.png" alt="Go With Me App" />
            </div>
            <div className="techStack">
              <h3>React/Redux - Node - Mongo/MySQL - Redis - AWS - Nginx</h3>
            </div>

          </div>
        </div>
        <div className="row" id="thirdRow">
          <div className="project odd" id="imgLeft">

            <div
              className="prjectImage"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
            >
              <img src="/dist/coffeemeetsfido.png" alt="coffee meets fido" />
            </div>
            <div
              className="projectBio"
              id="left"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
            >
              <h2>Coffee Meets Fido</h2>
              <span id="responsibilities">Utilizes web sockets and Google Maps API for instant notifications and updates</span>

              <h4>Technology</h4>
              <p>Built on Node infrastructure and React framework. Integrates with Google Maps API for address lookup and location services. Uses a Firebase layer as middle-man for delpoyments and authenitication strategies.</p>

              <a href="https://github.com/DangerDogs/BoneBuds"><button><span>Code</span></button></a>
            </div>
            <div className="techStack">
              <h3>React - Node - SQLite - Google API - Socket.io - Firebase</h3>
            </div>

          </div>
        </div>
        <div className="row" id="lastRow">
          <div className="project even" id="imgRight">

            <div
              className="projectBio"
              id="right"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
            >
              <h2>Trippy Trip</h2>
              <span id="responsibilities">Takes advantage of jQuery and Boostrap libraries for rapid design work</span>

              <h4>Technology</h4>
              <p>Trippy Trip is a mobile first web application. Designed with metrics widgets that asynchronously fetches from MySQL. Leverages jQuery for awesome animations like front page carousel and parallax.</p>

            </div>
            <div
              className="prjectImage"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
            >
              <img src="/dist/trippy.jpg" alt="trippy trip" />
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
