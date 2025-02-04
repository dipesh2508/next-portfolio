import type { Metadata } from 'next'
import { Caudex, Montserrat } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"

const montserrat = Montserrat({ subsets: ['latin'] })

const caudex = Caudex({ 
  subsets: ['latin', 'latin-ext'],
  weight:["400", "700"],
  variable: '--font-caudex',
});

export const metadata: Metadata = {
  title: 'Dipesh Ranjan - Web Developer & Designer',
  description: 'Portfolio website of Dipesh Ranjan, a web developer and designer specializing in MERN stack, Next.js, and UI/UX design.',
  keywords: ['web development', 'UI/UX design', 'MERN stack', 'Next.js', "Dipesh Ranjan", "Dipesh", "Ranjan", "Portfolio", "Web Developer", "Web Designer"],
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dipesh-ranjan.tryntest.in/',
    title: 'Dipesh Ranjan - Web Developer & Designer',
    description: 'Portfolio website showcasing web development and design work',
    images: [{
      url: 'https://github.com/dipesh2508/the-first-aid/blob/main/src/assets/about/Dipesh.png?raw=true',
      width: 1200,
      height: 630,
      alt: 'Dipesh Ranjan Portfolio'
    }]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}, ${caudex.variable}`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
