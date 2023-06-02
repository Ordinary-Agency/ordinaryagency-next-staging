import './styles/globals.css'
import { Inter } from 'next/font/google'
import Header from "./Header"
import Footer from './Footer'
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
    <>
      <Header/>
        {children}
      <Footer/>
    </>
  )
}
