// src/_components/ShowcaseSection.tsx
"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap, Layers } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, delay },
});

const highlights = [
  {
    icon: <Zap size={28} className="text-neon" />,
    title: "Speed to Market",
    description:
      "From idea to launch in weeks, not months. Our agile approach ensures you ship fast without compromising quality.",
  },
  {
    icon: <TrendingUp size={28} className="text-neon" />,
    title: "Revenue Focused",
    description:
      "Every feature we build ties back to business goals—driving growth, conversions, and customer retention.",
  },
  {
    icon: <Layers size={28} className="text-neon" />,
    title: "Scalable Foundations",
    description:
      "Future-proof architecture and CI/CD pipelines that support your product as it grows from 100 to 1M users.",
  },
];

export default function ShowcaseSection() {
  return (
    <section
      id="work"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
         <motion.div
            initial={{ rotate: -10, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon/10 text-neon text-sm font-medium mb-4"
          >
            <TrendingUp size={16} className="animate-bounce" />
            Proven Results
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy">
            Work That Delivers Real <span className="text-neon">Impact</span>
          </h2>
          <p className="mt-4 text-navy/70 max-w-2xl mx-auto text-lg">
            We don’t just build software — we create business outcomes. Here’s
            what sets our work apart and why clients trust us to power their
            most ambitious ideas.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 * i }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-navy/10 bg-white shadow-md hover:shadow-[0_0_25px_rgba(57,255,20,0.25)] p-8 text-center transition transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="p-4 rounded-full bg-neon/10"
                >
                  {item.icon}
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                {item.title}
              </h3>
              <p className="text-navy/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
