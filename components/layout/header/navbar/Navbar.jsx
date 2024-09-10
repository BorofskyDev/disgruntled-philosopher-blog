'use client'
import { useState } from 'react'
import HamburgerButton from './hamburger-button/HamburgerButton'
import NavMenu from './nav-menu/NavMenu'
import ThemeToggle from './theme-toggle/ThemeToggle'
import styles from './Navbar.module.scss'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

  return (
    <div className={styles.navbar}>
        <HamburgerButton isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
        <NavMenu isMenuOpen={isMenuOpen} toggleMenu={setIsMenuOpen} />
        <ThemeToggle />
    </div>
  )
}
export default Navbar