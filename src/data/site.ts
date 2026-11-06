import type {
  Brand,
  CompanyProof,
  Metric,
  NavItem,
  SocialLink,
} from '../types/site'
import resume from './resume'

/**
 * Landing-page content.
 *
 * The résumé content itself lives in `resume.ts` and is reused by the
 * experience, education, skills and languages sections. Everything below is
 * presentation/marketing copy that can be edited independently.
 */

export const brand: Brand = {
  firstName: 'Richie',
  displayName: 'Richie Morales',
  fullName: resume.name,
  role: 'Soporte técnico · Frontend · Automatización',
}

export const navigation: NavItem[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'confianza', label: 'Confianza' },
  { id: 'contacto', label: 'Contacto' },
]

/** Used by the scroll-spy hook. Kept outside React so the array is stable. */
export const sectionIds = navigation.map((item) => item.id)

export const metrics: Metric[] = [
  {
    value: 4,
    suffix: '+',
    label: 'Años de experiencia',
    detail: 'Soporte, desarrollo y automatización',
  },
  {
    value: 4,
    label: 'Equipos y empresas',
    detail: 'eCommerce, software y operación',
  },
  {
    value: 12,
    suffix: '+',
    label: 'Herramientas y tecnologías',
    detail: 'Frontend, datos e inteligencia artificial',
  },
  {
    value: 2,
    label: 'Idiomas',
    detail: 'Español nativo · Inglés B1',
  },
]

/**
 * Proof points based on real roles. No invented client names or quotes:
 * this is the honest social-proof layer for a personal portfolio.
 */
export const companies: CompanyProof[] = [
  {
    name: 'Orium',
    role: 'Analista de soporte operativo',
    period: '2024 — Actualidad',
    impact:
      'Soporte al eCommerce de Telcel, una plataforma de alto tráfico: monitoreo, análisis de logs y continuidad operativa.',
    tags: ['eCommerce', 'Zendesk', 'SAP'],
  },
  {
    name: 'Grupo 78',
    role: 'Desarrollo de software y soporte',
    period: '2022 — 2024',
    impact:
      'Aplicaciones para el proceso notarial, desde el análisis de requerimientos hasta la implementación y el soporte.',
    tags: ['Software a medida', 'APIs', 'Soporte'],
  },
  {
    name: 'Witann Technologies',
    role: 'Soporte a aplicaciones móviles',
    period: '2022',
    impact:
      'Asistencia a usuarios, documentación técnica y reportes en MySQL para agilizar la resolución de incidencias.',
    tags: ['Apps móviles', 'MySQL', 'Documentación'],
  },
  {
    name: 'Peña Colorada',
    role: 'Prácticas · Desarrollo de software',
    period: '2021 — 2022',
    impact:
      'Soluciones internas escalables con JavaScript, React y SQL Server, aplicando metodologías ágiles.',
    tags: ['React', 'SQL Server', 'Ágil'],
  },
]

export const socialLinks: SocialLink[] = [
  ...(resume.contact.linkedin
    ? [
        {
          id: 'linkedin' as const,
          label: 'LinkedIn',
          href: resume.contact.linkedin,
        },
      ]
    : []),
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: `https://wa.me/52${resume.contact.phone.replace(/\s+/g, '')}`,
  },
  {
    id: 'email',
    label: 'Correo electrónico',
    href: `mailto:${resume.contact.email}`,
  },
]
