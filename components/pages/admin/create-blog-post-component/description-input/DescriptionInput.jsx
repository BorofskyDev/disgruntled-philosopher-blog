import styles from './DescriptionInput.module.scss'

function DescriptionInput({ value, onChange }) {
  return (
    <div className={styles.descriptionInput}>
      <label htmlFor='description'> Description (Max 500 Words)</label>
      <textarea
        name='description'
        id='description'
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  )
}
export default DescriptionInput
