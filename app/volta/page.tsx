'use client'

import { useState } from 'react'
import Image from 'next/image'
import ArticleCard from '@/components/ArticleCard'

type Category = 'CULTURE' | 'FASHION' | 'BEAUTY' | 'MUSIC' | 'ZINE'

interface Article {
  id: number
  image: string
  category: 'BEAUTY' | 'CULTURE' | 'FASHION' | 'MUSIC' | 'ZINE'
  title: string
  author: string
  href?: string
  alt: string
}

// Category icon mapping
const categoryIcons: Record<Category, { image: string; hoverImage?: string; label: string; alt: string }> = {
  CULTURE: {
    image: '/images/volta/camera.png',
    hoverImage: '/images/volta/camera-flash.png',
    label: 'CULTURE',
    alt: 'Culture category icon',
  },
  FASHION: {
    image: '/images/volta/kitten-heel.png',
    hoverImage: '/images/volta/big-heel-cute.png',
    label: 'FASHION',
    alt: 'Fashion category icon',
  },
  BEAUTY: {
    image: '/images/volta/closed-lipstick.png',
    hoverImage: '/images/volta/open-lipstick.png',
    label: 'BEAUTY',
    alt: 'Beauty category icon',
  },
  MUSIC: {
    image: '/images/volta/cd.png',
    hoverImage: '/images/volta/cd-effect.png',
    label: 'MUSIC',
    alt: 'Music category icon',
  },
  ZINE: {
    image: '/images/volta/zine-closed.png',
    hoverImage: '/images/volta/zine-open.png',
    label: 'ZINE',
    alt: 'Zine category icon',
  },
}

const articles: Article[] = [
  {
    id: 1,
    image: '/images/volta/article-1.png',
    category: 'CULTURE',
    title: 'What is the best in the city of st. catharines',
    author: 'Anthony Lam',
    alt: 'Article about St. Catharines',
  },
  {
    id: 2,
    image: '/images/volta/article-2.png',
    category: 'CULTURE',
    title: 'Best bars in the city',
    author: 'Anthony Lam',
    alt: 'Best bars article',
  },
  {
    id: 3,
    image: '/images/volta/article-3.png',
    category: 'MUSIC',
    title: 'Best bars in the city',
    author: 'Anthony Lam',
    alt: 'Music article',
  },
  {
    id: 4,
    image: '/images/volta/article-4.png',
    category: 'BEAUTY',
    title: 'Best bars in the city',
    author: 'Anthony Lam',
    alt: 'Beauty article',
  },
  {
    id: 5,
    image: '/images/volta/article-5.png',
    category: 'FASHION',
    title: 'Best bars in the city',
    author: 'Anthony Lam',
    alt: 'Fashion article',
  },
  {
    id: 6,
    image: '/images/volta/article-6.png',
    category: 'CULTURE',
    title: 'Best bars in the city',
    author: 'Anthony Lam',
    alt: 'Culture article',
  },
]

const categories: Category[] = ['CULTURE', 'FASHION', 'BEAUTY', 'MUSIC', 'ZINE']

export default function Volta() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null)

  const filteredArticles = activeCategory
    ? articles.filter((article) => article.category === activeCategory)
    : articles

  return (
    <div className="bg-black min-h-screen">
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 pt-8 sm:pt-12 md:pt-16 lg:pt-10">
       {/* Category Filter Icons */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-between w-full">
            {categories.map((category) => {
              const iconData = categoryIcons[category]
              const isActive = activeCategory === category
              const hasHoverImage = !!iconData.hoverImage
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                  className="group flex flex-col items-center gap-3 sm:gap-4"
                >
                  {/* Icon */}
                  <div className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-[188px] lg:h-[188px] ${
                    isActive ? 'opacity-100' : 'opacity-70 hover:opacity-90'
                  }`}>
                    {/* Default Image - hidden when active (if has hoverImage) or on hover */}
                    <Image
                      src={iconData.image}
                      alt={iconData.alt}
                      fill
                      className={`object-contain ${
                        hasHoverImage && isActive ? 'opacity-0' : hasHoverImage ? 'opacity-100 group-hover:opacity-0' : ''
                      }`}
                      sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 112px, 188px"
                    />
                    {/* Hover Image (only for CULTURE) - visible when active or on hover */}
                    {hasHoverImage && (
                      <Image
                        src={iconData.hoverImage!}
                        alt={iconData.alt}
                        fill
                        className={`object-contain ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}
                        sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 112px, 188px"
                      />
                    )}
                  </div>
                  {/* Label */}
                  <p
                    className="text-white text-sm sm:text-base md:text-xl lg:text-[24px] font-bold leading-[28px] text-center"
                    style={{ fontFamily: 'var(--font-helvetica-bold)' }}
                  >
                    {iconData.label}
                  </p>
                </button>
              )
            })}
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 pb-16">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              image={article.image}
              category={article.category}
              title={article.title}
              author={article.author}
              href={article.href}
              alt={article.alt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
