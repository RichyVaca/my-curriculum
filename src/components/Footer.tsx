import resume from '../data/resume'
import { brand, navigation, socialLinks } from '../data/site'
import type { SocialIcon } from '../types/site'
import {
  ArrowUpIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  PrinterIcon,
  WhatsappIcon,
} from './Icons'

const currentYear = new Date().getFullYear()

function SocialGlyph({ icon }: { icon: SocialIcon }) {
  switch (icon) {
    case 'linkedin':
      return <LinkedinIcon className="h-4 w-4" />
    case 'whatsapp':
      return <WhatsappIcon className="h-4 w-4" />
    case 'email':
      return <MailIcon className="h-4 w-4" />
  }
}

/** Footer with navigation, direct contact details, social links and print CV. */
export function Footer() {
  return (
    <footer className="border-t border-line bg-surface print:hidden">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_1fr]">
          <div>
            <a
              href="#inicio"
              className="inline-flex items-center gap-3 rounded-xl"
              aria-label={`${brand.displayName} — Ir al inicio`}
            >
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-ink font-display text-sm font-bold text-canvas">
                RM
                <span
                  aria-hidden="true"
                  className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-surface"
                />
              </span>
              <span>
                <span className="block font-display text-sm font-bold text-ink">
                  {brand.displayName}
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Soporte técnico, desarrollo frontend y automatización para equipos
              que necesitan mantener sus servicios en línea.
            </p>

            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((social) => {
                const isExternal = social.href.startsWith('http')
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noreferrer' : undefined}
                    className="icon-button h-10 w-10"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <SocialGlyph icon={social.id} />
                  </a>
                )
              })}
            </div>

            <p className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-muted">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Disponible para nuevos proyectos
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <h2 className="footer-heading">Explorar</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-1">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="footer-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="footer-heading">Contacto</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${resume.contact.email}`}
                  className="footer-contact"
                >
                  <MailIcon className="h-4 w-4 shrink-0 text-brand" />
                  <span className="break-all">{resume.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${resume.contact.phone.replace(/\s+/g, '')}`}
                  className="footer-contact"
                >
                  <PhoneIcon className="h-4 w-4 shrink-0 text-brand" />
                  <span>{resume.contact.phone}</span>
                </a>
              </li>
              <li className="footer-contact">
                <MapPinIcon className="h-4 w-4 shrink-0 text-brand" />
                <span>{resume.contact.location}</span>
              </li>
            </ul>

            <button
              type="button"
              onClick={() => window.print()}
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-brand transition hover:text-accent-strong"
            >
              <PrinterIcon className="h-4 w-4" />
              Imprimir / Guardar CV en PDF
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {brand.fullName}. Todos los derechos reservados.
          </p>
          <p className="order-3 sm:order-2">
            Construido con React, TypeScript y Tailwind CSS.
          </p>
          <a
            href="#inicio"
            className="order-2 inline-flex items-center gap-1.5 font-semibold text-ink transition hover:text-brand sm:order-3"
          >
            Volver arriba
            <ArrowUpIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
