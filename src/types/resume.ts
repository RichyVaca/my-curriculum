export type SkillLevel = 'Básico' | 'Intermedio' | 'Avanzado' | 'Experto'

export type SkillCategory = 'Habilidades técnicas' | 'Aptitudes'

export interface ContactInfo {
  email: string
  phone: string
  location: string
  linkedin?: string
}

export interface Experience {
  id: string
  role: string
  company: string
  location: string
  startDate: string
  endDate: string
  achievements: string[]
}

export interface Education {
  id: string
  degree: string
  institution: string
  location: string
  startDate: string
  endDate: string
  description?: string
}

export interface Skill {
  name: string
  category: SkillCategory
  level?: SkillLevel
}

export interface Language {
  name: string
  level: string
}

export interface Resume {
  name: string
  title: string
  photo?: string
  summary: string
  contact: ContactInfo
  experience: Experience[]
  education: Education[]
  skills: Skill[]
  languages: Language[]
}
