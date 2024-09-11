import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/libs/firebase/firebase'
import { Timestamp } from 'firebase/firestore'
import { useRouter } from 'next/router'

export const useCreatePost = () => {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [description, setDescription] = useState('')
  const [mainImage, setMainImage] = useState('')
  const [tags, setTags] = useState([])
  const [content, setContent] = useState('')
  const [publishedDate, setPublishedDate] = useState('')
  const [isDraft, setIsDraft] = useState(true)
  const [seoTitle, setSeoTitle] = useState('')
  const [seoDescription, setSeoDescription] = useState('')
  const [isFeatured, setIsFeatured] = useState(false)

  const router = useRouter()

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    switch (name) {
      case 'title':
        setTitle(value)
        break
      case 'slug':
        setSlug(value)
        break
      case 'description':
        setDescription(value)
        break
      case 'tags':
        setTags(value)
        break
      case 'isDraft':
        setIsDraft(type === 'checkbox' ? checked : value)
        break
      case 'seoTitle':
        setSeoTitle(value)
        break
      case 'seoDescription':
        setSeoDescription(value)
        break
      case 'isFeatured':
        setIsFeatured(type === 'checkbox' ? checked : value)
        break
      case 'publishedDate':
        setPublishedDate(value)
        break
      default:
        break
    }
  }

  const handleFileChange = (e) => {
    setMainImage(e.target.files[0])
  }

  const handleQuillChange = (value) => {
    setContent(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Convert publishDate from string to Firestore Timestamp
    const publishDateAsTimestamp = Timestamp.fromDate(new Date(publishedDate))

    try {
      await addDoc(collection(db, 'blogPosts'), {
        title,
        slug,
        description,
        mainImage,
        tags,
        content,
        publishDate: publishDateAsTimestamp, // Save the converted timestamp
        isDraft,
        seoTitle,
        seoDescription,
        isFeatured,
      })

      router.push('/admin') // Redirect to the admin page after creation
    } catch (err) {
      console.error('Failed to create post:', err)
    }
  }

  return {
    title,
    slug,
    description,
    mainImage,
    tags,
    content,
    publishedDate,
    isDraft,
    seoTitle,
    seoDescription,
    isFeatured,
    handleInputChange,
    handleFileChange,
    handleQuillChange,
    handleSubmit,
  }
}
