import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// src/app/layout.tsx (or page.tsx if it's per-page metadata)

export const metadata = {
  title: "Atomuz Development — Custom Software & Micro-SaaS",
  description:
    "Atomuz Development builds custom software, mobile apps, web apps, and micro-SaaS starting at $5k. Clear milestones, fast delivery, and expert engineering.",
  keywords: [
    "Atomuz Development",
    "custom software development",
    "mobile app development",
    "web app development",
    "micro-SaaS",
    "startup software",
    "Atomuz micro-SaaS",
  ],
  openGraph: {
    title: "Atomuz Development — Custom Software & Micro-SaaS",
    description:
      "We create custom software, mobile apps, web apps, and micro-SaaS starting at $5k. Atomuz Development delivers clear milestones, expert engineering, and fast results.",
    url: "https://atomuz.com", // ⚡ replace with your real domain
    siteName: "Atomuz Development",
    images: [
      {
        url: "/og-image.png", // add your OG image in /public
        width: 1200,
        height: 630,
        alt: "Atomuz Development — Custom Software & Micro-SaaS",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atomuz Development — Custom Software & Micro-SaaS",
    description:
      "Atomuz Development builds custom software, mobile apps, web apps, and micro-SaaS starting at $5k.",
    images: ["/og-image.png"],
    creator: "@atomuzdev", // ⚡ replace with your Twitter handle
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
