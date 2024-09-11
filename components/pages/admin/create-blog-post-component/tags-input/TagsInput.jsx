import styles from './TagsInput.module.scss'

const TagsInput = ({ value, onChange }) => (
  <div className={styles.tagsInput}>
    <label htmlFor='tags'>Tags</label>
    <input type='text' name='tags' value={value} onChange={onChange} />
  </div>
)

export default TagsInput
