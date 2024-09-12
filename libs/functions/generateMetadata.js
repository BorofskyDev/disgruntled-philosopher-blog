// libs/functions/generateMetadata.js
import { getDoc, doc } from 'firebase/firestore'
import { db } from '@/libs/firebase/firebase'

export async function generateMetadata(slug) {
  const docRef = doc(db, 'blogPosts', slug)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) {
    return {
      title: 'Post not found',
      description: 'This blog post does not exist.',
    }
  }

  const post = docSnap.data()
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.description,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.description,
      images: [
        {
          url: post.mainImage,
          alt: post.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.description,
      images: [post.mainImage],
    },
  }
}
