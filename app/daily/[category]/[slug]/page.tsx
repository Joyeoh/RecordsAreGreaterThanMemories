import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { notFound } from 'next/navigation'
import styles from './page.module.css'

const postsDirectory = path.join(process.cwd(), 'posts')

export function generateStaticParams() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)
      const { category, slug } = matterResult.data

      if (!category || !slug) {
        return null
      }

      return {
        category: category,
        slug: slug
      }
    })
    .filter(Boolean)
}

async function getPostData(slug: string) {
  const fileNames = fs.readdirSync(postsDirectory)
  const fileName = fileNames.find(name => {
    const fullPath = path.join(postsDirectory, name)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    return data.slug === slug
  })

  if (!fileName) {
    notFound()
  }

  const fullPath = path.join(postsDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    contentHtml,
    ...(matterResult.data as { title: string; date: string; category: string })
  }
}

export default async function DailyPostPage({
  params
}: {
  params: Promise<{ category: string; slug: string }>
}) {
  const { category, slug } = await params
  const post = await getPostData(slug)

  if (post.category !== category) {
    notFound()
  }

  return (
    <main className={styles.container}>
      <article>
        <header className={styles.postHeader}>
          <p className={styles.category}>{post.category}</p>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.meta}>작성일: {post.date}</p>
        </header>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  )
}
