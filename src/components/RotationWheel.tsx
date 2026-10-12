"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { HAND, MEMBERS, PALETTE, initials, naira } from "@/lib/data";
import { useInView, useReducedMotion } from "@/lib/hooks";
import { Sun } from "./Shapes";

const N = MEMBERS.length;

export default function RotationWheel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, 0.4);
  const reduce = useReducedMotion();
  const [week, setWeek] = useState(2);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing || !inView || reduce) return;
    const t = setInterval(() => setWeek((w) => (w + 1) % N), 1800);
    return () => clearInterval(t);
  }, [playing, inView, reduce]);

  const m = MEMBERS[week];
  const angle = (week / N) * 360;

  return (
    <section id="wheel" aria-labelledby="wheel-title" className="scroll-mt-24 overflow-x-clip bg-indigo py-24 text-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="font-hand text-3xl text-yellow">how the pot moves</p>
          <h2 id="wheel-title" className="mt-1 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">Everybody gets their turn. Nobody skips the queue.</h2>
          <p className="mt-6 max-w-lg text-lg text-cream/80">Set the order once and everyone agrees to it. Each week, when all {N} hands are in, the pot goes to the next person, and the wheel shows exactly who has collected.</p>
          <dl className="mt-8 grid max-w-md grid-cols-3 gap-3 text-ink">
            {[["Hand", naira(HAND)], ["Pot", naira(HAND * N)], ["Members", String(N)]].map(([k, v], i) => (
              <div key={k} className="rounded-2xl p-3 pop" style={{ background: [PALETTE[2], PALETTE[3], PALETTE[5]][i] }}>
                <dt className="text-xs font-bold uppercase tracking-wide">{k}</dt>
                <dd className="mt-1 font-display text-lg font-extrabold sm:text-xl">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div ref={ref}>
          <div className="relative mx-auto aspect-square w-full max-w-[min(520px,88vw)]">
            <div className="absolute inset-[11%] rounded-full border-[3px] border-dashed border-cream/40" />
            <Sun className="absolute -right-2 -top-2 w-16 animate-spin-slow sm:w-24" />
            {/* pot arm */}
            <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(.34,1.4,.64,1)]" style={{ transform: `rotate(${angle}deg)` }} aria-hidden="true">
              <div className="absolute left-1/2 top-[19%] rounded-full border-[2.5px] border-ink bg-yellow px-2 py-0.5 font-display text-[11px] font-extrabold text-ink shadow-pop transition-transform duration-700 sm:px-2.5 sm:py-1 sm:text-sm"
                style={{ transform: `translate(-50%, -50%) rotate(${-angle}deg)` }}>
                ₦1.2m
              </div>
            </div>
            <ul aria-label="Payout order">
              {MEMBERS.map((mm, i) => {
                const a = (i / N) * 2 * Math.PI - Math.PI / 2;
                const paid = i < week;
                const cur = i === week;
                return (
                  <li key={mm.n} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${(50 + 45 * Math.cos(a)).toFixed(3)}%`, top: `${(50 + 45 * Math.sin(a)).toFixed(3)}%` }}>
                    <button type="button" onClick={() => { setWeek(i); setPlaying(false); }}
                      aria-label={`Week ${i + 1}: ${mm.n}${paid ? ", already collected" : cur ? ", collecting this week" : ""}`}
                      aria-current={cur ? "true" : undefined}
                      className={"relative grid h-11 w-11 place-items-center rounded-full border-[2.5px] border-ink font-bold text-ink transition-transform duration-300 sm:h-14 sm:w-14 sm:text-lg " + (cur ? "scale-125 shadow-pop" : "hover:scale-110")}
                      style={{ background: PALETTE[i % PALETTE.length], color: i % 6 === 4 ? "#fff6e8" : undefined }}>
                      {initials(mm.n)}
                      {paid && <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full border-2 border-ink bg-green text-cream"><Check size={12} strokeWidth={3} /></span>}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="absolute inset-[27%] grid place-items-center rounded-full border-[3px] border-ink bg-cream p-2 text-center text-ink shadow-pop-lg" aria-live="polite">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-orange sm:text-sm">Week {week + 1} collects</p>
                <p className="font-display text-base font-extrabold leading-tight sm:text-2xl">{m.n}</p>
                <p className="text-[11px] text-ink-2 sm:text-sm">{m.s}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button type="button" aria-label="Previous week" onClick={() => { setWeek((w) => (w - 1 + N) % N); setPlaying(false); }} className="grid h-12 w-12 place-items-center rounded-full border-[2.5px] border-ink bg-cream text-ink shadow-pop"><ChevronLeft /></button>
            <button type="button" onClick={() => setPlaying((p) => !p)} className="btn bg-yellow text-ink">
              {playing ? <><Pause size={18} />Pause</> : <><Play size={18} />Play</>}
            </button>
            <button type="button" aria-label="Next week" onClick={() => { setWeek((w) => (w + 1) % N); setPlaying(false); }} className="grid h-12 w-12 place-items-center rounded-full border-[2.5px] border-ink bg-cream text-ink shadow-pop"><ChevronRight /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
