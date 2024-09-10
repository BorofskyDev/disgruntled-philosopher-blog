import { Playfair_Display, Open_Sans } from 'next/font/google'

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const openSans = Open_Sans({
    subsets: ['latin'],
    variable: '--font-body',
    weight: ['400', '700'],
    })