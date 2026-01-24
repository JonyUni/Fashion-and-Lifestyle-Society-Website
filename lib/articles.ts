import { Article } from '@/components/ArticleLayout'

// Full article data with content
export const allArticles: Article[] = [
  {
    slug: 'best-bars-in-the-city',
    title: 'Best Bars in the City',
    category: 'CULTURE',
    author: 'Anthony Lam',
    date: 'May 16, 2025',
    heroImage: '/images/volta/article-2.png',
    heroImageCaption: 'Some image May 2025',
    content: [
      {
        type: 'paragraph',
        text: 'In recent years, there has been a growing conversation surrounding this topic, with many people offering their own perspectives, experiences, and speculations. <br/><br/>While the details continue to shift and evolve, the general sentiment remains the same: something interesting is happening, and it\'s worth paying attention to. <br/><br/>Whether this is a temporary moment or the beginning of a larger shift is still up for debate, but the ongoing discussion suggests that the subject is far more layered than it appears at first glance.',
      },
      {
        type: 'subheading',
        text: 'What does this mean cuh?',
      },
      {
        type: 'paragraph',
        text: 'For many observers, the conversation is shaped not only by personal experience but also by the broader cultural environment we find ourselves in. <br/><br/>As trends cycle faster than ever and expectations continue to shift, people are beginning to reevaluate what they want, what they value, and how they choose to engage. <br/><br/>This has created a kind of collective pause — a moment where individuals are taking a step back to reassess what really matters. Some argue this is long overdue; others feel it\'s simply the natural rhythm of change.',
      },
    ],
  },
]

// Simplified article data for cards/listing (without full content)
export interface ArticlePreview {
  id: number
  slug: string
  image: string
  category: 'BEAUTY' | 'CULTURE' | 'FASHION' | 'MUSIC' | 'ZINE'
  title: string
  author: string
  alt: string
}

export const articlePreviews: ArticlePreview[] = [
  {
    id: 1,
    slug: 'what-is-the-best-in-the-city-of-st-catharines',
    image: '/images/volta/article-1.png',
    category: 'CULTURE',
    title: 'What is the best in the city of st. catharines',
    author: 'Anthony Lam',
    alt: 'Article about St. Catharines',
  },
  {
    id: 2,
    slug: 'best-bars-in-the-city',
    image: '/images/volta/article-2.png',
    category: 'CULTURE',
    title: 'Best bars in the city',
    author: 'Anthony Lam',
    alt: 'Best bars article',
  },
  {
    id: 3,
    slug: 'best-bars-in-the-city',
    image: '/images/volta/article-3.png',
    category: 'MUSIC',
    title: 'Best bars in the city',
    author: 'Anthony Lam',
    alt: 'Music article',
  },
  {
    id: 4,
    slug: 'best-bars-in-the-city',
    image: '/images/volta/article-4.png',
    category: 'BEAUTY',
    title: 'Best bars in the city',
    author: 'Anthony Lam',
    alt: 'Beauty article',
  },
  {
    id: 5,
    slug: 'best-bars-in-the-city',
    image: '/images/volta/article-5.png',
    category: 'FASHION',
    title: 'Best bars in the city',
    author: 'Anthony Lam',
    alt: 'Fashion article',
  },
  {
    id: 6,
    slug: 'best-bars-in-the-city',
    image: '/images/volta/article-6.png',
    category: 'CULTURE',
    title: 'Best bars in the city',
    author: 'Anthony Lam',
    alt: 'Culture article',
  },
]

// Helper function to get article by slug
export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((article) => article.slug === slug)
}

// Helper function to get latest articles (excluding current article)
export function getLatestArticles(excludeSlug?: string, limit: number = 3): ArticlePreview[] {
  return articlePreviews
    .filter((article) => article.slug !== excludeSlug)
    .slice(0, limit)
}

// Helper to get articles for volta page with href
export function getArticlesForVolta() {
  return articlePreviews.map((article) => ({
    ...article,
    href: `/articles/${article.slug}`,
  }))
}
