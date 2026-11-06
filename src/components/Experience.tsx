import { useState } from 'react'
import resume from '../data/resume'
import type { Experience as ExperienceEntry } from '../types/resume'
import {
  BriefcaseIcon,
  ChevronDownIcon,
  MapPinIcon,
  PrinterIcon,
} from './Icons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { Skills } from './Skills'

interface ExperienceCardProps {
  entry: ExperienceEntry
  index: number
}

/**
 * Timeline card. The first role is expanded by default; other roles can be
 * expanded without leaving the page. Every achievement stays in the DOM and
 * print styles reveal all of them for a complete CV.
 */
function ExperienceCard({ entry, index }: ExperienceCardProps) {
  const [open, setOpen] = useState(index === 0)
  const bodyId = `experience-body-${entry.id}`
  const isCurrent = entry.endDate.toLowerCase() === 'actualidad'

  return (
    <article className="group rounded-3xl border border-line bg-surface p-5 transition duration-300 hover:border-brand/25 hover:shadow-xl hover:shadow-ink/5 sm:p-6 print:break-inside-avoid print:border-neutral-300 print:shadow-none">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted">
            {entry.startDate} — {entry.endDate}
            {isCurrent ? (
              <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[0.55rem] font-semibold normal-case tracking-normal text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Actual
              </span>
            ) : null}
          </p>
          <h3 className="mt-1.5 text-balance font-display text-lg font-bold leading-tight tracking-[-0.02em] text-ink sm:text-xl">
            {entry.role}
          </h3>
          <p className="mt-1.5 text-sm font-medium text-brand">
            {entry.company}
            <span className="font-normal text-muted"> · {entry.location}</span>
          </p>
        </div>

        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-surface-2 font-display text-sm font-bold uppercase text-muted transition group-hover:bg-brand-soft group-hover:text-brand"
        >
          {entry.company.charAt(0)}
        </span>
      </div>

      <div id={bodyId} className="mt-4">
        <ul className="space-y-2">
          {entry.achievements.map((achievement, achievementIndex) => (
            <li
              key={achievement}
              className={
                open || achievementIndex < 2
                  ? 'flex gap-2.5 text-sm leading-relaxed text-muted'
                  : 'hidden gap-2.5 text-sm leading-relaxed text-muted print:flex'
              }
            >
              <span
                aria-hidden="true"
                className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60"
              />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      {entry.achievements.length > 2 ? (
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls={bodyId}
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand transition hover:text-accent-strong print:hidden"
        >
          {open
            ? 'Mostrar menos'
            : `Ver los ${entry.achievements.length} logros`}
          <ChevronDownIcon
            className={`h-3.5 w-3.5 transition-transform duration-200 ${
              open ? 'rotate-180' : ''
            }`}
          />
        </button>
      ) : null}
    </article>
  )
}

/** Professional timeline plus skills and a print/PDF action. */
export function Experience() {
  return (
    <section
      id="experiencia"
      aria-labelledby="experiencia-heading"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-28 print:py-0"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Trayectoria"
            headingId="experiencia-heading"
            title={
              <>
                Experiencia que se traduce en{' '}
                <span className="text-gradient">continuidad</span>
              </>
            }
            description="Soporte, desarrollo y operación en equipos de distintos tamaños. Cada etapa sumó una forma más completa de resolver problemas."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_21rem] lg:items-start lg:gap-12 xl:grid-cols-[1fr_23rem] print:mt-6 print:block">
          <ol className="relative space-y-5 border-l border-line pl-6 sm:pl-8 print:border-0 print:pl-0">
            {resume.experience.map((entry, index) => (
              <li key={entry.id} className="relative print:break-inside-avoid">
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.9rem] top-7 h-3 w-3 rounded-full border-2 border-canvas bg-brand ring-4 ring-brand/10 sm:-left-[2.4rem] print:hidden"
                />
                <Reveal delay={index * 70}>
                  <ExperienceCard entry={entry} index={index} />
                </Reveal>
              </li>
            ))}
          </ol>

          <aside className="space-y-5 lg:sticky lg:top-28 print:static print:mt-6 print:space-y-4">
            <Reveal>
              <Skills skills={resume.skills} />
            </Reveal>

            <Reveal delay={80} className="print:hidden">
              <div className="relative overflow-hidden rounded-3xl bg-ink p-6 text-canvas">
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/30 blur-2xl"
                />
                <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-canvas/10 text-accent">
                  <PrinterIcon className="h-5 w-5" />
                </span>
                <h3 className="relative mt-4 font-display text-lg font-bold tracking-[-0.02em]">
                  ¿Prefieres el CV en PDF?
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-canvas/70">
                  Imprime esta página o guárdala como PDF. La versión para papel
                  incluye toda la trayectoria, formación e idiomas.
                </p>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="btn btn-primary relative mt-4 w-full"
                >
                  <PrinterIcon className="h-4 w-4" />
                  Imprimir / Guardar PDF
                </button>
              </div>
            </Reveal>

            <Reveal delay={140} className="print:hidden">
              <div className="rounded-3xl border border-line bg-surface p-5">
                <div className="flex items-center gap-2 text-muted">
                  <BriefcaseIcon className="h-4 w-4" />
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em]">
                    Ubicación
                  </p>
                </div>
                <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                  <MapPinIcon className="h-4 w-4 text-brand" />
                  {resume.contact.location}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  Disponible para trabajo remoto y proyectos híbridos.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  )
}
