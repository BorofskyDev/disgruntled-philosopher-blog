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
    "The Disgruntled Philosopher is a personal blog reflecting on politics, life, society, and the journey from evangelicalism to pragmatic humanitarianism. Written with honesty, humor, and a dash of philosophy (but not too much), this blog is for those who've questioned it all and come out the other side.",
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
