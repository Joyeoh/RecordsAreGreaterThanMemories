export default async function TagDetailPage({
  params
}: {
  params: Promise<{ tag: string }>
}) {
  const { tag } = await params
  return (
    <main>
      <h1>태그: {decodeURIComponent(tag)}</h1>
      <p>해당 태그의 포스트 목록을 보여줄 예정입니다.</p>
    </main>
  )
}
