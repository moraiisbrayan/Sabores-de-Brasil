import { useLang } from '../i18n'

const OPTIONS = [
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'pt', label: 'PT', name: 'Português' },
]

/* seletor ES | PT. tone: 'light' (sobre fundo escuro) ou 'dark' (sobre fundo claro) */
export default function LangSwitch({ tone = 'dark', className = '' }) {
  const { lang, setLang, t } = useLang()
  const light = tone === 'light'
  return (
    <div
      role="group"
      aria-label={t.common.language}
      className={`relative inline-flex h-11 items-center rounded-full border p-0.5 text-[11.5px] font-semibold tracking-[0.14em] transition-colors duration-500 ${
        light ? 'border-cream/25' : 'border-coffee/20'
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className={`absolute bottom-0.5 top-0.5 w-[calc(50%-2px)] rounded-full transition-[transform,background-color] duration-500 ease-[cubic-bezier(.2,.7,.2,1)] ${
          light ? 'bg-cream' : 'bg-espresso'
        } ${lang === 'pt' ? 'translate-x-full' : 'translate-x-0'}`}
      />
      {OPTIONS.map((o) => {
        const active = lang === o.code
        return (
          <button
            key={o.code}
            type="button"
            lang={o.code}
            aria-pressed={active}
            title={o.name}
            onClick={() => setLang(o.code)}
            className={`relative z-10 h-full w-11 rounded-full transition-colors duration-500 ${
              active ? (light ? 'text-espresso' : 'text-cream') : light ? 'text-cream/70 hover:text-cream' : 'text-coffee/60 hover:text-coffee'
            }`}
          >
            <span aria-hidden="true">{o.label}</span>
            <span className="sr-only">{o.name}</span>
          </button>
        )
      })}
    </div>
  )
}
