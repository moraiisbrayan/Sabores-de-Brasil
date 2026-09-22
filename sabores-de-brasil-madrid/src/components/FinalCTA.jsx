import Reveal from '../hooks/Reveal'
import { SITE, IMG } from '../data/site'
import { IconInstagram, IconPin } from './Icons'
import { useLang } from '../i18n'

export default function FinalCTA() {
  const { t } = useLang()
  return (
    <section id="cta-final" className="grain grain-dark relative isolate overflow-hidden bg-espresso py-28 text-cream md:py-44">
      {/* o próprio salão, bem ao fundo, para dar clima */}
      <img src={IMG.salon} alt="" loading="lazy" decoding="async" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.22]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-espresso via-espresso/85 to-espresso/40" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_85%_20%,rgba(214,150,80,0.22),transparent_70%)]" aria-hidden="true" />

      <div className="wrap">
        <Reveal className="flex items-center gap-5"><img src={IMG.logoCream} alt="" aria-hidden="true" width="900" height="220" loading="lazy" className="h-9 w-auto opacity-80 md:h-11" /><span className="font-hand text-[30px] leading-none text-caramel">{t.final.kicker}</span></Reveal>
        <Reveal as="h2" delay={80} className="h-display mt-8 max-w-[14ch] text-[clamp(52px,9vw,148px)]">
          {t.final.title}
        </Reveal>
        <div className="mt-14 flex flex-col gap-10 border-t border-cream/15 pt-10 md:flex-row md:items-center md:justify-between">
          <Reveal as="p" delay={160} className="font-display text-[28px] italic text-cream/80 md:text-[34px]">{t.final.sub}</Reveal>
          <Reveal delay={220} className="flex flex-col gap-3 sm:flex-row">
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-caramel h-14 px-9"><IconPin /> {t.common.howToGet}</a>
            <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light h-14 px-9"><IconInstagram /> Instagram</a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
