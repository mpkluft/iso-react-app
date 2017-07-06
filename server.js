import express from 'express';
import bunyan from 'bunyan';
import favicon from 'express-favicon';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import path from 'path';

var server = express();

server.use(favicon(__dirname + '/public/favicon.ico'));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
//override with the X-HTTP-Method-Override header in the request 
server.use(methodOverride('X-HTTP-Method-Override'));
server.use(express.static(path.join(__dirname, "public")));

var log = bunyan.createLogger({name: "myapp"});
log.info("hi");

var port = 1337;

server.get('/api', function (req, res) {
    res.send('API is running');
});

server.get('/', (req, res) => {
  res.send('Hello World!');
});

server.listen(port, () => {
  console.log('Example server listening on port ' + port);
});

