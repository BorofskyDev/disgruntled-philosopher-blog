'use client'
import { useCreatePost } from '@/libs/hooks/useCreatePost'
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

function CreateBlogPostComponent() {
  const {
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
  } = useCreatePost()

  return (
    <form className={styles.createBlogPostComponent} onSubmit={handleSubmit}>
      <TitleInput value={title} onChange={handleInputChange} />
      <SlugInput value={slug} />
      <DescriptionInput value={description} onChange={handleInputChange} />
      <MainImageInput onChange={handleFileChange} />
      <TagsInput value={tags} onChange={handleInputChange} />
      <QuillEditor value={content} onChange={handleQuillChange} />
      {/* <PublishDateInput value={publishedDate} onChange={handleInputChange} /> */}
      {/* <DraftToggle value={isDraft} onChange={handleInputChange} /> */}
      <SEOMetaInput
        title={seoTitle}
        description={seoDescription}
        onChange={handleInputChange}
      />
      <FeaturedPostToggle value={isFeatured} onChange={handleInputChange} />
      <button type='submit' className={styles.createBlogPostComponent__submitButton}>
        {' '}
        Create Post{' '}
      </button>
    </form>
  )
}
export default CreateBlogPostComponent
