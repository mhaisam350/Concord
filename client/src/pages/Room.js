import { useEffect } from 'react';

import styles from '../styles/Room.module.scss';

import { useSocketContext } from '../hooks/useSocketContext';

import { ChatDetails } from '../components/ChatDetails';
import { ChatMessage } from '../components/ChatMessage';
import { ChatInput } from '../components/ChatInput';

export const Room = () => {

    const room = 'Room 1';
    const users = ['User1', 'User2'];

    const socket  = useSocketContext();
    
    const message = {
        user: 'User1',
        text: 'This is a text message.'
    }

    useEffect(() => {

        socket.on('message', message => {
            console.log(message);
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
                    <ChatMessage message={message} />
                </section>
                
            </section>

            <section className={styles['chat-input']}>
                <ChatInput />
            </section>

        </section>

    </main>

  )

}
