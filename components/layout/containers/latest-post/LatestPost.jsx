
'use client'
import styles from './LatestPost.module.scss'
import PostImage from '../blog-elements/post-image/PostImage'
import PostTitle from '../blog-elements/post-title/PostTitle'
import PostDescription from '../blog-elements/post-description/PostDescription'
import PostDate from '../blog-elements/post-date/PostDate'
import PostTags from '../blog-elements/post-tags/PostTags'
import ReadMoreBtn from '../blog-elements/read-more-btn/ReadMoreBtn'
import PostContainer from '../post-container/PostContainer'
import { useFetchPublishedPosts } from '@/libs/hooks/useFetchPublishedPosts'

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
    <PostContainer className={styles.latestPost}>
      <PostImage
        src={latestPost.mainImage}
        alt={latestPost.title}
      />
      <PostTitle
        title={latestPost.title}
      />
      <PostDate publishDate={latestPost.publishDate} />

      <PostDescription description={latestPost.description} />
      <ReadMoreBtn slug={latestPost.slug} title={latestPost.title} />
      <PostTags tags={latestPost.tags} />
    </PostContainer>
  )
}

export default LatestPost
