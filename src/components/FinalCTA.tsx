import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function FinalCTA() {
  return (
    <section className="relative bg-charcoal py-28 md:py-40 border-y border-gold/20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,162,39,0.10),transparent_65%)]" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <ScrollReveal>
          <h2 className="font-display font-semibold uppercase text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-8">
            Your Cargo. Our Responsibility.
            <br />
            <span className="text-gold-gradient">Every Kilometre.</span>
          </h2>
          <p className="text-base md:text-lg text-offwhite-dim font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Reliable transportation built for businesses that cannot afford
            unnecessary delays.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote"
              className="group inline-flex items-center justify-center gap-2 bg-gold text-ink px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-all duration-300"
            >
              Get a Quote
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-offwhite/25 px-8 py-4 text-sm tracking-widest uppercase text-offwhite hover:border-gold hover:text-gold transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
