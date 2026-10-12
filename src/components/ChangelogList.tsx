"use client";

import { useRef, useState } from "react";
import { Search } from "lucide-react";
import { CL } from "@/lib/data";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const niceDate = (s: string) => { const p = s.split("-"); return MONTHS[Number(p[1]) - 1] + " " + Number(p[2]) + ", " + p[0]; };
const KINDS = ["All", "New", "Improved", "Fixed"] as const;
const KIND_BG = { New: "bg-orange", Improved: "bg-sky", Fixed: "bg-[#b8f0c9]" };

export default function ChangelogList() {
  const [kind, setKind] = useState<(typeof KINDS)[number]>("All");
  const [q, setQ] = useState("");
  const search = useRef<HTMLInputElement>(null);
  const s = q.trim().toLowerCase();
  const matchQ = (e: (typeof CL)[number]) => !s || (e.t + " " + e.p).toLowerCase().includes(s);
  const rows = CL.filter((e) => (kind === "All" || e.k === kind) && matchQ(e));

  return (
    <>
      <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div role="group" aria-label="Filter updates" className="flex flex-wrap gap-2">
          {KINDS.map((k) => (
            <button key={k} type="button" aria-pressed={kind === k} onClick={() => setKind(k)}
              className={"rounded-full border-[2.5px] border-ink px-4 py-1.5 font-bold " + (kind === k ? "bg-ink text-cream" : "bg-paper hover:bg-yellow")}>
              {k} <span className="opacity-60">{CL.filter((e) => (k === "All" || e.k === k) && matchQ(e)).length}</span>
            </button>
          ))}
        </div>
        <div className="relative sm:w-72">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" aria-hidden="true" />
          <label htmlFor="clSearch" className="sr-only">Search updates</label>
          <input ref={search} id="clSearch" type="search" placeholder="Search updates" value={q} onChange={(e) => setQ(e.target.value)}
            className="w-full rounded-full border-[2.5px] border-ink bg-paper py-2.5 pl-11 pr-4" />
        </div>
      </div>
      <div className="mt-10 space-y-6" aria-live="polite">
        {rows.length ? rows.map((e) => (
          <article key={e.d} className="grid gap-3 rounded-3xl bg-paper p-6 pop sm:grid-cols-[180px_1fr]">
            <div>
              <time dateTime={e.d} className="text-sm font-semibold text-ink-2">{niceDate(e.d)}</time>
              <span className={"mt-2 block w-fit rounded-full border-2 border-ink px-3 py-0.5 text-sm font-bold " + KIND_BG[e.k]}>{e.k}</span>
            </div>
            <div><h2 className="font-display text-2xl font-extrabold">{e.t}</h2><p className="mt-2 text-ink-2">{e.p}</p></div>
          </article>
        )) : (
          <div className="rounded-3xl bg-yellow p-8 text-center pop">
            <p className="font-display text-2xl font-extrabold">Nothing matches that</p>
            <p className="mt-1 text-ink-2">Try another word, or clear the filters.</p>
            <button type="button" className="btn mt-4 bg-paper" onClick={() => { setQ(""); setKind("All"); search.current?.focus(); }}>Clear filters</button>
          </div>
        )}
      </div>
    </>
  );
}
