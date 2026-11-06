import { metrics } from '../data/site'
import { Counter } from './Counter'
import { Reveal } from './Reveal'

/** Animated, accessible metrics strip directly below the hero. */
export function MetricsBand() {
  return (
    <section
      aria-label="Indicadores profesionales"
      className="border-y border-line bg-surface/60 print:hidden"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-10">
          {metrics.map((metric, index) => (
            <Reveal
              key={metric.label}
              delay={index * 90}
              className={
                index > 0 ? 'sm:border-l sm:border-line sm:pl-6' : ''
              }
            >
              <Counter
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
                label={metric.label}
                detail={metric.detail}
                delay={index * 100}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
