import PostDescription from '@/components/layout/containers/blog-elements/post-description/PostDescription'
import PostImage from '@/components/layout/containers/blog-elements/post-image/PostImage'
import PostTitle from '@/components/layout/containers/blog-elements/post-title/PostTitle'
import PostContainer from '@/components/layout/containers/post-container/PostContainer'
import SectionHeader from '@/components/layout/headings/section-header/SectionHeader'
import image from '@/public/notFound.png'

function NotFound() {
  return (
    <section>
      <SectionHeader>404</SectionHeader>
      <PostContainer>
        <PostImage src={image} />
        <PostTitle title='This page is Dead! It remains dead!' />
        <PostDescription description='You have gazed into the abyss of the internet, and it has gazed back...with a 404 error. It is not true nothingness, but there is really little of value here (other than the valu you add). You can use the nav at the top to recenter yourself and return to the homepage.' />
      </PostContainer>
    </section>
  )
}
export default NotFound
