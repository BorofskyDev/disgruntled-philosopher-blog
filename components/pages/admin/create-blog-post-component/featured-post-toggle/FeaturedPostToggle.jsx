import styles from './FeaturedPostToggle.module.scss'

const FeaturedPostToggle = ({ value, onChange }) => (
  <div className={styles.featuredPostToggle}>
    <label className={styles.featuredLabel}>Featured Post</label>
    <button
      type='button'
      className={`${styles.toggleButton} ${value ? styles.active : ''}`}
      onClick={() => onChange('isFeatured', !value)} // Pass name and new value
    >
      <div className={styles.innerSquare} />
    </button>
  </div>
)

export default FeaturedPostToggle
