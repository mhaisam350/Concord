import { useState, useEffect } from 'react';

import styles from '../styles/Room.module.scss';

import { useSocketContext } from '../hooks/useSocketContext';

import { ChatDetails } from '../components/ChatDetails';
import { ChatMessage } from '../components/ChatMessage';
import { ChatInput } from '../components/ChatInput';

export const Room = () => {

    const room = 'Room 1';
    const users = ['User1', 'User2'];

    // const message = {
    //     user: 'User1',
    //     text: 'This is a text message.'
    // }

    const [messages, setMessages] = useState([]);
    
    const socket  = useSocketContext();

    useEffect(() => {

        socket.on('message', message => {

            setMessages(messages => [...messages, message]);

        });

    }, [socket])

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
                            <ChatMessage message={message} key={index} />
                        </div>

                    ))}

                </section>
                
            </section>

            <section className={styles['chat-input']}>
                <ChatInput />
            </section>

        </section>

    </main>

  )

}
