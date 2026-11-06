import { useEffect, useRef, useState } from 'react'

interface InViewOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

/**
 * Small IntersectionObserver wrapper used by reveals and counters.
 * Falls back to "visible" when the API is unavailable (or during SSR).
 */
export function useInView<T extends Element>({
  threshold = 0.15,
  rootMargin = '0px 0px -70px 0px',
  once = true,
}: InViewOptions = {}) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return

        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, inView }
}
