'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/show-archive', label: 'SHOW' },
    { href: '/volta', label: 'VOLTA' },
    { href: '/meet-the-team', label: 'TEAM' },
    { href: '/behind-the-scenes', label: 'BTS' },
  ]

  return (
    <nav className="bg-black py-4">
      <div className="px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex justify-start items-center leading-none">
            <Link href="/" className="text-white text-5xl font-normal " style={{ fontFamily: 'var(--font-didot)' }}>
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
                  className="text-white text-2xl font-light transform translate-y-[2px]"
                  style={{ fontFamily: 'var(--font-helvetica-light)' }}
                >
                  {link.label}
                </Link>
              )
            })}
            
            {/* Icon */}
            <div className="flex justify-start items-center gap-5">
              <div className="w-8 h-8 relative">
                <div className="w-8 h-8 left-0 top-0 absolute">
                  <div className="w-6 h-6 left-[3px] top-[3px] absolute bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
