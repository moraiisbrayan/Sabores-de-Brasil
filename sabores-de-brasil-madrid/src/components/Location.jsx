import Reveal from '../hooks/Reveal'
import Label from './Label'
import { SITE } from '../data/site'
import { IconPin, IconClock, IconPhone, IconWhatsapp, IconInstagram, IconArrow } from './Icons'
import { useLang } from '../i18n'

function Row({ icon, title, children }) {
  return (
    <div className="flex gap-5 border-t border-coffee/15 py-6">
      <span className="mt-0.5 text-forest">{icon}</span>
      <div>
        <p className="text-[11px] font-medium tracking-[0.26em] text-coffee/50">{title}</p>
        <div className="mt-2 text-[16px] leading-relaxed text-coffee">{children}</div>
      </div>
    </div>
  )
}

/* mapa ilustrativo (sem depender de iframe/API): o botão abre o Google Maps real */
function MapArt({ t }) {
  return (
    <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="group relative block h-full min-h-[380px] overflow-hidden bg-paper" aria-label={t.mapAria}>
      <svg viewBox="0 0 600 560" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full transition-transform duration-[1400ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.03]" aria-hidden="true">
        <rect width="600" height="560" fill="#E6D6BE" />
        <path d="M-20 420 C 120 380, 180 470, 330 430 S 520 330, 640 360 L 640 600 L -20 600Z" fill="#D3D2B4" opacity=".7" />
        <g fill="none" stroke="#F6EDDF" strokeLinecap="round">
          <path d="M-20 150 L 640 90" strokeWidth="26" />
          <path d="M140 -20 C 170 160, 120 300, 190 600" strokeWidth="18" />
          <path d="M-20 300 C 200 280, 330 330, 640 250" strokeWidth="30" />
          <path d="M420 -20 L 360 600" strokeWidth="14" />
          <path d="M-20 520 L 640 470" strokeWidth="12" />
          <path d="M250 110 L 290 300 L 470 270" strokeWidth="10" />
        </g>
        <g fill="none" stroke="#3A2519" strokeOpacity=".08">
          <path d="M-20 150 L 640 90" strokeWidth="27" />
          <path d="M-20 300 C 200 280, 330 330, 640 250" strokeWidth="31" />
        </g>
        <text x="40" y="287" fill="#3A2519" fillOpacity=".45" fontFamily="Manrope, sans-serif" fontSize="11" letterSpacing="3" transform="rotate(-3 40 287)">C. DE CASTROJERIZ</text>
        <text x="60" y="450" fill="#3A2519" fillOpacity=".35" fontFamily="Manrope, sans-serif" fontSize="11" letterSpacing="4">CARABANCHEL</text>
        <g transform="translate(318 296)">
          <circle r="16" fill="#1F4A34" opacity=".35" className="pin-ping" />
          <circle r="9" fill="#1F4A34" />
          <circle r="3.5" fill="#F5EEE3" />
        </g>
      </svg>

      <div className="absolute left-1/2 top-[calc(50%-92px)] w-max -translate-x-1/2 rounded-xl bg-cream px-5 py-3 text-center shadow-[0_14px_30px_-18px_rgba(27,20,15,0.5)]">
        <p className="font-display text-[20px] italic leading-none text-forest">Sabores de Brasil</p>
        <p className="mt-1 text-[11px] tracking-[0.18em] text-coffee/60">C. DE CASTROJERIZ, 7</p>
      </div>

      <span className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-cream/90 px-4 py-2.5 text-[12px] font-medium tracking-[0.12em] text-coffee backdrop-blur transition-colors group-hover:bg-cream">
        {t.openMaps} <IconArrow />
      </span>
    </a>
  )
}

export default function Location() {
  const { address, hours, phone, whatsapp } = SITE
  const { t, pick } = useLang()
  const l = t.location
  return (
    <section id="contacto" className="grain bg-paper py-24 md:py-36">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal><Label n="05">{l.label}</Label></Reveal>
          <Reveal as="h2" delay={80} className="h-display mt-7 text-[clamp(44px,5.6vw,84px)]">{l.title}</Reveal>

          <Reveal delay={160} className="mt-12 border-b border-coffee/15">
            <Row icon={<IconPin />} title={l.address}>
              <address className="not-italic">
                <strong className="font-medium">Sabores de Brasil Madrid</strong><br />
                {address.street}<br />
                {address.district}<br />
                {t.common.city}
              </address>
            </Row>

            <Row icon={<IconClock />} title={l.hours}>
              {hours ? (
                <ul>{hours.map((h) => <li key={pick(h.days)} className="flex justify-between gap-6"><span>{pick(h.days)}</span><span className="text-coffee/70">{h.time}</span></li>)}</ul>
              ) : (
                <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-coffee/25 underline-offset-4 hover:decoration-coffee">
                  {l.hoursLink}
                </a>
              )}
            </Row>

            {whatsapp && (
              <Row icon={<IconWhatsapp />} title={l.whatsapp}>
                <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-forest">{l.whatsappCta}</a>
              </Row>
            )}
            {phone && (
              <Row icon={<IconPhone />} title={l.phone}>
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-forest">{phone}</a>
              </Row>
            )}
          </Reveal>

          <Reveal delay={220} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark h-14 px-8"><IconPin /> {t.common.howToGet}</a>
            <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className="btn btn-line h-14 px-8"><IconInstagram /> Instagram</a>
          </Reveal>
        </div>

        <Reveal variant="img" delay={120} className="lg:col-span-6 lg:col-start-7">
          <div className="photo isolate h-[420px] overflow-hidden md:h-[520px] lg:h-full lg:min-h-[640px]"><MapArt t={l} /></div>
        </Reveal>
      </div>
    </section>
  )
}
