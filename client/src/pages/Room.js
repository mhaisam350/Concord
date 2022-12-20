import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../styles/Room.module.scss';

import { io } from 'socket.io-client';

import { ChatDetails } from '../components/ChatDetails';
import { ChatMessage } from '../components/ChatMessage';
import { ChatInput } from '../components/ChatInput';

let socket;

export const Room = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');
    const [messages, setMessages] = useState([]);
    const [roomUsers, setRoomUsers] = useState([]);

    const handleClick = () => {

        // sessionStorage.removeItem('username');
        sessionStorage.removeItem('room');

        socket.disconnect();

        navigate('/');

    }

    useEffect(() => {
        
        socket = io('http://localhost:4000');

        setUsername(sessionStorage.getItem('username'));
        setRoom(sessionStorage.getItem('room'));

        socket.on('message', message => {

            setMessages(messages => [...messages, message]);

        });

        socket.on('roomUsers', roomUsersArray => {

            setRoomUsers(roomUsersArray);

        });

    }, [])

    useEffect(() => {

        if (username && room) {
            socket.emit('joinRoom', { username, room });
        };


    }, [username, room])

  return (

    <main className={styles.main}>

        <section className={styles.section}>

            <section className={styles['chat-header']}>

                <h1 className={styles.logo}>Discourse</h1>
                <button className={styles['leave-btn']} onClick={handleClick}>Leave Room</button>

            </section>

            <section className={styles['chat-dashboard']}>

                <section className={styles['chat-details']}>
                    <ChatDetails room={room} users={roomUsers} />
                </section>

                <section className={styles['chat-window']}>

                    <div className={styles['chat-content']}>

                    {messages?.map((message, index) => (

                        <div key={index}>
                            <ChatMessage username={message.username} text={message.text} time={message.time} />
                        </div>

                    ))}

                    </div>

                </section>
                
            </section>

            <section className={styles['chat-input']}>
                <ChatInput socket={socket} />
            </section>

        </section>

    </main>

  )

}
