'use client'
import styles from './AdminRecentPosts.module.scss'
import { FaPencilAlt, FaTrash } from 'react-icons/fa'
import { useDeletePost } from '@/libs/hooks/useDeletePost'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

function AdminRecentPosts({ posts }) {
  const { deletePost, deleting, error } = useDeletePost()
  const [localPosts, setLocalPosts] = useState(posts)
  const router = useRouter()

  const handleDelete = async (postId) => {
    await deletePost(postId)
    setLocalPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId))
  }

  const handleEdit = (postId) => {
    router.push(`/admin/edit-blog-post?postId=${postId}`) // Navigate to Edit Post page with the postId in the query
  }

  return (
    <div className={styles.adminRecentPosts}>
      <h3>Recent Posts</h3>
      {error && <p className={styles.error}>{error}</p>}
      <table>
        <thead>
          <tr>
            <th className={styles.adminRecentPosts__title}>Title</th>
            <th className={styles.adminRecentPosts__title}>Status</th>
            <th className={styles.adminRecentPosts__title}>Edit</th>
            <th className={styles.adminRecentPosts__title}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {localPosts.map((post) => (
            <tr
              key={post.slug}
              className={styles.adminRecentPosts__infoContainer}
            >
              <div className={styles.adminRecentPosts__postTitle}>
                <td>{post.title}</td>
              </div>
              <td
                className={
                  post.isDraft
                    ? styles.adminRecentPosts__statusDraft
                    : styles.adminRecentPosts__statusPublished
                }
              >
                {post.isDraft ? 'Draft' : 'Published'}
              </td>
              <td>
                <button
                  className={`${styles.adminRecentPosts__btn} ${styles.adminRecentPosts__btnEdt}`}
                  onClick={() => handleEdit(post.id)} // Trigger the edit functionality
                >
                  <FaPencilAlt />
                </button>
              </td>
              <td>
                <button
                  className={`${styles.adminRecentPosts__btn} ${styles.adminRecentPosts__btnDlt}`}
                  onClick={() => handleDelete(post.id)}
                  disabled={deleting}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminRecentPosts
