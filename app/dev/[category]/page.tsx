interface CategoryPageProps {
  params: { category: string }
}

export default function DevCategoryPage({ params }: CategoryPageProps) {
  const { category } = params
  return (
    <main>
      <h1>개발 - 카테고리: {decodeURIComponent(category)}</h1>
      <p>이 카테고리에 해당하는 포스트 목록을 보여줄 예정입니다.</p>
    </main>
  )
}
