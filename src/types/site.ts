/**
 * Types for the landing-page content that lives alongside the résumé data.
 * Keeping these separate from `types/resume.ts` means the CV model stays
 * reusable (for print, a future PDF export, etc.) without landing-page noise.
 */

export interface NavItem {
  id: string
  label: string
}

export interface Metric {
  value: number
  prefix?: string
  suffix?: string
  label: string
  detail: string
}

export interface CompanyProof {
  name: string
  role: string
  period: string
  impact: string
  tags: string[]
}

export type SocialIcon = 'linkedin' | 'whatsapp' | 'email'

export interface SocialLink {
  id: SocialIcon
  label: string
  href: string
}

export interface Brand {
  firstName: string
  displayName: string
  fullName: string
  role: string
}
