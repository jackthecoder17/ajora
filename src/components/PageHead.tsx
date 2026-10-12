import { HalfMoons } from "./Shapes";

export default function PageHead({ kicker, title, lead, crumb }: { kicker: string; title: React.ReactNode; lead?: string; crumb?: string }) {
  return (
    <header className="relative px-5 pb-10 pt-14 sm:pt-20">
      <div className="mx-auto max-w-4xl">
        {crumb && <nav aria-label="Breadcrumb" className="mb-6 text-sm font-semibold"><a href="/" className="underline underline-offset-4">Home</a><span className="mx-2">/</span><span aria-current="page">{crumb}</span></nav>}
        <p className="font-hand text-3xl text-orange">{kicker}</p>
        <h1 className="mt-1 font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-7xl">{title}</h1>
        {lead && <p className="mt-6 max-w-2xl text-lg text-ink-2 sm:text-xl">{lead}</p>}
      </div>
      <HalfMoons className="absolute right-6 top-10 hidden w-32 md:block" color="#ffc83d" />
    </header>
  );
}
