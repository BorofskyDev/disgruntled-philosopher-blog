'use client'
import { useState } from 'react'
import { useFetchPublishedPosts } from '@/libs/hooks/useFetchPublishedPosts'
import styles from './AllBlogPosts.module.scss'
import PostImage from '../blog-elements/post-image/PostImage'
import PostTitle from '../blog-elements/post-title/PostTitle'
import ReadMoreBtn from '../blog-elements/read-more-btn/ReadMoreBtn'
import PostDescription from '../blog-elements/post-description/PostDescription'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

function AllBlogPosts() {
  const [pageNumber, setPageNumber] = useState(1)
  const postsPerPage = 6
  const { posts, loading, error, totalPosts } = useFetchPublishedPosts(
    pageNumber,
    postsPerPage
  )

  const totalPages = Math.ceil(totalPosts / postsPerPage)

  if (loading) return <div>Loading posts...</div>
  if (error) return <div>{error}</div>

  const handleNextPage = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1)
    }
  }

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1)
    }
  }

  const renderPageNumbers = () => {
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setPageNumber(i)}
          className={pageNumber === i ? styles.allBlogPosts__activePage : ''}
        >
          {i}
        </button>
      )
    }
    return pages
  }

  return (
    <div className={styles.allBlogPosts}>
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
      <div className={styles.allBlogPosts__paginationControls}>
        <button
          className={styles.allBlogPosts__btn}
          onClick={handlePrevPage}
          disabled={pageNumber === 1}
        >
          <FaArrowLeft /> Previous
        </button>
        <span>{renderPageNumbers()}</span>
        <button
          className={styles.allBlogPosts__btn}
          onClick={handleNextPage}
          disabled={pageNumber === totalPages}
        >
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  )
}

export default AllBlogPosts
