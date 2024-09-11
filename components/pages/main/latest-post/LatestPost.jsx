import { useFetchPublishedPosts } from '@/libs/hooks/useFetchPublishedPosts'
import styles from './LatestPost.module.scss'

function LatestPost() {
  const { posts, loading, error } = useFetchPublishedPosts()

  
  const latestPost = posts.length > 0 ? posts[0] : null

  if (loading) {
    return <div>Loading latest post...</div>
  }

  if (error) {
    return <div>Error loading latest post: {error}</div>
  }

  if (!latestPost) {
    return <div>No latest post available</div>
  }

  return (
    <div className={styles.latestPost}>
      <h2 className={styles.title}>{latestPost.title}</h2>
      <img
        src={latestPost.mainImage}
        alt={latestPost.title}
        className={styles.mainImage}
      />
      <p className={styles.date}>
        Published on:{' '}
        {new Date(latestPost.publishDate.seconds * 1000).toLocaleDateString()}
      </p>
      <p className={styles.description}>{latestPost.description}</p>
      <div className={styles.tags}>
        {latestPost.tags?.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default LatestPost
