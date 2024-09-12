'use client'
import { useEditPost } from '@/libs/hooks/useEditPost'
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
  const { post, loading, handleSubmit, handleInputChange } = useEditPost()

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
      <PublishDateInput value={post.publishDate} onChange={handleInputChange} />
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
