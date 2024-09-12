import styles from './SectionHeader.module.scss'

function SectionHeader({children}) {
  return (
    <h2 className={styles.sectionHeader}>{children}</h2>
  )
}
export default SectionHeader