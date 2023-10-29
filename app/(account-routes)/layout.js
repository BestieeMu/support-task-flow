import NextTopLoader from 'nextjs-toploader'
import { AuthProvider } from '../Providers'
import '../globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{backgroundColor: '#E2E1FE'}}>
      <NextTopLoader color="#0063F3" showSpinner={true} easing="ease" height={6}/>

      <AuthProvider>
        {children}
      </AuthProvider>
      <Toaster position="top-right" richColors={true} theme={'dark'} />

      </body>
    </html>
  )
}
