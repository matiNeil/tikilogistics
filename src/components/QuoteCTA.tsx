import ScrollReveal from "./ScrollReveal";
import QuoteForm from "./QuoteForm";

export default function QuoteCTA() {
  return (
    <section
      id="quote"
      className="relative bg-ink py-28 md:py-36 overflow-hidden grain"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,162,39,0.14),transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center mb-16">
        <ScrollReveal>
          <p className="flex items-center justify-center gap-2 text-gold text-xs md:text-sm tracking-[0.35em] uppercase mb-6">
            <span className="h-px w-8 bg-gold inline-block" />
            Get Started
          </p>
          <h2 className="font-display font-semibold uppercase text-4xl md:text-6xl leading-[1.05] mb-6">
            Need Something Moved?
          </h2>
          <p className="text-base md:text-lg text-offwhite-dim font-light max-w-2xl mx-auto leading-relaxed">
            Tell us where it needs to go, what you&rsquo;re transporting, and
            when you need it delivered. We&rsquo;ll handle the rest.
          </p>
        </ScrollReveal>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
        <ScrollReveal delay={150}>
          <QuoteForm />
        </ScrollReveal>
      </div>
    </section>
  );
}
