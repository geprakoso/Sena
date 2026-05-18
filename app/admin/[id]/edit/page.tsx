import { notFound } from 'next/navigation';
import CaseStudyForm from '@/components/admin/CaseStudyForm';
import { updateCaseStudyAction, getCaseStudyById } from '@/lib/actions';

export default async function EditCaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const caseStudy = await getCaseStudyById(id);

  if (!caseStudy) {
    notFound();
  }

  const initialData = {
    slug: caseStudy.slug,
    title: caseStudy.title,
    tag: caseStudy.tag,
    industry: caseStudy.industry,
    timeline: caseStudy.timeline,
    team_size: caseStudy.team_size,
    year: caseStudy.year,
    outcome: caseStudy.outcome,
    description: caseStudy.description,
    hero_gradient: caseStudy.hero_gradient,
    client_name: caseStudy.client_name,
    client_description: caseStudy.client_description,
    the_idea: caseStudy.the_idea,
    the_challenge: caseStudy.the_challenge,
    the_result: caseStudy.the_result,
    businessChallenge: JSON.parse(caseStudy.business_challenge),
    architecture_intro: caseStudy.architecture_intro,
    architecture_type: caseStudy.architecture_type,
    business_architecture_image: caseStudy.business_architecture_image,
    system_architecture_main_image: caseStudy.system_architecture_main_image,
    systemArchitectureImages: JSON.parse(caseStudy.system_architecture_images || '[]'),
    hero_image: caseStudy.hero_image,
    product_image: caseStudy.product_image,
    productFeatures: JSON.parse(caseStudy.product_features),
    devTimeline: JSON.parse(caseStudy.dev_timeline),
    techStack: JSON.parse(caseStudy.tech_stack),
    results: JSON.parse(caseStudy.results),
    testimonial: JSON.parse(caseStudy.testimonial),
  };

  async function boundAction(formData: FormData) {
    'use server';
    await updateCaseStudyAction(id, formData);
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Edit Case Study</h1>
        <p className="text-gray-400 mt-1">Editing: {caseStudy.title}</p>
      </div>
      <CaseStudyForm action={boundAction} submitLabel="Save Changes" initialData={initialData} />
    </div>
  );
}
