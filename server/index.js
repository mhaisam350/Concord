const express = require('express');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');
const { Server } = require('socket.io');

const formatMessage = require('./utils/formatMessage');
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require('./utils/users');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
    },
});

const automatedSender = 'Discourse';

// Set env file

dotenv.config({ path: './config.env' });
const PORT = process.env.PORT;

// Run on client connection

io.on('connection', (socket) => {

    socket.on('joinRoom', ({ username, room }) => {

        const user = userJoin(socket.id, username, room);
        // console.log(user);

        socket.join(user.room);

        socket.emit('message', formatMessage(automatedSender, 'Welcome to Discourse!'));

        socket.broadcast.to(user.room).emit('message', formatMessage(automatedSender, `${user.username} has joined the chat.`));

        io.to(user.room).emit('roomUsers', getRoomUsers(user.room));

    });

    socket.on('chatMessage', message => {

        const user = getCurrentUser(socket.id);

        io.to(user.room).emit('message', formatMessage(user.username, message));

    });

    socket.on('disconnect', () => {

        const user = userLeave(socket.id);

        if (user) {

            io.to(user.room).emit('message', formatMessage(automatedSender, `${user.username} has left the chat.`));

            io.to(user.room).emit('roomUsers', getRoomUsers(user.room));

        };

    });

});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));