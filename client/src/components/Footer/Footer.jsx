import React from 'react';
import linkedin from '../../../public/dist/linkedin.svg';
import git from '../../../public/dist/github.svg';
import './footer.css';

const Footer = () => (
  <div className="footer">
    <div className="center">
      <div className="social">
        <a href="http://linkedin.com/in/kevinvoduy" ><img src={linkedin} alt="" /></a>
        <a href="http://github.com/kevinvoduy" ><img src={git} alt="" /></a>
      </div>
      <h5>KEVIN DUY VO<span id="cc"> ©2018</span></h5>
    </div>
  </div>
);

export default Footer;
