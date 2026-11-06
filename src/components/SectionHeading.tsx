import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  headingId: string
  align?: 'left' | 'center'
  className?: string
}

/** Consistent eyebrow + heading + intro used by every landing section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  headingId,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <div
      className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      <p className={`eyebrow ${centered ? 'justify-center' : ''}`}>
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
        {eyebrow}
      </p>
      <h2
        id={headingId}
        className="mt-4 text-balance font-display text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
