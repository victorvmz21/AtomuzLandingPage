"use client";

import { Facebook, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";


export default function Footer() {
  return (
    <footer className="relative bg-navy text-white pt-16 pb-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-bold">Atomuz Development</h3>
          <p className="mt-3 text-white/70 text-sm leading-relaxed">
            We design & build high-performing SaaS products and mobile apps 
            for startups and enterprise teams.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#hero" className="hover:text-neon transition-colors">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-neon transition-colors">About us</a>
            </li>
            <li>
              <a href="#services" className="hover:text-neon transition-colors">Services</a>
            </li>
            <li>
              <a href="#process" className="hover:text-neon transition-colors">Process</a>
            </li>
             <li>
              <a href="#saas" className="hover:text-neon transition-colors">Micro Saas</a>
            </li>
             <li>
              <a href="#work" className="hover:text-neon transition-colors">Work</a>
            </li>
             <li>
              <a href="#contact" className="hover:text-neon transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h4 className="text-lg font-semibold">Let’s Talk</h4>
          <a
            href="mailto:hello@storm.software"
            className="mt-4 flex items-center gap-2 text-sm text-white/70 hover:text-neon transition-colors"
          >
            <Mail size={16} /> contact@atomuz.com
          </a>

          <div className="mt-6 flex items-center gap-4">
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial="initial"
              whileHover="hover"
              className="p-2 rounded-full bg-white/10 hover:bg-neon/20 transition"
            >
              <Instagram size={20} className="text-white" />
            </motion.a>

            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              initial="initial"
              whileHover="hover"
              className="p-2 rounded-full bg-white/10 hover:bg-neon/20 transition"
            >
              <Facebook size={20} className="text-white" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Atomuz Development. All rights reserved.
      </div>

      {/* Glow Accent */}
      <div
        aria-hidden
        className="absolute -bottom-40 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(57,255,20,0.15),transparent_70%)] blur-3xl -z-10"
      />
    </footer>
  );
}
