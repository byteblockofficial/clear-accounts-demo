import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://clear-accounts.vercel.app"),
  title: { default: "Clear Accounts | Accountant in Manchester", template: "%s | Clear Accounts" },
  description: "ICAEW chartered accountant in Manchester. Self-assessment, VAT, payroll, company accounts. Making Tax Digital specialist. Free initial consultation.",
  openGraph: { siteName: "Clear Accounts Ltd", locale: "en_GB", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="skip-link">Skip to main content</a>
        <Nav />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
