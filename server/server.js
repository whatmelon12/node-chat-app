const path = require('path');
const http = require('http');
const express = require('express');
const io = require('socket.io')(http);

const port = process.env.port || 3000;
const publicPath = path.join(__dirname, '../public');

var app = express();

app.use(express.static(publicPath));

http.listen(port, () => {
    console.log(`Started on port ${port}`)
});