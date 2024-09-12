import styles from './MainPostTitle.module.scss'

function MainPostTitle({children}) {
  return (
    <h2 className={styles.mainPostTitle}>{children}</h2>
  )
}
export default MainPostTitle