import styles from '../styles/Room.module.scss';

import { ChatDetails } from '../components/ChatDetails';

export const Room = () => {

  return (

    <main>

        <section>

            <section>

                <h1>Discourse</h1>
                <button>Leave Room</button>

            </section>

            <section>

                <section className={styles['chat-details']}>
                    <ChatDetails />
                </section>

                <section className={styles['chat-window']}>

                </section>
                
            </section>

            <section className={styles['chat-input']}>



            </section>

        </section>

    </main>

  )

}
