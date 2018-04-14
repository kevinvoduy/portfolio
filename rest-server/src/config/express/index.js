const express = require('express');
const parser = require('body-parser');
const compression = require('compression');
const path = require('path');
const router = require('../../routes');

const middleWare = [
  compression(),
  parser.json(),
  parser.urlencoded({ extended: true }),
  express.static(path.resolve(__dirname, '../../../../client/public')),
];

class App {
  constructor() {
    this.express = express();
    this.mountMiddleWare();
    // this.mountRoutes();
  }

  mountMiddleWare() {
    this.express.use(...middleWare);
    this.express.get('*.js', function (req, res, next) {
      req.url = req.url + '.gz';
      res.set('Content-Encoding', 'gzip');
      next();
    });
  }

  // mountRoutes() {
  //   this.express.use('/api', router);
  // }
}

module.exports = new App();