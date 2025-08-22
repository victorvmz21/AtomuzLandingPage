"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, BarChart3, Rocket, Mail, MessageSquare, Phone } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay },
});

export default function FinalCTA() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            {...fadeUp(0)}
            className="text-3xl md:text-5xl font-extrabold text-navy flex items-center justify-center gap-3"
          >
            <Rocket className="text-neon animate-bounce" size={36} />
            Ready to launch something <span className="text-neon">love</span>?
          </motion.h2>
          <motion.p {...fadeUp(0.05)} className="mt-4 text-navy/70 max-w-2xl mx-auto text-lg">
            Tell us about your product. Our senior team will reply with a clear
            plan and roadmap tailored to your vision.
          </motion.p>
        </div>

        {/* Form */}
        <motion.form
          {...fadeUp(0.1)}
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-lg border border-navy/10"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative flex items-center">
              <span className="absolute left-4 text-navy/40">
                <Users size={20} />
              </span>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-xl border border-navy/20 pl-12 pr-5 py-4 
                           focus:border-neon focus:ring-2 focus:ring-neon/20 transition bg-white"
              />
            </div>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-navy/40">
                <Mail size={20} />
              </span>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-xl border border-navy/20 pl-12 pr-5 py-4 
                           focus:border-neon focus:ring-2 focus:ring-neon/20 transition bg-white"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="relative flex items-center mt-6">
            <span className="absolute left-4 text-navy/40">
              <Phone size={20} />
            </span>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              required
              className="w-full rounded-xl border border-navy/20 pl-12 pr-5 py-4 
                         focus:border-neon focus:ring-2 focus:ring-neon/20 transition bg-white"
            />
          </div>

          <div className="relative flex items-start mt-6">
            <span className="absolute left-4 top-4 text-navy/40">
              <MessageSquare size={20} />
            </span>
            <textarea
              name="message"
              rows={6}
              placeholder="Tell us about your project..."
              required
              className="w-full rounded-xl border border-navy/20 pl-12 pr-5 py-4 
                         focus:border-neon focus:ring-2 focus:ring-neon/20 transition bg-white"
            />
          </div>

          {/* Button */}
          <div className="flex justify-end mt-8">
            <motion.button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 
                         rounded-xl font-semibold text-white bg-navy 
                         transition-colors duration-300 group disabled:opacity-50"
              whileTap={{ scale: 0.98 }}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </motion.button>
          </div>

          {/* Success / Error Message */}
          {status === "success" && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-green-600 font-semibold">
              ✅ Message sent successfully!
            </motion.p>
          )}
          {status === "error" && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-red-600 font-semibold">
              ❌ Failed to send. Please try again later.
            </motion.p>
          )}
        </motion.form>

        {/* Footer text */}
        <motion.div
          {...fadeUp(0.15)}
          className="mt-8 text-sm text-navy/60 flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-neon" /> Response within 24h
          </div>
          <div className="flex items-center gap-2">
            <Users size={14} className="text-neon" /> Senior team
          </div>
          <div className="flex items-center gap-2">
            <BarChart3 size={14} className="text-neon" /> Clear milestones & demos
          </div>
        </motion.div>
      </div>
    </section>
  );
}
