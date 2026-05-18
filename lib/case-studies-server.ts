import 'server-only';
import type { CaseStudyDetail } from '@/types';
import { getAllCaseStudies, getCaseStudyById as getFromDb, getCaseStudyBySlug } from './db';

export function getCaseStudyDetailsFromDb(): CaseStudyDetail[] {
  const rows = getAllCaseStudies();

  return rows.map((row: any) => ({
    id: row.id,
    slug: row.slug,
    title: row.title,
    tag: row.tag,
    industry: row.industry,
    timeline: row.timeline,
    teamSize: row.team_size,
    year: row.year,
    outcome: row.outcome,
    description: row.description,
    heroGradient: row.hero_gradient,
    clientName: row.client_name,
    clientDescription: row.client_description,
    theIdea: row.the_idea,
    theChallenge: row.the_challenge,
    theResult: row.the_result,
    businessChallenge: JSON.parse(row.business_challenge),
    architectureIntro: row.architecture_intro,
    architectureType: row.architecture_type,
    businessArchitectureImage: row.business_architecture_image || undefined,
    systemArchitectureMainImage: row.system_architecture_main_image || undefined,
    systemArchitectureImages: JSON.parse(row.system_architecture_images || '[]'),
    heroImage: row.hero_image || undefined,
    productImage: row.product_image || undefined,
    productFeatures: JSON.parse(row.product_features),
    devTimeline: JSON.parse(row.dev_timeline),
    techStack: JSON.parse(row.tech_stack),
    results: JSON.parse(row.results),
    testimonial: JSON.parse(row.testimonial),
  }));
}

export function getCaseStudyDetailFromDb(id: string): CaseStudyDetail | null {
  const row = getFromDb(id);
  if (!row) return null;

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    tag: row.tag,
    industry: row.industry,
    timeline: row.timeline,
    teamSize: row.team_size,
    year: row.year,
    outcome: row.outcome,
    description: row.description,
    heroGradient: row.hero_gradient,
    clientName: row.client_name,
    clientDescription: row.client_description,
    theIdea: row.the_idea,
    theChallenge: row.the_challenge,
    theResult: row.the_result,
    businessChallenge: JSON.parse(row.business_challenge),
    architectureIntro: row.architecture_intro,
    architectureType: row.architecture_type,
    businessArchitectureImage: row.business_architecture_image || undefined,
    systemArchitectureMainImage: row.system_architecture_main_image || undefined,
    systemArchitectureImages: JSON.parse(row.system_architecture_images || '[]'),
    heroImage: row.hero_image || undefined,
    productImage: row.product_image || undefined,
    productFeatures: JSON.parse(row.product_features),
    devTimeline: JSON.parse(row.dev_timeline),
    techStack: JSON.parse(row.tech_stack),
    results: JSON.parse(row.results),
    testimonial: JSON.parse(row.testimonial),
  };
}

export function getCaseStudyDetailBySlugFromDb(slug: string): CaseStudyDetail | null {
  const row = getCaseStudyBySlug(slug);
  if (!row) return null;

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    tag: row.tag,
    industry: row.industry,
    timeline: row.timeline,
    teamSize: row.team_size,
    year: row.year,
    outcome: row.outcome,
    description: row.description,
    heroGradient: row.hero_gradient,
    clientName: row.client_name,
    clientDescription: row.client_description,
    theIdea: row.the_idea,
    theChallenge: row.the_challenge,
    theResult: row.the_result,
    businessChallenge: JSON.parse(row.business_challenge),
    architectureIntro: row.architecture_intro,
    architectureType: row.architecture_type,
    businessArchitectureImage: row.business_architecture_image || undefined,
    systemArchitectureMainImage: row.system_architecture_main_image || undefined,
    systemArchitectureImages: JSON.parse(row.system_architecture_images || '[]'),
    heroImage: row.hero_image || undefined,
    productImage: row.product_image || undefined,
    productFeatures: JSON.parse(row.product_features),
    devTimeline: JSON.parse(row.dev_timeline),
    techStack: JSON.parse(row.tech_stack),
    results: JSON.parse(row.results),
    testimonial: JSON.parse(row.testimonial),
  };
}
