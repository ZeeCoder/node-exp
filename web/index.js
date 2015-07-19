var express = require('express');
var app     = express();
var http    = require('http').Server(app);
var io      = require('socket.io')(http);
var path    = require('path');

var config = {
  port: 30000
};

app.use(express.static('web'));

app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname + '/../view/index.html'));
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('some event', function(data){
    console.log('client message: ' + data);
  });
});

http.listen(config.port, function(){
  console.log('listening on *:' + config.port);
});
