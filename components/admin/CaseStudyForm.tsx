'use client';

import { useState } from 'react';
import { FormSection, InputField, TextAreaField, SelectField, FileUpload, MultiFileUpload } from './FormFields';

interface DynamicItem {
  id: string;
  [key: string]: any;
}

interface DynamicListProps {
  title: string;
  description?: string;
  fields: { name: string; label: string; type?: 'text' | 'textarea'; rows?: number }[];
  items: DynamicItem[];
  onAdd: () => void;
  onRemove: (id: string) => void;
  onChange: (id: string, field: string, value: string) => void;
}

function DynamicList({ title, description, fields, items, onAdd, onRemove, onChange }: DynamicListProps) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h4 className="text-sm font-medium text-white">{title}</h4>
          {description && <p className="text-xs text-gray-500">{description}</p>}
        </div>
        <button
          type="button"
          onClick={onAdd}
          className="px-3 py-1.5 text-sm bg-gray-800 hover:bg-gray-700 text-white rounded-lg border border-gray-700 transition-colors"
        >
          + Add
        </button>
      </div>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={item.id} className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 relative">
            <button
              type="button"
              onClick={() => onRemove(item.id)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <p className="text-xs text-gray-500 mb-3">Item {index + 1}</p>
            <div className="grid grid-cols-1 gap-3">
              {fields.map((field) => (
                <div key={field.name}>
                  <label className="block text-xs text-gray-400 mb-1">{field.label}</label>
                  {field.type === 'textarea' ? (
                    <textarea
                      value={item[field.name] || ''}
                      onChange={(e) => onChange(item.id, field.name, e.target.value)}
                      rows={field.rows || 3}
                      className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-y"
                    />
                  ) : (
                    <input
                      type="text"
                      value={item[field.name] || ''}
                      onChange={(e) => onChange(item.id, field.name, e.target.value)}
                      className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface NestedDynamicListProps {
  title: string;
  items: { id: string; title: string; nestedItems: { id: string; text: string }[] }[];
  onAddItem: () => void;
  onRemoveItem: (id: string) => void;
  onChangeItemTitle: (id: string, title: string) => void;
  onAddNested: (parentId: string) => void;
  onRemoveNested: (parentId: string, nestedId: string) => void;
  onChangeNested: (parentId: string, nestedId: string, text: string) => void;
}

function NestedDynamicList({
  title,
  items,
  onAddItem,
  onRemoveItem,
  onChangeItemTitle,
  onAddNested,
  onRemoveNested,
  onChangeNested,
}: NestedDynamicListProps) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-medium text-white">{title}</h4>
        <button
          type="button"
          onClick={onAddItem}
          className="px-3 py-1.5 text-sm bg-gray-800 hover:bg-gray-700 text-white rounded-lg border border-gray-700 transition-colors"
        >
          + Add Feature
        </button>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={item.id} className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 relative">
            <button
              type="button"
              onClick={() => onRemoveItem(item.id)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <p className="text-xs text-gray-500 mb-3">Feature {index + 1}</p>
            <div className="mb-3">
              <label className="block text-xs text-gray-400 mb-1">Feature Title</label>
              <input
                type="text"
                value={item.title}
                onChange={(e) => onChangeItemTitle(item.id, e.target.value)}
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="mb-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400">Feature Items</span>
                <button
                  type="button"
                  onClick={() => onAddNested(item.id)}
                  className="px-2 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors"
                >
                  + Add Item
                </button>
              </div>
              <div className="space-y-2">
                {item.nestedItems.map((nested, ni) => (
                  <div key={nested.id} className="flex gap-2">
                    <span className="text-xs text-gray-500 py-2">{ni + 1}.</span>
                    <input
                      type="text"
                      value={nested.text}
                      onChange={(e) => onChangeNested(item.id, nested.id, e.target.value)}
                      className="flex-1 px-3 py-1.5 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <button
                      type="button"
                      onClick={() => onRemoveNested(item.id, nested.id)}
                      className="text-gray-500 hover:text-red-400 transition-colors py-1"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function generateId() {
  return Math.random().toString(36).substring(2, 9);
}

interface CaseStudyFormProps {
  action: (formData: FormData) => Promise<void>;
  submitLabel: string;
  initialData?: any;
}

export default function CaseStudyForm({ action, submitLabel, initialData }: CaseStudyFormProps) {
  const [problems, setProblems] = useState<string[]>(
    initialData?.businessChallenge?.problems || ['']
  );

  const [highlights, setHighlights] = useState<{ id: string; title: string; description: string }[]>(
    initialData?.businessChallenge?.highlights?.map((h: any) => ({ ...h, id: generateId() })) || [{ id: generateId(), title: '', description: '' }]
  );

  const [features, setFeatures] = useState<{ id: string; title: string; nestedItems: { id: string; text: string }[] }[]>(
    initialData?.productFeatures?.map((f: any) => ({
      id: generateId(),
      title: f.title,
      nestedItems: f.items.map((item: string) => ({ id: generateId(), text: item })),
    })) || [{ id: generateId(), title: '', nestedItems: [{ id: generateId(), text: '' }] }]
  );

  const [timeline, setTimeline] = useState<{ id: string; title: string; description: string; duration: string }[]>(
    initialData?.devTimeline?.map((t: any) => ({ ...t, id: generateId() })) || [{ id: generateId(), title: '', description: '', duration: '' }]
  );

  const [techStack, setTechStack] = useState<{ id: string; name: string; category: string }[]>(
    initialData?.techStack?.map((t: any) => ({ ...t, id: generateId() })) || [{ id: generateId(), name: '', category: '' }]
  );

  const [results, setResults] = useState<{ id: string; label: string; value: string; prefix: string; suffix: string }[]>(
    initialData?.results?.map((r: any) => ({ ...r, id: generateId() })) || [{ id: generateId(), label: '', value: '', prefix: '', suffix: '' }]
  );

  const [slug, setSlug] = useState(initialData?.slug || '');

  const [removedCarouselImages, setRemovedCarouselImages] = useState<number[]>([]);
  const existingCarouselImages = initialData?.systemArchitectureImages || [];

  function handleTitleChange(title: string) {
    if (!initialData) {
      setSlug(title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
    }
  }

  function handleSubmit(formData: FormData) {
    if (!slug) {
      const title = formData.get('title') as string;
      setSlug(title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
      formData.set('slug', slug);
    } else {
      formData.set('slug', slug);
    }

    problems.forEach((p, i) => {
      if (p) formData.set(`problem_${i}`, p);
    });

    highlights.forEach((h, i) => {
      formData.set(`highlight_${i}_title`, h.title);
      formData.set(`highlight_${i}_description`, h.description);
    });

    features.forEach((f, fi) => {
      formData.set(`feature_${fi}_title`, f.title);
      f.nestedItems.forEach((item, ii) => {
        formData.set(`feature_${fi}_item_${ii}`, item.text);
      });
    });

    timeline.forEach((t, i) => {
      formData.set(`timeline_${i}_title`, t.title);
      formData.set(`timeline_${i}_description`, t.description);
      formData.set(`timeline_${i}_duration`, t.duration);
    });

    techStack.forEach((t, i) => {
      formData.set(`tech_${i}_name`, t.name);
      formData.set(`tech_${i}_category`, t.category);
    });

    results.forEach((r, i) => {
      formData.set(`result_${i}_label`, r.label);
      formData.set(`result_${i}_value`, r.value);
      formData.set(`result_${i}_prefix`, r.prefix);
      formData.set(`result_${i}_suffix`, r.suffix);
    });

    const keptImages = existingCarouselImages.filter((_: any, i: number) => !removedCarouselImages.includes(i));
    keptImages.forEach((img: string, i: number) => {
      formData.set(`carousel_kept_${i}`, img);
    });
    formData.set('_carousel_kept_count', String(keptImages.length));

    action(formData);
  }

  return (
    <form action={handleSubmit} className="space-y-2">
      <FormSection title="Basic Information" description="Title, slug, tag, industry, timeline" defaultOpen>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
          <InputField label="Title" name="title" required placeholder="e.g. Haen Komputer Management System" defaultValue={initialData?.title} />
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Slug <span className="text-red-400">*</span>
            </label>
            <input
              name="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
              placeholder="e.g. haen-komputer"
              required
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Auto-generated from title, or enter manually</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
          <InputField label="Tag" name="tag" required placeholder="e.g. Retail" defaultValue={initialData?.tag} />
          <InputField label="Industry" name="industry" required placeholder="e.g. Retail" defaultValue={initialData?.industry} />
          <InputField label="Year" name="year" required placeholder="e.g. 2024" defaultValue={initialData?.year} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
          <InputField label="Timeline" name="timeline" required placeholder="e.g. 6 months" defaultValue={initialData?.timeline} />
          <InputField label="Team Size" name="team_size" required placeholder="e.g. 3 engineers" defaultValue={initialData?.team_size} />
          <InputField label="Outcome" name="outcome" required placeholder="e.g. 40% efficiency gain" defaultValue={initialData?.outcome} />
        </div>
        <TextAreaField label="Description" name="description" required placeholder="Short description of the case study" rows={3} defaultValue={initialData?.description} />
        <InputField label="Hero Gradient" name="hero_gradient" placeholder="e.g. from-emerald-900 to-teal-900" defaultValue={initialData?.hero_gradient || 'from-emerald-900 to-teal-900'} helpText="Tailwind gradient classes for hero section" />
      </FormSection>

      <FormSection title="Client Information" description="Client name and description">
        <InputField label="Client Name" name="client_name" required placeholder="e.g. Haen Komputer" defaultValue={initialData?.client_name} />
        <TextAreaField label="Client Description" name="client_description" required placeholder="Description about the client" rows={4} defaultValue={initialData?.client_description} />
      </FormSection>

      <FormSection title="Narrative" description="The idea, challenge, and result">
        <TextAreaField label="The Idea" name="the_idea" required placeholder="What was the vision?" rows={4} defaultValue={initialData?.the_idea} />
        <TextAreaField label="The Challenge" name="the_challenge" required placeholder="What was the main challenge?" rows={4} defaultValue={initialData?.the_challenge} />
        <TextAreaField label="The Result" name="the_result" required placeholder="What was the outcome?" rows={4} defaultValue={initialData?.the_result} />
      </FormSection>

      <FormSection title="Business Challenge" description="Problems and highlights">
        <TextAreaField label="Introduction" name="business_challenge_intro" required placeholder="Overview of the business challenge" rows={3} defaultValue={initialData?.businessChallenge?.intro} />

        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-white">Problems</h4>
            <button
              type="button"
              onClick={() => setProblems([...problems, ''])}
              className="px-3 py-1.5 text-sm bg-gray-800 hover:bg-gray-700 text-white rounded-lg border border-gray-700 transition-colors"
            >
              + Add Problem
            </button>
          </div>
          <div className="space-y-2">
            {problems.map((problem, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-xs text-gray-500 py-2">{i + 1}.</span>
                <textarea
                  value={problem}
                  onChange={(e) => {
                    const newProblems = [...problems];
                    newProblems[i] = e.target.value;
                    setProblems(newProblems);
                  }}
                  rows={2}
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-y"
                  placeholder={`Problem ${i + 1}`}
                />
                {problems.length > 1 && (
                  <button
                    type="button"
                    onClick={() => setProblems(problems.filter((_, idx) => idx !== i))}
                    className="text-gray-500 hover:text-red-400 transition-colors py-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <DynamicList
          title="Highlights"
          description="Key challenge highlights"
          fields={[
            { name: 'title', label: 'Title' },
            { name: 'description', label: 'Description', type: 'textarea', rows: 2 },
          ]}
          items={highlights}
          onAdd={() => setHighlights([...highlights, { id: generateId(), title: '', description: '' }])}
          onRemove={(id) => setHighlights(highlights.filter((h) => h.id !== id))}
          onChange={(id, field, value) => {
            setHighlights(highlights.map((h) => (h.id === id ? { ...h, [field]: value } : h)));
          }}
        />
      </FormSection>

      <FormSection title="About the Project - Carousel" description="Images shown in the carousel at the bottom of About the Project section">
        <MultiFileUpload
          label="Carousel Images"
          name="system_architecture_images"
          helpText="Upload multiple screenshots for the image carousel (shown in About the Project section)"
          currentImages={existingCarouselImages.filter((_: any, i: number) => !removedCarouselImages.includes(i))}
          onRemoveImage={(index: number) => {
            const originalIndex = existingCarouselImages.findIndex((_: any, i: number) => !removedCarouselImages.includes(i) && i >= index);
            setRemovedCarouselImages([...removedCarouselImages, index]);
          }}
        />
      </FormSection>

      <FormSection title="Architecture" description="Architecture details and images">
        <TextAreaField label="Architecture Intro" name="architecture_intro" required placeholder="Describe the architecture" rows={3} defaultValue={initialData?.architecture_intro} />
        <InputField label="Architecture Type" name="architecture_type" placeholder="e.g. tall-stack-erp" defaultValue={initialData?.architecture_type} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
          <FileUpload label="Business Architecture Image" name="business_architecture_image" currentImage={initialData?.business_architecture_image} />
          <FileUpload label="System Architecture Main Image" name="system_architecture_main_image" currentImage={initialData?.system_architecture_main_image} />
        </div>
      </FormSection>

      <FormSection title="Product Images" description="Hero and product images">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
          <FileUpload label="Hero Image" name="hero_image" currentImage={initialData?.hero_image} />
          <FileUpload label="Product Image" name="product_image" currentImage={initialData?.product_image} />
        </div>
      </FormSection>

      <FormSection title="Product Features" description="Feature groups with items">
        <NestedDynamicList
          title="Features"
          items={features}
          onAddItem={() => setFeatures([...features, { id: generateId(), title: '', nestedItems: [{ id: generateId(), text: '' }] }])}
          onRemoveItem={(id) => setFeatures(features.filter((f) => f.id !== id))}
          onChangeItemTitle={(id, title) => setFeatures(features.map((f) => (f.id === id ? { ...f, title } : f)))}
          onAddNested={(parentId) => {
            setFeatures(features.map((f) =>
              f.id === parentId ? { ...f, nestedItems: [...f.nestedItems, { id: generateId(), text: '' }] } : f
            ));
          }}
          onRemoveNested={(parentId, nestedId) => {
            setFeatures(features.map((f) =>
              f.id === parentId ? { ...f, nestedItems: f.nestedItems.filter((n) => n.id !== nestedId) } : f
            ));
          }}
          onChangeNested={(parentId, nestedId, text) => {
            setFeatures(features.map((f) =>
              f.id === parentId ? { ...f, nestedItems: f.nestedItems.map((n) => (n.id === nestedId ? { ...n, text } : n)) } : f
            ));
          }}
        />
      </FormSection>

      <FormSection title="Development Timeline" description="Phases of development">
        <DynamicList
          title="Timeline Phases"
          fields={[
            { name: 'title', label: 'Phase Title' },
            { name: 'description', label: 'Description', type: 'textarea', rows: 4 },
            { name: 'duration', label: 'Duration' },
          ]}
          items={timeline}
          onAdd={() => setTimeline([...timeline, { id: generateId(), title: '', description: '', duration: '' }])}
          onRemove={(id) => setTimeline(timeline.filter((t) => t.id !== id))}
          onChange={(id, field, value) => {
            setTimeline(timeline.map((t) => (t.id === id ? { ...t, [field]: value } : t)));
          }}
        />
      </FormSection>

      <FormSection title="Tech Stack" description="Technologies used">
        <DynamicList
          title="Technologies"
          fields={[
            { name: 'name', label: 'Technology Name' },
            { name: 'category', label: 'Category' },
          ]}
          items={techStack}
          onAdd={() => setTechStack([...techStack, { id: generateId(), name: '', category: '' }])}
          onRemove={(id) => setTechStack(techStack.filter((t) => t.id !== id))}
          onChange={(id, field, value) => {
            setTechStack(techStack.map((t) => (t.id === id ? { ...t, [field]: value } : t)));
          }}
        />
      </FormSection>

      <FormSection title="Results" description="Measurable outcomes">
        <DynamicList
          title="Result Metrics"
          fields={[
            { name: 'label', label: 'Label' },
            { name: 'value', label: 'Value' },
            { name: 'prefix', label: 'Prefix' },
            { name: 'suffix', label: 'Suffix' },
          ]}
          items={results}
          onAdd={() => setResults([...results, { id: generateId(), label: '', value: '', prefix: '', suffix: '' }])}
          onRemove={(id) => setResults(results.filter((r) => r.id !== id))}
          onChange={(id, field, value) => {
            setResults(results.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
          }}
        />
      </FormSection>

      <FormSection title="Testimonial" description="Client testimonial">
        <TextAreaField label="Quote" name="testimonial_quote" required placeholder="Client testimonial quote" rows={4} defaultValue={initialData?.testimonial?.quote} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
          <InputField label="Name" name="testimonial_name" required placeholder="e.g. Operations Manager" defaultValue={initialData?.testimonial?.name} />
          <InputField label="Role" name="testimonial_role" required placeholder="e.g. Operations Lead" defaultValue={initialData?.testimonial?.role} />
          <InputField label="Company" name="testimonial_company" required placeholder="e.g. Haen Komputer" defaultValue={initialData?.testimonial?.company} />
        </div>
      </FormSection>

      <div className="flex justify-end gap-3 pt-4">
        <a
          href="/admin"
          className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors border border-gray-700"
        >
          Cancel
        </a>
        <button
          type="submit"
          className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
