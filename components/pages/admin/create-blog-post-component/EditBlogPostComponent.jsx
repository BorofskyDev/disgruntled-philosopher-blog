'use client'
import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/libs/firebase/firebase'
import TitleInput from './title-input/TitleInput'
import SlugInput from './slug-input/SlugInput'
import DescriptionInput from './description-input/DescriptionInput'
import MainImageInput from './main-image-input/MainImageInput'
import TagsInput from './tags-input/TagsInput'
import QuillEditor from './quill-editor/QuillEditor'
import PublishDateInput from './published-date-input/PublishedDateInput'
import DraftToggle from './draft-toggle/DraftToggle'
import SEOMetaInput from './seo-meta-input/SEOMetaInput'
import FeaturedPostToggle from './featured-post-toggle/FeaturedPostToggle'
import styles from './CreateBlogPostComponent.module.scss'

function EditBlogPostComponent() {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const searchParams = useSearchParams()
  const postId = searchParams.get('postId') // Get postId from query params

  useEffect(() => {
    const fetchPost = async () => {
      if (!postId) return

      const docRef = doc(db, 'blogPosts', postId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setPost(docSnap.data()) // Set post data to state
        setLoading(false)
      } else {
        console.error('No such post!')
      }
    }

    fetchPost()
  }, [postId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const docRef = doc(db, 'blogPosts', postId)
    try {
      await updateDoc(docRef, { ...post }) // Update post in Firebase
      router.push('/admin') // Redirect to admin page after editing
    } catch (err) {
      console.error('Failed to update post:', err)
    }
  }

const handleInputChange = (e) => {
  if (e && e.target) {
    const { name, value, type, checked } = e.target
    setPost({ ...post, [name]: type === 'checkbox' ? checked : value })
  } else {
    console.error('e.target is undefined')
  }
}



  if (loading || !post) {
    return <div>Loading...</div>
  }

  return (
    <form className={styles.createBlogPostComponent} onSubmit={handleSubmit}>
      <TitleInput value={post.title} onChange={handleInputChange} />
      <SlugInput value={post.slug} />
      <DescriptionInput value={post.description} onChange={handleInputChange} />
      <MainImageInput value={post.mainImage} onChange={handleInputChange} />
      <TagsInput value={post.tags} onChange={handleInputChange} />
      <QuillEditor value={post.content} onChange={handleInputChange} />
      <PublishDateInput
        value={post.publishedDate}
        onChange={handleInputChange}
      />
      <DraftToggle value={post.isDraft} onChange={handleInputChange} />
      <SEOMetaInput
        title={post.seoTitle}
        description={post.seoDescription}
        onChange={handleInputChange}
      />
      <FeaturedPostToggle
        value={post.isFeatured}
        onChange={handleInputChange}
      />
      <button
        type='submit'
        className={styles.createBlogPostComponent__submitButton}
      >
        Update Post
      </button>
    </form>
  )
}

export default EditBlogPostComponent
