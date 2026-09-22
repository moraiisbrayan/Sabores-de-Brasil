import { useEffect, useRef, useState } from 'react'
import Reveal from '../hooks/Reveal'
import Label from './Label'
import { SABORES } from '../data/site'
import { useLang } from '../i18n'

export default function Sabores() {
  const railRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const { t, pick } = useLang()

  useEffect(() => {
    const el = railRef.current
    if (!el) return
    const on = () => {
      const max = el.scrollWidth - el.clientWidth
      setProgress(max > 0 ? el.scrollLeft / max : 0)
    }
    el.addEventListener('scroll', on, { passive: true })
    return () => el.removeEventListener('scroll', on)
  }, [])

  return (
    <section id="sabores" className="grain grain-dark lamp bg-espresso py-24 text-cream md:py-36">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal><Label n="02" light>{t.sabores.label}</Label></Reveal>
            <Reveal as="h2" delay={80} className="h-display mt-7 text-[clamp(44px,5.6vw,84px)]">
              {t.sabores.title}
            </Reveal>
          </div>
          <Reveal delay={160} className="lg:col-span-4 lg:col-start-9 lg:pb-3">
            <p className="font-display text-[26px] italic leading-snug text-caramel">{t.sabores.sub}</p>
            <p className="mt-3 text-[14px] leading-relaxed text-cream/55">{t.sabores.note}</p>
          </Reveal>
        </div>
      </div>

      {/* desktop: grade assimétrica / mobile: carrossel */}
      <div
        ref={railRef}
        className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 md:scroll-px-10 md:px-10 lg:mx-auto lg:grid lg:max-w-site lg:grid-cols-6 lg:gap-5 lg:overflow-visible"
        aria-label={t.sabores.aria}
      >
        {SABORES.map((s, i) => (
          <Reveal
            as="article"
            key={s.img}
            triggerRef={railRef}
            delay={i * 90}
            className={`group relative w-[78vw] max-w-[380px] isolate shrink-0 snap-start overflow-hidden bg-roast photo sm:w-[46vw] lg:w-auto lg:max-w-none ${
              i < 2 ? 'h-[460px] lg:col-span-3 lg:h-[540px]' : 'h-[460px] lg:col-span-2 lg:h-[440px]'
            }`}
          >
            <img
              src={s.img}
              alt={pick(s.alt)}
              style={{ objectPosition: s.pos || 'center' }}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/95 via-espresso/35 to-transparent transition-opacity duration-500 lg:opacity-80 lg:group-hover:opacity-100" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-cream transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] md:p-8 lg:translate-y-10 lg:group-hover:translate-y-0">
              {t.sabores.showHand && <p className="font-hand text-[24px] leading-none text-[#EBC08C]">{s.hand}</p>}
              <h3 className="mt-1 font-display text-[36px] leading-none">{pick(s.name)}</h3>
              <p className="mt-4 max-w-[34ch] text-[14px] leading-relaxed text-cream/80 transition-opacity duration-500 lg:opacity-0 lg:group-hover:opacity-100">
                {pick(s.desc)}
              </p>
            </div>
          </Reveal>
        ))}
        <div className="w-1 shrink-0 lg:hidden" aria-hidden="true" />
      </div>

      <div className="wrap mt-8 flex items-center gap-4 lg:hidden" aria-hidden="true">
        <div className="h-px flex-1 bg-cream/15">
          <div className="h-px bg-caramel transition-[width] duration-200" style={{ width: `${20 + progress * 80}%` }} />
        </div>
        <span className="text-[11px] tracking-[0.25em] text-cream/50">{t.sabores.swipe}</span>
      </div>
    </section>
  )
}
