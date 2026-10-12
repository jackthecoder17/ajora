import { Sun } from "@/components/Shapes";

export default function NotFound() {
  return (
    <section className="px-5 py-24 text-center">
      <Sun className="mx-auto w-28 animate-spin-slow" />
      <p className="mt-6 font-display text-8xl font-extrabold">404</p>
      <h1 className="mt-2 font-display text-3xl font-extrabold">Ehn? This page no dey.</h1>
      <p className="mt-2 text-lg text-ink-2">The link may be old, or the page may have moved.</p>
      <a href="/" className="btn mt-8 bg-orange text-ink">Back to the homepage</a>
    </section>
  );
}
