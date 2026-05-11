const testimonials = [
  { quote: "Switched to Clear Accounts 3 years ago and my tax bill has gone down every year since. Always available when I have questions.", author: "P.A.", location: "Manchester" },
  { quote: "As a sole trader the self-assessment process used to terrify me. Now it's completely stress-free — just send the records and it's done.", author: "S.N.", location: "Salford" },
  { quote: "Clear, transparent pricing and they actually explain what they're doing. Payroll, VAT, and accounts all handled seamlessly.", author: "M. & T. Williams", location: "Stockport" },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-[var(--color-surface)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-8">Client stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote key={t.author} className="bg-white border-l-4 border-[var(--color-secondary)] p-6 rounded-lg shadow-sm">
              <p className="text-[var(--color-text)] leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
              <footer className="text-sm font-semibold text-[var(--color-text-muted)]">{t.author} · {t.location}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
