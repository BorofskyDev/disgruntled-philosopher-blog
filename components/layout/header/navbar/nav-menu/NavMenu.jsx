import { useRef } from 'react'
import { useClickOutside } from '@/libs/hooks/useClickOutside'
import NavLink from '@/components/links/nav-link/NavLink'
import styles from './NavMenu.module.scss'

function NavMenu({ isMenuOpen, toggleMenu }) {
  const menuRef = useRef(null)

  useClickOutside(menuRef, () => {
    if (isMenuOpen) {
      toggleMenu(false)
    }
  })

  const handleLinkClick = () => {
    toggleMenu(false)
  }

  return (
    <div
      ref={menuRef}
      className={`${styles.navMenu} ${isMenuOpen ? styles.open : ''}`}
    >
      <ul>
        <li>
          <NavLink href='/' onClick={handleLinkClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink href='/about' onClick={handleLinkClick}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink href='/blog' onClick={handleLinkClick}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink href='/contact' onClick={handleLinkClick}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
export default NavMenu
