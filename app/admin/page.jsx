// app/admin/page.jsx
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import PageLink from '@/components/links/page-link/PageLink'
import { useAuth } from '@/libs/hooks/useAuth'

function AdminPage() {
  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login') // Redirect to login if not authenticated
    }
  }, [user, loading, router])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <PageLink href='/admin/create-blog-post'>Create Blog Post</PageLink>
    </div>
  )
}

export default AdminPage
