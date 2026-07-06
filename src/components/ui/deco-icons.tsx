// Editorial deco marks from the design deck — inline SVG, color via currentColor.

type IconProps = { className?: string };

export function FlowerAsterisk({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={i}
          cx="12"
          cy="5.2"
          rx="1.7"
          ry="4.4"
          transform={`rotate(${i * 45} 12 12)`}
        />
      ))}
      <circle cx="12" cy="12" r="1.9" />
    </svg>
  );
}

export function Globe({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <ellipse cx="12" cy="12" rx="10" ry="10" />
      <ellipse cx="12" cy="12" rx="4" ry="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="4" y1="6.5" x2="20" y2="6.5" />
      <line x1="4" y1="17.5" x2="20" y2="17.5" />
    </svg>
  );
}

export function StarSmiley({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path
        d="M8 8.4l.7 1.5 1.5.7-1.5.7L8 12.8l-.7-1.5-1.5-.7 1.5-.7z"
        fill="var(--accent)"
      />
      <path
        d="M16 8.4l.7 1.5 1.5.7-1.5.7-.7 1.5-.7-1.5-1.5-.7 1.5-.7z"
        fill="var(--accent)"
      />
      <path
        d="M7.5 14.5a5 5 0 0 0 9 0"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Stacked-chevron logo mark (bottom-right of the deck)
export function ChevronMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 40" fill="currentColor" aria-hidden="true">
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <ellipse
            key={`${row}-${col}`}
            cx={8 + col * 9 + row * 4}
            cy={8 + row * 12}
            rx="4"
            ry="2.4"
            transform={`rotate(-32 ${8 + col * 9 + row * 4} ${8 + row * 12})`}
          />
        ))
      )}
    </svg>
  );
}
