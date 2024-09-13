import styles from './PhoneInput.module.scss'

function PhoneInput({ phone, setPhone }) {
  return (
    <div className={styles.phoneInput}>
      <label htmlFor='phone'>Phone (Optional)</label>
      <input
        type='tel'
        id='phone'
        name='phone'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </div>
  )
}

export default PhoneInput
