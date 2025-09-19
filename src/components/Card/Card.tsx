import type { PropsWithChildren } from 'react'

type CardProps = PropsWithChildren<{
  title?: string
  className?: string
}>

export function Card({ title, className, children }: CardProps) {
  return (
    <section
      className={
        'rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur ' +
        (className ?? '')
      }
    >
      {title && (
        <h2 className="mb-3 text-lg font-semibold text-white/90">{title}</h2>
      )}
      <div className="text-white/80">{children}</div>
    </section>
  )
}

