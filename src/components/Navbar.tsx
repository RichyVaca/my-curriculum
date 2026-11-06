import { useEffect, useRef, useState } from 'react'
import { brand, navigation, sectionIds } from '../data/site'
import resume from '../data/resume'
import { useScrollSpy } from '../hooks/useScrollSpy'
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CloseIcon,
  MailIcon,
  MenuIcon,
} from './Icons'
import { ThemeToggle } from './ThemeToggle'

/**
 * Sticky navigation with:
 * - scroll-aware glass background
 * - active-section highlighting (scroll spy)
 * - a keyboard-friendly mobile disclosure menu
 */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useScrollSpy(sectionIds)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      menuButtonRef.current?.focus()
    }

    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }

    // Move focus into the disclosure once it is rendered.
    const frame = window.requestAnimationFrame(() =>
      firstMobileLinkRef.current?.focus(),
    )

    document.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)

    return () => {
      window.cancelAnimationFrame(frame)
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 print:hidden ${
        scrolled || open
          ? 'border-line/80 bg-canvas/90 shadow-[0_10px_40px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-3 rounded-xl"
          aria-label={`${brand.displayName} — Ir al inicio`}
        >
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-ink font-display text-sm font-bold tracking-tight text-canvas shadow-lg transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
            RM
            <span
              aria-hidden="true"
              className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-canvas"
            />
          </span>
          <span className="hidden font-display text-sm font-bold leading-tight tracking-[-0.02em] text-ink sm:block">
            {brand.displayName}
          </span>
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-0.5 lg:flex"
        >
          {navigation.map((item) => {
            const isActive = activeId === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="nav-link"
                aria-current={isActive ? 'location' : undefined}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <a
            href="#contacto"
            className="btn btn-primary hidden px-5 xl:inline-flex"
          >
            Hablemos
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="icon-button lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        hidden={!open}
        className={`${
          open ? 'mobile-menu ' : ''
        }max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-line bg-canvas/95 backdrop-blur-xl lg:hidden`}
      >
        <nav
          aria-label="Navegación móvil"
          className="mx-auto max-w-7xl px-4 py-4 sm:px-6"
        >
          <ul className="space-y-1">
            {navigation.map((item, index) => {
              const isActive = activeId === item.id
              return (
                <li key={item.id}>
                  <a
                    ref={index === 0 ? firstMobileLinkRef : undefined}
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    className="mobile-nav-link"
                    aria-current={isActive ? 'location' : undefined}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="w-5 text-[0.65rem] font-semibold tabular-nums text-muted"
                      >
                        0{index + 1}
                      </span>
                      <span className="font-medium">{item.label}</span>
                    </span>
                    <ArrowUpRightIcon className="h-4 w-4 text-muted" />
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="mt-4 grid gap-2 border-t border-line pt-4 sm:grid-cols-2">
            <a
              href="#contacto"
              onClick={closeMenu}
              className="btn btn-primary w-full"
            >
              Hablemos de tu proyecto
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${resume.contact.email}`}
              className="btn btn-secondary w-full"
            >
              <MailIcon className="h-4 w-4" />
              Escríbeme
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
