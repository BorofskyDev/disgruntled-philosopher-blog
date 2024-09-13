

import AllBlogPosts from '@/components/layout/containers/all-blog-posts/AllBlogPosts'
import SectionHeader from '@/components/layout/headings/section-header/SectionHeader'

export const generateMetadata = {
  title: 'Blog Posts | The Disgruntled Philosopher',
  description:
    'Read all blog posts from The Disgruntled Philosopher. Explore a variety of topics, including politics, philosophy, religion, and personal reflections. Dive into the mind of a pragmatic humanitarian and former evangelical as he shares his thoughts on life, society, and the world around us.',
  openGraph: {
    title: 'Blog Posts | The Disgruntled Philosopher',
    description:
      'Read all blog posts from The Disgruntled Philosopher. Explore a variety of topics, including politics, philosophy, religion, and personal reflections.',
    url: 'https://your-domain.com/blog',
    images: [
      {
        url: '/path-to-your-image.png',
        width: 1200,
        height: 630,
        alt: 'Blog Posts | The Disgruntled Philosopher',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@your-twitter-handle',
    title: 'Blog Posts | The Disgruntled Philosopher',
    description:
      'Read all blog posts from The Disgruntled Philosopher. Explore a variety of topics, including politics, philosophy, religion, and personal reflections.',
    image: '/path-to-your-image.png',
  },
}

export default function BlogPostsList() {
  return (
    <div>
      <SectionHeader>All Blog Posts</SectionHeader>
      <AllBlogPosts />
    </div>
  )
}
