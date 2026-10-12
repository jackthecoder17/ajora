"use client";

import { useRef } from "react";
import { BadgeCheck, CircleAlert, Sparkles } from "lucide-react";
import { CARD_ROWS } from "@/lib/data";
import { useScrollProgress } from "@/lib/hooks";
import { HalfMoons } from "./Shapes";

const STAGES = [
  { k: "Before", h: "The card in the treasurer's handbag", p: "Question marks, crossings-out and a calculator every Friday night. If the card gets wet, so does the circle's trust." },
  { k: "Week one", h: "Ajora reads the bank and fills it in", p: "Transfers, USSD and POS payments are matched to members by narration, phone number and amount." },
  { k: "Every week after", h: "Same circle. A book everybody can see", p: "Part payments are flagged, reminders go out, and every member sees the same ledger on their phone." },
];

export default function PaperToApp() {
  const ref = useRef<HTMLElement>(null);
  const p = useScrollProgress(ref);
  const n = CARD_ROWS.length;
  const done = CARD_ROWS.filter((_, i) => p > (i + 1) / (n + 2)).length;
  const stage = done === 0 ? 0 : done < n ? 1 : 2;
  const digital = done > 0;

  return (
    <section ref={ref} aria-labelledby="paper-title" className="relative" style={{ height: "260vh" }}>
      <div className="sticky top-0 flex h-svh items-center overflow-hidden pb-4 pt-20 sm:pb-8 sm:pt-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-5 px-5 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="hidden font-hand text-3xl text-orange sm:block">scroll small...</p>
            <h2 id="paper-title" className="mt-1 font-display text-[2rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
              From paper card to <span className="relative inline-block whitespace-nowrap"><span className="relative z-10">proper ledger</span><span aria-hidden="true" className="absolute inset-x-0 bottom-1 -z-0 h-4 -rotate-1 bg-yellow sm:h-5" /></span>
            </h2>
            <div className="mt-3 sm:mt-6 sm:min-h-36" aria-live="polite">
              <span className="inline-block rounded-full border-2 border-ink bg-pink px-3 py-1 text-sm font-bold">{STAGES[stage].k}</span>
              <h3 className="mt-2 font-display text-lg font-bold sm:mt-3 sm:text-2xl">{STAGES[stage].h}</h3>
              <p className="mt-2 hidden max-w-md text-lg text-ink-2 sm:block">{STAGES[stage].p}</p>
            </div>
            <div className="mt-4 hidden gap-2 sm:flex" aria-hidden="true">
              {CARD_ROWS.map((_, i) => <span key={i} className={"h-2.5 flex-1 rounded-full border-2 border-ink transition-colors duration-500 " + (i < done ? "bg-green" : "bg-paper")} />)}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <HalfMoons className="absolute -right-4 -top-10 hidden w-28 rotate-12 sm:block" color="#2c2fa3" />
            <div
              className={"relative rounded-3xl p-4 pop-lg transition-[background-color,transform] duration-700 sm:p-6 " + (digital ? "rotate-0 bg-paper" : "-rotate-3 bg-[#fdf1d6]")}
              style={digital ? undefined : { backgroundImage: "repeating-linear-gradient(transparent 0 39px,#d9c39b 39px 40px)", backgroundPosition: "0 58px" }}
            >
              <div className="flex items-center justify-between gap-3 border-b-2 border-dashed border-ink/30 pb-3">
                {digital ? (
                  <>
                    <div>
                      <p className="font-display text-lg font-bold">Ireti Traders · Week 14</p>
                      <p className="text-sm text-ink-2">Weekly hand ₦100,000</p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-green px-3 py-1 text-xs font-bold text-cream"><Sparkles size={14} />{done} of {n} matched</span>
                  </>
                ) : (
                  <p className="font-hand text-3xl leading-none">IRETI AJO — wk 14 ✍️</p>
                )}
              </div>
              <ul className="mt-2">
                {CARD_ROWS.map((r, i) => {
                  const dig = i < done;
                  return (
                    <li key={r.n} className="relative h-11 sm:h-[52px]">
                      <div className={"absolute inset-0 flex items-center gap-3 font-hand text-2xl transition-all duration-500 " + (dig ? "pointer-events-none -translate-x-4 opacity-0" : "opacity-100")}>
                        <span className="w-20">{r.n}</span>
                        <span className={i === 2 ? "text-[#c2185b] line-through decoration-2" : ""}>{r.paper}</span>
                      </div>
                      <div className={"absolute inset-0 flex items-center gap-3 transition-all duration-500 " + (dig ? "opacity-100" : "translate-x-4 opacity-0")}>
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-ink text-xs font-bold" style={{ background: ["#ff6b1a", "#7fd3ff", "#ffc83d", "#ff5da2", "#b8f0c9", "#c9c6ff"][i] }}>{r.n.slice(0, 2).toUpperCase()}</span>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-bold leading-tight">{r.n}</p>
                          <p className="truncate text-xs text-ink-2 sm:text-sm">{r.app}</p>
                        </div>
                        {r.ok ? <BadgeCheck className="shrink-0 text-green" /> : <CircleAlert className="shrink-0 text-orange" />}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            {!digital && <p className="absolute -bottom-9 right-2 hidden rotate-3 sm:block font-hand text-2xl text-[#c2185b]">abeg who paid?? 😩</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
