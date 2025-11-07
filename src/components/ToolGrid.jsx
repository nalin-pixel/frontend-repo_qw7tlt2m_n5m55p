import { Camera, Scissors, Image as ImageIcon, FileVideo, Waves, GaugeCircle, FileAudio, Files, Sparkles } from 'lucide-react';

const tools = [
  { slug: 'image-compressor', title: 'Image Compressor', desc: 'Reduce size of JPEG, PNG, WebP without visible quality loss.', icon: GaugeCircle },
  { slug: 'image-resizer', title: 'Image Resizer', desc: 'Resize to exact dimensions for web, social, and print.', icon: ImageIcon },
  { slug: 'image-converter', title: 'Image Converter', desc: 'Convert JPG, PNG, WebP, HEIC in seconds.', icon: Files },
  { slug: 'bg-remover', title: 'AI Background Remover', desc: 'Remove backgrounds with pixel-perfect edges.', icon: Scissors },
  { slug: 'face-enhancer', title: 'AI Face Enhancer', desc: 'Fix portraits, sharpen details, brighten eyes.', icon: Sparkles },
  { slug: 'video-compressor', title: 'Video Compressor', desc: 'Shrink MP4, MOV, AVI while keeping clarity.', icon: GaugeCircle },
  { slug: 'video-converter', title: 'Video Converter', desc: 'Convert MP4, WebM, MOV. Clean and fast.', icon: FileVideo },
  { slug: 'video-stabilizer', title: 'Video Stabilizer', desc: 'Smooth shaky footage for a pro look.', icon: Waves },
  { slug: 'audio-remover', title: 'Audio Remover', desc: 'Strip audio from any video in 1 click.', icon: FileAudio },
  { slug: 'video-gif', title: 'Video → GIF', desc: 'Turn clips into lightweight GIFs for sharing.', icon: Camera },
  { slug: 'pdf-compressor', title: 'PDF Compressor', desc: 'Make PDFs smaller and easier to email.', icon: GaugeCircle },
  { slug: 'thumbnail-ai', title: 'AI Thumbnail Generator', desc: 'Catchy thumbnails that get more clicks.', icon: Sparkles },
];

function ToolCard({ title, desc, icon: Icon, href }) {
  return (
    <a href={href} className="group flex flex-col justify-between rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:shadow-lg dark:border-white/10 dark:bg-black">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-gradient-to-tr from-sky-500/90 to-indigo-600/90 p-2 text-white shadow-md">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{desc}</p>
        </div>
      </div>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 group-hover:translate-x-0.5 transition dark:text-indigo-400">Try Tool →</span>
    </a>
  );
}

export default function ToolGrid() {
  return (
    <section id="tools" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl dark:text-white">Popular AI Image & Video Tools</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Fast, privacy-friendly, and ready for production. No sign-up required.</p>
          </div>
          <a href="#blog" className="hidden rounded-xl border border-black/10 bg-white px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 md:inline-flex">Read Guides</a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <ToolCard key={t.slug} title={t.title} desc={t.desc} icon={t.icon} href={`/tools/${t.slug}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
