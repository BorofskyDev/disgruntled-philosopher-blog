import styles from './HamburgerButton.module.scss'

function HamburgerButton({ isMenuOpen, handleMenuToggle }) {
  const hamburgerStyles = isMenuOpen
    ? `${styles.hamburgerMenu} ${styles.opened}`
    : styles.hamburgerMenu

  return (
    <button
      className={hamburgerStyles}
      onClick={handleMenuToggle}
      aria-label='Navigation Menu Toggle'
      tabIndex={1}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}
export default HamburgerButton
