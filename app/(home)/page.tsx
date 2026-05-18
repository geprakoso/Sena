import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TrustedBy from "@/components/sections/TrustedBy";
import ServicesSection from "@/components/sections/ServicesSection";
import ApproachSection from "@/components/sections/ApproachSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";

import { getDictionary, getCurrentLang } from "@/lib/i18n";

/**
 * Home page — SolveCore landing page.
 *
 * All sections are Server Components by default.
 * Only Navbar uses "use client" for the scroll listener + pathname detection.
 */
export default async function Home() {
  const dict = await getDictionary();
  const currentLang = await getCurrentLang();

  return (
    <>
      <Navbar dict={dict} currentLang={currentLang} />
      <main id="main-content" tabIndex={-1}>
        <HeroSection dict={dict} />
        <TrustedBy />
        <ServicesSection dict={dict} />
        <ApproachSection dict={dict} />
        <CaseStudiesSection dict={dict} />
        <CTASection dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
