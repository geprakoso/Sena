import CaseStudyForm from '@/components/admin/CaseStudyForm';
import { createCaseStudy } from '@/lib/actions';

export default function NewCaseStudyPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Add New Case Study</h1>
        <p className="text-gray-400 mt-1">Fill in all sections to create a new case study</p>
      </div>
      <CaseStudyForm action={createCaseStudy} submitLabel="Create Case Study" />
    </div>
  );
}
