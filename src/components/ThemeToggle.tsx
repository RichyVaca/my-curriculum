import { useTheme } from '../hooks/useTheme'
import { MoonIcon, SunIcon } from './Icons'

interface ThemeToggleProps {
  className?: string
}

/**
 * Accessible light/dark switch. The initial theme is applied by the inline
 * script in index.html before first paint; this keeps the button in sync.
 */
export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`icon-button ${className}`}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      aria-pressed={isDark}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
    >
      {isDark ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  )
}
