import type { Metadata } from "next";
import SignInForm from "@/components/SignInForm";
import Logo from "@/components/Logo";
import { Sun } from "@/components/Shapes";

export const metadata: Metadata = { title: "Sign in" };

export default function SignIn() {
  return (
    <section className="overflow-x-clip px-5 py-16">
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
        <div className="rounded-[32px] bg-paper p-7 pop-lg sm:p-10">
          <Logo />
          <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight">Welcome back</h1>
          <p className="mt-2 text-ink-2">Use your email for a sign-in link, or your phone number for a code.</p>
          <SignInForm />
          <p className="mt-6 text-sm text-ink-2">New to Ajora? <a href="/#start" className="font-bold underline">Start free</a>. By continuing you agree to the <a href="/legal#terms" className="underline">Terms</a> and <a href="/legal#privacy" className="underline">Privacy Policy</a>.</p>
        </div>
        <figure className="relative mx-auto max-w-sm">
          <Sun className="absolute -right-8 -top-10 w-28 animate-spin-slow" />
          <div className="rotate-2 rounded-md bg-sky p-8 pop-lg">
            <blockquote className="font-hand text-3xl leading-tight">&ldquo;Our members are in three towns. Ajora gave every one of them the same book.&rdquo;</blockquote>
            <figcaption className="mt-6 flex items-center gap-3"><img src="/images/ava-priscilla.webp" alt="" className="h-12 w-12 rounded-full border-2 border-ink object-cover" /><span><b className="block">Ngozi Eze</b>President, Ezinne Women&apos;s Co-op</span></figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
