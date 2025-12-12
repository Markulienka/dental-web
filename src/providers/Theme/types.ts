export type ThemeName =
  | 'default'
  | 'kodama-grove'
  | 'bubblegum'
  | 'sage-garden'
  | 'doom-64-custom'
  | 'neo-brutalism-custom'
  | 'notebook'
  | 'retro-arcade-custom'

export interface Theme {
  name: ThemeName
}

export const themeLocalStorageKey = 'payload-theme'

export const defaultTheme: Theme = {
  name: 'default',
}

export interface ThemeContextType {
  setTheme: (name: ThemeName) => void
  theme: ThemeName
}
