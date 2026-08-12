import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-ink grain"
    >
      {/* cinematic truck photo */}
      <Image
        src="/hero-truck-1.jpg"
        alt="Tiki Logistics truck on the road at sunset"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "40% center" }}
      />

      {/* scrims for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(201,162,39,0.12),transparent_60%)]" />

      {/* content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10 pt-28 pb-24">
        <p className="reveal is-visible flex items-center gap-2 text-gold text-xs md:text-sm tracking-[0.35em] uppercase mb-6">
          <span className="h-px w-8 bg-gold inline-block" />
          Premium Transportation &amp; Logistics
        </p>

        <h1 className="font-display font-semibold uppercase leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl">
          Moving Business
          <br />
          <span className="text-gold-gradient bg-[length:200%_auto] animate-shine">
            Forward.
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-base md:text-lg text-offwhite-dim font-light leading-relaxed">
          Premium transportation and logistics solutions built for
          reliability, speed, and control. From local deliveries to
          long-distance freight, we move your cargo with precision,
          professionalism, and care.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#quote"
            className="group inline-flex items-center justify-center gap-2 bg-gold text-ink px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-all duration-300"
          >
            Request a Quote
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-2 border border-offwhite/25 px-8 py-4 text-sm tracking-widest uppercase text-offwhite hover:border-gold hover:text-gold transition-all duration-300"
          >
            Explore Our Services
            <ChevronRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-offwhite-dim/60">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
