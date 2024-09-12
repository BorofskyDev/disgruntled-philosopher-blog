'use client'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import styles from './QuillEditor.module.scss'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const QuillEditor = ({ value, onChange }) => (
  <div className={styles.quillEditor}>
    <label htmlFor='content'>Content</label>
    <ReactQuill
      className={styles.quillEditor__container}
      value={value}
      onChange={onChange}
    />
  </div>
)

export default QuillEditor
