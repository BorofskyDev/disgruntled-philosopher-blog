import BlogPostComponent from '@/components/pages/blog/blog-post/BlogPostComponent'
import { getPostBySlug } from '@/libs/api'


export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug)

   if (!post) {
     return {
       title: 'Post not found',
       description: 'This post could not be found.',
     }
   }

   return {
     title: `${post.title} | The Disgruntled Philosopher`,
     description:
       post.description || 'Read more on The Disgruntled Philosopher.',
     openGraph: {
       title: post.title,
       description: post.description,
       images: [
         {
           url: `/api/og?title=${encodeURIComponent(post.title)}`,
           width: 1200,
           height: 630,
           alt: post.title,
         },
       ],
     },
   }
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div>
      <BlogPostComponent post={post} />
    </div>
  )
}
