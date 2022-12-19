import styles from '../styles/ChatMessage.module.scss';

export const ChatMessage = ({ username, text, time }) => {

  return (

    <div className={styles['message-container']}>

      <div className={styles['flex-container']}>
        <p>{username}</p>
        <p>{time}</p>
      </div>

      <p>{text}</p>

    </div>
  
  )
  
}
