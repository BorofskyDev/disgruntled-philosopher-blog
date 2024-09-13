import styles from './NameInput.module.scss'

function NameInput({ name, setName }) {
  return (
    <div className={styles.nameInput}>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        id='name'
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
    </div>
  )
}

export default NameInput
