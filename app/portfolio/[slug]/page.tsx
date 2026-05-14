import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import CaseStudyHero from "@/app/components/case-study/CaseStudyHero";
import AboutProject from "@/app/components/case-study/AboutProject";
import BusinessChallenge from "@/app/components/case-study/BusinessChallenge";
import ArchitectureDetail from "@/app/components/case-study/ArchitectureDetail";
import ProductEssentials from "@/app/components/case-study/ProductEssentials";
import DevTimeline from "@/app/components/case-study/DevTimeline";
import TechStack from "@/app/components/case-study/TechStack";
import ArchitectureSection from "@/app/components/case-study/ArchitectureSection";
import ResultsSection from "@/app/components/case-study/ResultsSection";
import Testimonial from "@/app/components/case-study/Testimonial";
import CaseStudyCTA from "@/app/components/case-study/CaseStudyCTA";
import { getCaseStudyDetails } from "@/app/data/content";

export async function generateStaticParams() {
  return getCaseStudyDetails().map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyDetails().find((s) => s.slug === slug);
  if (!study) {
    return {
      title: "Case Study — SolveCore",
    };
  }
  return {
    title: `${study.title} — Case Study | SolveCore`,
    description: study.description,
    openGraph: {
      title: `${study.title} — Case Study | SolveCore`,
      description: study.description,
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} — Case Study | SolveCore`,
      description: study.description,
    },
  };
}

import { getDictionary, getCurrentLang } from "@/lib/i18n";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dict = await getDictionary();
  const currentLang = await getCurrentLang();
  const study = getCaseStudyDetails(dict).find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <Navbar dict={dict} currentLang={currentLang} />
      <main id="main-content" tabIndex={-1} data-case-study={slug}>
        <CaseStudyHero study={study} />
        <div className="case-study-content">
          <AboutProject study={study} />
          <BusinessChallenge study={study} />
          <ArchitectureDetail study={study} />
          <ProductEssentials study={study} />
          <DevTimeline study={study} />
          <TechStack study={study} />
          <ArchitectureSection study={study} />
          <ResultsSection study={study} />
          <Testimonial study={study} />
          <CaseStudyCTA />
        </div>
      </main>
      <Footer dict={dict} />
    </>
  );
}
