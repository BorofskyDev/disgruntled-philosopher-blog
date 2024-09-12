import { useState, useEffect } from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '@/libs/firebase/firebase'

export const useFetchPost = (slug) => {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true)
      try {
        
        const q = query(collection(db, 'blogPosts'), where('slug', '==', slug))
        const querySnapshot = await getDocs(q)

        if (!querySnapshot.empty) {
          
          const docSnap = querySnapshot.docs[0]
          setPost(docSnap.data())
        } else {
          setError('Post not found.')
        }
      } catch (err) {
        setError('Failed to load post.')
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchPost()
    }
  }, [slug])

  return { post, loading, error }
}
