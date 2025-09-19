import { useState } from 'react'
import './App.css'
import { Navbar, Card, Toggle, Hero, Counter, Button } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />

      <main id="inicio" className="mx-auto my-8 flex max-w-6xl flex-col gap-6 px-4">
        <Card title="Exemplo com Tailwind (Card)">
          <p>
            Este é um componente simples estilizado com Tailwind usando as cores da marca.
          </p>
          <div className="mt-4">
            <Toggle label="Notificações" />
          </div>
        </Card>

        <Card title="Componente com useState (Counter)">
          <div className="flex items-center justify-between gap-4">
            <Counter initial={count} />
            <Button onClick={() => setCount((c) => c + 1)} />
          </div>
        </Card>
      </main>
    </>
  )
}

export default App

