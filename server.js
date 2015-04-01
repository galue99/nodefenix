var express = require('express'),
    io = require('socket.io'),
    http = require('http'),
    app = express(),
    server = http.createServer(app),
    io = io.listen(server);
 
app.use('/', 
    express.static(__dirname  + '/app'));

app.get('/incidente', function(req, res){
	res.send('Hello World');
});

server.listen(3000, function(){
	console.log('Server running port 3000');
});