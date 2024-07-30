import { Inter } from 'next/font/google'
import './globals.scss'
import BoostrapInit from './components/BoostrapInit'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Porfolio del Ing. Jose Paredes',
  description: 'Portafolio de proyectos del Ing. Jose Paredes'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <NavBar />
        {children}
        <BoostrapInit />
      </body>
    </html>
  )
}
