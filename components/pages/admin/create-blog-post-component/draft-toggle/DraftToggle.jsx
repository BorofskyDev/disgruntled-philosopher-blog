import styles from './DraftToggle.module.scss'

import { Switch } from '@headlessui/react'

const DraftToggle = ({ value, onChange }) => (
  <div>
    <Switch.Group>
      <Switch.Label>Draft</Switch.Label>
      <Switch checked={value} onChange={onChange} name='isDraft' />
    </Switch.Group>
  </div>
)

export default DraftToggle
