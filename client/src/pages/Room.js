import styles from '../styles/Room.module.scss';

import { ChatDetails } from '../components/ChatDetails';

export const Room = () => {

    const room = 'Room 1';
    const users = ['User1', 'User2'];

  return (

    <main className={styles.main}>

        <section className={styles.section}>

            <section className={styles['chat-header']}>

                <h1 className={styles.logo}>Discourse</h1>
                <button className={styles['leave-btn']}>Leave Room</button>

            </section>

            <section className={styles['chat-dashboard']}>

                <section className={styles['chat-details']}>
                    <ChatDetails room={room} users={users} />
                </section>

                <section className={styles['chat-window']}>
                    Chat window
                </section>
                
            </section>

            <section className={styles['chat-input']}>

                Chat input

            </section>

        </section>

    </main>

  )

}
