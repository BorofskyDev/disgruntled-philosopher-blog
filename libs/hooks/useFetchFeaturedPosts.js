import { useState, useEffect } from 'react'
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from 'firebase/firestore'
import { db } from '@/libs/firebase/firebase'

export const useFetchFeaturedPosts = (postLimit = 4) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const now = new Date()

        const q = query(
          collection(db, 'blogPosts'),
          where('publishDate', '<=', now),
          where('isDraft', '==', false),
          where('isFeatured', '==', true), // Fetch only featured posts
          orderBy('publishDate', 'desc'),
          limit(postLimit) // Limit based on the argument passed
        )

        const querySnapshot = await getDocs(q)
        const postsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        setPosts(postsArray)
      } catch (err) {
        console.error('Failed to fetch posts:', err)
        setError('Failed to fetch posts')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [postLimit]) // postLimit is a dependency

  return { posts, loading, error }
}
