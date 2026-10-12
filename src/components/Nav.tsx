"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const LINKS = [
  ["/#how", "How it works"],
  ["/#wheel", "The rotation"],
  ["/#calculator", "Calculator"],
  ["/#pricing", "Pricing"],
  ["/changelog", "Changelog"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    if (!open) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", esc);
    document.documentElement.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", esc); document.documentElement.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <nav aria-label="Primary"
        className={"mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border-[2.5px] border-ink bg-paper px-4 py-2 transition-shadow sm:px-5 " + (scrolled ? "shadow-pop" : "")}>
        <a href="/" aria-label="Ajora home"><Logo /></a>
        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map(([h, l]) => (
            <li key={h}><a href={h} className="rounded-full px-3 py-2 text-sm font-semibold hover:bg-yellow">{l}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href="/signin" className="hidden rounded-full px-3 py-2 text-sm font-semibold hover:bg-yellow sm:inline">Sign in</a>
          <a href="/#start" className="btn bg-orange !px-4 !py-2 text-sm text-ink">Start free</a>
          <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"} className="grid h-10 w-10 place-items-center rounded-full border-[2.5px] border-ink bg-yellow lg:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="fixed inset-x-3 top-20 z-50 rounded-3xl pop-lg bg-paper p-3 lg:hidden" style={{ animation: "pop-in .3s both" }}>
          {LINKS.map(([h, l]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 font-display text-xl font-bold hover:bg-yellow">{l}</a>
          ))}
          <a href="/signin" onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 font-display text-xl font-bold hover:bg-yellow">Sign in</a>
        </div>
      )}
    </header>
  );
}
