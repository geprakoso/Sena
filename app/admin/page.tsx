import Link from 'next/link';
import { getAllCaseStudies, deleteCaseStudyAction } from '@/lib/actions';
import { revalidatePath } from 'next/cache';
import DeleteButton from '@/components/admin/DeleteButton';

async function handleDelete(formData: FormData) {
  'use server';
  const id = formData.get('id') as string;
  await deleteCaseStudyAction(id);
  revalidatePath('/admin');
}

export default async function CaseStudiesPage() {
  const caseStudies = await getAllCaseStudies();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Case Studies</h1>
          <p className="text-gray-400 mt-1">Manage your portfolio case studies</p>
        </div>
        <Link
            href="/admin/new"
          className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
        >
          + Add New Case Study
        </Link>
      </div>

      {caseStudies.length === 0 ? (
        <div className="text-center py-16 bg-gray-900 rounded-xl border border-gray-800">
          <p className="text-gray-400 text-lg mb-4">No case studies yet</p>
          <Link
          href="/admin/new"
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors inline-block"
          >
            Create your first case study
          </Link>
        </div>
      ) : (
        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-800/50 border-b border-gray-800">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Title</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Tag</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Industry</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Year</th>
                <th className="text-right px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {caseStudies.map((cs) => (
                <tr key={cs.id} className="hover:bg-gray-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-white">{cs.title}</div>
                    <div className="text-sm text-gray-500">/{cs.slug}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{cs.tag}</td>
                  <td className="px-6 py-4 text-gray-300">{cs.industry}</td>
                  <td className="px-6 py-4 text-gray-300">{cs.year}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/portfolio/${cs.slug}`}
                        target="_blank"
                        className="px-3 py-1.5 text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-600 rounded-lg transition-colors"
                      >
                        View
                      </Link>
                      <Link
                        href={`/admin/${cs.id}/edit`}
                        className="px-3 py-1.5 text-sm text-blue-400 hover:text-blue-300 border border-blue-900/50 hover:border-blue-800 rounded-lg transition-colors"
                      >
                        Edit
                      </Link>
                      <form action={handleDelete}>
                        <input type="hidden" name="id" value={cs.id} />
                        <DeleteButton id={cs.id} />
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
