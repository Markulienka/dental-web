'use client'

import type { ThemeName } from '@/providers/Theme/types'

import React, { createContext, useCallback, use, useState, useEffect } from 'react'

import canUseDOM from '@/utilities/canUseDOM'
import { useTheme } from '@/providers/Theme'

export interface ContextType {
  headerTheme?: ThemeName | null
  setHeaderTheme: (theme: ThemeName | null) => void
}

const initialContext: ContextType = {
  headerTheme: undefined,
  setHeaderTheme: () => null,
}

const HeaderThemeContext = createContext(initialContext)

export const HeaderThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [headerTheme, setThemeState] = useState<ThemeName | undefined | null>(
    canUseDOM ? (document.documentElement.getAttribute('data-theme') as ThemeName) : undefined,
  )
  const { theme } = useTheme()

  const setHeaderTheme = useCallback((themeToSet: ThemeName | null) => {
    setThemeState(themeToSet)
  }, [])

  useEffect(() => {
    setThemeState(theme)
  }, [theme])

  return (
    <HeaderThemeContext value={{ headerTheme, setHeaderTheme }}>
      {children}
    </HeaderThemeContext>
  )
}

export const useHeaderTheme = (): ContextType => use(HeaderThemeContext)