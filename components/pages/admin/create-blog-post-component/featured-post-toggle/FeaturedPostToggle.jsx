import { Switch } from '@headlessui/react'
import styles from './FeaturedPostToggle.module.scss'

const FeaturedPostToggle = ({ value, onChange }) => (
  <div className={styles.featuredPostToggle}>
    <Switch.Group>
      <Switch.Label>Featured Post</Switch.Label>
      <Switch checked={value} onChange={onChange} name='isFeatured' />
    </Switch.Group>
  </div>
)

export default FeaturedPostToggle
