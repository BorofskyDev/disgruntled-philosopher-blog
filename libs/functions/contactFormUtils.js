import { addDoc, collection } from 'firebase/firestore' // Ensure these are imported
import { db } from '@/libs/firebase/firebase'

export const sendMessage = async (messageData) => {
  try {
    await addDoc(collection(db, 'messages'), {
      ...messageData,
      createdAt: new Date(),
    })
    return { success: true }
  } catch (error) {
    console.error('Error sending message:', error)
    return {
      success: false,
      error: 'Failed to send the message. Please try again.',
    }
  }
}

export const normalizeUrl = (url) => {
  if (url && !/^https?:\/\//i.test(url)) {
    return 'https://' + url
  }
  return url
}
