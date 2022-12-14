import styles from '../styles/Room.module.scss';

export const Room = () => {

  return (

    <main>

        <section>

            <section>

                <h1>Discourse</h1>
                <button>Leave Room</button>

            </section>

            <section>

                <section className={styles['room-details']}>

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
