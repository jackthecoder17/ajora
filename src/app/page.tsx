import { ArrowRight, BadgeCheck, CircleCheckBig, HandCoins, Landmark, ShieldCheck, Smartphone, UsersRound } from "lucide-react";
import PaperToApp from "@/components/PaperToApp";
import RotationWheel from "@/components/RotationWheel";
import WhatsAppPhone from "@/components/WhatsAppPhone";
import Calculator from "@/components/Calculator";
import Pricing from "@/components/Pricing";
import EmailForm from "@/components/EmailForm";
import { Dots, Flower, HalfMoons, Sun, Zigzag } from "@/components/Shapes";
import { FAQ, NOTES } from "@/lib/data";

const CHANNELS = ["Bank transfer", "USSD", "POS agent", "Cash to collector", "WhatsApp receipts", "SMS reminders", "Two-officer approval"];

const STEPS = [
  { n: "01", t: "Collect", d: "Members pay how they already pay: transfer, USSD, POS or cash to a collector, even with no signal.", I: HandCoins, c: "bg-orange" },
  { n: "02", t: "Match", d: "Every naira is matched to the right member and week, by narration, phone number and amount.", I: BadgeCheck, c: "bg-sky" },
  { n: "03", t: "Approve", d: "When the hand is complete, one officer requests the payout and a second approves it.", I: ShieldCheck, c: "bg-pink" },
  { n: "04", t: "Pay out", d: "The pot leaves your own bank account and every member gets a receipt in their language.", I: CircleCheckBig, c: "bg-[#b8f0c9]" },
];

function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-14 sm:pt-20">
      <Sun className="pointer-events-none absolute -left-16 top-24 hidden w-40 animate-spin-slow md:block" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="inline-flex -rotate-2 items-center gap-2 rounded-full border-[2.5px] border-ink bg-[#b8f0c9] px-4 py-1.5 text-sm font-bold shadow-pop">
            <span className="h-2.5 w-2.5 rounded-full bg-green" />For market associations and co-ops
          </p>
          <h1 className="mt-6 font-display text-[3.2rem] font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem]">
            Your{" "}
            <span className="inline-block -rotate-2 rounded-2xl border-[3px] border-ink bg-orange px-3 shadow-pop">ajo</span>,
            <br />minus the{" "}
            <span className="relative inline-block">
              wahala
              <svg viewBox="0 0 300 40" className="absolute -bottom-1 left-0 w-full sm:-bottom-2" aria-hidden="true" preserveAspectRatio="none">
                <path d="M4 26 C 60 8, 120 36, 180 16 S 270 10, 296 22" fill="none" stroke="#ff5da2" strokeWidth="9" strokeLinecap="round" />
              </svg>
            </span>.
          </h1>
          <p className="mt-7 max-w-xl text-lg text-ink-2 sm:text-xl">
            Ajora collects every hand by transfer, USSD or cash, matches each naira to the right member, and pays out with two officers signing off. No paper card. No &ldquo;abeg, who paid?&rdquo;
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#start" className="btn bg-orange text-lg text-ink">Start free<ArrowRight size={20} /></a>
            <a href="#how" className="btn bg-paper text-lg text-ink">See how it works</a>
          </div>
          <p className="mt-6 font-hand text-2xl text-ink-2">free for one circle of 15 · no card needed</p>
        </div>

        {/* Collage */}
        <div className="relative mx-auto h-[440px] w-full max-w-[460px] sm:h-[500px]" aria-hidden="true">
          <div className="absolute inset-6 rounded-[48px] border-[3px] border-ink bg-pink" style={{ backgroundImage: "radial-gradient(circle at 20px 20px,#ffc83d 7px,transparent 8px),radial-gradient(circle at 50px 50px,#1b1209 4px,transparent 5px)", backgroundSize: "60px 60px" }} />
          <figure className="absolute left-[10%] top-[8%] w-[56%] rotate-[-5deg] rounded-xl border-[3px] border-ink bg-paper p-2.5 pb-10 shadow-pop-lg">
            <img src="/images/portrait-amara.webp" alt="" className="aspect-square w-full rounded-md object-cover" />
            <figcaption className="absolute bottom-2 left-0 right-0 text-center font-hand text-xl">Funmi, treasurer 💪</figcaption>
          </figure>
          <div className="absolute right-0 top-[14%] w-[58%] animate-float rounded-2xl bg-paper p-3 pop" style={{ ["--r" as string]: "3deg", rotate: "3deg" }}>
            <p className="flex items-center gap-2 text-xs font-bold text-green"><Landmark size={14} />Transfer matched</p>
            <p className="mt-1 font-display text-xl font-extrabold">+₦100,000</p>
            <p className="text-xs text-ink-2">Ronke Adeyemi · week 14</p>
          </div>
          <div className="absolute bottom-[16%] left-0 w-[62%] animate-float rounded-2xl bg-yellow p-3 pop [animation-delay:-2s]" style={{ ["--r" as string]: "-2deg", rotate: "-2deg" }}>
            <p className="flex items-center gap-2 text-xs font-bold"><ShieldCheck size={14} />Payout approved · 2 of 2</p>
            <p className="mt-1 font-display text-xl font-extrabold">₦1,200,000 → Ronke</p>
            <div className="mt-2 flex -space-x-2">
              {["FA", "SB"].map((x, i) => <span key={x} className="grid h-7 w-7 place-items-center rounded-full border-2 border-ink text-[10px] font-bold" style={{ background: i ? "#7fd3ff" : "#ff6b1a" }}>{x}</span>)}
            </div>
          </div>
          <div className="absolute bottom-[4%] right-[4%] w-[44%] rotate-[4deg] rounded-2xl bg-green p-3 text-cream pop">
            <p className="flex items-center gap-1.5 text-xs font-bold"><Smartphone size={14} />WhatsApp</p>
            <p className="mt-1 text-sm font-semibold leading-snug">&ldquo;We don collect your ₦100,000. Thank you well well!&rdquo;</p>
          </div>
          <HalfMoons className="absolute -top-2 right-6 w-24" color="#ffc83d" />
          <p className="absolute -bottom-4 left-[30%] rotate-[-6deg] font-hand text-3xl text-indigo">no more paper card!</p>
        </div>
      </div>
    </section>
  );
}

