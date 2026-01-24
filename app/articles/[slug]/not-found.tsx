import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1
          className="text-white text-4xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-helvetica-bold)' }}
        >
          Article Not Found
        </h1>
        <p
          className="text-white text-xl mb-8"
          style={{ fontFamily: 'var(--font-helvetica-light)' }}
        >
          The article you're looking for doesn't exist.
        </p>
        <Link
          href="/volta"
          className="text-white text-lg underline hover:opacity-70"
          style={{ fontFamily: 'var(--font-helvetica-light)' }}
        >
          Back to Articles
        </Link>
      </div>
    </div>
  )
}
