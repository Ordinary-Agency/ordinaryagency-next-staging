import './styles/globals.css'
import { Inter } from 'next/font/google'
import Head from "next/head"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ordinary Agency',
  description: 'Digital Agency in West Perth',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <body className={inter.className}><div id="my-root">{children}</div></body>
    </html>
  )
}