function ChannelBand() {
  const items = [...CHANNELS, ...CHANNELS];
  return (
    <div className="overflow-x-clip py-6">
    <div className="relative -mx-6 -rotate-2 border-y-[3px] border-ink bg-green py-4 text-cream" aria-label="Payment channels">
      <div className="flex w-max animate-marquee gap-8 motion-reduce:animate-none">
        {items.map((c, i) => (
          <span key={i} aria-hidden={i >= CHANNELS.length} className="flex items-center gap-8 whitespace-nowrap font-display text-2xl font-extrabold sm:text-3xl">
            {c}<span className="inline-block h-4 w-4 rotate-45 border-2 border-ink bg-yellow" />
          </span>
        ))}
      </div>
    </div>
    </div>
  );
}

function How() {
  return (
    <section id="how" aria-labelledby="how-title" className="scroll-mt-24 px-5 pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-hand text-3xl text-pink">four steps, every week</p>
            <h2 id="how-title" className="mt-1 max-w-2xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">Same ajo you trust. Without the Friday headache.</h2>
          </div>
          <Zigzag className="h-6 w-48" color="#ff6b1a" />
        </div>
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ n, t, d, I, c }, i) => (
            <li key={n} className={"group relative rounded-[28px] p-6 pop-lg transition-transform hover:-translate-y-1.5 " + c} style={{ rotate: ["-1.5deg", "1deg", "-0.5deg", "1.5deg"][i] }}>
              <span className="font-display text-6xl font-extrabold text-ink/15">{n}</span>
              <span className="absolute right-5 top-5 grid h-14 w-14 place-items-center rounded-2xl border-[2.5px] border-ink bg-paper transition-transform group-hover:rotate-12"><I size={26} /></span>
              <h3 className="mt-2 font-display text-3xl font-extrabold">{t}</h3>
              <p className="mt-3 text-ink/80">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Notes() {
  return (
    <section id="notes" aria-labelledby="notes-title" className="scroll-mt-24 bg-orange px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center gap-4">
          <h2 id="notes-title" className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">Notes from the treasurers</h2>
          <Flower className="w-16 animate-spin-slow" />
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {NOTES.map((t) => (
            <figure key={t.n} className="relative flex flex-col rounded-md p-6 pt-8 pop-lg transition-transform hover:rotate-0" style={{ background: t.c, rotate: t.rot + "deg" }}>
              <span aria-hidden="true" className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-[-4deg] bg-paper/70 shadow-sm" />
              <blockquote className="flex-1 font-hand text-[1.7rem] leading-[1.15]">&ldquo;{t.q}&rdquo;</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                {t.img
                  ? <img src={t.img} alt="" width={44} height={44} className="h-11 w-11 rounded-full border-2 border-ink object-cover" />
                  : <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink bg-paper text-sm font-bold">{t.n.split(" ").map((p) => p[0]).slice(0, 2).join("")}</span>}
                <span><b className="block leading-tight">{t.n}</b><span className="text-sm text-ink/75">{t.r}</span></span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-16 grid items-center gap-6 rounded-[32px] bg-paper p-6 pop-lg sm:grid-cols-[auto_1fr_auto] sm:p-8">
          <img src="/images/story-detail.webp" alt="Two people sorting small paper cards into piles on a wooden table" className="h-40 w-full rounded-2xl border-[2.5px] border-ink object-cover sm:h-28 sm:w-44" />
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-orange">Association story</p>
            <p className="mt-1 font-display text-2xl font-extrabold leading-tight sm:text-3xl">Ireti Traders cut Friday reconciliation from 6 hours to 20 minutes</p>
          </div>
          <a href="/customers/ireti-traders" className="btn bg-yellow text-ink">Read it<ArrowRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24 px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 id="faq-title" className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">You go ask am. We don answer.</h2>
          <p className="mt-4 text-lg text-ink-2">Still unsure? Our Lagos team picks up by phone or WhatsApp on business days.</p>
          <Dots className="mt-8 w-24 text-orange" color="#ff6b1a" />
        </div>
        <div className="space-y-4">
          {FAQ.map(([q, a]) => (
            <details key={q} className="group rounded-3xl bg-paper pop open:bg-[#fff1c2]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display text-xl font-bold [&::-webkit-details-marker]:hidden">
                {q}
                <span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-[2.5px] border-ink bg-yellow text-xl leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="px-5 pb-5 text-lg text-ink-2">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section id="start" aria-labelledby="start-title" className="scroll-mt-24 px-5">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-ink px-6 py-16 text-cream pop-lg sm:px-14 sm:py-20">
        <Sun className="absolute -right-14 -top-14 w-48 animate-spin-slow opacity-90" color="#ff6b1a" />
        <HalfMoons className="absolute -bottom-2 left-8 w-32" color="#7fd3ff" />
        <div className="relative max-w-2xl">
          <p className="font-hand text-3xl text-yellow">oya, let&apos;s go</p>
          <h2 id="start-title" className="mt-1 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">Run this Friday&apos;s payout on Ajora</h2>
          <p className="mt-5 text-lg text-cream/80">Load your members, link the association account, and send the first receipts before the next hand is due.</p>
          <div className="mt-8 rounded-3xl bg-cream p-5 text-ink sm:p-6">
            <EmailForm id="signup" big label="Your email" button="Start free" hint="Free for one circle of up to 15 members. No card needed."
              success="Check your inbox. Your sign-in link expires in 15 minutes." />
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-cream/70"><UsersRound size={16} />Your money stays in your association&apos;s own bank account.</p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <ChannelBand />
      <How />
      <PaperToApp />
      <RotationWheel />
      <WhatsAppPhone />
      <Calculator />
      <Notes />
      <Pricing />
      <Faq />
      <Cta />
    </>
  );
}
