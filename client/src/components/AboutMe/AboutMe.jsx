import React from 'react';
import image from '../../../public/dist/image.png';
import './aboutme.css';

const AboutMe = () => (
  <div>
    <div className="">
      <div className="profile">
        <img id="profilepic" src={image} alt="" />
        <div className="blurb">
          <h2>Full Stack Engineer</h2>
          <h5>someone teach me how to smile</h5>
        </div>
      </div>
    </div>
  </div>
);

export default AboutMe;
