const express = require('express');
const parser = require('body-parser');
const router = require('../../routes');

const middleWare = [
  parser.json(),
  parser.urlencoded({ extended: true }),
];

class App {
  constructor() {
    this.express = express();
    this.mountMiddleWare();
    // this.mountRoutes();
  }

  mountMiddleWare() {
    this.express.use(...middleWare);
  }

  // mountRoutes() {
  //   this.express.use('/api', router);
  // }
}

module.exports = new App();