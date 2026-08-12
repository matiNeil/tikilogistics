import {
  Truck,
  Route,
  MapPin,
  FileText,
  PackageCheck,
  Warehouse,
  Building2,
  CalendarClock,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const SERVICES = [
  {
    icon: Truck,
    title: "Road Freight",
    desc: "Dependable road freight movement for cargo of every size and scale.",
  },
  {
    icon: Route,
    title: "Long-Distance Transportation",
    desc: "Cross-region hauls managed with precision routing and tracking.",
  },
  {
    icon: MapPin,
    title: "Local Deliveries",
    desc: "Fast, accountable delivery within the city and surrounding areas.",
  },
  {
    icon: FileText,
    title: "Contract Logistics",
    desc: "Ongoing transport agreements tailored to your operational rhythm.",
  },
  {
    icon: PackageCheck,
    title: "Last-Mile Delivery",
    desc: "The final, critical leg — handled with care and precision.",
  },
  {
    icon: Warehouse,
    title: "Fleet Solutions",
    desc: "Scalable fleet capacity built around your volume and schedule.",
  },
  {
    icon: Building2,
    title: "Corporate Transport",
    desc: "Reliable transport solutions built for corporate accounts.",
  },
  {
    icon: CalendarClock,
    title: "Scheduled Distribution",
    desc: "Recurring routes and distribution runs, delivered on time, every time.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal className="mb-16 max-w-2xl">
          <p className="flex items-center gap-2 text-gold text-xs md:text-sm tracking-[0.35em] uppercase mb-6">
            <span className="h-px w-8 bg-gold inline-block" />
            What We Do
          </p>
          <h2 className="font-display font-semibold uppercase text-4xl md:text-5xl leading-[1.05]">
            Our Services
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/15">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 60}>
              <div className="group relative bg-ink hover:bg-charcoal-2 p-8 h-full min-h-[220px] flex flex-col justify-between transition-colors duration-300">
                <service.icon
                  size={28}
                  className="text-gold mb-8 transition-transform duration-300 group-hover:-translate-y-1"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="font-display uppercase tracking-wide text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-offwhite-dim font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
