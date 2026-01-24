import Link from 'next/link'
import Image from 'next/image'

interface LatestArticle {
  slug: string
  image: string
  category: string
  title: string
  author: string
  alt: string
}

interface LatestArticlesSidebarProps {
  articles: LatestArticle[]
}

export default function LatestArticlesSidebar({ articles }: LatestArticlesSidebarProps) {
  return (
    <div className="w-full max-w-[384px]">
      {/* LATEST Heading */}
      <h2
        className="text-white text-2xl font-bold leading-9 mb-4"
        style={{ fontFamily: 'var(--font-helvetica-bold)' }}
      >
        LATEST
      </h2>
      
      {/* Divider */}
      <div className="w-full h-px bg-white mb-4"></div>
      
      {/* Article Cards */}
      <div className="flex flex-col gap-3">
        {articles.map((article, index) => (
          <Link key={index} href={`/articles/${article.slug}`} className="block">
            <div className="flex flex-col gap-[3px]">
              {/* Image */}
              <div className="relative w-full h-[288px]">
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 384px"
                />
              </div>
              
              {/* Category */}
              <p
                className="text-white text-xl font-bold leading-7"
                style={{ fontFamily: 'var(--font-helvetica-bold)' }}
              >
                {article.category}
              </p>
              
              {/* Title */}
              <p
                className="text-white text-xl font-bold leading-7"
                style={{ fontFamily: 'var(--font-helvetica-bold)' }}
              >
                {article.title}
              </p>
              
              {/* Author */}
              <p
                className="text-white text-xl leading-7"
                style={{ fontFamily: 'var(--font-helvetica-light)' }}
              >
                By {article.author}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
