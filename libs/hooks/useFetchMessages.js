import { useState, useEffect } from 'react'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '@/libs/firebase/firebase'

export const useFetchMessages = () => {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true)
      try {
        const q = query(
          collection(db, 'messages'),
          orderBy('createdAt', 'desc')
        )
        const querySnapshot = await getDocs(q)
        const messagesArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate(), // Convert Firestore Timestamp to JS Date
        }))
        setMessages(messagesArray)
      } catch (err) {
        setError('Failed to load messages.')
      } finally {
        setLoading(false)
      }
    }
    fetchMessages()
  }, [])

  return { messages, loading, error }
}
