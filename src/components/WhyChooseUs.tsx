import { Clock3, BadgeCheck, SlidersHorizontal, ShieldCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

const VALUES = [
  {
    icon: Clock3,
    title: "Reliable Transportation",
    desc: "Your cargo moves according to schedule, with clear communication throughout the journey.",
  },
  {
    icon: BadgeCheck,
    title: "Professional Service",
    desc: "From drivers to support staff, every part of the operation is handled professionally.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible Solutions",
    desc: "One-off deliveries, recurring routes, and custom logistics plans built around your business.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "We prioritize responsible transport practices, vehicle care, and secure cargo handling.",
  },
];

const STATS = [
  { value: 15, suffix: "+", label: "Years of Operation" },
  { value: 250, suffix: "+", label: "Fleet Vehicles" },
  { value: 40000, suffix: "+", label: "Deliveries Completed" },
  { value: 99, suffix: "%", label: "On-Time Rate" },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-charcoal py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal className="mb-16 max-w-2xl">
          <p className="flex items-center gap-2 text-gold text-xs md:text-sm tracking-[0.35em] uppercase mb-6">
            <span className="h-px w-8 bg-gold inline-block" />
            Why Choose Us
          </p>
          <h2 className="font-display font-semibold uppercase text-4xl md:text-5xl leading-[1.05]">
            Built On Trust
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {VALUES.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 80}>
              <div className="border border-gold/20 hover:border-gold/50 p-8 h-full transition-colors duration-300">
                <v.icon size={26} className="text-gold mb-6" strokeWidth={1.5} />
                <h3 className="font-display uppercase tracking-wide text-lg mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-offwhite-dim font-light leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-gold/20 pt-14">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="font-display font-semibold text-4xl md:text-5xl text-gold-gradient">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-xs md:text-sm tracking-widest uppercase text-offwhite-dim">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
