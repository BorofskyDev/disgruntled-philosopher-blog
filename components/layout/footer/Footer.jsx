import PageLink from '@/components/links/page-link/PageLink'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} The Disgruntled Philosopher</p>
      <PageLink href='/admin'>Admin Login</PageLink>
    </footer>
  )
}
export default Footer
