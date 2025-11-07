import { Shield, Scale, FileWarning, Cookie, Copyright, RefreshCcw, Building2, Mail, MapPin, ExternalLink } from 'lucide-react';

export function Section({ icon: Icon, title, children, id }) {
  return (
    <section id={id} className="rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
      <div className="flex items-center gap-3">
        {Icon ? <Icon className="text-indigo-600 dark:text-indigo-400" size={20} /> : null}
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div className="prose prose-slate mt-3 max-w-none text-sm leading-relaxed dark:prose-invert">
        {children}
      </div>
    </section>
  );
}

export function PageHeader({ title, description, updated, breadcrumbItems }) {
  return (
    <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-8 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950">
      <div className="absolute inset-0 pointer-events-none opacity-50" style={{ background: 'radial-gradient(600px circle at 0% 0%, rgba(99,102,241,0.12), transparent 40%)' }} />
      <div className="relative">
        <p className="text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Official Document</p>
        <h1 className="mt-1 text-2xl font-bold md:text-3xl">{title}</h1>
        {description ? <p className="mt-2 max-w-3xl text-sm text-gray-600 dark:text-gray-400">{description}</p> : null}
        {updated ? (
          <p className="mt-3 text-xs text-gray-500">Last updated: {updated}</p>
        ) : null}
      </div>
    </header>
  );
}

export function ContactCard() {
  return (
    <div className="grid gap-3 rounded-xl border border-black/5 bg-white/70 p-5 text-sm shadow-sm dark:border-white/10 dark:bg-white/5">
      <div className="flex items-center gap-2"><Mail size={16} className="text-indigo-600" /><span>Support:</span><a href="mailto:support@aimediatools.example" className="text-indigo-600 hover:underline">support@aimediatools.example</a></div>
      <div className="flex items-center gap-2"><Mail size={16} className="text-indigo-600" /><span>Business:</span><a href="mailto:biz@aimediatools.example" className="text-indigo-600 hover:underline">biz@aimediatools.example</a></div>
      <div className="flex items-center gap-2"><Building2 size={16} className="text-indigo-600" /><span>Registered Office:</span><span>San Francisco, CA, USA</span></div>
    </div>
  );
}

export function PolicyFooterLinks() {
  return (
    <div className="text-sm text-gray-600 dark:text-gray-400">
      <span>Related: </span>
      <a className="text-indigo-600 hover:underline" href="/privacy">Privacy</a>
      <span className="mx-2">•</span>
      <a className="text-indigo-600 hover:underline" href="/terms">Terms</a>
      <span className="mx-2">•</span>
      <a className="text-indigo-600 hover:underline" href="/cookie">Cookie</a>
      <span className="mx-2">•</span>
      <a className="text-indigo-600 hover:underline" href="/dmca">DMCA</a>
      <span className="mx-2">•</span>
      <a className="text-indigo-600 hover:underline" href="/contact">Contact</a>
    </div>
  );
}
