import styles from '../styles/Home.module.scss';

export const Home = () => {

  return (

    <>

        <main className={styles.main}>
            
            <section className={styles.section}>

                <h1 className={styles.logo}>Discourse</h1>

                <form className={styles['homepage-form']}>

                    <label for='username'>Username</label>
                    <input type='text' name='username' required />

                    <label for='rooms'>Room</label>
                    <select name='rooms'>
                        <option value='room1'>Room 1</option>
                        <option value='room2'>Room 2</option>
                    </select>

                    <button type='submit'>Join Chat</button>

                </form>

            </section>

        </main>

    </>

  )

}
