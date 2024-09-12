import styles from './SubSectionHeading.module.scss'

function SubSectionHeading({children}) {
  return (
    <h3 className={styles.subSectionHeading}>{children}</h3>
  )
}
export default SubSectionHeading