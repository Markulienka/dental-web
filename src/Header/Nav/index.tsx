'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Button } from '@payloadcms/ui'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = data?.navItems || []

  return (
    <>
      <Button
        className="p-2 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Zavrieť menu' : 'Otvoriť menu'}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      <ThemeSelector />

      {isOpen && (
        <nav className="absolute top-16 left-0 right-0 bg-white p-4 shadow-lg md:hidden">
          {navItems.map(({ link }, i) => (
            <div key={i} className="py-2">
              <CMSLink
                {...link}
                appearance="link"
                className="block w-full text-left"
                onClick={() => setIsOpen(false)}
              />
            </div>
          ))}

          <Link
            href="#"
            className="block w-full text-center bg-primary text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity text-base font-medium mt-4"
            onClick={() => setIsOpen(false)}
          >
            Vytvoriť web
          </Link>
        </nav>
      )}

      <nav className="hidden md:flex md:items-center md:gap-5">
        {navItems.map(({ link }, i) => (
          <CMSLink key={i} {...link} appearance="link" />
        ))}

        <Link
          href="#"
          className="bg-primary text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity text-base font-medium"
        >
          Vytvoriť web
        </Link>
      </nav>
    </>
  )
}