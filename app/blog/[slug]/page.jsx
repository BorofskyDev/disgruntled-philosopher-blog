import BlogPostComponent from '@/components/pages/blog/blog-post/BlogPostComponent'
import { getPostBySlug } from '@/libs/api'


export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug)

  return {
    title: post
      ? `${post.title} | The Disgruntled Philosopher`
      : 'Post Not Found',
    description: post
      ? post.seoDescription
      : 'No description available for this post',
    openGraph: {
      title: post?.title || 'Post Not Found',
      description: post?.seoDescription || 'No description available',
      url: `/blog/${params.slug}`,
      images: [
        {
          url: post?.mainImage || '/default-image.png',
          alt: post?.title || 'Post Not Found',
          width: 1200,
          height: 630,
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
