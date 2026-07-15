const LOGOS = [
  "Geekonik Solutions",
  "Nimbus",
  "Vertex Labs",
  "Corelane",
  "Fjord Capital",
  "Anvil Systems",
  "Northwind",
  "Halcyon",
  "Orbital",
];

export function TrustedBy() {
  const loop = [...LOGOS, ...LOGOS];

  return (
    <section id="trusted" className="border-y border-border/60 py-14">
      <p className="mb-8 text-center text-[11px] font-medium uppercase tracking-[0.25em] text-secondary">
        Trusted by ambitious teams
      </p>

      <div className="group relative mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee gap-20 group-hover:[animation-play-state:paused]">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-serif text-2xl text-white/30 transition-colors duration-300 hover:text-white/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
