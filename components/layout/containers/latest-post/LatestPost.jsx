import React from 'react'
import { useFetchPublishedPosts } from '@/libs/hooks/useFetchPublishedPosts'
import styles from './LatestPost.module.scss'
import PostImage from '../blog-elements/post-image/PostImage'
import PostTitle from '../blog-elements/post-title/PostTitle'
import PostDescription from '../blog-elements/post-description/PostDescription'
import PostDate from '../blog-elements/post-date/PostDate'
import PostTags from '../blog-elements/post-tags/PostTags'
import SubSectionHeading from '../../headings/sub-section-heading/SubSectionHeading'
import ReadMoreBtn from '../blog-elements/read-more-btn/ReadMoreBtn'

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
      <PostTitle
        className={styles.latestPost__title}
        title={latestPost.title}
      />
      <PostDate publishDate={latestPost.publishDate} />

      <PostDescription description={latestPost.description} />
      <ReadMoreBtn slug={latestPost.slug} title={latestPost.title} />
      <SubSectionHeading>Tags</SubSectionHeading>
      <PostTags tags={latestPost.tags} />

    </div>
  )
}

export default LatestPost
