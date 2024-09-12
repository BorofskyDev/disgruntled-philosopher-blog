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

        const publishDate = postData.publishDate
          ? new Date(postData.publishDate.seconds * 1000)
              .toISOString()
              .split('T')[0]
          : ''

        setPost({ ...postData, publishDate })
        setLoading(false)
      } else {
        console.error('No such post!')
      }
    }

    fetchPost()
  }, [postId])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const publishDateAsTimestamp = post.publishDate
      ? Timestamp.fromDate(new Date(post.publishDate))
      : null

    const docRef = doc(db, 'blogPosts', postId)
    try {
      await updateDoc(docRef, {
        ...post,
        publishDate: publishDateAsTimestamp,
      })

      router.push('/admin')
    } catch (err) {
      console.error('Failed to update post:', err)
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setPost({ ...post, [name]: type === 'checkbox' ? checked : value })
  }

  return {
    post,
    loading,
    handleSubmit,
    handleInputChange,
  }
}
