import Banner from './banner/Banner'
import styles from './Header.module.scss'

function Header() {
  return (
    <div className={styles.header}>
        <Banner />
    </div>
  )
}
export default Header