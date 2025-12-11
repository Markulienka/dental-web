'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import type { Header as HeaderType } from '@/payload-types'
import Link from 'next/link'
import { CMSLink } from '@/components/Link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = data?.navItems || []

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Navigation */}
      <nav className={`
        ${isOpen ? 'block' : 'hidden'}
        md:flex md:items-center md:gap-5
        absolute md:static top-16 left-0 right-0
        bg-white md:bg-transparent p-4 md:p-0
        shadow-lg md:shadow-none
      `}>
        {navItems.map(({ link }, i) => (
          <div key={i} className="py-2 md:py-0">
            <CMSLink
              {...link}
              appearance="link"
              className="block w-full text-left md:inline"
              onClick={() => setIsOpen(false)}
            />
          </div>
        ))}

        <Link
          href="#"
          className="
            block w-full md:w-auto text-center
            bg-blackColor text-white 
            px-6 py-3 rounded-xl hover:opacity-90 
            transition-opacity text-base font-medium
            mt-4 md:mt-0
          "
          onClick={() => setIsOpen(false)}
        >
          Vytvoriť web
        </Link>
      </nav>
    </>
  )
}