"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Example logos array
const logos = [
  "/raptorLogo.png",
  "/elementaLogo.png",
  "/galvanLogo.png",
  "/adscopyaiLogo.png",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay },
});

export default function LogoMarquee() {
  const repeatedLogos = logos.concat(logos).concat(logos); // repeat 3x for seamlessness

  return (
    <section className="py-12 border-y border-navy/10 bg-gray-800 relative overflow-hidden mt-4">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.h2 {...fadeUp(0)} className="text-2xl md:text-3xl font-bold text-white">
          Some of the teams we’ve worked with
        </motion.h2>
        <motion.p {...fadeUp(0.05)} className="mt-2 text-white/70 text-sm md:text-base">
          Trusted by startups and growing companies across industries
        </motion.p>

        {/* Marquee wrapper */}
        <div className="mt-8 relative flex overflow-hidden">
          <div className="flex animate-marquee">
            {repeatedLogos.map((src, i) => (
              <div
                key={i}
                className="shrink-0 h-16 w-32 relative flex items-center justify-center mx-6"
              >
                <Image
                  src={src}
                  alt={`client-logo-${i}`}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
