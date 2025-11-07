export default function AboutPage() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-4xl px-6">
        <header className="rounded-2xl bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-6 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950">
          <h1 className="text-2xl font-bold md:text-3xl">About AI Media Tools</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Trusted online AI tools for secure media processing. Our mission is to make professional image and video workflows fast, private, and accessible.</p>
        </header>
        <div className="prose prose-slate mt-6 max-w-none dark:prose-invert">
          <p>We design privacy‑first tools that run in your browser when possible. For server features, we use encrypted connections and auto‑delete temporary files. No sign‑up required for core tools.</p>
          <h2>Our vision</h2>
          <ul>
            <li>Empower creators with instant, reliable utilities.</li>
            <li>Respect user privacy and data choice.</li>
            <li>Deliver performance that feels native.</li>
          </ul>
          <h2>What we build</h2>
          <p>Compression, conversion, upscaling, background removal, and more. We aim for clarity, speed, and results you can trust.</p>
        </div>
      </div>
    </section>
  );
}
