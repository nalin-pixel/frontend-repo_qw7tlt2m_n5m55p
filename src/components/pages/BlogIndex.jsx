export default function BlogIndex({ articles }) {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-2xl font-bold md:text-3xl">Latest Articles</h1>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {articles.map((a) => (
            <a key={a.slug} href={`/blog/${a.slug}`} className="group rounded-2xl border border-black/5 bg-white p-5 shadow-sm hover:shadow-lg dark:border-white/10 dark:bg-white/5">
              <img src={a.img} alt="cover" className="aspect-video w-full rounded-lg object-cover" loading="lazy" />
              <h3 className="mt-3 text-base font-semibold">{a.title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{a.excerpt}</p>
              <span className="mt-2 inline-flex text-sm text-indigo-600 group-hover:translate-x-0.5 transition dark:text-indigo-400">Read article →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
