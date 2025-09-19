import { useState } from 'react'

type ToggleProps = {
  defaultOn?: boolean
  label?: string
}

export function Toggle({ defaultOn = false, label = 'Notificações' }: ToggleProps) {
  const [on, setOn] = useState(defaultOn)

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        role="switch"
        aria-checked={on}
        onClick={() => setOn((s) => !s)}
        className={
          'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand ' +
          (on ? 'bg-brand' : 'bg-white/20')
        }
      >
        <span
          className={
            'inline-block h-5 w-5 transform rounded-full bg-white transition-transform ' +
            (on ? 'translate-x-5' : 'translate-x-1')
          }
        />
      </button>
      <span className="text-sm text-white/80">
        {label}: <strong className="text-white">{on ? 'Ligado' : 'Desligado'}</strong>
      </span>
    </div>
  )
}

