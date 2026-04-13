type LogoVariant = "full" | "icon";
type LogoTone = "light" | "dark";

type LogoProps = {
  className?: string;
  variant?: LogoVariant;
  tone?: LogoTone;
  size?: number;
  name?: string;
};

type Palette = {
  base: string;
  accent: string;
  stroke: string;
};

function getPalette(tone: LogoTone): Palette {
  if (tone === "dark") {
    return {
      base: "#0B1F3A",
      accent: "#C8A95B",
      stroke: "#FFFFFF",
    };
  }

  return {
    base: "#FFFFFF",
    accent: "#C8A95B",
    stroke: "#0B1F3A",
  };
}

function Mark({ size, tone }: { size: number; tone: LogoTone }) {
  const palette = getPalette(tone);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 140"
      role="img"
      aria-label="MA structural monogram"
    >
      <rect x="8" y="8" width="124" height="124" rx="14" fill={palette.base} />
      <rect
        x="14"
        y="14"
        width="112"
        height="112"
        rx="9"
        fill="none"
        stroke={palette.accent}
        strokeWidth="1.2"
      />

      <line x1="26" y1="26" x2="114" y2="26" stroke={palette.accent} strokeWidth="0.95" opacity="0.85" />
      <line x1="26" y1="114" x2="114" y2="114" stroke={palette.accent} strokeWidth="0.95" opacity="0.85" />

      <path
        d="M34 98 V43 L52 72 L70 43 V98"
        fill="none"
        stroke={palette.stroke}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M74 98 L90 43 L106 98"
        fill="none"
        stroke={palette.stroke}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="82"
        y1="74"
        x2="98"
        y2="74"
        stroke={palette.accent}
        strokeWidth="2.9"
        strokeLinecap="round"
      />

      <line
        x1="70"
        y1="34"
        x2="70"
        y2="106"
        stroke={palette.accent}
        strokeWidth="0.9"
        opacity="0.5"
      />
      <circle cx="70" cy="19" r="1.9" fill={palette.accent} />
      <circle cx="70" cy="121" r="1.9" fill={palette.accent} />
    </svg>
  );
}

export function Logo({
  className,
  variant = "full",
  tone = "dark",
  size = 132,
  name = "Engr. Marwan Ahmad",
}: LogoProps) {
  const textColor = tone === "dark" ? "text-[#0B1F3A]" : "text-white";

  return (
    <div className={className}>
      <Mark size={size} tone={tone} />
      {variant === "full" ? (
        <p className={`font-heading mt-3 text-center text-sm tracking-[0.04em] ${textColor}`}>
          {name}
        </p>
      ) : null}
    </div>
  );
}
