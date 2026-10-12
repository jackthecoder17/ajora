/* Placeholder content for Ajora. Every name, figure, quote, translation and
   price here is illustrative and must be confirmed before launch. */

export const PALETTE = ["#ff6b1a", "#0f8a4f", "#ffc83d", "#ff5da2", "#2c2fa3", "#7fd3ff"] as const;

/* The demo circle: Ireti Traders, 12 members, ₦100,000 weekly hand */
export const HAND = 100_000;
export const MEMBERS = [
  { n: "Bisi Lawal", s: "Fabrics" },
  { n: "Chidi Okonkwo", s: "Phones" },
  { n: "Ronke Adeyemi", s: "Fabrics" },
  { n: "Amaka Agu", s: "Shoes" },
  { n: "Bilkisu Musa", s: "Grains" },
  { n: "Emeka Nwosu", s: "Spare parts" },
  { n: "Titi Alabi", s: "Provisions" },
  { n: "Segun Ogundipe", s: "Electricals" },
  { n: "Fatima Yusuf", s: "Grains" },
  { n: "Kunle Bakare", s: "Phones" },
  { n: "Yetunde Oke", s: "Fabrics" },
  { n: "Obinna Ike", s: "Spare parts" },
];
export const initials = (n: string) => n.split(" ").map((p) => p[0]).join("");

/* Paper card rows that become ledger rows */
export const CARD_ROWS = [
  { n: "Bisi", paper: "100k ✓ (transfer)", app: "₦100,000 · Transfer · matched", ok: true },
  { n: "Chidi", paper: "100k ✓", app: "₦100,000 · USSD · matched", ok: true },
  { n: "Ronke", paper: "100k?? check bank", app: "₦100,000 · Transfer · matched by narration", ok: true },
  { n: "Amaka", paper: "paid 2 wks", app: "₦200,000 · POS · weeks 14 and 15", ok: true },
  { n: "Emeka", paper: "50k, owes 50k", app: "₦50,000 · Part payment · reminder sent", ok: false },
  { n: "Titi", paper: "cash to Tunde", app: "₦100,000 · Cash via collector · receipt sent", ok: true },
];

/* WhatsApp receipts per language (have native speakers review before launch) */
export type Lang = "English" | "Pidgin" | "Yorùbá" | "Igbo" | "Hausa";
export const CHAT: Record<Lang, { paid: string; remind: string; payout: string; reply: string }> = {
  English: {
    paid: "Good morning Ronke! We have received your ₦100,000 for week 14. Thank you.",
    remind: "Reminder: next week's hand of ₦100,000 is due by Thursday.",
    payout: "Week 14 payout of ₦1,200,000 has been sent to your account. Approved by Funmi and Alhaji Sani.",
    reply: "Thank you o! I've seen it 🙏",
  },
  Pidgin: {
    paid: "Good morning Ronke! We don collect your ₦100,000 for week 14. Thank you well well.",
    remind: "No forget: next week ₦100,000 go due before Thursday.",
    payout: "Your week 14 money, ₦1,200,000, don land for your account. Funmi and Alhaji Sani approve am.",
    reply: "Ehen! E don enter. Thank you 🙏",
  },
  "Yorùbá": {
    paid: "Ẹ kú àárọ̀ Ronke! A ti gba ₦100,000 yín fún ọ̀sẹ̀ kẹrìnlá. A dúpẹ́.",
    remind: "Ìrántí: owó ọ̀sẹ̀ tó ń bọ̀, ₦100,000, gbọ́dọ̀ dé ṣáájú Ọjọ́bọ̀.",
    payout: "A ti fi ₦1,200,000 ti ọ̀sẹ̀ kẹrìnlá ránṣẹ́ sí àkáǹtì yín. Funmi àti Alhaji Sani ló fọwọ́ sí i.",
    reply: "Ẹ ṣé o! Mo ti rí i 🙏",
  },
  Igbo: {
    paid: "Ụtụtụ ọma Ronke! Anyị anatala ₦100,000 gị maka izu nke iri na anọ. Daalụ.",
    remind: "Ncheta: ego izu na-abịa, ₦100,000, ga-abịa tupu Tọzdee.",
    payout: "E zigala ₦1,200,000 nke izu nke iri na anọ n'akaụntụ gị. Funmi na Alhaji Sani kwadoro ya.",
    reply: "Daalụ nke ukwuu! Ahụla m ya 🙏",
  },
  Hausa: {
    paid: "Barka da safiya Ronke! Mun karɓi ₦100,000 naki na mako na 14. Na gode.",
    remind: "Tunatarwa: kuɗin mako mai zuwa, ₦100,000, ya kamata ya iso kafin Alhamis.",
    payout: "An tura ₦1,200,000 na mako na 14 zuwa asusunki. Funmi da Alhaji Sani ne suka amince.",
    reply: "Na gode sosai! Na gani 🙏",
  },
};

