import DOMPurify from 'dompurify'
import styles from './PostContent.module.scss'

function PostContent({htmlContent}) {
  const cleanContent = DOMPurify.sanitize(htmlContent)

  return <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: cleanContent }}></div>
}
export default PostContent
