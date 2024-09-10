import styles from './SEOMetaInput.module.scss'

const SEOMetaInput = ({ title, description, onChange }) => (
  <>
    <div className={styles.seoMetaInput}>
      <label htmlFor='seoTitle'>SEO Meta Title</label>
      <input type='text' name='seoTitle' value={title} onChange={onChange} />
    </div>
    <div className={styles.seoMetaDescription}>
      <label htmlFor='seoDescription'>SEO Meta Description</label>
      <textarea name='seoDescription' value={description} onChange={onChange} />
    </div>
  </>
)

export default SEOMetaInput