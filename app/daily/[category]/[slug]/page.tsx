import styles from './page.module.css'

type PostPageProps = {
  params: {
    category: string
    slug: string
  }
}

export default async function DailyPostPage({ params }: PostPageProps) {
  const { category, slug } = params
  const decodedCategory = decodeURIComponent(category)
  const decodedSlug = decodeURIComponent(slug)

  // 실제 데이터를 가져오는 로직을 여기에 추가할 수 있습니다.
  // 예: const post = await getPostData(slug);

  return (
    <main className={styles.container}>
      <article>
        <header className={styles.postHeader}>
          <p className={styles.category}>{decodedCategory}</p>
          <h1 className={styles.title}>{decodedSlug}</h1>
          <p className={styles.meta}>
            작성일: {new Date().toLocaleDateString('ko-KR')}
          </p>
        </header>
        <div className={styles.content}>
          <p>
            이곳은 블로그 게시물의 첫 번째 문단입니다. 사용자의 시선을 사로잡고
            글의 전체적인 내용을 소개하는 역할을 합니다. 가독성을 위해 적절한 줄
            바꿈과 간결한 문장을 사용하는 것이 좋습니다.
          </p>

          <h2>소제목 1: 글의 구조화</h2>
          <p>
            긴 글을 작성할 때는 소제목을 사용하여 내용을 구조화하는 것이
            중요합니다. 소제목은 독자가 글의 흐름을 쉽게 파악하고 원하는 정보를
            빠르게 찾을 수 있도록 돕습니다.
          </p>
          <blockquote>
            &quot;좋은 글은 독자를 배려하는 것에서 시작됩니다.&quot; - 유명한 누군가
          </blockquote>

          <h2>소제목 2: 코드 블록과 목록 활용</h2>
          <p>
            개발 블로그라면 코드 예제를 보여주는 것이 필수적입니다. 아래는
            간단한 JavaScript 코드 예시입니다.
          </p>
          <pre>
            <code>
              {`function greet(name) {
  console.log(\`Hello, \${name}!\`);
}`}
            </code>
          </pre>
          <p>
            또한, 다음과 같이 목록을 사용하여 정보를 명확하게 전달할 수
            있습니다.
          </p>
          <ul>
            <li>첫 번째 항목: 가독성 높은 디자인</li>
            <li>두 번째 항목: 의미있는 콘텐츠 구조</li>
            <li>세 번째 항목: 유용한 정보 제공</li>
          </ul>
          <p>
            이처럼 다양한 요소를 활용하여 풍부하고 매력적인 콘텐츠를 만들어
            보세요.
          </p>
        </div>
      </article>
    </main>
  )
}
