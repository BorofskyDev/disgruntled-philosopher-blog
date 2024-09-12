'use client'
import React, { useState, useEffect } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import styles from './QuillEditor.module.scss'

const QuillEditor = ({ value, onChange }) => {
  const [isClient, setIsClient] = useState(false)

  // Ensure this runs only on the client
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Only render ReactQuill on the client-side
  return (
    <div className={styles.quillEditor}>
      <label htmlFor='content'>Content</label>
      {isClient && (
        <ReactQuill
          className={styles.quillEditor__container}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  )
}

export default QuillEditor
