import Link from 'next/link'
import styles from './NavLink.module.scss'

function NavLink({ href, children, onClick }) {
  return (
    <Link className={styles.navLink} href={href} onClick={onClick}>
      {children}
    </Link>
  )
}
export default NavLink
