import resume from '../data/resume'
import {
  CodeIcon,
  GlobeIcon,
  GraduationCapIcon,
  MapPinIcon,
  SearchIcon,
  ShieldCheckIcon,
  WorkflowIcon,
} from './Icons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const highlights = [
  {
    icon: ShieldCheckIcon,
    title: 'Continuidad operativa',
    text: 'Soporte a plataformas de eCommerce de alto tráfico sin perder de vista al usuario.',
  },
  {
    icon: SearchIcon,
    title: 'Causa raíz',
    text: 'Análisis de logs y errores en servidores Linux para resolver, no solo parchear.',
  },
  {
    icon: WorkflowIcon,
    title: 'Automatización',
    text: 'Flujos con IA y webhooks que reducen el trabajo manual del equipo.',
  },
  {
    icon: CodeIcon,
    title: 'Desarrollo frontend',
    text: 'Interfaces con JavaScript, React y React Native enfocadas en estabilidad.',
  },
]

/**
 * About/credibility section. Includes the professional summary, formation and
 * languages, plus a lazily loaded custom illustration.
 */
export function About() {
  const education = resume.education[0]
  const base = import.meta.env.BASE_URL

  return (
    <section
      id="sobre-mi"
      aria-labelledby="sobre-mi-heading"
      className="scroll-mt-24 border-y border-line bg-surface-2/40 py-20 sm:py-24 lg:py-28 print:border-0 print:bg-white print:py-0"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8 print:block print:max-w-none print:px-0">
        <Reveal className="order-2 lg:order-1 print:hidden">
          <div className="relative mb-6 lg:mb-0">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand/15 via-transparent to-accent/20 blur-xl"
            />
            <img
              src={`${base}workflow.svg`}
              alt="Diagrama del flujo de resolución de incidencias: detectar, analizar, resolver y automatizar."
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
              className="w-full rounded-[1.8rem] border border-line shadow-2xl shadow-ink/15"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b0f1c]/90 px-4 py-3 text-white shadow-xl backdrop-blur sm:right-auto">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-300">
                <GraduationCapIcon className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-xs font-semibold">
                  Ingeniería Informática
                </span>
                <span className="block text-[0.65rem] text-white/60">
                  TecNM Campus Colima · 2014 — 2018
                </span>
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2 print:max-w-none">
          <SectionHeading
            eyebrow="Sobre mí"
            headingId="sobre-mi-heading"
            title={
              <>
                Tecnología con foco en las{' '}
                <span className="text-gradient">personas</span>
              </>
            }
            description="Ingeniería Informática, soporte y desarrollo. La combinación que me permite ver el problema completo, desde la persona que lo reporta hasta el código detrás."
          />

          <p className="mt-6 text-pretty leading-relaxed text-muted">
            {resume.summary}
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="rounded-2xl border border-line bg-surface/80 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg hover:shadow-ink/5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="mt-3 font-display text-sm font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {education ? (
              <div className="rounded-2xl border border-line bg-surface p-5">
                <div className="flex items-center gap-2 text-muted">
                  <GraduationCapIcon className="h-4 w-4" />
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em]">
                    Formación
                  </p>
                </div>
                <h3 className="mt-3 font-display text-base font-semibold text-ink">
                  {education.degree}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {education.institution}
                </p>
                <p className="mt-2 inline-flex items-center gap-1 text-[0.65rem] font-medium text-muted">
                  <MapPinIcon className="h-3 w-3" />
                  {education.location} · {education.startDate} —{' '}
                  {education.endDate}
                </p>
              </div>
            ) : null}

            <div className="rounded-2xl border border-line bg-surface p-5">
              <div className="flex items-center gap-2 text-muted">
                <GlobeIcon className="h-4 w-4" />
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em]">
                  Idiomas
                </p>
              </div>
              <ul className="mt-3 space-y-2">
                {resume.languages.map((language) => (
                  <li
                    key={language.name}
                    className="flex items-center justify-between gap-3 text-sm"
                  >
                    <span className="font-medium text-ink">{language.name}</span>
                    <span className="rounded-full bg-brand-soft px-2.5 py-0.5 text-[0.65rem] font-semibold text-brand">
                      {language.level}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                Documentación técnica y comunicación con equipos distribuidos.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
