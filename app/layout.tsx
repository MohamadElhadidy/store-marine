"use client"
import '../styles/globals.css'
import Navbar from './Navbar'
import { usePathname } from 'next/navigation'
import React from 'react'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname();
  
  return (
    <html>
      <head></head>
      <body>
        <QueryClientProvider client={queryClient}>
        {pathname?.slice(0, 7) !== '/items/' &&  <Navbar/>}
        <main className={` ${pathname?.slice(0, 7) !== '/items/' ? 'container' : '' } mx-auto h-[80vh]`}>
            {children}
        </main>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  )
}
