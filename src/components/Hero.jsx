import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[78vh] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-white via-sky-50 to-indigo-50 dark:from-black dark:via-slate-900 dark:to-indigo-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80 dark:from-black/70 dark:via-black/40 dark:to-black/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl dark:text-white">
          Create, compress and enhance media with AI — instantly
        </h1>
        <p className="mt-4 text-lg text-gray-700 md:text-xl dark:text-gray-300">
          Free online image & video tools that run in your browser. No sign-up. Lightning-fast results, privacy-first processing, SEO-ready pages.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#tools" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-3 text-white shadow hover:opacity-95">
            Try Tools
          </a>
          <a href="#blog" className="pointer-events-auto inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/70 px-6 py-3 text-gray-900 backdrop-blur hover:bg-white dark:bg-white/10 dark:text-white dark:border-white/10 dark:hover:bg-white/20">
            Learn More
          </a>
        </div>
        <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">No upload limits for common tasks • Ad-supported • Premium upgrades coming soon</p>
      </div>
    </section>
  );
}
