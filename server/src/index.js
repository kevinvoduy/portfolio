import http from 'http';
import App from './config/express';

const app = App.express;

const server = http.createServer(app);
const PORT = process.env.PORT || 3030;

server.listen(PORT, (err) => {
  if (err) throw new Error;
  console.log('Successfully connected to port', PORT);
});

 export default app;