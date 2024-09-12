'use client'
import styles from './PublishedDateInput.module.scss'

function PublishDateInput({ value, onChange }) {
  return (
    <div className={styles.publishedDateInput}>
      <label htmlFor='publishDate'>Publish Date</label>
      <input
        type='date'
        name='publishDate'
        value={value || ''}
        onChange={onChange}
      />
    </div>
  )
}

export default PublishDateInput
