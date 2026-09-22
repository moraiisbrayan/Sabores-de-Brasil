import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export default function Lightbox({ items, index, onClose, onNav, t }) {
  const closeRef = useRef(null)
  const touch = useRef(null)
  const item = items[index]

  useEffect(() => {
    closeRef.current?.focus()
    const prevOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNav(1)
      if (e.key === 'ArrowLeft') onNav(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); document.documentElement.style.overflow = prevOverflow }
  }, [onClose, onNav])

  // portal no <body>: fica acima do header e de qualquer seção
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.dialog}
      className="fixed inset-0 z-[80] flex flex-col bg-ink/95 backdrop-blur-sm"
      style={{ animation: 'rise .35s ease both' }}
      onClick={onClose}
      onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touch.current == null) return
        const dx = e.changedTouches[0].clientX - touch.current
        if (Math.abs(dx) > 50) onNav(dx < 0 ? 1 : -1)
        touch.current = null
      }}
    >
      <div className="flex items-center justify-between px-5 pt-[calc(16px+env(safe-area-inset-top))] text-cream/70 md:px-10">
        <span className="font-display text-[18px] italic">
          {String(index + 1).padStart(2, '0')} <span className="text-cream/35">/ {String(items.length).padStart(2, '0')}</span>
        </span>
        <button ref={closeRef} type="button" onClick={onClose} className="flex h-11 items-center gap-2 text-[13px] tracking-[0.2em] hover:text-cream" aria-label={t.closeAria}>
          {t.close}
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 py-6 md:px-24">
        <img
          key={item.src}
          src={item.src}
          alt={item.alt}
          className="max-h-full max-w-full object-contain"
          style={{ animation: 'rise .45s cubic-bezier(.2,.7,.2,1) both' }}
          onClick={(e) => e.stopPropagation()}
        />
        {['prev', 'next'].map((dir) => (
          <button
            key={dir}
            type="button"
            onClick={(e) => { e.stopPropagation(); onNav(dir === 'next' ? 1 : -1) }}
            className={`absolute top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cream/25 text-cream/80 transition hover:border-cream/70 hover:text-cream md:flex ${dir === 'prev' ? 'left-8' : 'right-8'}`}
            aria-label={dir === 'next' ? t.next : t.prev}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className={dir === 'prev' ? 'rotate-180' : ''}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </button>
        ))}
      </div>

      <p className="px-5 pb-[calc(20px+env(safe-area-inset-bottom))] text-center text-[13px] text-cream/60 md:px-10">{item.alt}</p>
    </div>,
    document.body,
  )
}
