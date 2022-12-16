import styles from '../styles/ChatMessage.module.scss';

export const ChatMessage = ({ message }) => {

  return (

    <div className={styles['message-container']}>

      {/* <p>{message.user}</p> */}
      <p>{message}</p>

    </div>
  
  )
  
}
