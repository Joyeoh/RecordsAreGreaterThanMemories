import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import styles from './page.module.css'

const DAILY_CATEGORIES = ['travel', 'drama'] // 실제 폴더명과 일치

export function generateStaticParams() {
  return DAILY_CATEGORIES.map(category => ({ category }))
}

function getPosts(category: string) {
  const postsDirectory = path.join(process.cwd(), 'posts')

  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md')) // 마크다운 파일만 대상으로 합니다.
    .map(fileName => {
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        slug: matterResult.data.slug,
        ...(matterResult.data as {
          title: string
          date: string
          category: string
        })
      }
    })
    .filter(post => post.category === category)

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export default async function DailyCategoryPage({
  params
}: {
  params: { category: string }
}) {
  const { category } = params

  if (!DAILY_CATEGORIES.includes(category)) {
    notFound()
  }

  const posts = getPosts(category)

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{category.toUpperCase()}</h1>
      <ul className={styles.postList}>
        {posts.map(post => (
          <li
            key={post.slug}
            className={styles.postItem}>
            <Link href={`/daily/${category}/${post.slug}`}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postDate}>{post.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
