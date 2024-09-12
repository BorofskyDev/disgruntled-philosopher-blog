'use client'
import { useParams } from 'next/navigation'
import BlogPostComponent from '@/components/pages/blog/blog-post/BlogPostComponent'
import { useFetchPost } from '@/libs/hooks/useFetchPost'




export default function BlogPostPage() {
  const { slug } = useParams()
  console.log('Slug', slug)
  const { post, loading, error } = useFetchPost(slug)

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div>
      <BlogPostComponent post={post} />
    </div>
  )
}
