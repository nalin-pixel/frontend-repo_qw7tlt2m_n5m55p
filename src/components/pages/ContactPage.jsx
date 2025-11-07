import { useEffect, useState } from 'react';
import { Mail, MessageSquare, User, MapPin, Send, ShieldCheck, Linkedin, Twitter, Youtube } from 'lucide-react';

function Field({ label, type = 'text', name, placeholder, required = true }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-gray-700 dark:text-gray-300">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="rounded-lg border border-black/10 bg-white/80 px-3 py-2 shadow-sm outline-none ring-0 placeholder:text-gray-400 focus:border-indigo-500 dark:border-white/10 dark:bg-white/5"
      />
    </label>
  );
}

export default function ContactPage() {
  const [status, setStatus] = useState('idle');
  const [token, setToken] = useState('');

  useEffect(() => {
    // Simple spam gate: time-on-page token
    const t = setTimeout(() => setToken('ok'), 1200);
    return () => clearTimeout(t);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!token) return;
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      setStatus('loading');
      // In this sandbox, we log to console. Plug into backend later.
      console.log('Contact form submit', payload);
      await new Promise((r) => setTimeout(r, 600));
      setStatus('success');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="py-14">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 md:grid-cols-5">
        <div className="md:col-span-3">
          <header className="rounded-2xl bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-6 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950">
            <h1 className="text-2xl font-bold md:text-3xl">Contact Us</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">We’re always happy to hear from you. Contact our support or business team below.</p>
          </header>

          <form onSubmit={onSubmit} className="mt-6 grid gap-3 rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Field label="Full name" name="name" placeholder="Jane Doe" />
              <Field label="Email" type="email" name="email" placeholder="you@example.com" />
            </div>
            <Field label="Subject" name="subject" placeholder="How can we help?" />
            <label className="grid gap-1 text-sm">
              <span className="text-gray-700 dark:text-gray-300">Message</span>
              <textarea name="message" rows="6" required className="rounded-lg border border-black/10 bg-white/80 px-3 py-2 shadow-sm outline-none ring-0 placeholder:text-gray-400 focus:border-indigo-500 dark:border-white/10 dark:bg-white/5" placeholder="Write your message here..." />
            </label>

            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-500 flex items-center gap-2"><ShieldCheck size={16} /><span>Protected by basic anti-spam. No bots.</span></div>
              <button disabled={!token || status==='loading'} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-5 py-2 text-white disabled:opacity-60">
                <Send size={16} /> {status==='loading' ? 'Sending…' : 'Send Message'}
              </button>
            </div>
            {status==='success' && <p className="text-sm text-green-600">Message sent! We’ll reply within 1–2 business days.</p>}
            {status==='error' && <p className="text-sm text-red-600">Something went wrong. Please try again.</p>}
          </form>

          <div className="mt-8 grid gap-3 rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h2 className="text-lg font-semibold">Quick FAQs</h2>
            <div className="prose prose-slate max-w-none text-sm dark:prose-invert">
              <p><strong>How fast do you respond?</strong> Usually within one business day.</p>
              <p><strong>Can I request a custom tool?</strong> Yes, tell us your workflow and ideal output.</p>
              <p><strong>Do you store my files?</strong> Browser-first processing by default. For server tasks, temporary storage only.</p>
            </div>
          </div>
        </div>

        <aside className="md:col-span-2 grid gap-4">
          <div className="rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h3 className="font-semibold">Direct contacts</h3>
            <div className="mt-3 grid gap-2 text-sm">
              <div className="flex items-center gap-2"><Mail size={16} className="text-indigo-600"/> support@aimediatools.example</div>
              <div className="flex items-center gap-2"><Mail size={16} className="text-indigo-600"/> biz@aimediatools.example</div>
              <div className="flex items-center gap-2"><MapPin size={16} className="text-indigo-600"/> San Francisco, CA, USA</div>
            </div>
            <div className="mt-4 flex items-center gap-3 text-sm">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-indigo-600 hover:underline"><Linkedin size={16}/> LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-indigo-600 hover:underline"><Twitter size={16}/> Twitter</a>
              <a href="https://youtube.com" target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-indigo-600 hover:underline"><Youtube size={16}/> YouTube</a>
            </div>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h3 className="font-semibold">Business Hours</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Mon–Fri, 9am–6pm PT</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
