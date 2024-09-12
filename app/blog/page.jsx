
'use client'

import { useFetchPublishedPosts } from '@/libs/hooks/useFetchPublishedPosts'
import Link from 'next/link'


export default function BlogPostsList() {
  const { posts, loading, error } = useFetchPublishedPosts()

  if (loading) return <div>Loading posts...</div>
  if (error) return <div>{error}</div>

  return (
    <div>
      <h1>All Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
            <p>{post.description}</p>
            <p>
              Published on:{' '}
              {new Date(post.publishDate.seconds * 1000).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
