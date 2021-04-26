const path = require('path');
const express = require('express');
const http = require('http');
const debug = require('debug')('http');

const app = express();
const buildPath = path.join(__dirname, 'dist');

app.use(express.static(buildPath));
app.set('port', process.env.PORT || 8080);

app.use('*', (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});

const server = http.createServer(app);

const port = app.get('port');
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
  console.log(
    `Server Listening on ${bind}`,
  );
}