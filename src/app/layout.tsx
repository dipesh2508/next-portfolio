import type { Metadata } from 'next'
import { Caudex, Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

const caudex = Caudex({ 
  subsets: ['latin', 'latin-ext'],
  weight:["400", "700"],
  variable: '--font-caudex',
});

export const metadata: Metadata = {
  title: 'Dipesh Ranjan Portfolio',
  description: 'Personal Portfolio of Dipesh Ranjan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}, ${caudex.variable}`}>{children}
      </body>
    </html>
  )
}
