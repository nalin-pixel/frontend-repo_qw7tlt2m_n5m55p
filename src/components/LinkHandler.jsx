import { useEffect } from 'react';

export default function LinkHandler({ onNavigate }) {
  useEffect(() => {
    const click = (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href) return;

      // Do not intercept external links, hash links, mailto, downloads, blobs/data, or new-tab links
      if (
        a.hasAttribute('download') ||
        a.target === '_blank' ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('http') ||
        href.startsWith('blob:') ||
        href.startsWith('data:')
      ) {
        return;
      }

      // Treat as internal navigation
      e.preventDefault();
      window.history.pushState({}, '', href);
      onNavigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    document.addEventListener('click', click);
    return () => document.removeEventListener('click', click);
  }, [onNavigate]);
  return null;
}
