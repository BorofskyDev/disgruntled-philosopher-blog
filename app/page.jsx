'use client'
import LatestPost from "@/components/layout/containers/latest-post/LatestPost";
import SectionHeader from "@/components/layout/headings/section-header/SectionHeader";
import FeaturedPostsComponent from "@/components/pages/blog/featured-posts-component/FeaturedPostsComponent";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <SectionHeader>Latest Post</SectionHeader>
        <LatestPost />
        <SectionHeader>Featured Posts</SectionHeader>
        <FeaturedPostsComponent />
      </motion.div>
    </main>
  )
}
