const http = require('http');
const App = require('./config/express');

const app = App.express;

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, (err) => {
  if (err) throw new Error;
  console.log('Successfully connected to port', PORT);
});

 module.exports = app;