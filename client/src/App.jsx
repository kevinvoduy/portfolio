import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import Jumbotron from './components/Jumbotron/Jumbotron';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Connect from './components/Connect/Connect';
import Footer from './components/Footer/Footer';

const App = () => (
  <div>
    <Jumbotron />
    <NavBar />
    <AboutMe />
    <Projects />
    <Connect />
    <Footer />
  </div>
);

export default App;
