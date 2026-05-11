export default function Hero() {
  return (
    <section className="bg-[var(--color-primary)] text-white py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block bg-[var(--color-secondary)] text-[var(--color-text)] text-sm font-semibold px-3 py-1.5 rounded-full mb-6">Free initial consultation — no obligation</span>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">Manchester&apos;s small business accountant</h1>
          <p className="text-white/80 text-lg mb-8">ICAEW chartered · Making Tax Digital · Fixed monthly fees · 200+ clients</p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] hover:bg-[var(--color-surface)] font-bold px-6 py-3.5 rounded-md transition-colors">Book a free consultation</a>
            <a href="/services" className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white font-semibold px-6 py-3.5 rounded-md transition-colors">Our services</a>
          </div>
          <div className="flex items-center gap-2 mt-8">
            <span className="text-white text-xl font-bold">4.9★</span>
            <span className="text-white/70 text-sm">from 38 Google reviews · ICAEW member</span>
          </div>
        </div>
      </div>
    </section>
  );
}
