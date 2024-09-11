import { useState } from 'react'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/libs/firebase/firebase'

export const useDeletePost = () => {
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState(null)

  const deletePost = async (postId) => {
    setDeleting(true)
    setError(null)
    try {
      const postRef = doc(db, 'blogPosts', postId)
      await deleteDoc(postRef)
      setDeleting(false)
    } catch (err) {
      setError('Failed to delete post.')
      setDeleting(false)
    }
  }

  return { deletePost, deleting, error }
}
