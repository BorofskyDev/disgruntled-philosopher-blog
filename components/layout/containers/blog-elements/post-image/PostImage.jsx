import Image from 'next/image'
import styles from './PostImage.module.scss'

function PostImage({ src, alt, className }) {
  return (
    <Image
      className={`${className} ${styles.postImage}`}
      src={src}
      alt={alt}
      width='1600'
      height='900'
    />
  )
}
export default PostImage
