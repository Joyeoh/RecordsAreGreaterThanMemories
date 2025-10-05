import './globals.css'
import type { Metadata } from 'next'
import Sidebar from './Sidebar'
import Header from './Header'

export const metadata: Metadata = {
  title: '기록은 기억보다 강하다',
  description: '개인 기술 블로그'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <div className="container">
          <Sidebar />
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  )
}
