import { useMemo } from 'react';
import ToolPage from './pages/ToolPage';
import ArticlePage from './pages/ArticlePage';
import BlogIndex from './pages/BlogIndex';
import LegalPage from './pages/LegalPage';
import { PrivacyPolicy, TermsConditions, DisclaimerPage, CookiePolicy, DMCA, RefundPolicy } from './pages/Policies';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

const toolMeta = [
  { slug: 'image-compressor', title: 'Image Compressor', desc: 'Compress JPG, PNG, and WebP without visible quality loss.' },
  { slug: 'image-resizer', title: 'Image Resizer', desc: 'Resize images to exact dimensions for web and social.' },
  { slug: 'image-converter', title: 'Image Converter', desc: 'Convert between JPG, PNG, WebP, HEIC and more.' },
  { slug: 'bg-remover', title: 'AI Background Remover', desc: 'Remove backgrounds with crisp edges.' },
  { slug: 'face-enhancer', title: 'AI Face Enhancer', desc: 'Sharpen portraits, brighten eyes, and fix details.' },
  { slug: 'video-compressor', title: 'Video Compressor', desc: 'Shrink MP4, MOV, AVI while keeping clarity.' },
  { slug: 'video-converter', title: 'Video Converter', desc: 'Convert MP4, WebM, MOV quickly and cleanly.' },
  { slug: 'video-stabilizer', title: 'Video Stabilizer', desc: 'Smooth shaky footage for a pro look.' },
  { slug: 'audio-remover', title: 'Audio Remover', desc: 'Strip audio tracks from video instantly.' },
  { slug: 'video-gif', title: 'Video to GIF', desc: 'Turn clips into lightweight GIFs for sharing.' },
  { slug: 'pdf-compressor', title: 'PDF Compressor', desc: 'Make PDFs smaller and easier to send.' },
  { slug: 'thumbnail-ai', title: 'AI Thumbnail Generator', desc: 'Auto-generate catchy thumbnails that get clicks.' },
];

const articles = [
  {
    slug: 'compress-images-without-quality-loss',
    title: 'How to Compress Images Without Losing Quality',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Keep your site fast and visuals crisp with smart formats and settings.',
    content: (
      <>
        <p>Use modern formats like WebP and AVIF, and balance quality around 70–82 for JPGs. For graphics, prefer PNG‑8 or SVG when possible.</p>
        <ol className="list-decimal pl-5 space-y-2 mt-3">
          <li>Batch convert to WebP.</li>
          <li>Resize to displayed dimensions.</li>
          <li>Optimize metadata and strip EXIF.</li>
        </ol>
      </>
    ),
  },
  {
    slug: 'best-free-video-upscaler-tools',
    title: 'The Best Free Video Upscaler Tools Online',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Turn soft 720p clips into sharp 1080p/4K with AI models and proper settings.',
    content: (
      <>
        <p>For live‑action, use models tuned for detail preservation; for animation, use de‑noise with edge retention. Export to high bitrate H.264 or VP9.</p>
      </>
    ),
  },
  {
    slug: 'convert-images-to-webp-for-seo',
    title: 'Convert Images to WebP for Better SEO',
    img: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Modern formats load faster and score higher in Core Web Vitals.',
    content: (
      <>
        <p>WebP offers superior compression compared to JPG/PNG with transparent support. Keep a fallback only if your audience uses legacy browsers.</p>
      </>
    ),
  },
];

export default function PageRouter({ path }) {
  const View = useMemo(() => {
    if (path === '/blog') return () => <BlogIndex articles={articles} />;
    if (path.startsWith('/blog/')) {
      const slug = path.replace('/blog/', '');
      const post = articles.find((a) => a.slug === slug);
      if (post) return () => <ArticlePage {...post} />;
    }
    if (path.startsWith('/tools/')) {
      const slug = path.replace('/tools/', '');
      const meta = toolMeta.find((t) => t.slug === slug);
      if (meta) return () => <ToolPage {...meta} />;
    }

    // Legal & info pages
    if (path === '/privacy') return () => <PrivacyPolicy />;
    if (path === '/terms') return () => <TermsConditions />;
    if (path === '/disclaimer') return () => <DisclaimerPage />;
    if (path === '/cookie') return () => <CookiePolicy />;
    if (path === '/dmca') return () => <DMCA />;
    if (path === '/refund') return () => <RefundPolicy />;
    if (path === '/about') return () => <AboutPage />;
    if (path === '/contact') return () => <ContactPage />;

    if (path === '/sitemap') {
      return () => (
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-2xl font-bold md:text-3xl">Sitemap</h1>
          <ul className="mt-4 list-disc pl-6 space-y-1">
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            {toolMeta.map((t) => (
              <li key={t.slug}><a href={`/tools/${t.slug}`}>{t.title}</a></li>
            ))}
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/disclaimer">Disclaimer</a></li>
            <li><a href="/cookie">Cookie Policy</a></li>
            <li><a href="/dmca">DMCA</a></li>
            <li><a href="/refund">Refund Policy</a></li>
          </ul>
        </div>
      );
    }

    return () => (
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h1 className="text-2xl font-bold md:text-3xl">Page not found</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">The page you’re looking for doesn’t exist. Go back home.</p>
        <a href="/" className="mt-6 inline-flex rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2 text-white">Return Home</a>
      </div>
    );
  }, [path]);

  return <View />;
}
