"use client";

import { useState } from "react";
import { Check, LoaderCircle, Mail, Smartphone } from "lucide-react";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^(\+?234|0)[789][01]\d{8}$/;

export default function SignInForm() {
  const [phone, setPhone] = useState(false);
  const [v, setV] = useState("");
  const [err, setErr] = useState("");
  const [state, setState] = useState<"idle" | "busy" | "done">("idle");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const t = v.trim();
    if (phone && !PHONE.test(t.replace(/[\s-]/g, ""))) return setErr("Enter a Nigerian mobile number, for example 0803 123 4567.");
    if (!phone && !EMAIL.test(t)) return setErr(t ? "That email looks incomplete." : "Enter your email.");
    setErr("");
    setState("busy");
    setTimeout(() => setState("done"), 900);
  }

  if (state === "done")
    return (
      <div role="status" className="mt-8 flex gap-3 rounded-2xl bg-[#b8f0c9] p-4 pop">
        <Check className="shrink-0" />
        <div>
          <p className="font-bold">{phone ? "We texted you a six-digit code." : "Check your inbox for a sign-in link."}</p>
          <p className="text-sm">Sent to {v.trim()}. It expires in {phone ? 10 : 15} minutes.</p>
          <button type="button" className="mt-1 text-sm underline" onClick={() => { setState("idle"); setV(""); }}>Start over</button>
        </div>
      </div>
    );

  return (
    <form onSubmit={submit} noValidate className="mt-8 space-y-4">
      <div>
        <label htmlFor="auth" className="font-semibold">{phone ? "Phone number" : "Email"}</label>
        <input key={String(phone)} id="auth" type={phone ? "tel" : "email"} autoComplete={phone ? "tel" : "email"} value={v}
          placeholder={phone ? "0803 123 4567" : "name@association.ng"} aria-invalid={!!err} aria-describedby={err ? "auth-err" : undefined}
          onChange={(e) => { setV(e.target.value); if (err) setErr(""); }}
          className="mt-2 w-full rounded-full border-[2.5px] border-ink bg-cream px-5 py-3" />
        {err && <p id="auth-err" className="mt-2 text-sm font-semibold text-[#c2185b]">{err}</p>}
      </div>
      <button type="submit" disabled={state === "busy"} className="btn w-full bg-orange text-ink">
        {state === "busy" && <LoaderCircle className="animate-spin" size={18} />}{phone ? "Text me a code" : "Email me a sign-in link"}
      </button>
      <button type="button" onClick={() => { setPhone((p) => !p); setV(""); setErr(""); }} className="btn w-full bg-paper text-ink">
        {phone ? <><Mail size={18} />Use email instead</> : <><Smartphone size={18} />Use your phone number</>}
      </button>
    </form>
  );
}
