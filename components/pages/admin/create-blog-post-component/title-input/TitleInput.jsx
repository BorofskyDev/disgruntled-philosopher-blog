import styles from './TitleInput.module.scss'

function TitleInput({ value, onChange }) {
  return (
    <div className={styles.titleInput}>
      <label htmlFor='title'>Post Title</label>
      <input type='text' name='title' value={value} onChange={onChange} />
    </div>
  )
}
export default TitleInput
