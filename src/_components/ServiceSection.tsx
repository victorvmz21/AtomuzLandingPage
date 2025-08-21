// src/_components/ServicesSection.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, MonitorSmartphone, Cpu, Code2 } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay },
});

const items = [
  {
    icon: <Smartphone />,
    title: "Mobile App Development",
    text: "We design and build high-performance iOS and Android apps using Swift, Kotlin, and Flutter. From payments to analytics, your app will scale seamlessly and retain users.",
  },
  {
    icon: <MonitorSmartphone />,
    title: "Web Platform Development",
    text: "We craft responsive, secure, and scalable web applications powered by Next.js and modern APIs. From dashboards to marketplaces, we deliver platforms built for growth.",
  },
  {
    icon: <Cpu />,
    title: "AI & Business Automation",
    text: "Leverage AI to boost productivity and revenue. From predictive analytics to automated workflows, we build intelligent features that actually impact your bottom line.",
  },
  {
    icon: <Code2 />,
    title: "Custom Software Solutions",
    text: "Your business is unique—your software should be too. We architect and deliver production-ready solutions you own end-to-end, designed for long-term maintainability.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.h2
          {...fadeUp(0)}
          className="text-3xl md:text-4xl text-navy font-bold text-center"
        >
          Our Services — What We Do
        </motion.h2>
        <motion.p
          {...fadeUp(0.05)}
          className="mt-3 text-navy/70 max-w-3xl mx-auto text-center"
        >
          Atomuz delivers end-to-end digital solutions for startups and enterprises.
          From <strong>mobile apps</strong> to <strong>AI-powered automation</strong>, our senior engineers
          turn complex ideas into production-ready products that drive measurable business results.
        </motion.p>

        {/* Service grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              {...fadeUp(0.08 + i * 0.05)}
              className="group relative rounded-2xl border border-navy/10 bg-white p-8 
                         transition overflow-hidden hover:border-neon hover:border-4"
            >
              {/* Hover glow circle */}
              <div
                className="absolute -right-12 -top-12 w-48 h-48 rounded-full 
                           bg-[radial-gradient(circle,rgba(57,255,20,0.15),transparent_70%)] 
                           opacity-0 group-hover:opacity-100 transition"
              />

              <div className="h-14 w-14 rounded-xl border border-navy/10 flex items-center justify-center mb-5 text-neon bg-navy/5">
                {it.icon}
              </div>
              <h3 className="text-lg text-navy font-semibold">{it.title}</h3>
              <p className="mt-3 text-navy/70 leading-relaxed">{it.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div {...fadeUp(0.1)} className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-navy text-white font-semibold hover:shadow-neon transition"
          >
            Let’s discuss your project <ArrowRight size={18} />
          </a>
          <p className="mt-3 text-sm text-navy/60">
            Free consultation • Fixed quotes • Senior engineering team
          </p>
        </motion.div>
      </div>
    </section>
  );
}
