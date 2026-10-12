/* Ankara-inspired geometric decorations. Purely decorative. */
type P = { className?: string; color?: string };

export const Sun = ({ className = "", color = "#ffc83d" }: P) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
    {Array.from({ length: 12 }, (_, k) => (
      <path key={k} d="M50 2 L56 22 L44 22 Z" fill={color} stroke="#1b1209" strokeWidth="2" strokeLinejoin="round" transform={`rotate(${k * 30} 50 50)`} />
    ))}
    <circle cx="50" cy="50" r="24" fill={color} stroke="#1b1209" strokeWidth="2.5" />
    <circle cx="50" cy="50" r="10" fill="#1b1209" />
  </svg>
);

export const HalfMoons = ({ className = "", color = "#ff5da2" }: P) => (
  <svg viewBox="0 0 120 60" className={className} aria-hidden="true">
    {[0, 40, 80].map((x) => (
      <path key={x} d={`M${x + 2} 58 A18 18 0 0 1 ${x + 38} 58 Z`} fill={color} stroke="#1b1209" strokeWidth="2.5" strokeLinejoin="round" />
    ))}
    {[0, 40, 80].map((x) => <circle key={"d" + x} cx={x + 20} cy={50} r={4} fill="#1b1209" />)}
  </svg>
);

export const Zigzag = ({ className = "", color = "#0f8a4f" }: P) => (
  <svg viewBox="0 0 200 30" className={className} preserveAspectRatio="none" aria-hidden="true">
    <path d="M0 25 L20 5 L40 25 L60 5 L80 25 L100 5 L120 25 L140 5 L160 25 L180 5 L200 25" fill="none" stroke={color} strokeWidth="7" strokeLinejoin="round" strokeLinecap="round" />
  </svg>
);

export const Dots = ({ className = "", color = "#1b1209" }: P) => (
  <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
    {Array.from({ length: 16 }, (_, k) => <circle key={k} cx={10 + (k % 4) * 20} cy={10 + Math.floor(k / 4) * 20} r="4" fill={color} />)}
  </svg>
);

export const Flower = ({ className = "", color = "#2c2fa3" }: P) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
    {[0, 60, 120, 180, 240, 300].map((a) => (
      <ellipse key={a} cx="50" cy="26" rx="14" ry="22" fill={color} stroke="#1b1209" strokeWidth="2.5" transform={`rotate(${a} 50 50)`} />
    ))}
    <circle cx="50" cy="50" r="13" fill="#ffc83d" stroke="#1b1209" strokeWidth="2.5" />
  </svg>
);

/* Repeating wax-print band */
export const PrintBand = ({ className = "" }: { className?: string }) => (
  <div aria-hidden="true" className={"h-6 w-full " + className}
    style={{
      backgroundImage:
        "radial-gradient(circle at 12px 12px,#1b1209 4px,transparent 5px),radial-gradient(circle at 36px 12px,#ffc83d 7px,transparent 8px)",
      backgroundSize: "48px 24px",
      backgroundColor: "#ff6b1a",
    }} />
);
