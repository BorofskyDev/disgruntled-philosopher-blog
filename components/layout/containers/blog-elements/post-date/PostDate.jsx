import styles from './PostDate.module.scss'

function PostDate({publishDate}) {
  return (
    <p className={styles.postDate}>
      Published on: {new Date(publishDate.seconds * 1000).toLocaleDateString()}
    </p>
  )
}
export default PostDate