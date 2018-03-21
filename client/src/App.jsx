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
    <AboutMe title="About." />
    <h2 className="stupidP">{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}</h2>
    <Projects />
    <Connect />
    <Footer />
  </div>
);

export default App;
