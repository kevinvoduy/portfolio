import React from 'react';
import 'smoothscroll';
import './app.css';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Projects from './components/Projects/Projects';
import Connect from './components/Connect/Connect';
import Footer from './components/Footer/Footer';

const App = () => (
  <div>
    <Jumbotron />
    <Projects />
    <Connect />
    <Footer />
  </div>
);

export default App;
