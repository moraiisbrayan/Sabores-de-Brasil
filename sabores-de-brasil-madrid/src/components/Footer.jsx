import { SITE, IMG } from '../data/site'
import { useLang } from '../i18n'

const HREFS = ['#inicio', '#nosotros', '#sabores', '#galeria', '#instagram', '#contacto']

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="bg-[#170F0A] pb-[calc(96px+env(safe-area-inset-bottom))] pt-16 text-cream/70 lg:pb-10">
      <div className="wrap">
        <div className="grid gap-12 border-b border-cream/10 pb-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <img src={IMG.logoCream} alt={t.common.logoAlt} width="900" height="220" loading="lazy" className="h-auto w-[240px] md:w-[300px]" />
            <p className="mt-5 text-[14px]">{t.footer.tagline}</p>
          </div>
          <nav className="lg:col-span-3" aria-label={t.footer.aria}>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-[14px] lg:grid-cols-1">
              {t.footer.links.map((label, i) => <li key={HREFS[i]}><a href={HREFS[i]} className="transition-colors hover:text-cream">{label}</a></li>)}
            </ul>
          </nav>
          <div className="space-y-3 text-[14px] lg:col-span-3">
            <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className="block text-cream transition-colors hover:text-gold">{SITE.instagram.handle}</a>
            <p>{SITE.address.street}<br />{SITE.address.district}, {t.common.city}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-8 text-[12.5px] text-cream/45 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Sabores de Brasil Madrid</p>
          <p>Feito por <span className="text-cream/70">Digital Beyond</span></p>
        </div>
      </div>
    </footer>
  )
}
