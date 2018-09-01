const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.port || 3000;
const publicPath = path.join(__dirname, '../public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user is connected')

    socket.on('disconnect', () => {
        console.log('Client disconnected')
    })
});

server.listen(port, () => {
    console.log(`Started on port ${port}`)
});