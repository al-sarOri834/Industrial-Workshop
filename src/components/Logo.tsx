type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

// Stylized "A" formed from two forged-metal branch-like structures
// rising from lower-left and lower-right and meeting at the top.
export default function Logo({ className = "h-10 w-10", variant = "light" }: LogoProps) {
  const stroke = variant === "light" ? "#f7f5f0" : "#1c1917";
  const accent = "#a67e4e";

  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="شعار الورشة"
    >
      {/* Left branch — rises from lower-left to apex */}
      <path
        d="M22 82 C 26 62, 34 44, 50 22"
        stroke={stroke}
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right branch — rises from lower-right to apex */}
      <path
        d="M78 82 C 74 62, 66 44, 50 22"
        stroke={stroke}
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      {/* Crossbar */}
      <path
        d="M36 56 L 64 56"
        stroke={stroke}
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      {/* Forged branch details — small offshoots on left branch */}
      <path
        d="M33 48 L 27 42 M 40 36 L 34 31 M 47 27 L 43 21"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Forged branch details — small offshoots on right branch */}
      <path
        d="M67 48 L 73 42 M 60 36 L 66 31 M 53 27 L 57 21"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Base feet */}
      <circle cx="22" cy="82" r="3.5" fill={stroke} />
      <circle cx="78" cy="82" r="3.5" fill={stroke} />
    </svg>
  );
}
