import { useEffect, useState } from 'react'
import { SITE } from '../data/site'
import { IconInstagram, IconPin } from './Icons'
import { useLang } from '../i18n'

/* barra fixa discreta no mobile: aparece depois do hero, some no CTA final */
export default function MobileCTA() {
  const [pastHero, setPastHero] = useState(false)
  const [atEnd, setAtEnd] = useState(false)
  const { t } = useLang()

  useEffect(() => {
    const on = () => setPastHero(window.scrollY > window.innerHeight * 0.8)
    on()
    window.addEventListener('scroll', on, { passive: true })
    const end = document.getElementById('cta-final')
    let io
    if (end && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(([e]) => setAtEnd(e.isIntersecting || e.boundingClientRect.top < 0), { threshold: 0 })
      io.observe(end)
    }
    return () => { window.removeEventListener('scroll', on); io?.disconnect() }
  }, [])

  const show = pastHero && !atEnd
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(12px+env(safe-area-inset-bottom))] transition-[transform,opacity] duration-500 lg:hidden ${show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'}`}
      aria-hidden={!show}
    >
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-full bg-espresso/95 p-1.5 shadow-[0_14px_30px_-12px_rgba(27,20,15,0.55)] backdrop-blur">
        <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" tabIndex={show ? 0 : -1} className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-caramel text-[14px] font-medium text-espresso">
          <IconPin /> {t.common.howToGet}
        </a>
        <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" tabIndex={show ? 0 : -1} className="flex h-12 w-12 items-center justify-center rounded-full text-cream" aria-label="Instagram">
          <IconInstagram width="20" height="20" />
        </a>
      </div>
    </div>
  )
}
