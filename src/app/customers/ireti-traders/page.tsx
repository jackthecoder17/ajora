import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = { title: "How Ireti Traders retired the paper card" };

const FACTS = [["Association", "Ireti Traders' Circle"], ["Market", "Fabrics, phones and grains, Lagos"], ["Members", "12, with 3 officers and 1 collector"], ["Hand", "₦100,000 weekly, ₦1.2m pot"], ["Plan", "Market, since June 2026"], ["Channels", "Transfer, USSD, collector, WhatsApp"]];
const STATS = [["20 min", "Friday reconciliation, down from 6 hours", "bg-orange"], ["94%", "hands paid on time, up from 71%", "bg-sky"], ["₦14.4m", "paid out over a full 12-week cycle, each approved twice", "bg-yellow"]];

export default function Story() {
  return (
    <>
      <PageHead crumb="Ireti Traders" kicker="association story" title={<>How Ireti Traders retired the paper card</>}
        lead="Twelve fabric, phone and grain traders in a Lagos market have run a weekly ajo together for eleven years. Until June, the whole thing lived on one paper card in their treasurer's handbag." />
      <article className="mx-auto max-w-4xl px-5">
        <img src="/images/story-detail.webp" alt="Two people sorting small paper cards into piles on a wooden table" className="aspect-[3/2] w-full rotate-[-1deg] rounded-[28px] border-[3px] border-ink object-cover shadow-pop-lg" />
        <dl className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {FACTS.map(([k, v]) => <div key={k} className="rounded-2xl bg-paper p-4 pop"><dt className="text-xs font-bold uppercase tracking-wide text-ink-2">{k}</dt><dd className="mt-1 font-semibold">{v}</dd></div>)}
        </dl>
        <div className="mt-12 space-y-5 text-lg leading-relaxed text-ink-2 [&_h2]:pt-6 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:font-extrabold [&_h2]:text-ink">
          <h2>One card, one calculator, one very long Friday</h2>
          <p>Every Friday, Funmi Adebayo sat with the paper card, her bank app and a calculator, checking twelve names against transfers, USSD payments and the cash the collector brought in. Narrations rarely matched. &ldquo;Somebody would send money from their wife&apos;s account and write nothing,&rdquo; she says. &ldquo;I spent more time asking who paid than selling.&rdquo;</p>
          <p>The arguments were worse than the hours. Twice in 2025 a member insisted they had paid a hand the card didn&apos;t show, and the circle nearly split.</p>
          <h2>Typed in on a Sunday afternoon</h2>
          <p>The secretary, Bisi Lawal, typed in the card one Sunday: members, the rotation, and eleven weeks of payments. Each member got a reference for their narration, and the collector installed the app. By the next Friday, Ajora had matched ten of twelve payments without anyone touching them.</p>
          <figure className="my-10 rotate-1 rounded-md bg-yellow p-8 pop-lg">
            <blockquote className="font-hand text-3xl leading-tight text-ink sm:text-4xl">&ldquo;Fridays used to be six hours with the paper card. Now I check one screen, approve the payout, and everyone gets their receipt before I close the shop.&rdquo;</blockquote>
            <figcaption className="mt-6 flex items-center gap-3 text-base text-ink"><img src="/images/portrait-amara.webp" alt="" className="h-12 w-12 rounded-full border-2 border-ink object-cover" /><span><b className="block">Funmi Adebayo</b>Treasurer, Ireti Traders&apos; Circle</span></figcaption>
          </figure>
          <h2>A book everybody can see</h2>
          <p>Every member now sees the same ledger on their phone, and a WhatsApp receipt arrives when their hand lands. When Ronke Adeyemi&apos;s week 14 payout went out, all twelve members had a receipt within a minute, with two officers&apos; names on the approval.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {STATS.map(([b, s, c]) => <div key={b} className={"rounded-3xl p-6 pop-lg " + c}><p className="font-display text-4xl font-extrabold">{b}</p><p className="mt-1 font-semibold">{s}</p></div>)}
        </div>
        <div className="mt-14 flex flex-col items-start gap-4 rounded-[32px] bg-ink p-8 text-cream sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-2xl font-extrabold">Put your circle&apos;s card on Ajora</p>
          <a href="/#start" className="btn bg-orange text-ink">Start free<ArrowRight size={18} /></a>
        </div>
      </article>
    </>
  );
}
