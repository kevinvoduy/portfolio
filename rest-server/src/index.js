const http = require('http');
const App = require('./config/express');
const compression = require('compression');

const app = App.express;

app.use(compression());
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  console.log('entrypoint: bundle.js.gz');
  next();
});

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, (err) => {
  if (err) throw new Error;
  console.log('Successfully connected to port', PORT);
});

 module.exports = app;