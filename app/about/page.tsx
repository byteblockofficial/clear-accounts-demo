import type { Metadata } from "next";
export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-6">About Clear Accounts</h1>
        <div className="space-y-4 text-[var(--color-text)]">
          <p>Clear Accounts is an ICAEW chartered accountancy practice based in Manchester city centre. We work exclusively with small businesses, sole traders, and landlords who want straightforward, no-jargon accounting support without the overheads of a large firm.</p>
          <p>Our principal accountant is ICAEW qualified with over 12 years&apos; practice experience, including three years as a senior manager at a Big Four firm before founding Clear Accounts in 2015. We&apos;ve been Making Tax Digital ready since the pilot phase and have helped over 50 clients transition smoothly.</p>
          <p>Fees are fixed monthly — no surprise invoices, no charge for a quick email or call. We work with Xero, QuickBooks, and FreeAgent, and we&apos;ll recommend whichever suits your business best.</p>
          <h2 className="text-xl font-semibold text-[var(--color-primary)] mt-6">Why choose us</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>ICAEW chartered accountant — full member</li>
            <li>Making Tax Digital specialist</li>
            <li>Fixed monthly fees — no hidden charges</li>
            <li>200+ clients across Greater Manchester</li>
            <li>Free initial consultation — no obligation</li>
            <li>Xero, QuickBooks, and FreeAgent certified</li>
          </ul>
        </div>
        <div className="mt-10">
          <a href="/contact" className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-6 py-3 rounded-md transition-colors">Book a free consultation</a>
        </div>
      </div>
    </section>
  );
}
