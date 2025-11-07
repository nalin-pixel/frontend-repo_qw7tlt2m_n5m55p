import { useEffect } from 'react';

export default function LinkHandler({ onNavigate }) {
  useEffect(() => {
    const click = (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href) return;
      if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) return;
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
