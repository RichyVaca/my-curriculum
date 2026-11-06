import type { Skill, SkillLevel } from '../types/resume'

interface SkillsProps {
  skills: Skill[]
}

const levelWidth: Record<SkillLevel, string> = {
  Básico: 'w-1/3',
  Intermedio: 'w-3/5',
  Avanzado: 'w-4/5',
  Experto: 'w-full',
}

/** Compact skills panel used in the experience sidebar and print view. */
export function Skills({ skills }: SkillsProps) {
  const technical = skills.filter(
    (skill) => skill.category === 'Habilidades técnicas',
  )
  const soft = skills.filter((skill) => skill.category === 'Aptitudes')

  return (
    <div className="rounded-3xl border border-line bg-surface p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-display text-base font-semibold tracking-[-0.02em] text-ink">
          Habilidades
        </h3>
        <span className="text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-muted">
          Stack
        </span>
      </div>

      <p className="mt-4 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted">
        Técnicas
      </p>
      <ul className="mt-2.5 space-y-2.5">
        {technical.map((skill) => (
          <li key={skill.name}>
            <div className="flex items-baseline justify-between gap-2 text-xs">
              <span className="font-medium text-ink">{skill.name}</span>
              {skill.level ? (
                <span className="text-[0.6rem] text-muted">{skill.level}</span>
              ) : null}
            </div>
            <span
              aria-hidden="true"
              className="mt-1 block h-1.5 overflow-hidden rounded-full bg-surface-2"
            >
              <span
                className={`block h-full rounded-full bg-gradient-to-r from-brand to-accent ${
                  skill.level ? levelWidth[skill.level] : 'w-1/2'
                }`}
              />
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-5 border-t border-line pt-4">
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted">
          Aptitudes
        </p>
        <ul className="mt-2.5 flex flex-wrap gap-1.5">
          {soft.map((skill) => (
            <li key={skill.name} className="chip">
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
