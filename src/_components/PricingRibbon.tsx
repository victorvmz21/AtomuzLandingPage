// src/_components/PricingSection.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Rocket, CheckCircle2 } from "lucide-react";

export default function PricingSection() {
  return (
    <section
      id="saas"
      className="relative py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 border-y border-navy/10 overflow-hidden"
    >
      <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
        {/* Animated Rocket */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center mb-6"
        >
          <div className="p-4 rounded-full bg-neon/10 text-neon">
            <Rocket size={36} />
          </div>
        </motion.div>

        {/* Title + subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-navy"
        >
          Launch your <span className="text-neon">MVP</span> with confidence
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-lg md:text-xl text-navy/70 max-w-2xl mx-auto"
        >
          Micro-SaaS starting at <span className="text-neon font-semibold">$5k</span>. 
          Authentication, database, and deployment included. Delivered in weeks, not months.
        </motion.p>

        {/* Feature list */}
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto text-navy/80"
        >
          {[
            "MVP ready in 6–8 weeks",
            "Authentication & database included",
            "Transparent milestones & weekly demos",
            "Secure CI/CD pipelines baked in",
            "Senior engineering team, no outsourcing",
            "Fixed quote with no hidden fees",
          ].map((f) => (
            <li key={f} className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-neon" />
              <span>{f}</span>
            </li>
          ))}
        </motion.ul>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-navy text-white text-lg font-semibold 
                       hover:shadow-[0_0_25px_rgba(57,255,20,0.6)] hover:scale-105 transition-transform duration-300"
          >
            Get your fixed quote <ArrowRight size={20} />
          </a>
          <p className="mt-4 text-sm text-navy/60">
            Free consultation • Fast response • Clear milestones
          </p>
        </motion.div>
      </div>

      {/* Background accent shapes */}
      <div
        aria-hidden
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] 
                   bg-[radial-gradient(circle,rgba(57,255,20,0.15),transparent_70%)] blur-3xl -z-10"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-[400px] h-[400px] 
                   bg-[radial-gradient(circle,rgba(0,40,120,0.15),transparent_70%)] blur-2xl -z-10"
      />
    </section>
  );
}
