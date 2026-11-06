import resume from '../data/resume'
import {
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from './Icons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

/**
 * Contact section with the four direct channels. No form: the site keeps a
 * static, low-friction contact layer that works without a backend.
 */
export function Contact() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-heading"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-24 lg:py-28 print:hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contacto"
            headingId="contacto-heading"
            align="center"
            title={
              <>
                ¿Hablemos de tu próxima{' '}
                <span className="text-gradient">operación</span>?
              </>
            }
          />
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            <li>
              <a
                href={`mailto:${resume.contact.email}`}
                className="contact-link group h-full"
              >
                <span className="contact-icon">
                  <MailIcon className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="contact-label">Correo</span>
                  <span className="contact-value break-all">
                    {resume.contact.email}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${resume.contact.phone.replace(/\s+/g, '')}`}
                className="contact-link group h-full"
              >
                <span className="contact-icon">
                  <PhoneIcon className="h-4 w-4" />
                </span>
                <span>
                  <span className="contact-label">Teléfono</span>
                  <span className="contact-value">{resume.contact.phone}</span>
                </span>
              </a>
            </li>
            <li>
              <div className="contact-link h-full">
                <span className="contact-icon">
                  <MapPinIcon className="h-4 w-4" />
                </span>
                <span>
                  <span className="contact-label">Ubicación</span>
                  <span className="contact-value">
                    {resume.contact.location}
                  </span>
                </span>
              </div>
            </li>
            {resume.contact.linkedin ? (
              <li>
                <a
                  href={resume.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link group h-full"
                >
                  <span className="contact-icon">
                    <LinkedinIcon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="contact-label">LinkedIn</span>
                    <span className="contact-value">
                      Ver perfil profesional
                    </span>
                  </span>
                </a>
              </li>
            ) : null}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
