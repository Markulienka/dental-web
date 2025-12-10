import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'

import { Facebook, Instagram, Twitter } from 'lucide-react'

import type { Footer } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()
  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-t border-border bg-footer text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <Link className="inline-flex items-center gap-2" href="/">
              <Logo invert />
            </Link>
            <p className="text-sm text-white/80">
              <span className="block">Profesionálne webstránky pre zubné ambulancie</span>
              <span className="block">bez programovania.</span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:col-span-3">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/70">
                Produkt
              </h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li>
                  <a className="hover:text-white" href="/pricing">
                    Cenník
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Príklady
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Funkcie
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/70">
                Podpora
              </h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li>
                  <a className="hover:text-white" href="#">
                    Kontakt
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Pomoc
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/70">
                Kontakt
              </h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a className="hover:text-white" href="mailto:info@clinic.com">
                    info@clinic.com
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="tel:+421000000000">
                    +421 000 000 000
                  </a>
                </li>
              </ul>
              <div className="flex gap-3 pt-2 text-white/80">
                <a className="hover:text-white" href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a className="hover:text-white" href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a className="hover:text-white" href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-whiteColor/10 pt-8 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} Dental Web. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  )
}
