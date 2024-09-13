'use client'
import { useEffect, useState } from 'react'
import { doc, getDoc, Timestamp, updateDoc } from 'firebase/firestore'
import { useRouter, useSearchParams } from 'next/navigation'
import { db } from '@/libs/firebase/firebase'

export const useEditPost = () => {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const searchParams = useSearchParams()
  const postId = searchParams.get('postId')

  useEffect(() => {
    const fetchPost = async () => {
      if (!postId) return

      const docRef = doc(db, 'blogPosts', postId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        const postData = docSnap.data()

        // Format publishDate for the date input (YYYY-MM-DD format)
        const publishDate = postData.publishDate
          ? new Date(postData.publishDate.seconds * 1000)
              .toISOString()
              .split('T')[0] // Ensure the date is in YYYY-MM-DD format
          : ''

        setPost({ ...postData, publishDate }) // Include the formatted date
        setLoading(false)
      } else {
        console.error('No such post!')
      }
    }

    fetchPost()
  }, [postId])

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Convert the date string to Firestore Timestamp
    let publishDateAsTimestamp = null

    if (post.publishDate) {
      const parsedDate = new Date(post.publishDate + 'T00:00:00') // Convert the string date back to a valid date object
      if (!isNaN(parsedDate.getTime())) {
        publishDateAsTimestamp = Timestamp.fromDate(parsedDate) // Convert to Firestore Timestamp
      } else {
        console.error('Invalid publishDate format')
      }
    }

    const docRef = doc(db, 'blogPosts', postId)

    try {
      await updateDoc(docRef, {
        ...post,
        publishDate: publishDateAsTimestamp, // Pass the valid Timestamp to Firestore
      })
      router.push('/admin')
    } catch (err) {
      console.error('Failed to update post:', err)
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target

    if (name === 'publishDate') {
      setPost({ ...post, [name]: value }) // Store the date string in YYYY-MM-DD format
    } else {
      setPost({ ...post, [name]: type === 'checkbox' ? checked : value })
    }
  }

  return {
    post,
    loading,
    handleSubmit,
    handleInputChange,
  }
}
