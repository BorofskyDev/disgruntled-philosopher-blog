'use client'

import DOMPurify from 'dompurify'
import { useFetchPost } from '@/libs/hooks/useFetchPost' // Use the correct hook for fetching a single post
import { useParams } from 'next/navigation'
import MainPostTitle from '@/components/layout/containers/blog-elements/main-post-title/MainPostTitle'
import PostImage from '@/components/layout/containers/blog-elements/post-image/PostImage'
import PostDate from '@/components/layout/containers/blog-elements/post-date/PostDate'
import PostTags from '@/components/layout/containers/blog-elements/post-tags/PostTags'
import styles from './BlogPostComponent.module.scss'

export default function BlogPostComponent() {
    const { slug } = useParams()
    const { post, loading, error } = useFetchPost(slug)
    const cleanContent = DOMPurify.sanitize(post.content)
    
    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    
    return (
    <div className={styles.blogPostComponent}>
      <MainPostTitle>{post.title}</MainPostTitle>
      {post.mainImage && <PostImage src={post.mainImage} alt={post.title} />}
      {post.publishDate && (
        <PostDate publishDate={post.publishDate} />
      )}
      {post.tags && post.tags.length > 0 && (
        <div>
          <h4>Tags:</h4>
          <PostTags tags={post.tags} />
        </div>
      )}
      <div dangerouslySetInnerHTML={{ __html: cleanContent }}></div>
    </div>
  )
}
