import styles from './WebsiteInput.module.scss'

function WebsiteInput({ website, setWebsite }) {
  return (
    <div>
      <label htmlFor='website'>Website (Optional)</label>
      <input
        type='url'
        id='website'
        name='website'
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        placeholder='e.g. example.com'
      />
    </div>
  )
}

export default WebsiteInput
