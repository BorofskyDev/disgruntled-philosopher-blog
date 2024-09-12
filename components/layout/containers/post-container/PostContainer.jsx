import styles from './PostContainer.module.scss'

function PostContainer({children}) {
  return (
    <div className={styles.postContainer}>{children}</div>
  )
}
export default PostContainer