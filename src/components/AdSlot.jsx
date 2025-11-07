export default function AdSlot({ id = 'ad-1', className = '' }) {
  return (
    <div
      id={id}
      className={`relative overflow-hidden rounded-xl border border-black/5 bg-gradient-to-br from-amber-50 to-white p-4 text-center text-xs text-amber-700 dark:from-yellow-950/30 dark:to-transparent dark:text-amber-300 ${className}`}
      aria-label="Advertisement"
    >
      <div className="pointer-events-none select-none">
        Ad space • Google AdSense ready
      </div>
    </div>
  );
}
