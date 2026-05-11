import type { Metadata } from "next";
import Services from "@/components/Services";
export const metadata: Metadata = { title: "Accountancy services" };

export default function ServicesPage() {
  return (
    <div className="py-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-2">Accountancy services</h1>
        <p className="text-[var(--color-text-muted)]">All services are available on fixed monthly fees. Book a free consultation to discuss your needs.</p>
      </div>
      <Services />
    </div>
  );
}
