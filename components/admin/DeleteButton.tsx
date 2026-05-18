'use client';

export default function DeleteButton({ id }: { id: string }) {
  return (
    <button
      type="submit"
      className="px-3 py-1.5 text-sm text-red-400 hover:text-red-300 border border-red-900/50 hover:border-red-800 rounded-lg transition-colors"
      onClick={(e) => {
        if (!confirm('Are you sure you want to delete this case study?')) {
          e.preventDefault();
        }
      }}
    >
      Delete
    </button>
  );
}
