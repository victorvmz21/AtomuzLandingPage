// src/_components/ProcessSection.tsx
"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MonitorSmartphone, Code2, Rocket } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay },
});

const steps = [
  {
    icon: <ShieldCheck className="text-neon" size={22} />,
    title: "01 — Discover",
    description:
      "We begin with strategy workshops to align on goals, define success metrics, and identify the smallest lovable product. This sets a clear foundation for the project.",
  },
  {
    icon: <MonitorSmartphone className="text-neon" size={22} />,
    title: "02 — Design",
    description:
      "From user flows and wireframes to high-fidelity UI, our design phase prioritizes speed, clarity, and scalability. The result: intuitive interfaces that delight users.",
  },
  {
    icon: <Code2 className="text-neon" size={22} />,
    title: "03 — Build",
    description:
      "Using agile sprints and weekly demos, our senior engineers ship production-grade code. Transparency is built in—progress and milestones are always visible.",
  },
  {
    icon: <Rocket className="text-neon" size={22} />,
    title: "04 — Launch",
    description:
      "We handle deployment, monitoring, and iteration. Post-launch, we continuously optimize and tie every improvement to measurable business outcomes.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.h2
          {...fadeUp(0)}
          className="text-3xl md:text-4xl font-bold text-center text-navy"
        >
          Our Proven Development Process
        </motion.h2>
        <motion.p
          {...fadeUp(0.05)}
          className="mt-3 text-navy/70 max-w-3xl mx-auto text-center"
        >
          A structured yet flexible framework that ensures every project moves from idea
          to launch with clarity, speed, and measurable results.
        </motion.p>

        {/* Process grid */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp(0.08 + i * 0.05)}
              className="group rounded-2xl border border-navy/10 bg-white p-8 
                         shadow-[0_10px_30px_rgba(11,27,58,0.08)] 
                         transition hover:border-neon"
            >
              <div className="flex items-center gap-2 mb-3">
                {s.icon}
                <h3 className="font-semibold text-navy text-lg">{s.title}</h3>
              </div>
              <p className="text-navy/70 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
