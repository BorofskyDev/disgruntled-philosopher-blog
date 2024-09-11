import styles from './PostTitle.module.scss'

function PostTitle({ title, className }) {
  return <h3 className={`${styles.postTitle} ${className}`}>{title}</h3>
}
export default PostTitle
