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
        <head>
            <script src="https://cdn.paddle.com/paddle/v2/paddle.js"></script>
            <script type="text/javascript">
              Paddle.Environment.set('sandbox');
              Paddle.setPublicKey('cdc3864fc01cd4b20b63687b80a8c7c346ab0c6acbaa07797d');
            </script>
        </head>
        <body className={inter.className}>
          <Navbar isLoggedIn={true} />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
