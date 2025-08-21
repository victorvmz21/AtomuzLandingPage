"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, delay },
});

export default function HeroModern() {
    return (
        <section id="hero" className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center bg-gray-50/30">
            {/* === GRID BACKGROUND === */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-20
        [background-image:linear-gradient(rgba(21,40,70,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(21,40,70,0.08)_1px,transparent_1px)]
        [background-size:26px_26px]"
            />

            {/* === WHITE RADIAL SPOTLIGHT OVERLAY === */}
            <div
                aria-hidden
                className="pointer-events-none absolute -z-10 top-1/2 left-1/2 
  w-[180%] h-[180%] -translate-x-1/2 -translate-y-1/2
  bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.85)_0%,transparent_85%)]"
            />

            {/* Content */}
            <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
                {/* Left */}
                <div>
                    <motion.div {...fadeUp(0)}>
                        <span className="inline-flex items-center gap-2 rounded-full bg-navy border border-navy px-3 py-1 text-md font-semibold text-white">
                            <Sparkles size={14} className="text-white" /> Senior team. Ship fast. Own your code.
                        </span>
                    </motion.div>

                    <motion.h1
                        {...fadeUp(0.05)}
                        className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight text-neon"
                    >
                        Build market-ready <span className="text-neon">products in weeks</span>.
                    </motion.h1>

                    <motion.p {...fadeUp(0.1)} className="mt-5 text-lg text-navy/70 max-w-xl">
                        Custom <strong>mobile</strong> and <strong>web apps</strong> engineered to deliver speed,
                        reliability, and lasting growth.
                    </motion.p>

                    <motion.div {...fadeUp(0.15)} className="mt-7 flex flex-col sm:flex-row gap-3">
                        <a
                            href="#pricing"
                            className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl text-navy font-semibold shadow-neon transition"
                        >
                            AI Micro-SaaS packages starting at <span className="text-navy">$5k</span>
                            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition" />
                        </a>
                        <a
                            href="#work"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neon font-semibold text-navy"
                        >
                            See Work
                        </a>
                    </motion.div>

                    {/* Tech pills */}
                    <motion.ul {...fadeUp(0.2)} className="mt-6 flex flex-wrap gap-3 text-sm">
                        {["iOS & Android", "Next.js / React", "Python / Node", "Firebase / Supabase", "AWS / GCP"].map((t) => (
                            <li
                                key={t}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy text-white font-bold text-sm transition hover:shadow-[0_0_15px_rgba(0,230,98,0.6),0_0_30px_rgba(0,230,98,0.35)]"
                            >
                                <CheckCircle2 size={16} className="text-white" /> {t}
                            </li>
                        ))}
                    </motion.ul>
                </div>

                {/* Right */}
                <div className="relative flex justify-center items-center">
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 3.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="inline-block"
                    >
                        <Image
                            src="/phoneAndComputer2.png"
                            alt="Modern code editor on a laptop"
                            width={1400}
                            height={1400}
                            className="object-contain max-w-full scale-110"
                            priority
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
