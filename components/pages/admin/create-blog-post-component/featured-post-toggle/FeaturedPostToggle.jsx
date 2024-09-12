'use client'
import styles from './FeaturedPostToggle.module.scss'

function FeaturedPostToggle({value, onChange}) {
  const handleToggle = () => {
    
    const event = {
      target: {
        name: 'isFeatured',
        type: 'checkbox',
        checked: !value,
      },
    }
    onChange(event)
  }

  return (
    <div className={styles.featuredPostToggle}>
      <label className={styles.featuredLabel}>Featured Post</label>
      <button
        type='button'
        className={`${styles.toggleButton} ${value ? styles.active : ''}`}
        onClick={handleToggle} // Use handleToggle to create and send the synthetic event
      >
        <div className={styles.innerSquare} />
      </button>
    </div>
  )
}
export default FeaturedPostToggle

