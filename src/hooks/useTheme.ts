import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'richie-theme'

function readTheme(): Theme {
  if (typeof window === 'undefined') return 'light'

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored

  // The inline script in index.html already resolved the system preference
  // before paint, so reading the class keeps React in sync without a flash.
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

/**
 * Class-based theme controller. Persists the choice in localStorage and keeps
 * the browser UI colour scheme / theme-color meta tag in sync.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme

    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Storage can be disabled (private mode); the theme still works in-session.
    }

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#070a11' : '#f7f6f2')
  }, [theme])

  function toggleTheme() {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}
