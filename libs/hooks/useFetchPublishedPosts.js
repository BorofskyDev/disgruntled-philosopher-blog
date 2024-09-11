import { useState, useEffect } from 'react'
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore'
import { db } from '@/libs/firebase/firebase'

export const useFetchPublishedPosts = () => {
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
          orderBy('publishDate', 'desc')
        )

        const querySnapshot = await getDocs(q)
        const postsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        
        console.log('Fetched Posts:', postsArray)

        setPosts(postsArray)
      } catch (err) {
        console.error('Failed to fetch posts:', err)
        setError('Failed to fetch posts')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return { posts, loading, error }
}
