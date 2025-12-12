export type ThemeName =
  | 'default'
  | 'kodama-grove'
  | 'sunset-horizon'
  | 'bubblegum'
  | 'sage-garden'
  | 'vintage-paper'

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
