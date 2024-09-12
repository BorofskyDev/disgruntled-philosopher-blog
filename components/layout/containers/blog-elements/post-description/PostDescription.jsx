import ReactMarkdown from 'react-markdown';
import styles from './PostDescription.module.scss'

function PostDescription({description}) {
  return (
    <ReactMarkdown className={styles.postDescription}>
      {description}
    </ReactMarkdown>
  )
}
export default PostDescription