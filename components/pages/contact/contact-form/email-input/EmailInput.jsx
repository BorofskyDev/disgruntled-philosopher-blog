import styles from './EmailInput.module.scss'

function EmailInput({ email, setEmail }) {
  return (
    <div className={styles.emailInput}>
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        id='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
  )
}

export default EmailInput
