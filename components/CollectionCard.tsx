import Link from 'next/link'
import Image from 'next/image'

interface CollectionCardProps {
  image: string
  title: string
  season: string
  href: string
  alt: string
}

export default function CollectionCard({
  image,
  title,
  season,
  href,
  alt,
}: CollectionCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="w-96 h-[41.3125rem] relative overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-all duration-300 group-hover:blur-md"
          sizes="384px"
        />
        {/* Title Overlay */}
        <div className="w-96 left-[1.875rem] top-[31.25rem] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-end z-10">
          <span className="text-white text-3xl font-normal block" style={{ fontFamily: 'var(--font-didot)' }}>
            <br/>
          </span>
          <span className="text-white text-4xl font-normal block" style={{ fontFamily: 'var(--font-didot-title)' }}>
            {title}
          </span>
        </div>
        {/* Season Overlay */}
        <div className="w-44 left-[1.875rem] top-[31.5rem] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-end text-white text-3xl font-normal tracking-wider z-10" style={{ fontFamily: 'var(--font-didot)' }}>
          {season}
        </div>
      </div>
    </Link>
  )
}
