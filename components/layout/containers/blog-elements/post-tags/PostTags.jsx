import styles from './PostTags.module.scss'

function PostTags({tags}) {
  return (
    <div className={styles.postTags}>
      {tags?.map((tag, index) => (
        <span key={index} className={styles.postTags__tag}>
          {tag}
        </span>
      ))}
    </div>
  )
}
export default PostTags