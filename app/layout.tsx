"use client"
import '../styles/globals.css'
import Navbar from './Navbar'
import { usePathname } from 'next/navigation'
import React from 'react'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname();
  console.log(pathname)
  return (
    <html>
      <head></head>
      <body>
        {pathname?.slice(0, 7) !== '/items/' &&  <Navbar/>}
        <main className={` ${pathname?.slice(0, 7) !== '/items/' ? 'container' : '' } mx-auto h-[80vh]`}>
            {children}
        </main>
      </body>
    </html>
  )
}
