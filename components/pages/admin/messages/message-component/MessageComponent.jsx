import { useState } from 'react'
import styles from './MessageComponent.module.scss'
import MessageDetails from './message-details/MessageDetails'
import MessageList from './message-lis/MessageList'

function MessageComponent() {
  const [selectedMessage, setSelectedMessage] = useState(null)

  const handleSelectMessage = (message) => {
    setSelectedMessage(message)
  }

  const handleCloseMessageDetails = () => {
    setSelectedMessage(null)
  }

  return (
    <div className={styles.messageComponent}>
      {selectedMessage ? (
        <MessageDetails
          message={selectedMessage}
          onClose={handleCloseMessageDetails}
        />
      ) : (
        <MessageList onSelectMessage={handleSelectMessage} />
      )}
    </div>
  )
}

export default MessageComponent
