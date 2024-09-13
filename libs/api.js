import { fetchPostBySlug } from '@/libs/functions/fetchPostBySlug'

export const getPostBySlug = async (slug) => {
  return await fetchPostBySlug(slug)
}
