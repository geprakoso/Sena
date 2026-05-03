import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SolveCore — Software Development & Problem Solving",
  description:
    "SolveCore is a software development agency that combines engineering excellence with problem-solving mindset to deliver custom solutions that drive measurable impact.",
  keywords: [
    "software development",
    "custom software",
    "cloud engineering",
    "devops",
    "product scaling",
    "problem solving",
    "consulting",
  ],
  openGraph: {
    title: "SolveCore — Software Development & Problem Solving",
    description:
      "We build software that solves real business problems. Custom development, cloud engineering, and product scaling.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SolveCore — Software Development & Problem Solving",
    description: "We build software that solves real business problems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
