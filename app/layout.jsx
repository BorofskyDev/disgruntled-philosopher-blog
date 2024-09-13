import { playfairDisplay, openSans } from './fonts'
import '../styles/globals.scss'
import { ThemeProvider } from 'next-themes'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'

const header = playfairDisplay
const body = openSans

export const metadata = {
  title: 'The Disgruntled Philosopher',
  description:
    'The Disgruntled Philosopher is a personal blog reflecting on politics, life, society, and the journey from evangelicalism to pragmatic humanitarianism.',

  openGraph: {
    title: 'The Disgruntled Philosopher',
    description: 'Personal blog on politics, life, and philosophy.',
    // url: 'https://your-domain.com', 
    siteName: 'The Disgruntled Philosopher',
    images: [
      {
        // url: '/path-to-your-default-image.png', 
        width: 1200,
        height: 630,
        alt: 'The Disgruntled Philosopher',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    // site: '@your-twitter-handle', 
    title: 'The Disgruntled Philosopher',
    description: 'Personal blog on politics, life, and philosophy.',
    image: '/path-to-your-default-image.png',
  },
  alternates: {
    // canonical: 'https://your-domain.com',
  },

  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'The Disgruntled Philosopher',
    // url: 'https://your-domain.com',
    potentialAction: {
      '@type': 'SearchAction',
      // target: 'https://your-domain.com/?q={search_term_string}',
      // 'query-input': 'required name=search_term_string',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${header.variable} ${body.variable}`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          </ThemeProvider>
      </body>
    </html>
  )
}
