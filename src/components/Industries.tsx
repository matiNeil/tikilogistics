import ScrollReveal from "./ScrollReveal";

const INDUSTRIES = [
  "Retail",
  "Construction",
  "Manufacturing",
  "Agriculture",
  "FMCG",
  "E-commerce",
  "Wholesale",
  "Corporate Businesses",
];

export default function Industries() {
  const looped = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <section id="industries" className="relative bg-charcoal py-24 md:py-32 border-y border-gold/15">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-14">
        <ScrollReveal className="max-w-2xl">
          <p className="flex items-center gap-2 text-gold text-xs md:text-sm tracking-[0.35em] uppercase mb-6">
            <span className="h-px w-8 bg-gold inline-block" />
            Industries We Serve
          </p>
          <h2 className="font-display font-semibold uppercase text-4xl md:text-5xl leading-[1.05]">
            Across Every Sector
          </h2>
        </ScrollReveal>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-charcoal to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-charcoal to-transparent z-10" />
        <div className="flex w-max animate-marquee">
          {looped.map((industry, i) => (
            <div
              key={`${industry}-${i}`}
              className="flex items-center gap-10 px-10"
            >
              <span className="font-display uppercase text-2xl md:text-4xl text-offwhite/20 whitespace-nowrap">
                {industry}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
