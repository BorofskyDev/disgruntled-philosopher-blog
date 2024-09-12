import Link from 'next/link'
import styles from './ReadMoreBtn.module.scss'

function ReadMoreBtn({ slug, title }) {
  return (
    <Link href={`/app/blog/${slug}`} className={styles.readMoreBtn}>
      Continue Reading <span>{title} </span>
    </Link>
  )
}

export default ReadMoreBtn
