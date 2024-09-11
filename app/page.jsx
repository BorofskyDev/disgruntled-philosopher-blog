'use client'
import LatestPost from "@/components/layout/containers/latest-post/LatestPost";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <LatestPost />
      </motion.div>
    </main>
  )
}
