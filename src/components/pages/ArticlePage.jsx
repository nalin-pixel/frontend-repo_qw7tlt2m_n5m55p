export default function ArticlePage({ title, img, content }) {
  return (
    <article className="py-14">
      <div className="mx-auto max-w-3xl px-6">
        <img src={img} alt="cover" className="aspect-[16/9] w-full rounded-2xl object-cover" loading="lazy" />
        <h1 className="mt-6 text-3xl font-bold md:text-4xl">{title}</h1>
        <div className="prose prose-slate mt-4 max-w-none dark:prose-invert">
          {content}
        </div>
      </div>
    </article>
  );
}
