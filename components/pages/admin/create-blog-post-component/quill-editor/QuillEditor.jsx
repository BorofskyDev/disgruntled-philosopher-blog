import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import styles from './QuillEditor.module.scss'

const QuillEditor = ({ value, onChange }) => (
  <div className={styles.quillEditor}>
    <label htmlFor='content'>Content</label>
    <ReactQuill value={value} onChange={onChange} />
  </div>
)

export default QuillEditor
