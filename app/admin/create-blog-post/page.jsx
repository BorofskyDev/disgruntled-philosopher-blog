
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import CreateBlogPostComponent from '@/components/pages/admin/create-blog-post-component/CreateBlogPostComponent'

function CreateBlogPostPage() {
  const router = useRouter()
  const auth = getAuth()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/login') // Redirect to login if not authenticated
      }
    })

    return () => unsubscribe()
  }, [auth, router])

  return <CreateBlogPostComponent />
}

export default CreateBlogPostPage
