import { useState, useEffect } from 'react';

import styles from '../styles/Room.module.scss';

import { io } from 'socket.io-client';

import { ChatDetails } from '../components/ChatDetails';
import { ChatMessage } from '../components/ChatMessage';
import { ChatInput } from '../components/ChatInput';

let socket;

export const Room = () => {

    // const room = 'Room 1';
    const users = ['User1', 'User2'];

    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');
    const [messages, setMessages] = useState([]);

    // console.log(username);
    // console.log(room);

    useEffect(() => {
        
        socket = io('http://localhost:4000');

        setUsername(sessionStorage.getItem('username'));
        setRoom(sessionStorage.getItem('room'));

        socket.on('message', message => {

            setMessages(messages => [...messages, message]);
            // console.log(message.username);

        });

    }, [])

  return (

    <main className={styles.main}>

        <section className={styles.section}>

            <section className={styles['chat-header']}>

                <h1 className={styles.logo}>Discourse</h1>
                <a href='/' className={styles['leave-link']}>Leave Room</a>

            </section>

            <section className={styles['chat-dashboard']}>

                <section className={styles['chat-details']}>
                    <ChatDetails room={room} users={users} />
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
