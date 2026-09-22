import Reveal from '../hooks/Reveal'
import Label from './Label'
import { IconSabor, IconCercania, IconBrasil } from './Icons'
import { useLang } from '../i18n'

const ICONS = [IconSabor, IconCercania, IconBrasil]

export default function Experience() {
  const { t } = useLang()
  return (
    <section id="experiencia" className="bg-cream py-24 md:py-36">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal><Label n="03">{t.experience.label}</Label></Reveal>
            <Reveal as="h2" delay={80} className="h-display mt-7 text-[clamp(44px,5.6vw,84px)]">{t.experience.title}</Reveal>
          </div>
          <Reveal delay={160} as="p" className="max-w-[44ch] text-[17px] leading-[1.75] text-coffee/75 lg:col-span-5 lg:col-start-8 lg:self-end">
            {t.experience.text}
          </Reveal>
        </div>

        {/* a frase real da parede do local: o momento principal da página */}
        <figure className="grain relative mt-20 overflow-hidden rounded-[28px] bg-paper px-6 py-16 md:mt-28 md:rounded-[40px] md:px-16 md:py-24">
          <Reveal as="blockquote" variant="fade" lang="pt-BR" className="font-display text-[clamp(40px,7.2vw,112px)] italic leading-[1.02] tracking-[-0.01em] text-forest">
            <span className="block">Quando bate a saudade,</span>
            <span className="block md:pl-[12%]">a gente resolve</span>
            <span className="block md:pl-[4%]">
              com comida.
              <svg viewBox="0 0 24 24" className="ml-3 inline-block h-[0.42em] w-[0.42em] -translate-y-[0.12em] align-middle text-gold" aria-hidden="true">
                <path d="M12 20.5s-8-5-8-11a4.5 4.5 0 0 1 8-2.8 4.5 4.5 0 0 1 8 2.8c0 6-8 11-8 11Z" fill="currentColor" />
              </svg>
            </span>
          </Reveal>
          <Reveal as="figcaption" delay={200} className="mt-10 flex flex-col gap-2 text-[14px] text-coffee/60 md:ml-auto md:max-w-[38ch] md:text-right">
            {t.experience.translation && <span>{t.experience.translation}</span>}
            <span className="font-hand text-[24px] text-caramel">{t.experience.caption}</span>
          </Reveal>
        </figure>

        <ul className="mt-16 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-10">
          {t.experience.pillars.map(({ title, text }, i) => {
            const Icon = ICONS[i]
            const n = String(i + 1).padStart(2, '0')
            return (
            <Reveal as="li" key={n} delay={i * 110} className="border-t border-coffee/15 pt-7">
              <div className="flex items-start justify-between">
                <span className="font-display text-[18px] italic text-gold">{n}</span>
                <Icon className="text-caramel" />
              </div>
              <h3 className="mt-8 font-display text-[36px] leading-none">{title}</h3>
              <p className="mt-4 max-w-[32ch] text-[15.5px] leading-relaxed text-coffee/70">{text}</p>
            </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
