'use client'
import styles from './DraftToggle.module.scss'

const DraftToggle = ({ value, onChange }) => (
  <div className={styles.draftToggle}>
    <label className={styles.draftLabel}>Draft</label>
    <button
      type='button'
      className={`${styles.toggleButton} ${value ? styles.active : ''}`}
      onClick={() =>
        onChange({
          target: { name: 'isDraft', value: !value },
        })
      }
    >
      <div className={styles.innerSquare} />
    </button>
  </div>
)

export default DraftToggle
