import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { T } from './data/translations'

const STORAGE_KEY = 'sdb-lang'
const LangContext = createContext(null)

// ordem: ?lang= na URL → escolha salva → idioma do navegador → espanhol
function detectLang() {
  try {
    const q = new URLSearchParams(window.location.search).get('lang')
    if (q === 'pt' || q === 'es') return q
  } catch {}
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'pt' || saved === 'es') return saved
  } catch {}
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language || '']
  return langs.some((l) => l?.toLowerCase().startsWith('pt')) ? 'pt' : 'es'
}

function setMeta(selector, value) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute('content', value)
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(detectLang)

  const setLang = useCallback((next) => {
    setLangState(next)
    try { localStorage.setItem(STORAGE_KEY, next) } catch {}
    try {
      const url = new URL(window.location.href)
      if (next === 'es') url.searchParams.delete('lang')
      else url.searchParams.set('lang', next)
      window.history.replaceState(null, '', url)
    } catch {}
  }, [])

  useEffect(() => {
    const t = T[lang]
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'es'
    document.title = t.meta.title
    setMeta('meta[name="description"]', t.meta.description)
    setMeta('meta[property="og:title"]', t.meta.title)
    setMeta('meta[property="og:description"]', t.meta.ogDescription)
    setMeta('meta[property="og:locale"]', lang === 'pt' ? 'pt_BR' : 'es_ES')
  }, [lang])

  const value = useMemo(
    () => ({ lang, setLang, t: T[lang], pick: (obj) => (obj && typeof obj === 'object' ? obj[lang] ?? obj.es : obj) }),
    [lang, setLang],
  )
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
