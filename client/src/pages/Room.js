import { useState, useEffect } from 'react';

import styles from '../styles/Room.module.scss';

import { io } from 'socket.io-client';

import { ChatDetails } from '../components/ChatDetails';
import { ChatMessage } from '../components/ChatMessage';
import { ChatInput } from '../components/ChatInput';

let socket;

export const Room = () => {

    const room = 'Room 1';
    const users = ['User1', 'User2'];

    // const message = {
    //     user: 'User1',
    //     text: 'This is a text message.'
    // }

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        
        socket = io('http://localhost:4000');

        socket.on('message', message => {

            setMessages(messages => [...messages, message]);
            console.log(message);

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

                    {messages?.map((message, index) => (

                        <div key={index}>
                            <ChatMessage message={message} />
                        </div>

                    ))}

                </section>
                
            </section>

            <section className={styles['chat-input']}>
                <ChatInput socket={socket} />
            </section>

        </section>

    </main>

  )

}
