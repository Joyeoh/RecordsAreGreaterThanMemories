interface TagPageProps {
  params: { tag: string }
}

export default function TagDetailPage({ params }: TagPageProps) {
  return (
    <main>
      <h1>태그: {decodeURIComponent(params.tag)}</h1>
      <p>해당 태그의 포스트 목록을 보여줄 예정입니다.</p>
    </main>
  )
}
