const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const IconArrow = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...base} strokeWidth="1.5" {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
export const IconPin = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...base} strokeWidth="1.5" {...p}><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
)
export const IconInstagram = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...base} strokeWidth="1.5" {...p}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r=".6" fill="currentColor" /></svg>
)
export const IconClock = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...base} strokeWidth="1.5" {...p}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></svg>
)
export const IconPhone = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...base} strokeWidth="1.5" {...p}><path d="M5 4h3.5l1.5 4.5-2 1.2a11 11 0 0 0 6.3 6.3l1.2-2 4.5 1.5V19a1.5 1.5 0 0 1-1.5 1.5C10.6 20.5 3.5 13.4 3.5 5.5A1.5 1.5 0 0 1 5 4Z" /></svg>
)
export const IconWhatsapp = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...base} strokeWidth="1.5" {...p}><path d="M4 20l1.2-3.8A8 8 0 1 1 8 19.1L4 20Z" /><path d="M9 8.8c0 3 2.3 5.6 5.2 6.2l1.3-1.3-1.8-1-1 .8a4 4 0 0 1-2-2l.8-1-1-1.8L9 8.8Z" /></svg>
)
export const IconStar = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor" {...p}><path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8 6.6 19.7l1.1-6.1-4.5-4.2 6.1-.8L12 3Z" /></svg>
)
/* pilares: traço fino */
export const IconSabor = (p) => (
  <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true" {...base} {...p}>
    <path d="M9 20h26v6a13 13 0 0 1-26 0v-6Z" /><path d="M35 22h2.5a4.5 4.5 0 0 1 0 9H34" /><path d="M6 42h32" />
    <path d="M17 8c-1.5 2 1.5 3.5 0 6M23 6c-1.5 2 1.5 3.5 0 6M29 8c-1.5 2 1.5 3.5 0 6" />
  </svg>
)
export const IconCercania = (p) => (
  <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true" {...base} {...p}>
    <circle cx="18" cy="24" r="10" /><circle cx="30" cy="24" r="10" />
    <path d="M24 20.5c-1.2-1.4-3.6-1-3.6 1 0 1.8 3.6 4 3.6 4s3.6-2.2 3.6-4c0-2-2.4-2.4-3.6-1Z" />
  </svg>
)
export const IconBrasil = (p) => (
  <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true" {...base} {...p}>
    <path d="M24 7 42 24 24 41 6 24 24 7Z" /><circle cx="24" cy="24" r="7.5" /><path d="M16.8 22.2c4.6-1.2 9.8-.5 14 2.2" />
  </svg>
)
