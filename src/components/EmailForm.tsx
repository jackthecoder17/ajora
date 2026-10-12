"use client";

import { useId, useState } from "react";
import { ArrowRight, Check, LoaderCircle } from "lucide-react";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Props = { id: string; label: string; button: string; success: string; hint?: string; dark?: boolean; big?: boolean };

export default function EmailForm({ id, label, button, success, hint, dark, big }: Props) {
  const [v, setV] = useState("");
  const [err, setErr] = useState("");
  const [state, setState] = useState<"idle" | "busy" | "done">("idle");
  const uid = useId();
  const inputId = id + uid;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const t = v.trim();
    if (!t) return setErr("Enter your email.");
    if (!EMAIL.test(t)) return setErr("That email looks incomplete. Check it for a typo.");
    setErr("");
    setState("busy");
    setTimeout(() => setState("done"), 900);
  }

  if (state === "done")
    return (
      <div role="status" className={"flex items-start gap-3 rounded-2xl p-4 pop " + (dark ? "bg-green text-cream" : "bg-[#b8f0c9]")}>
        <Check className="mt-0.5 shrink-0" />
        <div>
          <p className="font-bold">{success}</p>
          <button type="button" className="mt-1 text-sm underline" onClick={() => { setV(""); setState("idle"); }}>Use a different email</button>
        </div>
      </div>
    );

  return (
    <form onSubmit={submit} noValidate>
      <label htmlFor={inputId} className={"block font-semibold " + (big ? "text-lg" : "text-sm")}>{label}</label>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <input id={inputId} type="email" autoComplete="email" placeholder="name@association.ng" value={v}
          onChange={(e) => { setV(e.target.value); if (err) setErr(""); }}
          aria-invalid={!!err} aria-describedby={err ? inputId + "-err" : hint ? inputId + "-hint" : undefined}
          className={"min-w-0 flex-1 rounded-full border-[2.5px] border-ink bg-paper px-5 text-ink placeholder:text-ink-2/60 " + (big ? "py-4 text-lg" : "py-3")} />
        <button type="submit" disabled={state === "busy"} className={"btn shrink-0 text-ink " + (dark ? "bg-yellow" : "bg-orange") + (big ? " !py-4 text-lg" : "")}>
          {state === "busy" ? <LoaderCircle className="animate-spin" size={18} /> : null}
          {button}{state !== "busy" && <ArrowRight size={18} />}
        </button>
      </div>
      {err ? <p id={inputId + "-err"} className={"mt-2 text-sm font-semibold " + (dark ? "text-pink" : "text-[#c2185b]")}>{err}</p>
        : hint ? <p id={inputId + "-hint"} className={"mt-2 text-sm " + (dark ? "text-cream/70" : "text-ink-2")}>{hint}</p> : null}
    </form>
  );
}
