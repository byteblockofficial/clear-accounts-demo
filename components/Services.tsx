const services = [
  { name: "Self-assessment tax returns", desc: "Sole traders, landlords, directors. Filed on time, every time. Year-round bookkeeping support available." },
  { name: "VAT & Making Tax Digital", desc: "MTD-compliant VAT filing, bridging software, and registration advice. We handle it end to end." },
  { name: "Payroll & auto-enrolment", desc: "Weekly, monthly, or four-weekly payroll runs. HMRC submissions, payslips, and pension auto-enrolment." },
  { name: "Bookkeeping", desc: "Monthly reconciliation, bank feeds, and management accounts. Compatible with Xero, QuickBooks, FreeAgent." },
  { name: "Company accounts", desc: "Year-end accounts and Corporation Tax return for limited companies. Companies House filing included." },
  { name: "Business start-up", desc: "Company formation, VAT registration, PAYE set-up, and first-year accounts. Flat start-up package." },
];

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-8">What we handle</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.name} className="bg-[var(--color-surface)] border-l-4 border-[var(--color-primary)] rounded-lg p-6">
              <h3 className="font-semibold text-[var(--color-primary)] mb-2">{s.name}</h3>
              <p className="text-sm text-[var(--color-text-muted)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
