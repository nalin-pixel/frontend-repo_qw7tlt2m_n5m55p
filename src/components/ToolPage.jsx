import { useState } from 'react';
import { Upload, PlayCircle, Download } from 'lucide-react';

export default function ToolPage({ title, desc, slug }) {
  const [file, setFile] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [resultUrl, setResultUrl] = useState('');

  const onFile = (e) => {
    const f = e.target.files?.[0];
    if (f) setFile(f);
  };

  const simulateProcess = async () => {
    if (!file) return;
    setProcessing(true);
    await new Promise((r) => setTimeout(r, 1200));
    const url = URL.createObjectURL(file);
    setResultUrl(url);
    setProcessing(false);
  };

  return (
    <section className="py-14">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-2xl font-bold md:text-3xl">{title}</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{desc}</p>

        <div className="mt-6 rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
          <label className="flex cursor-pointer items-center justify-center gap-3 rounded-xl border-2 border-dashed border-black/20 p-8 text-gray-700 hover:bg-black/5 dark:border-white/20 dark:text-gray-300 dark:hover:bg-white/10">
            <input type="file" onChange={onFile} className="hidden" />
            <Upload />
            <span>Drop a file here or click to upload</span>
          </label>

          {file && (
            <div className="mt-4 rounded-lg bg-black/5 p-4 text-sm dark:bg-white/10">
              <p className="font-medium">Selected:</p>
              <p className="truncate">{file.name} • {(file.size / 1024).toFixed(1)} KB</p>
            </div>
          )}

          <div className="mt-4 flex gap-3">
            <button onClick={simulateProcess} disabled={!file || processing} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-5 py-2 text-white disabled:opacity-50">
              <PlayCircle size={18} /> {processing ? 'Processing…' : 'Process'}
            </button>
            {resultUrl && (
              <a href={resultUrl} download className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-5 py-2 dark:border-white/10 dark:bg-white/10 dark:text-white">
                <Download size={18} /> Download Result
              </a>
            )}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-white/5">
            <h3 className="font-semibold">How it works</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Your file is processed in the browser for privacy whenever possible. For heavy jobs, we’ll add cloud processing with secure deletion.</p>
          </div>
          <div className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-white/5">
            <h3 className="font-semibold">Tips</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
              <li>Prefer modern formats like WebP/AVIF for web delivery.</li>
              <li>Resize to the exact display size to save bandwidth.</li>
              <li>Keep a backup of originals before processing.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
