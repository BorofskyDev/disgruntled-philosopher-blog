'use client'
import styles from './AdminRecentPosts.module.scss'

import { FaPencilAlt, FaTrash } from 'react-icons/fa'

function AdminRecentPosts({ posts }) {
  return (
    <div className={styles.adminRecentPosts}>
      <h3>Recent Posts</h3>
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
          {posts.map((post) => (
            <tr
              key={post.slug}
              className={styles.adminRecentPosts__infoContainer}
            >
              <div className={styles.adminRecentPosts__postTitle}>
                <td>{post.title}</td>
              </div>
              {/* Add a conditional class based on the draft status */}
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
                <button className={styles.adminRecentPosts__btn}>
                  <FaPencilAlt />
                </button>
              </td>
              <td>
                <button className={styles.adminRecentPosts__btn}>
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
