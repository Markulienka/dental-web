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
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      <ThemeSelector />

      <nav className={`
        ${isOpen ? 'block' : 'hidden'}
        md:flex md:items-center md:gap-5
        absolute md:static top-16 left-0 right-0
        bg-primary-foreground md:bg-transparent p-4 md:p-0
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
            bg-primary text-primary-foreground 
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