export default async function DevPostPage({
  params
}: {
  params: Promise<{ category: string; slug: string }>
}) {
  const { category, slug } = await params
  return (
    <main>
      <h1>개발 - {decodeURIComponent(category)}</h1>
      <h2>포스트: {decodeURIComponent(slug)}</h2>
      <article>
        <p>포스트 상세 페이지입니다.</p>
      </article>
    </main>
  )
}
