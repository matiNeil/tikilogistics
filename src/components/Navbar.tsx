"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#fleet", label: "Fleet" },
  { href: "#industries", label: "Industries" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-gold/20 py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="font-display font-semibold text-xl md:text-2xl tracking-[0.15em] uppercase text-offwhite">
            Tiki<span className="text-gold-gradient">Logistics</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide uppercase text-offwhite-dim hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#quote"
          className="hidden lg:inline-flex items-center border border-gold px-6 py-2.5 text-sm tracking-widest uppercase text-gold hover:bg-gold hover:text-ink transition-all duration-300"
        >
          Request a Quote
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-offwhite"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden mt-5 px-6 pb-6 flex flex-col gap-5 bg-ink/95 backdrop-blur-md border-t border-gold/10">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="pt-5 text-sm tracking-wide uppercase text-offwhite-dim hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center items-center border border-gold px-6 py-3 text-sm tracking-widest uppercase text-gold hover:bg-gold hover:text-ink transition-all"
          >
            Request a Quote
          </a>
        </div>
      )}
    </header>
  );
}
