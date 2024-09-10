import styles from './PublishedDateInput.module.scss'

const PublishDateInput = ({ value, onChange }) => (
  <div>
    <label htmlFor='publishDate'>Publish Date</label>
    <input type='date' name='publishDate' value={value} onChange={onChange} />
  </div>
)

export default PublishDateInput
