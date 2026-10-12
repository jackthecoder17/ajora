"use client";

import { useId, useState } from "react";
import { CalendarDays, Coins, Users } from "lucide-react";
import { PLANS, naira } from "@/lib/data";
import { Dots } from "./Shapes";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function Calculator() {
  const id = useId();
  const [hand, setHand] = useState(20000);
  const [members, setMembers] = useState(12);
  const [freq, setFreq] = useState<"weekly" | "monthly">("weekly");
  const [pos, setPos] = useState(5);
  const position = Math.min(pos, members);

  const pot = hand * members;
  const unit = freq === "weekly" ? "week" : "month";
  const start = new Date(2026, 9, 16); // first payout: Friday October 16, 2026
  const when = new Date(start);
  if (freq === "weekly") when.setDate(start.getDate() + (position - 1) * 7);
  else when.setMonth(start.getMonth() + position - 1);
  const plan = members <= 15 ? PLANS[0] : members <= 60 ? PLANS[1] : PLANS[2];

  const field = "w-full rounded-2xl border-[2.5px] border-ink bg-paper px-4 py-3 text-lg font-bold";

  return (
    <section id="calculator" aria-labelledby="calc-title" className="scroll-mt-24 px-5 py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-yellow p-6 pop-lg sm:p-12">
        <Dots className="absolute -right-4 -top-4 w-28 opacity-20" />
        <p className="font-hand text-3xl text-indigo">do the maths</p>
        <h2 id="calc-title" className="mt-1 max-w-2xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">How big is your pot?</h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <label htmlFor={id + "hand"} className="font-bold">Each person&apos;s hand (₦)</label>
              <input id={id + "hand"} type="number" inputMode="numeric" min={1000} step={1000} value={hand}
                onChange={(e) => setHand(Math.max(0, Number(e.target.value) || 0))} className={field + " mt-2"} />
            </div>
            <div>
              <label htmlFor={id + "members"} className="flex justify-between font-bold"><span>Members</span><span>{members}</span></label>
              <input id={id + "members"} type="range" min={4} max={100} value={members} onChange={(e) => setMembers(Number(e.target.value))} className="mt-3 w-full accent-ink" />
            </div>
            <fieldset>
              <legend className="font-bold">How often?</legend>
              <div className="mt-2 grid grid-cols-2 gap-3">
                {(["weekly", "monthly"] as const).map((f) => (
                  <label key={f} className={"cursor-pointer rounded-2xl border-[2.5px] border-ink px-4 py-3 text-center font-bold capitalize transition-all has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-indigo " + (freq === f ? "bg-ink text-yellow" : "bg-paper")}>
                    <input type="radio" name={id + "freq"} value={f} checked={freq === f} onChange={() => setFreq(f)} className="sr-only" />{f}
                  </label>
                ))}
              </div>
            </fieldset>
            <div>
              <label htmlFor={id + "pos"} className="flex justify-between font-bold"><span>Your turn in the rotation</span><span>#{position}</span></label>
              <input id={id + "pos"} type="range" min={1} max={members} value={position} onChange={(e) => setPos(Number(e.target.value))} className="mt-3 w-full accent-ink" />
            </div>
          </div>

          <div className="flex flex-col gap-4" aria-live="polite">
            <div className="rounded-3xl bg-ink p-6 text-cream">
              <p className="flex items-center gap-2 font-bold text-yellow"><Coins size={20} />Your payout</p>
              <p className="mt-2 break-words font-display text-5xl font-extrabold tracking-tight sm:text-6xl">{naira(pot)}</p>
              <p className="mt-2 text-cream/75">{members} members × {naira(hand)} every {unit}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-paper p-5 pop">
                <p className="flex items-center gap-2 text-sm font-bold"><CalendarDays size={18} />You collect on</p>
                <p className="mt-1 font-display text-2xl font-extrabold">{when.getDate()} {MONTHS[when.getMonth()]} {when.getFullYear()}</p>
                <p className="text-sm text-ink-2">{unit} {position} of {members}, if you start Oct 16</p>
              </div>
              <div className="rounded-3xl bg-paper p-5 pop">
                <p className="flex items-center gap-2 text-sm font-bold"><Users size={18} />Ajora plan</p>
                <p className="mt-1 font-display text-2xl font-extrabold">{plan.name}</p>
                <p className="text-sm text-ink-2">{plan.m ? naira(plan.m) + " a month for the whole circle" : "Free, forever"}</p>
              </div>
            </div>
            <a href="#start" className="btn self-start bg-orange text-ink">Start this circle free</a>
          </div>
        </div>
      </div>
    </section>
  );
}
