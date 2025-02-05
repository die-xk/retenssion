import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Retenssion',
  description: 'Turn your customers into loyal customers',
  icons: {
    icon: '/favicon.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar isLoggedIn={true} />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
