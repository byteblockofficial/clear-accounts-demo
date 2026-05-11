import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
export const metadata: Metadata = { title: "Free consultation" };

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-2">Book a free consultation</h1>
        <p className="text-[var(--color-text-muted)] mb-10">30 minutes with a chartered accountant, no obligation, and no charge. Find out exactly where you stand.</p>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <div className="space-y-6">
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6">
              <p className="font-semibold text-[var(--color-primary)] mb-3">What to bring to your consultation</p>
              <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
                <li>✓ Last 1–2 years&apos; tax returns (if applicable)</li>
                <li>✓ Details of your business structure (Ltd / sole trader / partnership)</li>
                <li>✓ A rough idea of annual turnover</li>
                <li>✓ Any letters from HMRC you&apos;re unsure about</li>
              </ul>
              <p className="text-xs text-[var(--color-text-muted)] mt-3">Don&apos;t worry if you don&apos;t have everything — we&apos;ll work with whatever you have.</p>
            </div>
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6">
              <p className="font-semibold text-[var(--color-primary)] mb-2">Call us</p>
              <a href="tel:01610000006" className="text-[var(--color-primary)] font-bold text-lg hover:underline">0161 000 0006</a>
              <p className="text-sm text-[var(--color-text-muted)] mt-1">Monday – Friday, 9am – 5:30pm</p>
            </div>
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6">
              <p className="font-semibold text-[var(--color-primary)] mb-2">ICAEW member</p>
              <p className="text-sm text-[var(--color-text-muted)]">Clear Accounts Ltd is a member firm of the Institute of Chartered Accountants in England and Wales (ICAEW).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
