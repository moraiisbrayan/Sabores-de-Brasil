import { useRef } from 'react'
import Reveal from '../hooks/Reveal'
import Label from './Label'
import { REVIEWS, SITE } from '../data/site'
import { IconStar, IconArrow } from './Icons'
import { useLang } from '../i18n'

const Stars = ({ n = 5, className = '', label }) => (
  <span className={`flex gap-1 text-gold ${className}`} role="img" aria-label={label}>
    {Array.from({ length: 5 }).map((_, i) => <IconStar key={i} className={i < n ? '' : 'opacity-25'} />)}
  </span>
)

export default function Reviews() {
  const rating = SITE.googleRating
  const { t } = useLang()
  const r$ = t.reviews
  const railRef = useRef(null)

  return (
    <section id="resenas" className="bg-cream py-24 md:py-32">
      <div className="wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal><Label>{r$.label}</Label></Reveal>
            <Reveal as="h2" delay={80} className="h-display mt-7 text-[clamp(40px,4.8vw,72px)]">{r$.title}</Reveal>
          </div>
          <Reveal delay={160} className="flex items-center gap-4">
            {rating && <span className="font-display text-[56px] leading-none">{rating.value}</span>}
            <span>
              <Stars n={5} label={r$.stars(5)} />
              <span className="mt-1.5 block text-[13px] text-coffee/60">{rating ? r$.count(rating.count) : r$.source}</span>
            </span>
          </Reveal>
        </div>

        {REVIEWS.length > 0 ? (
          <>
            <div ref={railRef} className="no-scrollbar -mx-5 mt-14 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-5 md:-mx-10 md:px-10 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0">
              {REVIEWS.map((r, i) => (
                <Reveal
                  as="figure"
                  key={r.name}
                  triggerRef={railRef}
                  delay={i * 110}
                  className={`grain photo relative flex w-[84vw] max-w-[420px] shrink-0 snap-start flex-col overflow-hidden p-8 md:p-9 lg:w-auto lg:max-w-none ${
                    i === 1 ? 'bg-espresso text-cream lg:-top-6' : 'bg-paper text-coffee'
                  }`}
                >
                  <span className={`font-display text-[88px] leading-[0.6] ${i === 1 ? 'text-caramel/70' : 'text-caramel/50'}`} aria-hidden="true">“</span>
                  <blockquote lang="pt-BR" className={`mt-4 flex-1 font-display text-[21px] leading-[1.45] md:text-[22px] ${i === 1 ? 'text-cream/90' : 'text-coffee'}`}>
                    {r.text}
                  </blockquote>
                  <figcaption className={`mt-8 flex items-center gap-4 border-t pt-6 ${i === 1 ? 'border-cream/15' : 'border-coffee/10'}`}>
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-[20px] ${i === 1 ? 'bg-caramel text-espresso' : 'bg-espresso text-cream'}`} aria-hidden="true">
                      {r.name.charAt(0)}
                    </span>
                    <span className="flex-1">
                      <span className="block text-[14.5px] font-medium">{r.name}</span>
                      <span className={`block text-[12.5px] ${i === 1 ? 'text-cream/55' : 'text-coffee/55'}`}>{r$.item}</span>
                    </span>
                    <Stars n={r.rating} label={r$.stars(r.rating)} />
                  </figcaption>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200} className="mt-12 flex justify-center lg:mt-14">
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-line h-14 px-8">
                {r$.seeAll} <IconArrow />
              </a>
            </Reveal>
          </>
        ) : (
          <Reveal delay={120} className="grain mt-14 grid gap-8 overflow-hidden rounded-[28px] bg-paper p-8 md:grid-cols-12 md:items-center md:p-14">
            <p className="font-display text-[28px] leading-snug text-coffee md:col-span-7 md:text-[34px]">
              {r$.empty}
            </p>
            <div className="flex md:col-span-5 md:justify-end">
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark h-14">{r$.read} <IconArrow /></a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
