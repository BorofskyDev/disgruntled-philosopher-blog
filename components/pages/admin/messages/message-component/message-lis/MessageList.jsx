import { useFetchMessages } from '@/libs/hooks/useFetchMessages'
import styles from './MessageList.module.scss'

function MessageList({ onSelectMessage }) {
  const { messages, loading, error } = useFetchMessages()

  if (loading) return <div>Loading messages...</div>
  if (error) return <div>{error}</div>

  return (
    <ul className={styles.messageList}>
      {messages.map((message) => (
        <li
          key={message.id}
          onClick={() => onSelectMessage(message)}
          className={message.isRead ? styles.read : styles.unread} 
        >
          <p>
            <strong>{message.name}</strong> -{' '}
            {new Date(message.createdAt).toLocaleDateString()}
          </p>
          <p>{message.message.slice(0, 50)}...</p>
        </li>
      ))}
    </ul>
  )
}

export default MessageList
