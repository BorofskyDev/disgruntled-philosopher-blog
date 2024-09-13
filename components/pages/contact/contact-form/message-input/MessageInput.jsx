import styles from './MessageInput.module.scss'

function MessageInput({ message, setMessage }) {
  return (
    <div className={styles.messageInput}>
      <label htmlFor='message'>Message</label>
      <textarea
        id='message'
        name='message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        maxLength='500'
      />
    </div>
  )
}

export default MessageInput
