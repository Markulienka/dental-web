'use client'

import React from 'react'
import { type ThemeName } from '../types'
import { useTheme } from '..'

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const themes: ThemeName[] = ['default', 'kodama-grove', 'sunset-horizon', 'bubblegum', 'sage-garden']

  const handlePrevTheme = () => {
    const currentIndex = themes.indexOf(theme)
    const prevIndex = currentIndex === 0 ? themes.length - 1 : currentIndex - 1
    setTheme(themes[prevIndex])
  }

  const handleNextTheme = () => {
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-1">
      <button
        onClick={handlePrevTheme}
        className="w-[22px] h-[22px] flex items-center justify-center bg-background/80 backdrop-blur-sm border border-border hover:bg-accent transition-colors text-foreground text-sm font-medium rounded"
        aria-label="Previous theme"
        title={`Previous theme (${themes.length} available)`}
      >
        −
      </button>

      <button
        onClick={handleNextTheme}
        className="w-[22px] h-[22px] flex items-center justify-center bg-background/80 backdrop-blur-sm border border-border hover:bg-accent transition-colors text-foreground text-sm font-medium rounded"
        aria-label="Next theme"
        title={`Next theme (${themes.length} available)`}
      >
        +
      </button>
    </div>
  )
}