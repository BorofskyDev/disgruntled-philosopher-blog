import LatestPost from "@/components/layout/containers/latest-post/LatestPost";
import SectionHeader from "@/components/layout/headings/section-header/SectionHeader";
import FeaturedPostsComponent from "@/components/layout/containers/featured-posts-component/FeaturedPostsComponent";
import LatestPostsComponent from "@/components/layout/containers/latest-posts-component/LatestPostsComponent";

export async function generateMetadata() {
  return {
    title: 'The Disgruntled Philosopher',
    description:
      'A personal blog reflecting on politics, life, and philosophy.',
    openGraph: {
      title: 'The Disgruntled Philosopher',
      description:
        'Discover the latest musings on politics, life, and philosophy from The Disgruntled Philosopher.',
      images: [
        {
          url: `/api/og`, // Use the /og route to dynamically generate the image
          width: 1200,
          height: 630,
          alt: 'The Disgruntled Philosopher Homepage',
        },
      ],
      type: 'website',
      url: 'https://your-domain.com',
      site_name: 'The Disgruntled Philosopher',
    },
  }
}



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
