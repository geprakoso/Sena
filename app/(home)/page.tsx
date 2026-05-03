import Navbar from "@/app/components/layout/Navbar";
import HeroSection from "@/app/components/sections/HeroSection";
import TrustedBy from "@/app/components/sections/TrustedBy";
import ServicesSection from "@/app/components/sections/ServicesSection";
import ApproachSection from "@/app/components/sections/ApproachSection";
import CaseStudiesSection from "@/app/components/sections/CaseStudiesSection";
import CTASection from "@/app/components/sections/CTASection";
import Footer from "@/app/components/layout/Footer";

/**
 * Home page — SolveCore landing page.
 *
 * All sections are Server Components by default.
 * Only Navbar uses "use client" for the scroll listener + pathname detection.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <TrustedBy />
        <ServicesSection />
        <ApproachSection />
        <CaseStudiesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
