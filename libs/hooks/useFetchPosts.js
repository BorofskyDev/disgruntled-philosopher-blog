import { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '@/libs/firebase/firebase'

export const useFetchPosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)

    // Firestore real-time listener
    const q = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'))

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const postsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate() || null, // Convert Firestore timestamp
        }))
        setPosts(postsArray)
        setLoading(false)
      },
      (error) => {
        setError('Failed to load posts.')
        setLoading(false)
      }
    )

    // Cleanup listener on unmount
    return () => unsubscribe()
  }, [])

  return { posts, loading, error }
}
