'use client'
import styles from './FeaturedPostsComponent.module.scss'
import PostTitle from '@/components/layout/containers/blog-elements/post-title/PostTitle'
import PostDescription from '@/components/layout/containers/blog-elements/post-description/PostDescription'
import ReadMoreBtn from '@/components/layout/containers/blog-elements/read-more-btn/ReadMoreBtn' // Ensure to import the ReadMoreBtn
import PostImage from '@/components/layout/containers/blog-elements/post-image/PostImage'
import { useFetchFeaturedPosts } from '@/libs/hooks/useFetchFeaturedPosts'

function FeaturedPostsComponent() {
  const { posts, loading, error } = useFetchFeaturedPosts(4) // Limit to 4 posts

  if (loading) return <div>Loading featured posts...</div>
  if (error) return <div>{error}</div>

  return (
    <div className={styles.featuredPostsComponent}>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <PostImage src={post.mainImage} alt={post.title} />
            <PostTitle title={post.title} />
            <PostDescription description={post.seoDescription} />
            <p>
              Published on:{' '}
              {new Date(post.publishDate.seconds * 1000).toLocaleDateString()}
            </p>
            <ReadMoreBtn slug={post.slug} title={post.title} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FeaturedPostsComponent
