import { useState, useEffect } from 'react'
import { fetchPostBySlug } from '@/libs/functions/fetchPostBySlug'

export const useFetchPost = (slug) => {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true)
      const post = await fetchPostBySlug(slug)

      if (post) {
        setPost(post)
      } else {
        setError('Post not found.')
      }
      setLoading(false)
    }

    if (slug) {
      fetchPost()
    }
  }, [slug])

  return { post, loading, error }
}
