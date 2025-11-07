import { Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  const parts = items.length ? items : [{ label: 'Home', href: '/' }];
  return (
    <nav aria-label="Breadcrumb" className="mx-auto w-full max-w-5xl px-6 py-3 text-sm text-gray-600 dark:text-gray-400">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <a href="/" className="inline-flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400">
            <Home size={16} />
            Home
          </a>
        </li>
        {parts.map((p, i) => (
          <li key={i} className="flex items-center gap-1">
            <span className="mx-2">/</span>
            {p.href ? (
              <a href={p.href} className="hover:text-indigo-600 dark:hover:text-indigo-400">{p.label}</a>
            ) : (
              <span aria-current="page" className="text-gray-800 dark:text-gray-200">{p.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
