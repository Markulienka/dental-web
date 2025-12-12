import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'
import {
  Englebert,
  Amiri,
  Azeret_Mono as AzeretMono,
  Antic,
  Fira_Code as FiraCode,
  IBM_Plex_Mono as IBMPlexMono,
  JetBrains_Mono as JetBrainsMono,
  Libre_Baskerville as LibreBaskerville,
  Lora,
  Merriweather,
  Montserrat,
  Poppins,
  Source_Serif_4 as SourceSerif4,
  Ubuntu_Mono as UbuntuMono,
  Oxanium,
  Abhaya_Libre,
  Source_Code_Pro,
  Architects_Daughter,
  Lexend_Zetta
} from 'next/font/google'

import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

const MerriweatherFont = Merriweather({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-merriweather' })
const SourceSerif4Font = SourceSerif4({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-source-serif-4' })
const JetBrainsMonoFont = JetBrainsMono({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-jetbrains-mono' })
const MontserratFont = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-montserrat' })
const UbuntuMonoFont = UbuntuMono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-ubuntu-mono' })
const PoppinsFont = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins' })
const LoraFont = Lora({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-lora' })
const FiraCodeFont = FiraCode({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-fira-code' })
const AnticFont = Antic({ subsets: ['latin'], weight: ['400'], variable: '--font-antic' })
const LibreBaskervilleFont = LibreBaskerville({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-libre-baskerville' })
const IBMPlexMonoFont = IBMPlexMono({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-ibm-plex-mono' })
const SourceCodeProFont = Source_Code_Pro({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-source-code-pro' })
const OxaniumFont = Oxanium({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-oxanium' })
const AbhayaLibreFont = Abhaya_Libre({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-abhaya-libre' })
const EnglebertFont = Englebert({ subsets: ['latin'], weight: ['400'], variable: '--font-englebert' })
const AmiriFont = Amiri({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-amiri' })
const AzeretMonoFont = AzeretMono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-azeret-mono' })
const ArchitectsDaughterFont = Architects_Daughter({ subsets: ['latin'], weight: ['400'], variable: '--font-architects-daughter' })
const LexendZettaFont = Lexend_Zetta({ subsets: ['latin'], weight: ['400'], variable: '--font-lexend-zetta' })

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        MerriweatherFont.variable,
        SourceSerif4Font.variable,
        JetBrainsMonoFont.variable,
        MontserratFont.variable,
        UbuntuMonoFont.variable,
        PoppinsFont.variable,
        LoraFont.variable,
        FiraCodeFont.variable,
        AnticFont.variable,
        LibreBaskervilleFont.variable,
        IBMPlexMonoFont.variable,
        SourceCodeProFont.variable,
        OxaniumFont.variable,
        AbhayaLibreFont.variable,
        EnglebertFont.variable,
        AmiriFont.variable,
        AzeretMonoFont.variable,
        ArchitectsDaughterFont.variable,
        LexendZettaFont.variable
      )}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
