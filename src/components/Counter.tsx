import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface CounterProps {
  value: number
  prefix?: string
  suffix?: string
  label: string
  detail: string
  delay?: number
}

/**
 * Counts up once when scrolled into view. The animated number is hidden from
 * assistive tech; a visually hidden static value is exposed instead.
 */
export function Counter({
  value,
  prefix = '',
  suffix = '',
  label,
  detail,
  delay = 0,
}: CounterProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 })
  const reducedMotion = useReducedMotion()
  const [display, setDisplay] = useState(0)

  const visibleValue = reducedMotion ? value : display

  useEffect(() => {
    if (!inView || reducedMotion) return

    let frame = 0
    let start: number | null = null
    const duration = 1400
    const wait = delay

    const tick = (now: number) => {
      if (start === null) start = now + wait
      const elapsed = Math.max(0, now - start)
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setDisplay(Math.round(eased * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, reducedMotion, delay])

  return (
    <div ref={ref} className="text-center sm:text-left">
      <p className="font-display text-4xl font-bold tabular-nums tracking-[-0.04em] text-ink sm:text-5xl">
        <span aria-hidden="true">
          {prefix}
          {visibleValue}
          {suffix}
        </span>
        <span className="sr-only">
          {prefix}
          {value}
          {suffix}
        </span>
      </p>
      <p className="mt-2 text-sm font-semibold text-ink">{label}</p>
      <p className="mt-1 text-xs leading-relaxed text-muted">{detail}</p>
    </div>
  )
}
