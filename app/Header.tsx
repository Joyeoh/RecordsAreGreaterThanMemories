import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">기록은 기억보다 강하다</Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/daily">Daily</Link>
          <Link href="/dev">Dev</Link>
        </nav>
      </div>
    </header>
  )
}
