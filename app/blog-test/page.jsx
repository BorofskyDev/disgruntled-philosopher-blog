'use client'
import { useFetchPublishedPosts } from '@/libs/hooks/useFetchPublishedPosts'

function BlogTestPage() {
  const { posts, loading, error } = useFetchPublishedPosts()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <h1>Fetched Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default BlogTestPage
