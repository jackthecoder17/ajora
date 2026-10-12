"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { PLANS, naira } from "@/lib/data";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="scroll-mt-24 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-hand text-3xl text-orange">no hidden charges</p>
          <h2 id="pricing-title" className="mt-1 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">Priced for a market, not a bank</h2>
          <div role="radiogroup" aria-label="Billing period" className="mt-8 inline-flex rounded-full border-[2.5px] border-ink bg-paper p-1 shadow-pop">
            {[false, true].map((y) => (
              <button key={String(y)} type="button" role="radio" aria-checked={yearly === y} onClick={() => setYearly(y)}
                className={"rounded-full px-5 py-2 font-bold transition-colors " + (yearly === y ? "bg-ink text-cream" : "")}>
                {y ? <>Yearly <span className="ml-1 rounded-full bg-yellow px-2 py-0.5 text-xs text-ink">2 months free</span></> : "Monthly"}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3 md:items-start">
          {PLANS.map((p, i) => (
            <article key={p.name} className={"relative flex flex-col rounded-[32px] p-7 pop-lg transition-transform hover:-translate-y-1 " + p.c + (p.hot ? " md:-mt-4" : "")}
              style={{ rotate: ["-1deg", "0.6deg", "-0.4deg"][i] }}>
              {p.hot && <span className="absolute -top-4 right-6 rotate-3 rounded-full border-[2.5px] border-ink bg-pink px-3 py-1 text-sm font-extrabold">Most associations</span>}
              <h3 className="font-display text-2xl font-extrabold">{p.name}</h3>
              <p className="mt-1 text-ink-2">{p.blurb}</p>
              <p className="mt-6 font-display text-5xl font-extrabold tracking-tight">{naira(yearly ? p.y : p.m)}<span className="ml-1 text-base font-semibold text-ink-2">/month</span></p>
              <p className="mt-1 h-5 text-sm text-ink-2">{p.m ? (yearly ? naira(p.y * 12) + " billed yearly" : "Billed monthly") : "Free forever"}</p>
              <a href="#start" className={"btn mt-6 text-ink " + (p.hot ? "bg-orange" : "bg-paper")}>{p.cta}</a>
              <ul className="mt-6 space-y-2.5">
                {p.feats.map((f) => <li key={f} className="flex gap-2"><Check className="mt-0.5 shrink-0 text-green" size={18} strokeWidth={3} />{f}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-ink-2">Federation with branches in many towns? <a href="mailto:hello@ajora.example" className="font-bold underline underline-offset-4">Talk to our Lagos team</a>. Paid plans start with a 30-day trial.</p>
      </div>
    </section>
  );
}
