import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '@/libs/firebase/firebase'

export const fetchPostBySlug = async (slug) => {
  try {
    const q = query(collection(db, 'blogPosts'), where('slug', '==', slug))
    const querySnapshot = await getDocs(q)

    if (!querySnapshot.empty) {
      const docSnap = querySnapshot.docs[0]
      return docSnap.data()
    } else {
      return null // Return null if no post found
    }
  } catch (error) {
    console.error('Failed to fetch post:', error)
    return null
  }
}
