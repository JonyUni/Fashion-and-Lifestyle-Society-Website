import { notFound } from 'next/navigation'
import ArticleLayout from '@/components/ArticleLayout'
import { getArticleBySlug, getLatestArticles } from '@/lib/articles'

interface PageProps {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug)
  
  if (!article) {
    notFound()
  }

  // Get latest articles (excluding current one)
  const latestArticles = getLatestArticles(params.slug, 3).map((preview) => ({
    slug: preview.slug,
    image: preview.image,
    category: preview.category,
    title: preview.title,
    author: preview.author,
    alt: preview.alt,
  }))

  return <ArticleLayout article={article} latestArticles={latestArticles} />
}

// Generate static params for all articles at build time
export async function generateStaticParams() {
  const { allArticles } = await import('@/lib/articles')
  return allArticles.map((article) => ({
    slug: article.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const article = getArticleBySlug(params.slug)
  
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} | FLS`,
    description: `Read ${article.title} by ${article.author} on Fashion & Lifestyle Society`,
  }
}
