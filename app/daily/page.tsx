import Link from 'next/link'

const CATEGORIES = ['드라마', '일상', '여행']

export default function DailyHomePage() {
  return (
    <main>
      <h1>일상</h1>
      <p>일상 섹션의 기본 페이지입니다.</p>
      <nav>
        <ul>
          {CATEGORIES.map(c => (
            <li key={c}>
              <Link href={`/daily/${encodeURIComponent(c)}`}>{c}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  )
}
