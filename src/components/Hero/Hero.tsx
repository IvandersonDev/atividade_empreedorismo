export function Hero() {
  return (
    <section className="bg-gradient-to-b from-brand to-brand-light text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <p className="mb-3 text-sm font-semibold tracking-widest text-white/75">
          Empreendedorismo 2025.2
        </p>
        <h1 className="text-3xl font-bold leading-tight md:text-5xl">
          Organize seu negócio com um design limpo
        </h1>
        <p className="mt-4 max-w-2xl text-white/85">
          Um ponto de partida simples, acessível e responsivo usando Tailwind CSS.
          Componentize sua interface e evolua conforme seu produto cresce.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contato"
            className="inline-flex items-center justify-center rounded bg-white px-4 py-2 font-semibold text-brand shadow hover:bg-white/90"
          >
            Começar agora
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center rounded border border-white/30 px-4 py-2 font-semibold text-white hover:bg-white/10"
          >
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  )
}

