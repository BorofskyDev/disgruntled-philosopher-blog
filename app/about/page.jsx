import SectionHeader from '@/components/layout/headings/section-header/SectionHeader'
import AboutComponent from '@/components/pages/about/AboutComponent'


export const generateMetadata = () => {
  return {
    title: 'About | The Disgruntled Philosopher',
    description:
      "A philosopher's journey from faith to doubt, wrestling with questions about life, religion, and society. This blog explores philosophy, politics, and personal struggles, challenging conventional ideas. For those disillusioned by rigid beliefs and searching for deeper meaning, it's a space for honest opinions and open dialogue, built from the ground up by someone who left faith behind to find his own path.",
    openGraph: {
      title: 'About The Disgruntled Philosopher',
      description:
        'Learn more about the journey behind The Disgruntled Philosopher.',
      url: 'https://your-domain.com/about',
      images: [
        {
          url: '/path-to-your-image.png', // Example image path
          width: 1200,
          height: 630,
          alt: 'About The Disgruntled Philosopher',
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@your-twitter-handle',
      title: 'About The Disgruntled Philosopher',
      description:
        'Learn more about the journey behind The Disgruntled Philosopher.',
      image: '/path-to-your-image.png',
    },
  }
}

function AboutPage() {
  return (
    <section>
      <SectionHeader>About The Site</SectionHeader>
      <AboutComponent />
    </section>
  )
}

export default AboutPage
