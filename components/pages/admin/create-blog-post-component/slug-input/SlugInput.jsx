'use client'
import styles from './SlugInput.module.scss'

function SlugInput({ value }) {
  return (
    <div className={styles.slugInput}>
      <label htmlFor='slug'>Slug</label>
      <input type='text' name='slug' value={value} disabled />
    </div>
  )
}
export default SlugInput
