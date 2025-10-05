import styles from './page.module.css'

export default function DevPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Dev</h1>
      <p>개발 관련 글 목록이 여기에 표시될 예정입니다.</p>
      {/* 
        나중에 이 페이지에 실제 개발 포스트 목록을 불러와 보여주는 로직을 추가할 수 있습니다.
      */}
    </main>
  )
}
