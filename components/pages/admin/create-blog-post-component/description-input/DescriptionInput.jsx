'use client'
import { useState } from 'react'
import styles from './DescriptionInput.module.scss'

function DescriptionInput({ value, onChange }) {
  const [wordCount, setWordCount] = useState(0)

  const handleInputChange = (e) => {
    const words = e.target.value.split(/\s+/).filter(Boolean)
    if (words.length <= 500) {
      onChange(e)
      setWordCount(words.length)
    }
  }

  return (
    <div className={styles.descriptionInput}>
      <label htmlFor='description'>Description (Max 500 Words)</label>
      <textarea
        name='description'
        id='description'
        value={value}
        onChange={handleInputChange}
        required
      ></textarea>
      <div className={styles.wordCount}>{wordCount}/500 words</div>
    </div>
  )
}
export default DescriptionInput
