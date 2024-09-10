'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import styles from './ThemeToggle.module.scss'

function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if (!mounted) {
    return (
      <div className={styles.placeholder}>
        <span>Loading...</span>
      </div>
    )
  }

  return (
    <button className={styles.toggleButton} onClick={handleToggle}>
      {theme === 'light' ? 'Go Dark' : 'Go Light'}
    </button>
  )
}

export default ThemeToggle
