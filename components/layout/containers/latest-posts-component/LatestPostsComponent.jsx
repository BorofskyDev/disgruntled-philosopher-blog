import { useFetchPublishedPosts } from '@/libs/hooks/useFetchPublishedPosts'
import PostTitle from '@/components/layout/containers/blog-elements/post-title/PostTitle'
import styles from './LatestPostsComponent.module.scss'
import PostImage from '../blog-elements/post-image/PostImage'
import ReadMoreBtn from '../blog-elements/read-more-btn/ReadMoreBtn'

function LatestPostsComponent() {
  const { posts, loading, error } = useFetchPublishedPosts()

  if (loading) return <div>Loading recent posts...</div>
  if (error) return <div>{error}</div>

  const recentPosts = posts.slice(0, 6)

  return (
    <div className={styles.latestPostsComponent}>
      <ul>
        {recentPosts.map((post) => (
          <li key={post.id}>
            <PostImage src={post.mainImage} alt={post.title} />
            <PostTitle title={post.title} />
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

export default LatestPostsComponent
