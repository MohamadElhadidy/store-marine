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
        <main className="container mx-auto h-[80vh]">
            {children}
        </main>
      </body>
    </html>
  )
}
