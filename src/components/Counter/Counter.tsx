import { useState } from 'react'

type CounterProps = {
  initial?: number
}

export function Counter({ initial = 0 }: CounterProps) {
  const [value, setValue] = useState(initial)

  return (
    <div className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-white/90">
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded bg-white/10 text-white hover:bg-white/15"
        onClick={() => setValue((v) => v - 1)}
        aria-label="Diminuir"
      >
        −
      </button>
      <span className="min-w-10 text-center text-lg font-semibold">{value}</span>
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded bg-white text-brand hover:bg-white/90"
        onClick={() => setValue((v) => v + 1)}
        aria-label="Aumentar"
      >
        +
      </button>
    </div>
  )
}

