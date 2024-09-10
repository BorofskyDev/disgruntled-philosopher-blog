import Link from 'next/link'
import styles from './PageLink.module.scss'

function PageLink({ href, children }) {
  return (
    <Link href={href} className={styles.pageLink}>
      {children}
    </Link>
  )
}
export default PageLink
