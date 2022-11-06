import '../styles/globals.css'
import Navbar from './Navbar'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body>
        <Navbar/>
        <main className="container mx-auto px-4 w-full py-6 flex  justify-center items-center h-[80vh]">
            {children}
        </main>
      </body>
    </html>
  )
}
