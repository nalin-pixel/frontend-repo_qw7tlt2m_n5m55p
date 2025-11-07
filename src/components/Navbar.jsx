import { useEffect, useState } from 'react';
import { Rocket, Sun, Moon, Home, Menu } from 'lucide-react';

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setDark(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur md:backdrop-blur-xl dark:bg-black/60 dark:border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-fuchsia-500 text-white shadow">
            <Rocket size={18} />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">AI Media Tools</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Fast • Free • Powerful</p>
          </div>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <a href="#home" className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"><Home size={16}/> Home</a>
          <a href="#tools" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Tools</a>
          <a href="#blog" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Blog</a>
          <a href="#contact" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Contact</a>
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
            className="rounded-full border border-black/10 p-2 text-gray-700 hover:bg-black/5 dark:text-gray-200 dark:border-white/10 dark:hover:bg-white/5"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <button className="md:hidden rounded-md p-2 text-gray-700 dark:text-gray-200" onClick={() => setOpen(!open)} aria-label="Menu">
          <Menu />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white dark:bg-black dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-2">
            <a onClick={() => setOpen(false)} href="#home" className="block text-sm text-gray-700 dark:text-gray-300">Home</a>
            <a onClick={() => setOpen(false)} href="#tools" className="block text-sm text-gray-700 dark:text-gray-300">Tools</a>
            <a onClick={() => setOpen(false)} href="#blog" className="block text-sm text-gray-700 dark:text-gray-300">Blog</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block text-sm text-gray-700 dark:text-gray-300">Contact</a>
            <button
              aria-label="Toggle theme"
              onClick={() => setDark((d) => !d)}
              className="mt-2 inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-2 text-sm text-gray-700 hover:bg-black/5 dark:text-gray-200 dark:border-white/10 dark:hover:bg-white/5"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />} Toggle theme
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
