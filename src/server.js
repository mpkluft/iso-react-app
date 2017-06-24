import express from 'express';
import bunyan from 'bunyan';


var server = express();


var log = bunyan.createLogger({name: "myapp"});
log.info("hi");

var port = 3005;

server.get('/', (req, res) => {
  res.send('Hello World!');
});

server.listen(port, () => {
  console.log('Example server listening on port ' + port);
});

