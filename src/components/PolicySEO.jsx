import { useEffect } from 'react';

export default function PolicySEO({ title, description, path = '', faqs = [], type = 'WebPage' }) {
  useEffect(() => {
    const base = window.location.origin;
    const url = base + (path || window.location.pathname);

    document.title = title;

    const setMeta = (name, attr, content) => {
      let el;
      if (attr === 'name') el = document.querySelector(`meta[name="${name}"]`);
      else el = document.querySelector(`meta[property="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', 'name', description);
    setMeta('og:type', 'property', 'article');
    setMeta('og:title', 'property', title);
    setMeta('og:description', 'property', description);
    setMeta('og:url', 'property', url);
    setMeta('twitter:title', 'name', title);
    setMeta('twitter:description', 'name', description);

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': type,
      name: title,
      description,
      url,
    };

    const faqLd = faqs.length
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }
      : null;

    const addJson = (id, obj) => {
      let script = document.getElementById(id);
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = id;
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(obj);
    };

    addJson('ld-policy', jsonLd);
    if (faqLd) addJson('ld-policy-faq', faqLd);
  }, [title, description, path, faqs, type]);

  return null;
}
