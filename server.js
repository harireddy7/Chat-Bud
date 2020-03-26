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

io.on('connection', socket => {
    console.log('New WebSocket Connection');

    socket.emit('message', 'Welcome to ChatBud!');

    // Broadcast Message
    socket.broadcast.emit('message', 'A New User has joined the Chat');

    // On Disconnection
    socket.on('disconnect', () => {
        io.emit('message', 'A User has left the chat!');
    });

    // handle chatMessage event from client
    socket.on('chatMessage', msg => {
        io.emit('message', msg);
    });
})

server.listen(port, () => {
    console.log('Server up at ', port);
});
