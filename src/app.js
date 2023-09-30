const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
require('./database');

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(bodyParser.json());
  }

  routes() {
    this.app.use(routes);
  }
}

module.exports = new App().app;
