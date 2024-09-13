'use client'
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

export const useFetchPublishedPosts = (pageNumber = 1, postsPerPage = 6) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [totalPosts, setTotalPosts] = useState(0)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const now = new Date()

        // Fetch total post count
        const totalQuerySnapshot = await getDocs(
          query(collection(db, 'blogPosts'))
        )
        setTotalPosts(totalQuerySnapshot.size)

        const q = query(
          collection(db, 'blogPosts'),
          where('publishDate', '<=', now),
          where('isDraft', '==', false),
          orderBy('publishDate', 'desc'),
          limit(postsPerPage) // Limit to fetch per page
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
  }, [pageNumber, postsPerPage])

  return { posts, loading, error, totalPosts }
}
