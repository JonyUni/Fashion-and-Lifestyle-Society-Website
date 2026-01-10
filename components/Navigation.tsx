'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  const instagramUrl = 'https://www.instagram.com/flsociety/?hl=en'

  const navLinks = [
    { href: '/', label: 'home' },
    { href: '/show-archive', label: 'show' },
    { href: '/volta', label: 'volta' },
    { href: '/meet-the-team', label: 'team' },
    { href: '/behind-the-scenes', label: 'bts' },
  ]

  return (
    <nav className="bg-black py-4">
      <div className="px-8">
        <div className="flex justify-between items-baseline">
          {/* Logo Section */}
          <div className="flex justify-start items-baseline leading-none">
            <Link href="/" className="text-white text-3xl font-didot leading-none">
              F&LS
              </Link>
            </div>

          {/* Navigation Links */}
          <div className="w-[554px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex justify-between items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-gray-400 text-lg font-helveticaLight font-light leading-none"
                >
                  {link.label}
                </Link>
              )
            })}
            
            {/* Icon */}
            <div className="flex items-center">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-6 w-6 items-center justify-center"
              >
                <img src="/images/instagram.svg" alt="" width={24} height={24} className="block h-full w-full hover:opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
