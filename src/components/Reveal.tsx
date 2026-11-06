import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Stagger in milliseconds, applied through transition-delay. */
  delay?: number
}

/**
 * Fades/slides its children in the first time they enter the viewport.
 * Content is visible by default if JS is unavailable (see `<noscript>` in
 * index.html), and motion is disabled by the reduced-motion media query.
 */
export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
