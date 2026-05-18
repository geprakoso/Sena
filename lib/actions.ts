'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {
  insertCaseStudy,
  updateCaseStudy,
  deleteCaseStudy,
  getCaseStudyById,
  getAllCaseStudies,
} from './db';
import fs from 'fs';
import path from 'path';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'images', 'case-studies');

function ensureUploadDir(slug: string) {
  const dir = path.join(UPLOAD_DIR, slug);
  fs.mkdirSync(dir, { recursive: true });
  return dir;
}

async function handleFileUpload(file: File, slug: string, subfolder?: string): Promise<string | null> {
  if (!file || file.size === 0) return null;

  const dir = subfolder
    ? path.join(UPLOAD_DIR, slug, subfolder)
    : path.join(UPLOAD_DIR, slug);
  fs.mkdirSync(dir, { recursive: true });

  const ext = path.extname(file.name) || '.png';
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  const filename = `${timestamp}-${random}${ext}`;
  const filePath = path.join(dir, filename);

  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(filePath, buffer);

  const relativePath = subfolder
    ? `/images/case-studies/${slug}/${subfolder}/${filename}`
    : `/images/case-studies/${slug}/${filename}`;

  return relativePath;
}

async function parseFormData(formData: FormData) {
  const data: Record<string, any> = {};

  for (const [key, value] of formData.entries()) {
    if (key.endsWith('[]')) {
      const baseKey = key.slice(0, -2);
      if (!data[baseKey]) data[baseKey] = [];
      if (value) data[baseKey].push(value);
    } else if (key.includes('.')) {
      const [parent, child] = key.split('.');
      if (!data[parent]) data[parent] = {};
      data[parent][child] = value;
    } else {
      data[key] = value;
    }
  }

  return data;
}

export async function createCaseStudy(formData: FormData) {
  try {
    const title = formData.get('title') as string;
    const slug = (formData.get('slug') as string) || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

    const id = slug;

    const businessChallenge: { intro: string; problems: string[]; highlights: { title: string; description: string }[] } = {
      intro: formData.get('business_challenge_intro') as string,
      problems: [],
      highlights: [],
    };

    const problemKeys = Array.from(formData.keys()).filter(k => k.startsWith('problem_'));
    for (const key of problemKeys) {
      const val = formData.get(key);
      if (val) businessChallenge.problems.push(val as string);
    }

    let highlightIndex = 0;
    while (formData.has(`highlight_${highlightIndex}_title`)) {
      businessChallenge.highlights.push({
        title: formData.get(`highlight_${highlightIndex}_title`) as string,
        description: formData.get(`highlight_${highlightIndex}_description`) as string,
      });
      highlightIndex++;
    }

    const productFeatures: any[] = [];
    let featureIndex = 0;
    while (formData.has(`feature_${featureIndex}_title`)) {
      const featureTitle = formData.get(`feature_${featureIndex}_title`) as string;
      const items: string[] = [];
      let itemIndex = 0;
      while (formData.has(`feature_${featureIndex}_item_${itemIndex}`)) {
        const item = formData.get(`feature_${featureIndex}_item_${itemIndex}`);
        if (item) items.push(item as string);
        itemIndex++;
      }
      productFeatures.push({ title: featureTitle, items });
      featureIndex++;
    }

    const devTimeline: any[] = [];
    let timelineIndex = 0;
    while (formData.has(`timeline_${timelineIndex}_title`)) {
      devTimeline.push({
        title: formData.get(`timeline_${timelineIndex}_title`) as string,
        description: formData.get(`timeline_${timelineIndex}_description`) as string,
        duration: formData.get(`timeline_${timelineIndex}_duration`) as string,
      });
      timelineIndex++;
    }

    const techStack: any[] = [];
    let techIndex = 0;
    while (formData.has(`tech_${techIndex}_name`)) {
      techStack.push({
        name: formData.get(`tech_${techIndex}_name`) as string,
        category: formData.get(`tech_${techIndex}_category`) as string,
      });
      techIndex++;
    }

    const results: any[] = [];
    let resultIndex = 0;
    while (formData.has(`result_${resultIndex}_label`)) {
      results.push({
        label: formData.get(`result_${resultIndex}_label`) as string,
        value: formData.get(`result_${resultIndex}_value`) as string,
        prefix: (formData.get(`result_${resultIndex}_prefix`) as string) || '',
        suffix: (formData.get(`result_${resultIndex}_suffix`) as string) || '',
      });
      resultIndex++;
    }

    const testimonial = {
      quote: formData.get('testimonial_quote') as string,
      name: formData.get('testimonial_name') as string,
      role: formData.get('testimonial_role') as string,
      company: formData.get('testimonial_company') as string,
    };

    ensureUploadDir(slug);

    const businessArchitectureImage = await handleFileUpload(
      formData.get('business_architecture_image') as File, slug
    );
    const systemArchitectureMainImage = await handleFileUpload(
      formData.get('system_architecture_main_image') as File, slug
    );
    const heroImage = await handleFileUpload(
      formData.get('hero_image') as File, slug
    );
    const productImage = await handleFileUpload(
      formData.get('product_image') as File, slug
    );

    const systemArchitectureImages: string[] = [];
    const sysArchFiles = formData.getAll('system_architecture_images') as File[];
    for (const file of sysArchFiles) {
      const uploaded = await handleFileUpload(file, slug, 'architecture');
      if (uploaded) systemArchitectureImages.push(uploaded);
    }

    const caseStudyData = {
      id,
      slug,
      title,
      tag: formData.get('tag'),
      industry: formData.get('industry'),
      timeline: formData.get('timeline'),
      teamSize: formData.get('team_size'),
      year: formData.get('year'),
      outcome: formData.get('outcome'),
      description: formData.get('description'),
      heroGradient: formData.get('hero_gradient') || 'from-emerald-900 to-teal-900',
      clientName: formData.get('client_name'),
      clientDescription: formData.get('client_description'),
      theIdea: formData.get('the_idea'),
      theChallenge: formData.get('the_challenge'),
      theResult: formData.get('the_result'),
      businessChallenge,
      architectureIntro: formData.get('architecture_intro'),
      architectureType: formData.get('architecture_type') || '',
      businessArchitectureImage,
      systemArchitectureMainImage,
      systemArchitectureImages,
      heroImage,
      productImage,
      productFeatures,
      devTimeline,
      techStack,
      results,
      testimonial,
    };

    insertCaseStudy(caseStudyData);

    revalidatePath('/admin');
    redirect('/admin');
  } catch (error) {
    console.error('Error creating case study:', error);
    throw error;
  }
}

