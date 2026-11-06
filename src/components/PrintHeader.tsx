import resume from '../data/resume'

/**
 * Screen-reader-invisible, print-only CV header. The landing hero is hidden
 * when printing, so this supplies the document title and contact line.
 */
export function PrintHeader() {
  const contact = resume.contact

  return (
    <header className="hidden print:block">
      <h1 className="font-display text-3xl font-bold text-black">
        {resume.name}
      </h1>
      <p className="mt-1 text-lg text-neutral-700">{resume.title}</p>
      <address className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm not-italic text-neutral-700">
        <span>{contact.email}</span>
        <span>{contact.phone}</span>
        <span>{contact.location}</span>
        {contact.linkedin ? <span>{contact.linkedin}</span> : null}
      </address>
      <hr className="mt-4 border-neutral-300" />
    </header>
  )
}
