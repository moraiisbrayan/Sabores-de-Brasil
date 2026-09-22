import { useEffect, useState } from 'react'
import { NAV, SITE, IMG } from '../data/site'
import { IconInstagram, IconPin } from './Icons'
import LangSwitch from './LangSwitch'
import { useLang } from '../i18n'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t, pick } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const solid = scrolled || open

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-[background-color,box-shadow] duration-500 ${
        solid ? 'bg-cream/85 shadow-[0_1px_0_rgba(58,37,25,0.08)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="wrap flex h-[72px] items-center justify-between" aria-label={t.common.mainNav}>
        <a href="#inicio" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative block h-[38px] w-[155px] md:h-[42px] md:w-[172px]">
            <img src={IMG.logoCream} alt={t.common.logoAlt} width="900" height="220" className={`absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-500 ${solid ? 'opacity-0' : 'opacity-100'}`} />
            <img src={IMG.logoGreen} alt="" aria-hidden="true" width="900" height="220" className={`absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-500 ${solid ? 'opacity-100' : 'opacity-0'}`} />
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className={`navlink text-[13.5px] transition-colors duration-500 ${solid ? 'text-coffee/75 hover:text-coffee' : 'text-cream/75 hover:text-cream'}`}>{pick(n.label)}</a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <LangSwitch tone={solid ? 'dark' : 'light'} />
          <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className={`btn h-11 px-6 ${solid ? 'btn-dark' : 'btn-caramel'}`}>
            {t.common.howToGet}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
        <LangSwitch tone={solid ? 'dark' : 'light'} />

        <button
          type="button"
          className="relative -mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
          aria-label={open ? t.common.closeMenu : t.common.openMenu}
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`absolute h-px w-6 transition duration-500 ${solid ? 'bg-coffee' : 'bg-cream'} ${open ? 'rotate-45' : '-translate-y-[4px]'}`} />
          <span className={`absolute h-px w-6 transition duration-500 ${solid ? 'bg-coffee' : 'bg-cream'} ${open ? '-rotate-45' : 'translate-y-[4px]'}`} />
        </button>
        </div>
      </nav>

    </header>

      {/* menu mobile */}
      <div
        id="menu-movil"
        className={`fixed inset-x-0 bottom-0 z-40 top-[calc(72px+env(safe-area-inset-top))] bg-cream transition-[opacity,visibility] duration-500 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="wrap flex h-full flex-col justify-between pb-[calc(32px+env(safe-area-inset-bottom))] pt-6">
          <ul className="border-t border-coffee/10">
            {NAV.map((n, i) => (
              <li key={n.href} className="border-b border-coffee/10">
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4 transition-transform duration-500"
                  style={{ transform: open ? 'none' : 'translateY(10px)', transitionDelay: `${open ? 60 + i * 45 : 0}ms` }}
                >
                  <span className="w-6 font-display text-[15px] italic text-gold">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-[34px] leading-none text-coffee">{pick(n.label)}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark h-14 w-full">
              <IconPin /> {t.common.howToGet}
            </a>
            <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className="btn btn-line h-14 w-full">
              <IconInstagram /> {SITE.instagram.handle}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
