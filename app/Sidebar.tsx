'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './Sidebar.module.css'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className={styles.sidebar}>
      <div className={styles.profile}>
        <Link href="/">
          <Image
            src="/Blog_profile.jpg"
            alt="프로필 이미지"
            width={150}
            height={150}
            className={styles.profileImage}
            priority
          />
        </Link>
        <h1 className={styles.name}>블로그 주인 이름</h1>
        <p className={styles.intro}>
          기록은 기억보다 강하다. 꾸준히 기록하는 습관을 기릅니다.
        </p>
      </div>
      <nav className={styles.nav}>
        {pathname.startsWith('/daily') && (
          <>
            <h2 className={styles.categoryTitle}>Daily</h2>
            <Link href="/daily/travel">여행</Link>
            <Link href="/daily/drama">드라마</Link>
          </>
        )}
        {pathname.startsWith('/dev') && (
          <>
            <h2 className={styles.categoryTitle}>Dev</h2>
            <Link href="/dev/frontend">Frontend</Link>
            <Link href="/dev/backend">Backend</Link>
          </>
        )}
      </nav>
    </aside>
  )
}
