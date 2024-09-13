'use client'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/libs/hooks/useAuth'
import { useFetchPosts } from '@/libs/hooks/useFetchPosts' 
import PageLink from '@/components/links/page-link/PageLink'
import AdminRecentPosts from '@/components/pages/admin/admin-recent-posts/AdminRecentPosts'
import styles from './AdminPage.module.scss'

function AdminPage() {
  const router = useRouter()
  const { user, loading: authLoading } = useAuth()
  const { posts, loading, error } = useFetchPosts() 


  if (!authLoading && !user) {
    router.push('/login')
    return null
  }

  if (authLoading || loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className={styles.adminPage}>
      <div className={styles.adminPage__adminLinks}>
        <h2>Admin Links</h2>
      <PageLink href='/admin/create-blog-post'>Create Blog Post</PageLink>
      <PageLink href='/admin/messages'>Messages</PageLink>
      </div>
      <div className={styles.adminPage__adminInfo}>
        <h2>Admin Info</h2>
      <AdminRecentPosts posts={posts} /> 
      </div>
    </div>
  )
}

export default AdminPage
