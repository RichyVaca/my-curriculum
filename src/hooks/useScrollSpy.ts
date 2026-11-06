import { useEffect, useState } from 'react'

/**
 * Highlights the nav item for the section currently in view.
 * rAF-throttled so scroll stays cheap, and it accounts for the sticky header
 * via the offset parameter.
 */
export function useScrollSpy(ids: readonly string[], offset = 120) {
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    let ticking = false

    const update = () => {
      ticking = false
      const scrollPosition = window.scrollY + offset
      let current = ids[0] ?? ''

      for (const id of ids) {
        const element = document.getElementById(id)
        if (!element) continue

        const top = element.getBoundingClientRect().top + window.scrollY
        if (top <= scrollPosition) current = id
      }

      // Make the final link active at the very bottom of the page, where short
      // sections can never reach the header offset.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8
      if (atBottom) current = ids[ids.length - 1] ?? current

      setActiveId((previous) => (previous === current ? previous : current))
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, offset])

  return activeId
}
