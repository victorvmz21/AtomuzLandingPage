"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";

function StarRating({ value = 5 }: { value?: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={16}
          className={i <= value ? "fill-current text-neon" : "text-white/30"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const items = useMemo(
    () => [
      {
        quote:
          "Atomuz Development shipped our MVP in 6 weeks and it’s already driving revenue. Clear milestones and excellent communication throughout.",
        name: "A. Patel",
        role: "Founder, B2B SaaS",
        rating: 5,
      },
      {
        quote:
          "They felt like part of our team. Senior engineers who actually deliver—no fluff, just pragmatic execution from day one.",
        name: "K. Chen",
        role: "CTO, HealthTech",
        rating: 5,
      },
      {
        quote:
          "From idea to App Store fast. We’ll be back for phase two—Atomuz Development nailed the details and the deadlines.",
        name: "M. Rivera",
        role: "Product Lead, Consumer Apps",
        rating: 5,
      },
      {
        quote:
          "Concise updates, tight sprints, and no surprises. Exactly what we needed to hit our date.",
        name: "J. Morgan",
        role: "Head of Product, Fintech",
        rating: 5,
      },
      {
        quote:
          "Architecture decisions were spot on. Performance and reliability have been rock solid.",
        name: "S. Ibrahim",
        role: "VP Engineering, Logistics",
        rating: 5,
      },
      {
        quote:
          "Design system and code quality exceeded expectations. Easy to maintain and extend.",
        name: "T. Almeida",
        role: "Design Lead, SaaS",
        rating: 5,
      },
      {
        quote:
          "They uncovered scope risks early and kept us focused on outcomes, not tickets.",
        name: "L. Nguyen",
        role: "Founder, MarTech",
        rating: 5,
      },
      {
        quote:
          "Security, CI/CD, and observability baked in. Launch was smooth and uneventful.",
        name: "E. Wilson",
        role: "CTO, Health",
        rating: 5,
      },
      {
        quote:
          "Our dashboard loads 5× faster and support tickets dropped. Couldn’t ask for more.",
        name: "R. Silva",
        role: "Ops Lead, B2B",
        rating: 5,
      },
      {
        quote:
          "Clear pricing, crisp communication, and dependable delivery. We’re planning phase two already.",
        name: "C. Romero",
        role: "Founder, Consumer Apps",
        rating: 5,
      },
    ],
    []
  );

  const perPage = 3;
  const pages = useMemo(() => {
    const out: typeof items[] = [];
    for (let i = 0; i < items.length; i += perPage) {
      out.push(items.slice(i, i + perPage));
    }
    const last = out[out.length - 1];
    if (last.length < perPage) {
      const needed = perPage - last.length;
      last.push(...items.slice(0, needed));
    }
    return out;
  }, [items]);

  const [page, setPage] = useState(0);
  const autoMs = 6000;

  useEffect(() => {
    const id = setInterval(() => setPage((p) => (p + 1) % pages.length), autoMs);
    return () => clearInterval(id);
  }, [pages.length]);

  const prev = () => setPage((p) => (p - 1 + pages.length) % pages.length);
  const next = () => setPage((p) => (p + 1) % pages.length);

  const variants = {
    enter: { opacity: 0, x: 40, scale: 0.98 },
    center: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -40, scale: 0.98 },
  };

  return (
    <section id="about"
      className="relative overflow-hidden bg-navy flex items-center"
      style={{ minHeight: "900px" }} // ✅ FIXED HEIGHT FOR WHOLE SECTION
    >
      <div className="mx-auto max-w-7xl px-6 relative w-full">
        {/* About us section */}
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Atomuz Development builds fast, scalable, and reliable software products.
            From MVPs to enterprise apps, we partner with founders and teams to bring
            ambitious ideas to life with speed and precision.
          </p>
        </motion.div>

        {/* Header */}
        <motion.div {...fadeUp(0.1)} className="flex items-end justify-between gap-4">
          <h3 className="text-3xl md:text-4xl text-white font-bold">
            Trusted by founders & product teams
          </h3>
          <div className="hidden md:flex items-center gap-2 text-white/70 text-sm">
            <Star className="text-neon" size={16} />
            <span>Average rating: 5.0</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="mt-8 md:mt-10 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid gap-6 md:grid-cols-3"
            >
              {pages[page].map((t) => (
                <figure
                  key={t.name + t.role}
                  className="relative rounded-2xl border border-white/10 bg-white p-6 shadow-[0_10px_30px_rgba(21,40,70,0.15)] flex flex-col"
                >
                  <div className="flex items-center justify-between">
                    <StarRating value={t.rating} />
                    <span className="text-[11px] uppercase tracking-wide text-navy/50 font-semibold">
                      Verified review
                    </span>
                  </div>

                  <blockquote className="mt-3 text-navy/90 leading-relaxed flex-1">
                    <Quote
                      size={18}
                      className="inline-block align-[-2px] text-neon mr-1"
                    />
                    “{t.quote}”
                  </blockquote>

                  <figcaption className="mt-4 text-sm text-navy/70">
                    <span className="font-semibold text-navy">{t.name}</span> — {t.role}
                  </figcaption>
                </figure>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonials"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonials"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition"
              >
                <ArrowRight size={16} />
              </button>
            </div>
            <div className="flex items-center gap-2">
              {pages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Go to testimonials page ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === page ? "w-6 bg-neon" : "w-2.5 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <motion.div
          {...fadeUp(0.15)}
          className="mt-10 md:mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3"
        >
          {[
            { label: "5.0 Avg Rating" },
            { label: "On-Time Delivery" },
            { label: "Code Ownership" },
            { label: "Secure Deploys" },
            { label: "NDA Friendly" },
            { label: "Senior Engineers" },
          ].map((b) => (
            <div
              key={b.label}
              className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs md:text-sm text-white/80"
            >
              {b.label}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-80 z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(255, 255, 255, 0.03) 0px,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px,
              transparent 20px
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(255, 255, 255, 0.03) 0px,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px,
              transparent 20px
            )
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </section>
  );
}
