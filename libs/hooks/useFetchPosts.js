import { useState, useEffect } from 'react'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '@/libs/firebase/firebase'

export const useFetchPosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const q = query(
          collection(db, 'blogPosts'),
          orderBy('createdAt', 'desc')
        )
        const querySnapshot = await getDocs(q)
        const postsArray = querySnapshot.docs.map((doc) => {
          const data = doc.data()
          return {
            id: doc.id,
            ...data,
            createdAt: data.createdAt ? data.createdAt.toDate() : null, // Convert Firestore timestamp to JS Date
          }
        })
        setPosts(postsArray)
      } catch (err) {
        setError('Failed to load posts.')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return { posts, loading, error }
}
