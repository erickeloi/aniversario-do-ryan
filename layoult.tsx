import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sexta Feira 13 - Aniversário e Jantar',
  description: 'Junte-se a nós para uma Ceia de Aniversário MATADOURA nessa Sexta Feira 13!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

