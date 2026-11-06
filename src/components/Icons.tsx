import type { SVGProps } from 'react'

export type IconProps = SVGProps<SVGSVGElement>

/** Shared defaults for the line-icon set (24×24, currentColor). */
const strokeProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
} as const

const fillProps = {
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  'aria-hidden': true,
  focusable: 'false',
} as const

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </svg>
  )
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M20 12H4m6 6-6-6 6-6" />
    </svg>
  )
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M12 20V4m-6 6 6-6 6 6" />
    </svg>
  )
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  )
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  )
}

export function AlertCircleIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v5M12 16.5h.01" />
    </svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  )
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M20.5 14.3A8.5 8.5 0 0 1 9.7 3.5 8.5 8.5 0 1 0 20.5 14.3Z" />
    </svg>
  )
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
      <path d="m18.5 15 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
      <path d="m5 15 .6 1.7 1.7.6-1.7.6L5 19.6l-.6-1.7-1.7-.6 1.7-.6L5 15Z" />
    </svg>
  )
}

export function HeadsetIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 14h2.5A1.5 1.5 0 0 1 8 15.5v2A1.5 1.5 0 0 1 6.5 19H5a1 1 0 0 1-1-1v-4ZM20 14h-2.5a1.5 1.5 0 0 0-1.5 1.5v2a1.5 1.5 0 0 0 1.5 1.5H19a1 1 0 0 0 1-1v-4Z" />
      <path d="M20 18v.5a2.5 2.5 0 0 1-2.5 2.5H13" />
    </svg>
  )
}

export function CodeIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" />
    </svg>
  )
}

export function WorkflowIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <rect x="3" y="3" width="6" height="6" rx="1.5" />
      <rect x="15" y="15" width="6" height="6" rx="1.5" />
      <path d="M9 6h4a2 2 0 0 1 2 2v7M15 18h-4a2 2 0 0 1-2-2V9" />
    </svg>
  )
}

export function ActivityIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M3 12h4l2.5-7 4 14 2.5-7H21" />
    </svg>
  )
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m16 16 4 4" />
    </svg>
  )
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
    </svg>
  )
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M7.5 3.5h-2A2.5 2.5 0 0 0 3 6.2C3.4 14.3 9.7 20.6 17.8 21a2.5 2.5 0 0 0 2.7-2.5v-2a1.5 1.5 0 0 0-1.2-1.5l-3-.6a1.5 1.5 0 0 0-1.6.7l-.8 1.3a13.4 13.4 0 0 1-5.3-5.3l1.3-.8a1.5 1.5 0 0 0 .7-1.6l-.6-3A1.5 1.5 0 0 0 9.5 4" />
    </svg>
  )
}

export function PrinterIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M7 8V3h10v5M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
      <rect x="7" y="14" width="10" height="7" rx="1" />
      <path d="M17 11h.01" />
    </svg>
  )
}

export function SendIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="m21 3-7.5 18-3.2-7.3L3 10.5 21 3Z" />
      <path d="m10.3 13.7 4.2-4.2" />
    </svg>
  )
}

export function GraduationCapIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="m2.5 9 9.5-5 9.5 5-9.5 5-9.5-5Z" />
      <path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5M21 9v5" />
    </svg>
  )
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18" />
    </svg>
  )
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M4 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16M15 21V9h3a2 2 0 0 1 2 2v10M8 7h3M8 11h3M8 15h3M2 21h20" />
    </svg>
  )
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg {...fillProps} {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.44v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg {...fillProps} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.04 2.1c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2.1 22l5.2-1.36a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01a9.83 9.83 0 0 0-7-2.84Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.1.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.26.86 5.82 2.42a8.17 8.17 0 0 1 2.41 5.82c0 4.54-3.7 8.22-8.25 8.22Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.4-.12-.56.13-.17.25-.64.8-.79.97-.14.16-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.13.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.14.16 1.57.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z"
      />
    </svg>
  )
}
