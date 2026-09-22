import { useEffect, useRef } from 'react'
import { SITE, IMG } from '../data/site'
import { IconArrow, IconPin } from './Icons'
import { useLang } from '../i18n'

export default function Hero() {
  const imgRef = useRef(null)
  const textRef = useRef(null)
  const { t } = useLang()

  // leve zoom-out da foto conforme o scroll
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const update = () => {
      const p = Math.min(Math.max(window.scrollY / (window.innerHeight * 0.9), 0), 1)
      if (imgRef.current) imgRef.current.style.transform = `scale(${1.12 - 0.12 * p})`
      if (textRef.current && window.innerWidth >= 1024) {
        textRef.current.style.transform = `translateY(${-36 * p}px)`
        textRef.current.style.opacity = String(1 - 0.75 * p)
      }
    }
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [])

  const d = (ms) => ({ animationDelay: `${ms}ms` })

  return (
    <section id="inicio" className="grain grain-dark lamp overflow-hidden bg-espresso text-cream">
      <div className="wrap grid gap-14 pb-24 pt-[calc(72px+env(safe-area-inset-top)+40px)] lg:min-h-[100svh] lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-16 lg:pt-[calc(72px+env(safe-area-inset-top)+8px)]">
        <div ref={textRef} className="lg:col-span-6 lg:pr-2">
          <p className="hero-in flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-caramel" style={d(100)}>
            <span className="h-px w-8 bg-caramel/70" aria-hidden="true" />
            {t.hero.eyebrow}
          </p>
          <h1 className="h-display hero-in mt-8 text-[clamp(52px,6.3vw,96px)] text-cream" style={d(220)}>
            {t.hero.title}
          </h1>
          <p className="hero-in mt-8 max-w-[36ch] text-[17px] leading-[1.7] text-cream/70 md:text-[18.5px]" style={d(380)}>
            {t.hero.sub}
          </p>
          <div className="hero-in mt-11 flex flex-col gap-3 sm:flex-row" style={d(500)}>
            <a href="#sabores" className="btn btn-caramel h-14 whitespace-nowrap px-8">
              {t.hero.cta} <IconArrow />
            </a>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light h-14 px-8">
              <IconPin /> {t.common.howToGet}
            </a>
          </div>
          <p className="hero-in mt-14 hidden items-center gap-4 text-[13.5px] text-cream/50 lg:flex" style={d(640)}>
            <span className="font-hand text-[26px] leading-none text-caramel">com carinho,</span>
            <span>{t.hero.where}</span>
          </p>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative mx-auto w-[88%] max-w-[520px] sm:w-[70%] lg:ml-auto lg:mr-4 lg:w-[86%]">
            {/* contorno do arco, deslocado */}
            <div className="arch absolute inset-0 -translate-y-4 translate-x-4 border border-caramel/40 lg:-translate-y-5 lg:translate-x-5" aria-hidden="true" />
            <div className="arch hero-unveil relative aspect-[4/5.2] overflow-hidden bg-roast shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]">
              <img
                ref={imgRef}
                src={IMG.pastel}
                alt={t.hero.imgAlt}
                width="1188"
                height="845"
                fetchpriority="high"
                decoding="async"
                className="h-full w-full object-cover will-change-transform"
                style={{ transform: 'scale(1.12)', objectPosition: '50% 55%' }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/35 via-transparent to-transparent" aria-hidden="true" />
            </div>

            {/* polaroid */}
            <div className="hero-in absolute -bottom-12 -left-6 w-[42%] max-w-[210px] sm:-left-12 lg:-left-20" style={d(900)}>
              <figure className="-rotate-[5deg] rounded-[6px] bg-[#FBF5EC] p-2.5 pb-1 shadow-[0_24px_50px_-18px_rgba(0,0,0,0.65)]">
                <img src={IMG.caldo} alt={t.hero.caldoAlt} width="942" height="840" decoding="async" className="aspect-square w-full rounded-[3px] object-cover" />
                <figcaption className="whitespace-nowrap py-1.5 text-center font-hand text-[17px] leading-none text-coffee sm:text-[22px]">caldo de cana ♡</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
