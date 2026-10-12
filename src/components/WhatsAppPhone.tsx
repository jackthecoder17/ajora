"use client";

import { useState } from "react";
import { ArrowLeft, CheckCheck, Phone, Video } from "lucide-react";
import { CHAT, Lang } from "@/lib/data";
import { Flower, Zigzag } from "./Shapes";

const LANGS = Object.keys(CHAT) as Lang[];

function Bubble({ children, time, me, delay }: { children: React.ReactNode; time: string; me?: boolean; delay: number }) {
  return (
    <div className={"flex " + (me ? "justify-end" : "justify-start")} style={{ animation: `pop-in .45s cubic-bezier(.34,1.56,.64,1) ${delay}s both` }}>
      <div className={"max-w-[85%] rounded-2xl px-3 py-2 text-[13px] leading-snug shadow-sm " + (me ? "rounded-tr-sm bg-[#d9fdd3]" : "rounded-tl-sm bg-white")}>
        {children}
        <span className="ml-2 inline-flex items-center gap-0.5 align-bottom text-[10px] text-ink-2/70">{time}{me && <CheckCheck size={12} className="text-[#53bdeb]" />}</span>
      </div>
    </div>
  );
}

export default function WhatsAppPhone() {
  const [lang, setLang] = useState<Lang>("Pidgin");
  const c = CHAT[lang];

  return (
    <section aria-labelledby="wa-title" className="py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <div className="lg:order-2">
          <p className="font-hand text-3xl text-green">in their own language</p>
          <h2 id="wa-title" className="mt-1 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">Receipts land on WhatsApp before the shop opens</h2>
          <Zigzag className="mt-4 h-5 w-40" />
          <p className="mt-6 max-w-lg text-lg text-ink-2">Every member picks a language. Officers keep working in English. Members without WhatsApp get the same messages by SMS.</p>
          <div role="radiogroup" aria-label="Receipt language" className="mt-8 flex flex-wrap gap-2">
            {LANGS.map((l) => (
              <button key={l} type="button" role="radio" aria-checked={lang === l} onClick={() => setLang(l)}
                className={"rounded-full border-[2.5px] border-ink px-4 py-2 font-bold transition-all " + (lang === l ? "-translate-y-0.5 bg-green text-cream shadow-pop" : "bg-paper hover:bg-yellow")}>
                {l}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mx-auto lg:order-1">
          <Flower className="absolute -left-10 -top-8 w-24 animate-spin-slow sm:-left-16 sm:w-32" color="#ff5da2" />
          <div className="relative w-[300px] rounded-[44px] border-[3px] border-ink bg-ink p-2.5 shadow-pop-lg sm:w-[330px]">
            <div className="overflow-hidden rounded-[34px] bg-[#efe7dc]">
              <div className="flex items-center gap-2 bg-[#075e54] px-3 pb-3 pt-6 text-white">
                <ArrowLeft size={18} />
                <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-white/60 bg-orange text-xs font-bold text-ink">IT</span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold">Ireti Traders Ajo</p>
                  <p className="text-[11px] text-white/75">via Ajora · verified</p>
                </div>
                <Video size={18} /><Phone size={16} />
              </div>
              <div key={lang} className="flex h-[400px] flex-col gap-2 p-3" aria-live="polite"
                style={{ backgroundImage: "radial-gradient(#d8ccb9 1px,transparent 1px)", backgroundSize: "14px 14px" }}>
                <span className="mx-auto rounded-md bg-white/80 px-2 py-0.5 text-[11px] text-ink-2">TODAY</span>
                <Bubble time="08:12" delay={0.05}>{c.paid}</Bubble>
                <Bubble time="08:13" delay={0.35} me>{c.reply}</Bubble>
                <Bubble time="10:42" delay={0.7}>
                  <span className="mb-1 block rounded-lg bg-[#f0f9f4] p-2 font-bold text-green">✓ ₦1,200,000 · Week 14</span>
                  {c.payout}
                </Bubble>
                <Bubble time="18:00" delay={1.05}>{c.remind}</Bubble>
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-ink-2">Translations are placeholders for review by native speakers.</p>
        </div>
      </div>
    </section>
  );
}
