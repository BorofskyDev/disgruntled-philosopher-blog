import LatestPost from "@/components/layout/containers/latest-post/LatestPost";
import SectionHeader from "@/components/layout/headings/section-header/SectionHeader";
import FeaturedPostsComponent from "@/components/layout/containers/featured-posts-component/FeaturedPostsComponent";
import LatestPostsComponent from "@/components/layout/containers/latest-posts-component/LatestPostsComponent";




export default function Home() {
  return (
    <main >
      <div >
        <SectionHeader>Latest Post</SectionHeader>
        <LatestPost />
        <SectionHeader>Featured Posts</SectionHeader>
        <FeaturedPostsComponent />
        <SectionHeader>Recent Posts</SectionHeader>
        <LatestPostsComponent />
      </div>
    </main>
  )
}
