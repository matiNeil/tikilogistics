import { Mail, MapPin, Phone } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#fleet", label: "Fleet" },
  { href: "#industries", label: "Industries" },
  { href: "#quote", label: "Get a Quote" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-ink pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-12 pb-14 border-b border-gold/15">
          <div>
            <span className="font-display font-semibold text-xl tracking-[0.15em] uppercase text-offwhite">
              Tiki<span className="text-gold-gradient">Logistics</span>
            </span>
            <p className="mt-5 text-sm text-offwhite-dim font-light leading-relaxed max-w-xs">
              Premium transportation and logistics solutions built for
              reliability, speed, and control.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-gold mb-5">
              Navigate
            </p>
            <ul className="space-y-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-offwhite-dim hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-gold mb-5">
              Contact
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-offwhite-dim">
                <Phone size={16} className="text-gold shrink-0 mt-0.5" />
                <a href="tel:+27110000000" className="hover:text-gold transition-colors duration-300">
                  +27 11 000 0000
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-offwhite-dim">
                <Mail size={16} className="text-gold shrink-0 mt-0.5" />
                <a
                  href="mailto:dispatch@tikilogistics.com"
                  className="hover:text-gold transition-colors duration-300"
                >
                  dispatch@tikilogistics.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-offwhite-dim">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                <span>Johannesburg, South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-offwhite-dim/60">
            &copy; {new Date().getFullYear()} Tiki Logistics. All rights reserved.
          </p>
          <p className="text-xs text-offwhite-dim/60 tracking-widest uppercase">
            Moving Business Forward
          </p>
          <a
            href="https://www.forgestackx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-offwhite-dim/60 hover:text-offwhite transition-colors duration-300"
          >
            Powered by{" "}
            <span className="font-medium text-red-500">Forge</span>
            <span className="font-medium text-blue-500">StackX</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
