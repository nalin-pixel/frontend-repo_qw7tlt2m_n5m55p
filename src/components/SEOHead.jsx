import { useEffect } from 'react';

export default function SEOHead() {
  useEffect(() => {
    const title = 'Free AI Image & Video Tools Online – Compress, Convert, Enhance';
    const description = 'Use fast, free AI tools to compress images, convert videos, remove backgrounds, upscale to 4K, and more. No sign-up. Privacy-friendly. AdSense-ready.';
    const url = window.location.href;

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
    setMeta('og:type', 'property', 'website');
    setMeta('og:title', 'property', title);
    setMeta('og:description', 'property', description);
    setMeta('og:url', 'property', url);
    setMeta('og:image', 'property', '/og.jpg');
    setMeta('twitter:card', 'name', 'summary_large_image');
    setMeta('twitter:title', 'name', title);
    setMeta('twitter:description', 'name', description);
    setMeta('twitter:image', 'name', '/og.jpg');

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'AI Media Tools',
      url,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${url}?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    };

    const webAppLd = {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'AI Media Tools',
      applicationCategory: 'Multimedia',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '1287',
      },
    };

    const addJsonScript = (id, obj) => {
      let script = document.getElementById(id);
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = id;
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(obj);
    };

    addJsonScript('ld-website', jsonLd);
    addJsonScript('ld-webapp', webAppLd);
  }, []);

  return null;
}