export const NOTES = [
  { q: "Fridays used to be six hours with the paper card and a calculator. Now I check one screen and approve.", n: "Funmi Adebayo", r: "Treasurer, Ireti Traders", img: "/images/portrait-amara.webp", c: "#ffc83d", rot: -3 },
  { q: "Our members are in three towns. Ajora gave every one of them the same book.", n: "Ngozi Eze", r: "President, Ezinne Women's Co-op, Enugu", img: "/images/ava-priscilla.webp", c: "#7fd3ff", rot: 2 },
  { q: "Two officers approve every payout. That one rule ended our worst quarrels.", n: "Alhaji Sani Bello", r: "Chairman, Arewa Grain Sellers", c: "#ff5da2", rot: -1.5 },
  { q: "I log cash in the shed with no signal. It syncs when I reach the gate.", n: "Tunde Bakare", r: "Collector, Arewa Grain Sellers", c: "#b8f0c9", rot: 3 },
];

export const PLANS = [
  { name: "Free", m: 0, y: 0, blurb: "One small circle trying Ajora.", c: "bg-paper", cta: "Start free", feats: ["1 circle", "Up to 15 members", "Transfer and USSD matching", "Two-officer approval"] },
  { name: "Market", m: 7500, y: 6250, blurb: "A row or line running its own ajo.", c: "bg-sky", cta: "Choose Market", feats: ["3 circles", "Up to 60 members each", "Offline collector app", "WhatsApp and SMS receipts", "Reminders in 5 languages"] },
  { name: "Association", m: 25000, y: 20833, blurb: "A whole market union or co-op.", c: "bg-yellow", cta: "Choose Association", hot: true, feats: ["Unlimited circles", "Up to 500 members each", "POS agent collections", "Emergency loans from the pot", "Audit trail export"] },
];

export const FAQ: [string, string][] = [
  ["Does Ajora hold our money?", "No. Members pay into your association's own bank account and payouts leave from it. Ajora reads the transactions, keeps the book, and only starts a payout after two officers approve."],
  ["Our members don't all have smartphones.", "That's fine. They can pay by transfer, USSD, at a POS agent or in cash to a collector, and receipts arrive by SMS if they don't use WhatsApp."],
  ["What if someone forgets the reference?", "Ajora checks the bank narration, the sender's phone number and the amount. If it's not sure, the payment waits for an officer to confirm with one tap."],
  ["Can we bring our old paper card?", "Yes. Send a photo of the card or a spreadsheet and we'll load your members, the rotation and what everyone has paid so far."],
  ["What happens when someone pays late or only part?", "Part payments are recorded as they are and the balance shows against that member. Reminders go out in their language at a time your officers choose."],
  ["Can we leave and take our records?", "Any time. Export the full ledger, rotation and audit trail as a spreadsheet or PDF."],
];

export type CLEntry = { d: string; k: "New" | "Improved" | "Fixed"; t: string; p: string };
export const CL: CLEntry[] = [
  { d: "2026-10-06", k: "New", t: "Payout swaps with member consent", p: "Members can ask to swap payout weeks from WhatsApp. Both members confirm, two officers approve, and the rotation updates for everyone." },
  { d: "2026-09-29", k: "Improved", t: "Smarter narration matching", p: "Transfers with a missing or mistyped reference are now matched by phone number and amount. Unmatched transfers dropped from 9% to under 2%." },
  { d: "2026-09-15", k: "New", t: "Offline mode for collectors", p: "Record cash in sheds and basements with no signal. Entries sync, with their original time, when the phone reconnects." },
  { d: "2026-09-01", k: "Fixed", t: "Duplicate receipts on slow networks", p: "Members on slow connections sometimes got two receipts for one payment. Each receipt now carries an ID and sends once." },
  { d: "2026-08-18", k: "New", t: "Emergency loans from the pot", p: "Lend a member part of the pot with a repayment plan. Repayments show in the ledger beside normal contributions." },
  { d: "2026-08-04", k: "Improved", t: "Reminders in Yorùbá, Igbo, Hausa and Pidgin", p: "Each member picks the language for reminders and receipts. Officers still see everything in English." },
  { d: "2026-07-21", k: "Fixed", t: "Rotation order after a member leaves", p: "Removing a member mid-cycle could shift everyone after them by a week. Remaining dates now stay in place." },
];

export const naira = (v: number) => "₦" + Math.round(v).toLocaleString("en-NG");
