import Reveal from '../hooks/Reveal'
import Label from './Label'
import { IMG } from '../data/site'
import { useLang } from '../i18n'

const WORDS = ['Brasil', 'Madrid', 'Sabor', 'Tradição']

export default function About() {
  const { t } = useLang()
  return (
    <section id="nosotros" className="bg-cream pb-24 pt-28 md:pb-32 md:pt-40">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6 lg:pt-10">
          <Reveal><Label n="01">{t.about.label}</Label></Reveal>
          <Reveal as="h2" delay={80} className="h-display mt-7 max-w-[13ch] text-[clamp(44px,5.6vw,84px)]">
            {t.about.title}
          </Reveal>
          <Reveal delay={160} className="mt-9 max-w-[52ch] space-y-5 text-[17px] leading-[1.75] text-coffee/75">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </Reveal>

          <Reveal delay={240} as="ul" className="mt-14 grid grid-cols-2 border-t border-coffee/15 sm:grid-cols-4">
            {WORDS.map((w, i) => (
              <li key={w} className={`border-b border-coffee/15 py-5 sm:border-b-0 ${i % 2 ? 'pl-5' : ''} sm:pl-0 ${i > 0 ? 'sm:border-l sm:pl-5' : ''}`}>
                <span className="block text-[10px] tracking-[0.3em] text-coffee/45">{String(i + 1).padStart(2, '0')}</span>
                <span className="mt-1 block font-display text-[26px] italic text-caramel">{w}</span>
              </li>
            ))}
          </Reveal>
        </div>

        <div className="relative w-full sm:ml-auto sm:max-w-[440px] lg:col-span-5 lg:col-start-8 lg:max-w-none">
          <Reveal variant="img" className="arch overflow-hidden shadow-[0_30px_60px_-30px_rgba(36,23,16,0.45)]">
            <img src={IMG.vitrine} alt={t.about.imgAlt} width="542" height="859" loading="lazy" decoding="async" className="aspect-[4/5.4] w-full object-cover" />
          </Reveal>
          <Reveal delay={200} className="mt-4 flex items-baseline justify-between gap-6 text-[13px] text-coffee/55">
            <span className="font-hand text-[24px] leading-none text-coffee/80">{t.about.caption}</span>
            <span className="hidden whitespace-nowrap tracking-[0.2em] sm:inline">C. DE CASTROJERIZ, 7</span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
