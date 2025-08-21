"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

function NavBar() {
  const [open, setOpen] = useState(false);

  // ✅ Updated labels and order
  const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About us" },
    { href: "#services", label: "Services" }, // Features → Services
    { href: "#process", label: "Process" },
    { href: "#saas", label: "Micro SaaS" }, // Pricing → Micro SaaS
    { href: "#work", label: "Work" }
  ];

  // ✅ Function for scroll-to-top when clicking logo or Home
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b-[6px] border-navy">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo (scrolls to top) */}
        <a
          href="#hero"
          onClick={scrollToTop}
          className="relative flex items-center gap-3"
        >
          <Image
            src="/atomuzLogo.png"
            alt="Atomuz Development"
            width={180}
            height={90}
            className="object-contain"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={l.href === "#hero" ? scrollToTop : undefined}
              className="text-gray-700 font-semibold hover:text-neon transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg
                     bg-neon"
        >
          Contact us <ArrowRight size={16} />
        </a>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-navy/15 text-gray-700 hover:text-neon transition-colors"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden border-t border-neon/10 bg-white/95 backdrop-blur transition-[max-height,opacity] duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                if (l.href === "#hero") {
                  scrollToTop(e);
                }
                setOpen(false);
              }}
              className="py-2 text-gray-700 font-semibold hover:text-neon transition-colors"
            >
              {l.label}
            </a>
          ))}

          {/* Mobile CTA */}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg
                       bg-neon"
          >
            Contact us <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
