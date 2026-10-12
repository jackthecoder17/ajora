export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={"inline-flex items-center gap-2 font-display text-2xl font-extrabold tracking-tight " + className}>
      <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
        <rect x="2" y="2" width="36" height="36" rx="11" fill="#ff6b1a" stroke="#1b1209" strokeWidth="2.5" />
        {[0, 1, 2, 3, 4, 5].map((k) => {
          const a = (k * Math.PI) / 3 - Math.PI / 2;
          return <circle key={k} cx={20 + 10 * Math.cos(a)} cy={20 + 10 * Math.sin(a)} r="3.2" fill={k === 0 ? "#ffc83d" : "#1b1209"} stroke="#1b1209" strokeWidth="1.5" />;
        })}
      </svg>
      Ajora
    </span>
  );
}
