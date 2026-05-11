import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1C2631] text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="font-bold text-lg mb-2">Clear Accounts Ltd</p>
            <p className="text-white/70 text-sm">ICAEW chartered accountant in Manchester. Making Tax Digital specialists.</p>
          </div>
          <nav aria-label="Footer navigation">
            <p className="font-semibold mb-3">Quick links</p>
            <ul className="space-y-2">
              {[{href:"/",label:"Home"},{href:"/services",label:"Services"},{href:"/about",label:"About"},{href:"/contact",label:"Free consultation"}].map((l)=>(
                <li key={l.href}><Link href={l.href} className="text-white/70 hover:text-white text-sm transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="font-semibold mb-3">Contact</p>
            <p className="text-white/70 text-sm mb-1"><a href="tel:01610000006" className="hover:text-white transition-colors">0161 000 0006</a></p>
            <p className="text-white/70 text-sm mb-1"><a href="mailto:hello@clear-accounts.demo" className="hover:text-white transition-colors">hello@clear-accounts.demo</a></p>
            <p className="text-white/70 text-sm">Manchester, M2</p>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-white/50 text-xs text-center">
          &copy; {new Date().getFullYear()} Clear Accounts Ltd. ICAEW member. Demo site.
        </div>
      </div>
    </footer>
  );
}
