const path = require('path');
const express = require('express');

const app = express();
const buildPath = path.join(__dirname, 'dist');

app.use(express.static(buildPath));
app.set('port', process.env.PORT || 8080);

app.use('*', (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});