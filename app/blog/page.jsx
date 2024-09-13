
'use client'

import AllBlogPosts from '@/components/layout/containers/all-blog-posts/AllBlogPosts'
import SectionHeader from '@/components/layout/headings/section-header/SectionHeader'



export default function BlogPostsList() {
 

  return (
    <div>
      <SectionHeader>All Blog Posts</SectionHeader>
      <AllBlogPosts />
    </div>
  )
}
