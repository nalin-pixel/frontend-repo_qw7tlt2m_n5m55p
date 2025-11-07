export default function LegalPage({ title, children }) {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-2xl font-bold md:text-3xl">{title}</h1>
        <div className="prose prose-slate mt-4 max-w-none dark:prose-invert">
          {children}
        </div>
      </div>
    </section>
  );
}
