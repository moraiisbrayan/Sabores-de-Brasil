import { useCallback, useState } from 'react'
import Reveal from '../hooks/Reveal'
import Label from './Label'
import Lightbox from './Lightbox'
import { GALLERY, SITE } from '../data/site'
import { useLang } from '../i18n'

// posições da composição editorial (desktop 12 colunas / mobile 2 colunas)
const LAYOUT = [
  'col-span-2 row-span-3 lg:col-[1/6] lg:row-[1/5]',
  'col-span-1 row-span-2 lg:col-[6/10] lg:row-[1/3]',
  'col-span-1 row-span-2 lg:col-[10/13] lg:row-[1/4]',
  'col-span-2 row-span-2 lg:col-[6/10] lg:row-[3/5]',
  'col-span-1 row-span-2 lg:col-[10/13] lg:row-[4/7]',
  'col-span-1 row-span-2 lg:col-[1/4] lg:row-[5/7]',
]

export default function Gallery() {
  const [open, setOpen] = useState(null)
  const { t, pick } = useLang()
  const close = useCallback(() => setOpen(null), [])
  const nav = useCallback((dir) => setOpen((i) => (i + dir + GALLERY.length) % GALLERY.length), [])

  return (
    <section id="galeria" className="grain bg-paper py-24 md:py-36">
      <div className="wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal><Label n="04">{t.gallery.label}</Label></Reveal>
            <Reveal as="h2" delay={80} className="h-display mt-7 text-[clamp(44px,5.6vw,84px)]">{t.gallery.title}</Reveal>
          </div>
          <Reveal delay={160} as="p" className="max-w-[30ch] text-[14px] leading-relaxed text-coffee/60 md:text-right">
            {t.gallery.hint}
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[120px] grid-cols-2 gap-3 sm:auto-rows-[170px] md:gap-4 lg:grid-cols-12 lg:auto-rows-[150px] lg:gap-5 xl:auto-rows-[170px]">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src} variant="img" delay={(i % 3) * 90} className={`photo isolate relative overflow-hidden bg-coffee/10 ${LAYOUT[i]}`}>
              <button type="button" onClick={() => setOpen(i)} className="group block h-full w-full" aria-label={`${t.gallery.view}: ${pick(g.alt)}`}>
                <img src={g.src} alt={pick(g.alt)} width={g.w} height={g.h} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.04]" />
                <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" aria-hidden="true" />
              </button>
            </Reveal>
          ))}

          {/* legenda editorial no espaço livre (desktop) */}
          <Reveal className="hidden flex-col justify-end border-t border-coffee/20 pt-5 lg:col-[4/10] lg:row-[5/7] lg:flex">
            <p className="max-w-[26ch] font-display text-[30px] italic leading-tight text-coffee">
              {t.gallery.caption}
            </p>
            <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className="navlink mt-6 self-start text-[13px] tracking-[0.18em] text-coffee/70 hover:text-coffee">
              {t.gallery.more}
            </a>
          </Reveal>
        </div>
      </div>

      {open !== null && <Lightbox items={GALLERY.map((g) => ({ ...g, alt: pick(g.alt) }))} t={t.gallery} index={open} onClose={close} onNav={nav} />}
    </section>
  )
}
