import { getCaseStudyDetails } from '@/lib/content';
import { insertCaseStudy, getDb } from '@/lib/db';

async function seed() {
  console.log('Seeding case studies database...');

  const db = getDb();
  const existing = db.prepare('SELECT COUNT(*) as count FROM case_studies').get() as { count: number };

  if (existing.count > 0) {
    console.log(`Database already has ${existing.count} case studies. Skipping seed.`);
    return;
  }

  const caseStudies = getCaseStudyDetails();

  for (const cs of caseStudies) {
    insertCaseStudy({
      id: cs.id,
      slug: cs.slug,
      title: cs.title,
      tag: cs.tag,
      industry: cs.industry,
      timeline: cs.timeline,
      teamSize: cs.teamSize,
      year: cs.year,
      outcome: cs.outcome,
      description: cs.description,
      heroGradient: cs.heroGradient,
      clientName: cs.clientName,
      clientDescription: cs.clientDescription,
      theIdea: cs.theIdea,
      theChallenge: cs.theChallenge,
      theResult: cs.theResult,
      businessChallenge: cs.businessChallenge,
      architectureIntro: cs.architectureIntro,
      architectureType: cs.architectureType,
      businessArchitectureImage: cs.businessArchitectureImage,
      systemArchitectureMainImage: cs.systemArchitectureMainImage,
      systemArchitectureImages: cs.systemArchitectureImages,
      heroImage: cs.heroImage,
      productImage: cs.productImage,
      productFeatures: cs.productFeatures,
      devTimeline: cs.devTimeline,
      techStack: cs.techStack,
      results: cs.results,
      testimonial: cs.testimonial,
    });
    console.log(`  Seeded: ${cs.title}`);
  }

  console.log(`Done! Seeded ${caseStudies.length} case study(ies).`);
}

seed().catch(console.error);
