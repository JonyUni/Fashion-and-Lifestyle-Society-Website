import Link from 'next/link'
import Image from 'next/image'

interface ArticleCardProps {
  image: string
  category: string
  title: string
  author: string
  href?: string
  alt: string
}

export default function ArticleCard({
  image,
  category,
  title,
  author,
  href,
  alt,
}: ArticleCardProps) {
  const content = (
    <div className="w-full max-w-[400px] overflow-hidden">
      {/* Image */}
      <div className="relative w-full h-[300px]">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
        />
      </div>
      
      {/* Text Content */}
      <div className="mt-4 space-y-2">
        {/* Category */}
        <p 
          className="text-white text-[20px] font-bold leading-[28px]"
          style={{ fontFamily: 'var(--font-helvetica-bold)' }}
        >
          {category}
        </p>
        
        {/* Title */}
        <p 
          className="text-white text-[20px] font-bold leading-[28px]"
          style={{ fontFamily: 'var(--font-helvetica-bold)' }}
        >
          {title}
        </p>
        
        {/* Author */}
        <p 
          className="text-white text-[20px] leading-[28px]"
          style={{ fontFamily: 'var(--font-helvetica-light)' }}
        >
          By {author}
        </p>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    )
  }

  return content
}
