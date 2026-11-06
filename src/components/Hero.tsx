import { brand } from '../data/site'
import {
  ActivityIcon,
  ArrowRightIcon,
  BriefcaseIcon,
  CodeIcon,
  MapPinIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from './Icons'

/**
 * Above-the-fold introduction. The portrait is the LCP image, so it is loaded
 * eagerly with responsive sources and explicit dimensions (no layout shift).
 */
export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pb-20 pt-28 sm:pt-32 lg:pb-24 lg:pt-36 print:hidden"
    >
      {/* Decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="hero-grid absolute inset-0" />
        <div className="absolute -left-32 top-8 h-80 w-80 rounded-full bg-brand/20 blur-3xl dark:bg-brand/10" />
        <div className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-accent/25 blur-3xl dark:bg-accent/10" />
        <div className="absolute left-1/2 top-24 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-line/60" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex flex-wrap items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-xs font-semibold text-muted shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Disponible para nuevos proyectos
            <span aria-hidden="true" className="text-line">
              ·
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPinIcon className="h-3.5 w-3.5" />
              Colima, México
            </span>
          </p>

          <h1
            id="hero-heading"
            className="mt-6 text-balance font-display text-[2.35rem] font-bold leading-[1.02] tracking-[-0.045em] text-ink min-[375px]:text-[clamp(2.7rem,6vw,4.9rem)]"
          >
            Tu operación en línea,{' '}
            <span className="text-gradient">sin interrupciones.</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
            Hola, soy <strong className="font-semibold text-ink">{brand.displayName}</strong>.
            Ingeniero informático especializado en soporte técnico, desarrollo
            frontend y automatización. Ayudo a equipos de eCommerce a resolver
            incidencias y mantener sus servicios funcionando.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row xl:items-center">
            <a href="#contacto" className="btn btn-primary">
              Hablemos de tu proyecto
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a href="#experiencia" className="btn btn-secondary">
              Conocer mi trayectoria
              <CodeIcon className="h-4 w-4" />
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-muted">
            <li className="inline-flex items-center gap-2">
              <ShieldCheckIcon className="h-4 w-4 text-brand" />
              eCommerce de alto tráfico
            </li>
            <li className="inline-flex items-center gap-2">
              <CodeIcon className="h-4 w-4 text-brand" />
              React &amp; React Native
            </li>
            <li className="inline-flex items-center gap-2">
              <SparklesIcon className="h-4 w-4 text-brand" />
              Automatización con IA
            </li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[27rem] lg:max-w-[31rem]">
          <div
            aria-hidden="true"
            className="absolute -inset-5 -z-10 rounded-[2.8rem] bg-gradient-to-br from-brand/25 via-transparent to-accent/35 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="absolute -left-5 bottom-16 -z-10 h-32 w-32 rounded-full border border-brand/30 sm:-left-8"
          />

          <figure className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-surface p-2 shadow-2xl shadow-ink/20 dark:border-white/10">
            <img
              src="/profile-portrait-960.jpg"
              srcSet="/profile-portrait-480.jpg 480w, /profile-portrait-960.jpg 960w"
              sizes="(min-width: 1024px) 480px, (min-width: 640px) 420px, 80vw"
              alt={`Retrato profesional de ${brand.displayName}`}
              width={960}
              height={1200}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] w-full rounded-[1.6rem] object-cover object-center"
            />
            <figcaption className="absolute inset-x-2 bottom-2 rounded-[1.45rem] bg-gradient-to-t from-[#080b12]/95 via-[#080b12]/70 to-transparent px-5 pb-5 pt-16 text-white">
              <p className="font-display text-lg font-bold tracking-[-0.02em]">
                {brand.displayName}
              </p>
              <p className="mt-1 text-xs font-medium text-white/70">{brand.role}</p>
            </figcaption>
          </figure>

          <div className="absolute -left-3 top-10 z-20 hidden items-center gap-3 rounded-2xl border border-line bg-surface/95 px-4 py-3 shadow-xl shadow-ink/10 backdrop-blur sm:-left-7 sm:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft text-brand">
              <BriefcaseIcon className="h-4 w-4" />
            </span>
            <span>
              <span className="block font-display text-sm font-bold text-ink">
                4+ años
              </span>
              <span className="block text-[0.65rem] font-medium text-muted">
                de experiencia
              </span>
            </span>
          </div>

          <div className="absolute -bottom-10 right-0 z-20 flex items-center gap-3 rounded-2xl border border-line bg-surface/95 px-4 py-3 shadow-xl shadow-ink/10 backdrop-blur sm:-right-6">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span>
              <span className="block font-display text-sm font-bold text-ink">
                Operación en línea
              </span>
              <span className="block text-[0.65rem] font-medium text-muted">
                eCommerce Telcel
              </span>
            </span>
            <ActivityIcon className="ml-1 h-4 w-4 text-emerald-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