export async function updateCaseStudyAction(id: string, formData: FormData) {
  try {
    const existing = getCaseStudyById(id);
    if (!existing) throw new Error('Case study not found');

    const slug = (formData.get('slug') as string) || existing.slug;
    const title = (formData.get('title') as string) || existing.title;

    const businessChallenge: { intro: string; problems: string[]; highlights: { title: string; description: string }[] } = {
      intro: formData.get('business_challenge_intro') as string,
      problems: [],
      highlights: [],
    };

    const problemKeys = Array.from(formData.keys()).filter(k => k.startsWith('problem_'));
    for (const key of problemKeys) {
      const val = formData.get(key);
      if (val) businessChallenge.problems.push(val as string);
    }

    let highlightIndex = 0;
    while (formData.has(`highlight_${highlightIndex}_title`)) {
      businessChallenge.highlights.push({
        title: formData.get(`highlight_${highlightIndex}_title`) as string,
        description: formData.get(`highlight_${highlightIndex}_description`) as string,
      });
      highlightIndex++;
    }

    const productFeatures: any[] = [];
    let featureIndex = 0;
    while (formData.has(`feature_${featureIndex}_title`)) {
      const featureTitle = formData.get(`feature_${featureIndex}_title`) as string;
      const items: string[] = [];
      let itemIndex = 0;
      while (formData.has(`feature_${featureIndex}_item_${itemIndex}`)) {
        const item = formData.get(`feature_${featureIndex}_item_${itemIndex}`);
        if (item) items.push(item as string);
        itemIndex++;
      }
      productFeatures.push({ title: featureTitle, items });
      featureIndex++;
    }

    const devTimeline: any[] = [];
    let timelineIndex = 0;
    while (formData.has(`timeline_${timelineIndex}_title`)) {
      devTimeline.push({
        title: formData.get(`timeline_${timelineIndex}_title`) as string,
        description: formData.get(`timeline_${timelineIndex}_description`) as string,
        duration: formData.get(`timeline_${timelineIndex}_duration`) as string,
      });
      timelineIndex++;
    }

    const techStack: any[] = [];
    let techIndex = 0;
    while (formData.has(`tech_${techIndex}_name`)) {
      techStack.push({
        name: formData.get(`tech_${techIndex}_name`) as string,
        category: formData.get(`tech_${techIndex}_category`) as string,
      });
      techIndex++;
    }

    const results: any[] = [];
    let resultIndex = 0;
    while (formData.has(`result_${resultIndex}_label`)) {
      results.push({
        label: formData.get(`result_${resultIndex}_label`) as string,
        value: formData.get(`result_${resultIndex}_value`) as string,
        prefix: (formData.get(`result_${resultIndex}_prefix`) as string) || '',
        suffix: (formData.get(`result_${resultIndex}_suffix`) as string) || '',
      });
      resultIndex++;
    }

    const testimonial = {
      quote: formData.get('testimonial_quote') as string,
      name: formData.get('testimonial_name') as string,
      role: formData.get('testimonial_role') as string,
      company: formData.get('testimonial_company') as string,
    };

    ensureUploadDir(slug);

    let businessArchitectureImage: string | null = existing.business_architecture_image;
    const newBizArchFile = formData.get('business_architecture_image') as File;
    if (newBizArchFile && newBizArchFile.size > 0) {
      businessArchitectureImage = await handleFileUpload(newBizArchFile, slug);
    }

    let systemArchitectureMainImage: string | null = existing.system_architecture_main_image;
    const newSysArchMainFile = formData.get('system_architecture_main_image') as File;
    if (newSysArchMainFile && newSysArchMainFile.size > 0) {
      systemArchitectureMainImage = await handleFileUpload(newSysArchMainFile, slug);
    }

    let heroImage: string | null = existing.hero_image;
    const newHeroFile = formData.get('hero_image') as File;
    if (newHeroFile && newHeroFile.size > 0) {
      heroImage = await handleFileUpload(newHeroFile, slug);
    }

    let productImage: string | null = existing.product_image;
    const newProductFile = formData.get('product_image') as File;
    if (newProductFile && newProductFile.size > 0) {
      productImage = await handleFileUpload(newProductFile, slug);
    }

    const systemArchitectureImages: string[] = [];

    const keptCount = parseInt(formData.get('_carousel_kept_count') as string || '0', 10);
    for (let i = 0; i < keptCount; i++) {
      const keptImg = formData.get(`carousel_kept_${i}`);
      if (keptImg) systemArchitectureImages.push(keptImg as string);
    }

    const sysArchFiles = formData.getAll('system_architecture_images') as File[];
    for (const file of sysArchFiles) {
      if (file && file.size > 0) {
        const uploaded = await handleFileUpload(file, slug, 'architecture');
        if (uploaded) systemArchitectureImages.push(uploaded);
      }
    }

    const caseStudyData = {
      id,
      slug,
      title,
      tag: formData.get('tag'),
      industry: formData.get('industry'),
      timeline: formData.get('timeline'),
      teamSize: formData.get('team_size'),
      year: formData.get('year'),
      outcome: formData.get('outcome'),
      description: formData.get('description'),
      heroGradient: formData.get('hero_gradient') || existing.hero_gradient,
      clientName: formData.get('client_name'),
      clientDescription: formData.get('client_description'),
      theIdea: formData.get('the_idea'),
      theChallenge: formData.get('the_challenge'),
      theResult: formData.get('the_result'),
      businessChallenge,
      architectureIntro: formData.get('architecture_intro'),
      architectureType: formData.get('architecture_type') || '',
      businessArchitectureImage,
      systemArchitectureMainImage,
      systemArchitectureImages,
      heroImage,
      productImage,
      productFeatures,
      devTimeline,
      techStack,
      results,
      testimonial,
    };

    updateCaseStudy(id, caseStudyData);

    revalidatePath('/admin');
    revalidatePath(`/admin/${id}/edit`);
    redirect('/admin');
  } catch (error) {
    console.error('Error updating case study:', error);
    throw error;
  }
}

export async function deleteCaseStudyAction(id: string) {
  try {
    deleteCaseStudy(id);
    revalidatePath('/admin');
  } catch (error) {
    console.error('Error deleting case study:', error);
    throw error;
  }
}

export { getAllCaseStudies, getCaseStudyById };
