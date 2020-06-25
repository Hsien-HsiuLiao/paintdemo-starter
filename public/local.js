// start a WebSocket connection with the server using SocketIO
var socket = io();

socket.emit('test', "hey yo");

socket.on("test", function(data){
	console.log(data);
});

var canvas = document.getElementById('mycanvas');
var pen = canvas.getContext('2d');

pen.beginPath();

pen.moveTo(0,0);

pen.lineTo(501, 500);

pen.stroke();

canvas.addEventListener('mousedown', startDrawing);

function startDrawing(event){
	console.log("start" + event.clientX + "," + event.clientY);
	
	socket.emit('test', event.clientX + "," + event.clientY);
}