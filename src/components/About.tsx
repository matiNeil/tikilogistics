import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="relative bg-charcoal py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        <div className="lg:col-span-4">
          <ScrollReveal>
            <p className="flex items-center gap-2 text-gold text-xs md:text-sm tracking-[0.35em] uppercase mb-6">
              <span className="h-px w-8 bg-gold inline-block" />
              About Us
            </p>
            <h2 className="font-display font-semibold uppercase text-4xl md:text-5xl leading-[1.05]">
              Logistics You Can Trust
            </h2>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <ScrollReveal delay={120}>
            <p className="text-lg md:text-xl text-offwhite font-light leading-relaxed">
              We provide dependable transportation solutions for businesses
              that need their goods moved safely, efficiently, and on time.
              Our focus is simple: professional service, reliable delivery,
              and logistics you can trust.
            </p>
            <p className="mt-6 text-base md:text-lg text-offwhite-dim font-light leading-relaxed">
              Whether it&rsquo;s a single delivery or an ongoing transport
              contract, we tailor our services around your operational needs.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div className="mt-10 gold-hairline pt-10 grid sm:grid-cols-3 gap-8">
              {[
                { label: "Precision", desc: "Routes planned to the kilometre." },
                { label: "Professionalism", desc: "Every touchpoint, on brand." },
                { label: "Care", desc: "Cargo handled like it's ours." },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-display uppercase tracking-wide text-gold text-sm mb-2">
                    {item.label}
                  </p>
                  <p className="text-sm text-offwhite-dim font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
