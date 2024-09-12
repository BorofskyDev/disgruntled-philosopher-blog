'use client'
import styles from './MainImageInput.module.scss'

const MainImageInput = ({ onChange }) => (
  <div className={styles.mainImageInput}>
    <label htmlFor='mainImage'>Main Image</label>
    <input type='file' name='mainImage' onChange={onChange} />
  </div>
)

export default MainImageInput
