const express = require('express');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');
const { Server } = require('socket.io');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
    },
});

// Set env file

dotenv.config({ path: './config.env' });
const PORT = process.env.PORT;

// Run on client connection

io.on('connection', (socket) => {

    // console.log('User connected');

    socket.emit('message', 'Welcome to Discourse!');

    socket.broadcast.emit('message', 'A user has joined the chat.');

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left the chat.')
    });

    socket.on('chatMessage', message => {
        io.emit('message', message);
    })

});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));