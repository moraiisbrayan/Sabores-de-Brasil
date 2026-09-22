import Reveal from '../hooks/Reveal'
import Label from './Label'
import { IMG, SITE } from '../data/site'
import { IconInstagram } from './Icons'
import { useLang } from '../i18n'

const FEED = [
  { src: IMG.coxinhas, pos: 'center 70%' },
  { src: IMG.caldo },
  { src: IMG.tarta, pos: 'center 80%' },
  { src: IMG.esfihas, pos: 'center 80%' },
  { src: IMG.bolosPote, pos: 'center 60%' },
]

export default function Instagram() {
  const { t } = useLang()
  return (
    <section id="instagram" className="bg-cream pb-24 md:pb-36">
      <div className="wrap">
        <div className="grid gap-10 border-t border-coffee/15 pt-20 md:pt-28 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal><Label>INSTAGRAM</Label></Reveal>
            <Reveal as="h2" delay={80} className="h-display mt-7 text-[clamp(40px,4.8vw,72px)]">{t.instagram.title}</Reveal>
            <Reveal as="p" delay={140} className="mt-6 max-w-[34ch] text-[16px] leading-relaxed text-coffee/70">
              {t.instagram.text}
            </Reveal>
            <Reveal delay={200} className="mt-10 flex items-center gap-4">
              <img src={IMG.logo} alt="" width="56" height="56" loading="lazy" className="h-14 w-14 rounded-full object-cover ring-2 ring-gold/50 ring-offset-2 ring-offset-cream" />
              <div>
                <p className="text-[15px] font-medium">{SITE.instagram.handle}</p>
                <p className="text-[13px] text-coffee/55">Sabores de Brasil Madrid</p>
              </div>
            </Reveal>
            <Reveal delay={260}>
              <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className="btn btn-dark mt-8 h-14">
                <IconInstagram /> {t.instagram.cta}
              </a>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-2 md:gap-3 lg:col-span-8 lg:grid-cols-4 lg:grid-rows-2">
            {FEED.map((f, i) => (
              <Reveal
                key={i}
                variant="img"
                delay={i * 70}
                className={`photo isolate relative overflow-hidden bg-paper ${i === 0 ? 'col-span-2 aspect-[4/3] lg:row-span-2 lg:aspect-square' : 'aspect-square'}`}
              >
                <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className="group block h-full w-full" aria-label={`${t.instagram.feed[i]}, ${t.instagram.onIg}`}>
                  <img src={f.src} alt={t.instagram.feed[i]} style={{ objectPosition: f.pos || 'center' }} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.05]" />
                  <span className="absolute inset-0 flex items-center justify-center bg-ink/0 text-cream opacity-0 transition duration-500 group-hover:bg-ink/35 group-hover:opacity-100" aria-hidden="true">
                    <IconInstagram width="28" height="28" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
