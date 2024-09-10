import { useState } from 'react'

export const useCreatePost = () => {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [description, setDescription] = useState('')
  const [mainImage, setMainImage] = useState(null)
  const [tags, setTags] = useState('')
  const [content, setContent] = useState('')
  const [publishDate, setPublishDate] = useState('')
  const [isDraft, setIsDraft] = useState(false)
  const [seoTitle, setSeoTitle] = useState('')
  const [seoDescription, setSeoDescription] = useState('')
  const [isFeatured, setIsFeatured] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target || {} // Check if e.target exists
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
        setIsDraft(checked)
        break
      case 'isFeatured':
        setIsFeatured(checked)
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

  const handleSubmit = (e) => {
    e.preventDefault()
    // Submit logic here
    console.log({
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
    })
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
    handleInputChange,
    handleFileChange,
    handleQuillChange,
    handleSubmit,
  }
}
