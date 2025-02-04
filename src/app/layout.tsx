import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js with Clerk and Supabase',
  description: 'Application with authentication and database',
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
