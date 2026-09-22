export default function Label({ n, children, light = false }) {
  return (
    <p className={`flex items-center gap-3 text-[11px] font-medium tracking-[0.28em] ${light ? 'text-cream/60' : 'text-coffee/55'}`}>
      {n && <span className="font-display text-[17px] italic tracking-normal text-gold">{n}</span>}
      {n && <span className={`h-px w-8 ${light ? 'bg-cream/25' : 'bg-coffee/25'}`} aria-hidden="true" />}
      <span>{children}</span>
    </p>
  )
}
