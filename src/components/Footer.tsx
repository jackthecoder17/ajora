import Logo from "./Logo";
import { PrintBand } from "./Shapes";
import EmailForm from "./EmailForm";

const COLS: [string, [string, string][]][] = [
  ["Product", [["/#how", "How it works"], ["/#wheel", "The rotation"], ["/#calculator", "Calculator"], ["/#pricing", "Pricing"], ["/changelog", "Changelog"]]],
  ["Associations", [["/#notes", "Treasurers' notes"], ["/customers/ireti-traders", "Ireti Traders story"], ["/#faq", "FAQ"]]],
  ["Company", [["/signin", "Sign in"], ["/legal#privacy", "Privacy"], ["/legal#terms", "Terms"], ["/legal#security", "Security"]]],
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-cream">
      <PrintBand />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <a href="/" aria-label="Ajora home"><Logo className="text-cream" /></a>
          <p className="mt-4 max-w-xs text-cream/70">Ajo and esusu, kept honest. Made in Lagos for market associations, co-ops and the treasurers who carry the book.</p>
          <div className="mt-6 max-w-sm">
            <EmailForm id="news" label="Product news, twice a month" button="Subscribe" dark success="You're in. Next update lands October 26." />
          </div>
        </div>
        {COLS.map(([h, links]) => (
          <div key={h}>
            <h2 className="font-display text-lg font-bold text-yellow">{h}</h2>
            <ul className="mt-4 space-y-2">
              {links.map(([href, l]) => <li key={href}><a href={href} className="text-cream/80 underline-offset-4 hover:text-cream hover:underline">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-cream/15">
        <p className="mx-auto max-w-6xl px-5 py-6 text-sm text-cream/60">© 2026 Ajora Technologies Ltd, Lagos. A demo site with placeholder content.</p>
      </div>
    </footer>
  );
}
