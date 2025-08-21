"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Rocket,
  ShieldCheck,
  Cpu,
  Smartphone,
  MonitorSmartphone,
  Code2,
  CheckCircle2,
} from "lucide-react";
import NavBar from "@/_components/Navbar"
import HeroModern from "@/_components/HeroModer";
import Testimonials from "@/_components/Testimonials";
import ServicesSection from "@/_components/ServiceSection";
import ProcessSection from "@/_components/ProcessSection";
import PricingRibbon from "@/_components/PricingRibbon";
import ShowcaseSection from "@/_components/ShowcaseSection";
import LogoMarquee from "@/_components/LogoMarquee";
import FinalCTA from "@/_components/FinalCTA";
import Footer from "@/_components/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay },
});

const logos = [
  "/galvanLogo.png",
  "/raptorLogo.png",
  "/adscopyaiLogo.png",
  "/elementaLogo.png",
];

export default function Page() {
  return (
    <main className="relative">

      <NavBar />

      <HeroModern />

      <Testimonials />

      <LogoMarquee />

      <ServicesSection />

      <ProcessSection />

      <PricingRibbon />

      <ShowcaseSection />

      <FinalCTA />

      <Footer />
    </main>
  );
}

