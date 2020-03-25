const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();

const server = http.createServer(app);

const io = socketio(server);

// Set Static UI Folder
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('Server up at ', port);
});
