import { useEffect } from 'react'
import { doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '@/libs/firebase/firebase'
import styles from './MessageDetails.module.scss'

function MessageDetails({ message, onClose }) {
  // Mark message as read when opened
  useEffect(() => {
    const markAsRead = async () => {
      if (!message.isRead) {
        await updateDoc(doc(db, 'messages', message.id), { isRead: true })
      }
    }
    markAsRead()
  }, [message])

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this message?')) {
      await deleteDoc(doc(db, 'messages', message.id))
      onClose()
    }
  }

  const handleMarkAsUnread = async () => {
    await updateDoc(doc(db, 'messages', message.id), { isRead: false })
    onClose()
  }

  return (
    <div className={styles.messageDetails}>
      <button className={styles.messageDetails__close} onClick={onClose}>Close</button>
      <h2>Message from {message.name}</h2>
      <p>
        <strong>Email:</strong> {message.email}
      </p>
      <p>
        <strong>Phone:</strong> {message.phone || 'N/A'}
      </p>
      <p>
        <strong>Website:</strong> {message.website || 'N/A'}
      </p>
      <p>
        <strong>Message:</strong>
      </p>
      <p>{message.message}</p>
      <p>
        <strong>Sent on:</strong> {new Date(message.createdAt).toLocaleString()}
      </p>
      <button className={styles.messageDetails__delete} onClick={handleDelete}>Delete</button>
      <button className={styles.messageDetails__unread} onClick={handleMarkAsUnread}>Mark as Unread</button>
    </div>
  )
}

export default MessageDetails
