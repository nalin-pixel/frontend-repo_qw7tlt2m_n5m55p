export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/80 backdrop-blur dark:bg-black/40 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Media Tools</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Free, fast, and friendly tools to compress, convert, and enhance your media. Built with performance and privacy in mind.</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Tools</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="/tools/image-compressor" className="hover:text-gray-900 dark:hover:text-white">Image Compressor</a></li>
              <li><a href="/tools/video-compressor" className="hover:text-gray-900 dark:hover:text-white">Video Compressor</a></li>
              <li><a href="/tools/image-converter" className="hover:text-gray-900 dark:hover:text-white">Image Converter</a></li>
              <li><a href="/tools/video-converter" className="hover:text-gray-900 dark:hover:text-white">Video Converter</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#about" className="hover:text-gray-900 dark:hover:text-white">About</a></li>
              <li><a href="#contact" className="hover:text-gray-900 dark:hover:text-white">Contact</a></li>
              <li><a href="#blog" className="hover:text-gray-900 dark:hover:text-white">Blog</a></li>
              <li><a href="#sitemap" className="hover:text-gray-900 dark:hover:text-white">Sitemap</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#privacy" className="hover:text-gray-900 dark:hover:text-white">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-gray-900 dark:hover:text-white">Terms & Conditions</a></li>
              <li><a href="#cookie" className="hover:text-gray-900 dark:hover:text-white">Cookie Policy</a></li>
              <li><a href="#dmca" className="hover:text-gray-900 dark:hover:text-white">DMCA</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-black/5 pt-6 text-xs text-gray-500 sm:flex-row dark:border-white/10 dark:text-gray-400">
          <p>© {new Date().getFullYear()} AI Media Tools — All rights reserved.</p>
          <p>Made for speed, accessibility, and SEO.</p>
        </div>
      </div>
    </footer>
  );
}
