import Link from 'next/link'
import styles from './ReadMoreBtn.module.scss'

function ReadMoreBtn({ slug, title }) {
  return (
    <Link href={`/blog/${slug}`} className={styles.readMoreBtn}>
      Read <span>{title} </span>
    </Link>
  )
}

export default ReadMoreBtn
