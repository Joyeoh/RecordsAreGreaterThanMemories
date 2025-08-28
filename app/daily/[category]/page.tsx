import { notFound } from 'next/navigation'

const CATEGORIES = ['드라마', '일상', '여행']

export function generateStaticParams() {
  return CATEGORIES.map(category => ({ category }))
}

export default async function DailyCategoryPage({
  params
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const decoded = decodeURIComponent(category)

  if (!CATEGORIES.includes(decoded)) {
    notFound()
  }

  return (
    <main>
      <h1>일상 - 카테고리: {decoded}</h1>
      <p>이 카테고리에 해당하는 포스트 목록을 보여줄 예정입니다.</p>
    </main>
  )
}
