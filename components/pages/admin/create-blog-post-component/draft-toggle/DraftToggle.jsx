import styles from './DraftToggle.module.scss'

const DraftToggle = ({ value, onChange }) => (
  <div className={styles.draftToggle}>
    <label className={styles.draftLabel}>Draft</label>
    <button
      type='button'
      className={`${styles.toggleButton} ${value ? styles.active : ''}`}
      onClick={() => onChange('isDraft', !value)} // Pass name and new value
    >
      <div className={styles.innerSquare} />
    </button>
  </div>
)

export default DraftToggle
