import ScrollReveal from "./ScrollReveal";
import TruckSilhouette from "./TruckSilhouette";

const FLEET_POINTS = [
  "Commercial delivery vehicles for smaller, time-sensitive loads",
  "Heavy-duty freight trucks for large-volume cargo movement",
  "Routine maintenance and safety inspections on every vehicle",
  "GPS-monitored journeys from dispatch to delivery",
];

export default function Fleet() {
  return (
    <section
      id="fleet"
      className="relative bg-ink py-28 md:py-36 overflow-hidden grain"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(201,162,39,0.10),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <ScrollReveal>
            <p className="flex items-center gap-2 text-gold text-xs md:text-sm tracking-[0.35em] uppercase mb-6">
              <span className="h-px w-8 bg-gold inline-block" />
              Our Fleet
            </p>
            <h2 className="font-display font-semibold uppercase text-4xl md:text-5xl leading-[1.05] mb-8">
              Built to Move.
              <br />
              Ready to Deliver.
            </h2>
            <p className="text-base md:text-lg text-offwhite-dim font-light leading-relaxed max-w-lg">
              Our fleet is prepared for different transport requirements,
              from smaller commercial deliveries to larger freight movements.
              Every journey is planned with efficiency, reliability, and
              safety in mind.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <ul className="mt-10 space-y-4">
              {FLEET_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  <span className="text-sm md:text-base text-offwhite-dim font-light">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-6">
          <ScrollReveal delay={200}>
            <div className="relative border border-gold/25 bg-charcoal p-10 md:p-14">
              <div className="absolute top-0 left-0 h-8 w-8 border-t border-l border-gold" />
              <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-gold" />
              <TruckSilhouette className="w-full h-auto" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
