import type { Metadata } from "next";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = { title: "Legal and security" };

/* Placeholder summaries: must be reviewed by Ajora's legal contact before launch. */
const SECTIONS: [string, string, string, string[]][] = [
  ["privacy", "Privacy", "Your association owns its member list and ledger. We process it only to run Ajora for you, and never sell it or share it with lenders or marketers.", ["Officer and member names, phone numbers and, where given, emails.", "Read-only transaction data from the association account you connect.", "Usage events, kept for 13 months to improve Ajora.", "Officers can export or delete the association's data at any time."]],
  ["terms", "Terms", "Plans renew at the end of each billing period until cancelled. You can downgrade or cancel from settings and keep access until the period ends.", ["Ajora is record-keeping software. Funds stay in accounts your association controls.", "Your association is responsible for its own rules, rotation and member agreements.", "Paid plans include phone support on business days."]],
  ["security", "Security", "Ajora reads your association account with read-only access and never holds or moves funds by itself. Every payout needs a request and an approval from two different officers.", ["Encryption in transit and at rest.", "One-time codes to officers' phones for payouts, swaps and member changes.", "Role-based permissions for treasurer, president, secretary and collector.", "An audit trail of every payment, correction and approval."]],
];

export default function Legal() {
  return (
    <>
      <PageHead crumb="Legal" kicker="the small print, made big" title="Legal and security" lead="Plain-language summaries of how Ajora handles your association's data. Last updated October 1, 2026." />
      <div className="mx-auto max-w-4xl px-5">
        <nav aria-label="On this page" className="flex flex-wrap gap-2">
          {SECTIONS.map(([id, t]) => <a key={id} href={"#" + id} className="rounded-full border-[2.5px] border-ink bg-paper px-4 py-1.5 font-bold hover:bg-yellow">{t}</a>)}
        </nav>
        <div className="mt-10 space-y-8">
          {SECTIONS.map(([id, t, p, li], i) => (
            <section key={id} id={id} aria-labelledby={id + "-h"} className={"scroll-mt-28 rounded-[28px] p-7 pop-lg " + ["bg-paper", "bg-sky", "bg-[#b8f0c9]"][i]}>
              <h2 id={id + "-h"} className="font-display text-3xl font-extrabold">{t}</h2>
              <p className="mt-3 text-lg">{p}</p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5">{li.map((x) => <li key={x}>{x}</li>)}</ul>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
