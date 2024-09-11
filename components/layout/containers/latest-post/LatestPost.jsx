import React from 'react'
import { useFetchPublishedPosts } from '@/libs/hooks/useFetchPublishedPosts'
import styles from './LatestPost.module.scss'
import PostImage from '../blog-elements/post-image/PostImage'
import PostTitle from '../blog-elements/post-title/PostTitle'

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
      <PostImage
        src={latestPost.mainImage}
        alt={latestPost.title}
        className={styles.latestPost__mainImage}
      />
      <PostTitle className={styles.latestPost__title}  title={latestPost.title} />
      <p className={styles.latestPost__date}>
        Published on:{' '}
        {new Date(latestPost.publishDate.seconds * 1000).toLocaleDateString()}
      </p>

    
      <p className={styles.description}>
        {latestPost.description.split('<br/>').map((text, index) => (
          <React.Fragment key={index}>
            {text}
            <br />
          </React.Fragment>
        ))}
      </p>

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
