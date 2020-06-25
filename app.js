var express = require('express');		// The require() function includes the code for Express
var app = express();					// Initialize the Express library
var http = require('http').Server(app);	// Initialize an HTTP server
var io = require('socket.io')(http);	// Include and initialize SocketIO
var port = process.env.PORT || 8000;	// Set the default port number to 8000, or use Heroku's settings (process.env.PORT)

app.use(express.static('public'));		// Tell Express to serve everything in the "public" folder as static files

http.listen(port, function() {					// Activate the server and listen on our specified port number
	console.log('Listening on port ' + port);	// Display this message in the console once the server is active
});

io.on('connection', function(socket) {	// When a user connects over websocket:
	console.log('A user connected!');	// Display this message in the console

//send to everyone
io.emit('test', "hi there! I'll be our server today!");

socket.on('test', function(data){
	console.log(data);

	socket.broadcast.emit("test", "broadcast")
});
});