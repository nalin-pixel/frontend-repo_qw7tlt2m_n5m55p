export default function ArticlesSection() {
  return (
    <section id="blog" className="py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-2xl font-bold md:text-3xl">Guides, tips, and tutorials</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Learn best practices to optimize images, speed up your site, and produce stunning videos with AI.</p>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <a href="/blog/compress-images-without-quality-loss" className="group rounded-2xl border border-black/5 bg-white p-5 text-left shadow-sm hover:shadow-lg dark:border-white/10 dark:bg-black">
            <div className="aspect-video w-full rounded-lg bg-gradient-to-tr from-sky-200 to-indigo-200 dark:from-slate-800 dark:to-indigo-900" />
            <h3 className="mt-3 text-base font-semibold">How to compress images without losing quality</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Actionable advice with simple steps and tool recommendations.</p>
            <span className="mt-2 inline-flex text-sm text-indigo-600 group-hover:translate-x-0.5 transition dark:text-indigo-400">Read article →</span>
          </a>
          <a href="/blog/best-free-video-upscaler-tools" className="group rounded-2xl border border-black/5 bg-white p-5 text-left shadow-sm hover:shadow-lg dark:border-white/10 dark:bg-black">
            <div className="aspect-video w-full rounded-lg bg-gradient-to-tr from-sky-200 to-indigo-200 dark:from-slate-800 dark:to-indigo-900" />
            <h3 className="mt-3 text-base font-semibold">Best free video upscaler tools online</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Turn soft 720p into crisp 1080p/4K with the right models.</p>
            <span className="mt-2 inline-flex text-sm text-indigo-600 group-hover:translate-x-0.5 transition dark:text-indigo-400">Read article →</span>
          </a>
          <a href="/blog/convert-images-to-webp-for-seo" className="group rounded-2xl border border-black/5 bg-white p-5 text-left shadow-sm hover:shadow-lg dark:border-white/10 dark:bg-black">
            <div className="aspect-video w-full rounded-lg bg-gradient-to-tr from-sky-200 to-indigo-200 dark:from-slate-800 dark:to-indigo-900" />
            <h3 className="mt-3 text-base font-semibold">Convert images to WebP for better SEO</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Modern formats load faster and rank better.</p>
            <span className="mt-2 inline-flex text-sm text-indigo-600 group-hover:translate-x-0.5 transition dark:text-indigo-400">Read article →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
