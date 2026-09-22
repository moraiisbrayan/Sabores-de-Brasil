import { useEffect, useRef, useState } from 'react'

/** Revela o conteúdo quando entra na tela. variant: 'up' | 'fade' | 'img' */
// triggerRef: observa outro elemento (ex.: o carrossel inteiro), para que cards fora da tela na horizontal apareçam juntos
export default function Reveal({ as: Tag = 'div', variant = 'up', delay = 0, className = '', style, triggerRef, children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = triggerRef?.current || ref.current
    if (!el || !('IntersectionObserver' in window)) { setShown(true); return }
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShown(true); io.disconnect() } },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${shown ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
