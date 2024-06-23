import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import 'semantic-ui-css/semantic.min.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FitnessGuardian App',
  description: 'FitnessGuardian App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
