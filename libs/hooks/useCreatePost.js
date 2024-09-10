import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage } from '@/libs/firebase/firebase'

export const useCreatePost = () => {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [description, setDescription] = useState('')
  const [mainImage, setMainImage] = useState(null)
  const [tags, setTags] = useState('')
  const [content, setContent] = useState('')
  const [publishDate, setPublishDate] = useState('')
  const [isDraft, setIsDraft] = useState(true)
  const [seoTitle, setSeoTitle] = useState('')
  const [seoDescription, setSeoDescription] = useState('')
  const [isFeatured, setIsFeatured] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleInputChange = (eOrName, value) => {
    if (typeof eOrName === 'string') {
      // This means we're handling the toggle (DraftToggle or FeaturedPostToggle)
      switch (eOrName) {
        case 'isDraft':
          setIsDraft(value)
          break
        case 'isFeatured':
          setIsFeatured(value)
          break
        default:
          break
      }
    } else {
      // This means we're handling a regular input event
      const { name, value, type, checked } = eOrName.target
      switch (name) {
        case 'title':
          setTitle(value)
          setSlug(value.replace(/[^a-z0-9]+/gi, '-').toLowerCase()) // Auto-generate slug
          break
        case 'description':
          setDescription(value)
          break
        case 'tags':
          setTags(value)
          break
        case 'publishDate':
          setPublishDate(value)
          break
        case 'seoTitle':
          setSeoTitle(value)
          break
        case 'seoDescription':
          setSeoDescription(value)
          break
        case 'isDraft':
          setIsDraft(checked) // Correctly update isDraft
          break
        case 'isFeatured':
          setIsFeatured(checked) // Correctly update isFeatured
          break
        default:
          break
      }
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
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      // Upload main image to Firebase Storage
      let imageUrl = ''
      if (mainImage) {
        const storageRef = ref(storage, `blogImages/${mainImage.name}`)
        await uploadBytes(storageRef, mainImage)
        imageUrl = await getDownloadURL(storageRef)
      }

      // Submit blog post data to Firestore
      await addDoc(collection(db, 'blogPosts'), {
        title,
        slug,
        description,
        mainImage: imageUrl, // Store image URL in Firestore
        tags: tags.split(',').map((tag) => tag.trim()), // Store tags as an array
        content,
        publishDate,
        isDraft,
        seoTitle,
        seoDescription,
        isFeatured,
        createdAt: new Date(),
      })

      setSuccess(true)
      setLoading(false)

      // Reset form
      setTitle('')
      setSlug('')
      setDescription('')
      setMainImage(null)
      setTags('')
      setContent('')
      setPublishDate('')
      setIsDraft(true)
      setSeoTitle('')
      setSeoDescription('')
      setIsFeatured(false)
    } catch (err) {
      console.error('Error submitting post:', err)
      setError('Failed to submit post. Please try again.')
      setLoading(false)
    }
  }

  return {
    title,
    slug,
    description,
    mainImage,
    tags,
    content,
    publishDate,
    isDraft,
    seoTitle,
    seoDescription,
    isFeatured,
    loading,
    error,
    success,
    handleInputChange,
    handleFileChange,
    handleQuillChange,
    handleSubmit,
  }
}
