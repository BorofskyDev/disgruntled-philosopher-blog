import { Suspense } from 'react'
import EditBlogPostComponent from '@/components/pages/admin/create-blog-post-component/EditBlogPostComponent'

// Wrap your component in a Suspense boundary
export default function EditBlogPostPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditBlogPostComponent />
    </Suspense>
  )
}
