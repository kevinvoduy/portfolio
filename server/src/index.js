const http = require('http');
const App = require('./config/express');

const app = App.express;

const server = http.createServer(app);
const PORT = 3030;

server.listen(PORT, (err) => {
  if (err) throw new Error;
  console.log('Successfully connected to port', PORT);
});

module.exports = app;