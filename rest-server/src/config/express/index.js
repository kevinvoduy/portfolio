import express from 'express';
import parser from 'body-parser';
import router from '../../routes';
import path from 'path';

const middleWare = [
  parser.json(),
  parser.urlencoded({ extended: true }),
  express.static(path.resolve(__dirname, '../../../../client/public'))
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

export default new App();