'use client'
import LatestPost from "@/components/layout/containers/latest-post/LatestPost";
import SectionHeader from "@/components/layout/headings/section-header/SectionHeader";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <SectionHeader>Latest Post</SectionHeader>
        <LatestPost />
      </motion.div>
    </main>
  )
}
