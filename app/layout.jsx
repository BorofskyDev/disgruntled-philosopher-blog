import { playfairDisplay, openSans } from './fonts'
import { ThemeProvider } from 'next-themes'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
import '../styles/globals.scss'

const header = playfairDisplay
const body = openSans

export const metadata = {
  title: 'The Disgruntled Philosopher',
  icons: {
    icon: '/favicon.ico'
  },
  description:
    'The Disgruntled Philosopher is a personal blog reflecting on politics, life, society, and the journey from evangelicalism to pragmatic humanitarianism.',
  metadataBase: new URL('https://disgruntled-philosopher-blog-dev.vercel.app'),

  openGraph: {
    title: 'The Disgruntled Philosopher',
    description: 'Personal blog on politics, life, and philosophy.',

    siteName: 'The Disgruntled Philosopher',
    images: [
      {
        url: '/api/og',
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
    image: '/api/og',
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
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
       
      </head>
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
