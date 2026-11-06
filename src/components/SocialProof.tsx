import resume from '../data/resume'
import { companies } from '../data/site'
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  LinkedinIcon,
  ShieldCheckIcon,
} from './Icons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

function getWordmark(name: string) {
  return name
    .split(/\s+/)
    .map((word) => word.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

/**
 * Social-proof section built from real roles and outcomes. LinkedIn is the
 * verification link; no invented quotes or client names.
 */
export function SocialProof() {
  return (
    <section
      id="confianza"
      aria-labelledby="confianza-heading"
      className="scroll-mt-24 border-y border-line bg-surface-2/40 py-20 sm:py-24 lg:py-28 print:hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Prueba social"
            headingId="confianza-heading"
            title={
              <>
                Confianza construida en la{' '}
                <span className="text-gradient">operación</span>
              </>
            }
            description="Empresas y equipos donde he aportado, con el tipo de problema que ayudé a resolver. La trayectoria completa está en mi LinkedIn."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {companies.map((company, index) => (
            <Reveal key={company.name} delay={index * 70}>
              <article className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-ink/5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-2 font-display text-xs font-bold uppercase text-muted transition group-hover:bg-brand-soft group-hover:text-brand">
                      {getWordmark(company.name)}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold tracking-[-0.02em] text-ink">
                        {company.name}
                      </h3>
                      <p className="mt-0.5 text-[0.65rem] font-medium text-muted">
                        {company.role}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-muted">
                    {company.period}
                  </span>
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {company.impact}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {company.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="relative mt-6 overflow-hidden rounded-3xl bg-ink p-6 text-canvas sm:p-8">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/30 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
            />
            <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <p className="inline-flex items-center gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-accent">
                  <ShieldCheckIcon className="h-4 w-4" />
                  Verifica mi trayectoria
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                  La continuidad no se promete: se demuestra.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-canvas/70 sm:text-base">
                  Revisa mi perfil profesional en LinkedIn, o escríbeme
                  directamente para conocer cómo trabajo.
                </p>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
                {resume.contact.linkedin ? (
                  <a
                    href={resume.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary whitespace-nowrap"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                    Ver LinkedIn
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                ) : null}
                <a
                  href="#contacto"
                  className="btn border border-canvas/20 bg-canvas/5 text-canvas transition hover:-translate-y-0.5 hover:border-canvas/40 hover:bg-canvas/10"
                >
                  Conversemos
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
