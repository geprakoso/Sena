import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/admin" className="text-lg font-bold text-orange-400">
              Admin Dashboard
            </Link>
            <nav className="flex gap-4 text-sm">
              <Link
                href="/admin"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Case Studies
              </Link>
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                View Site
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
