export function LogoMark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect x="2" y="2" width="28" height="28" rx="8" fill="#0D0E0C" />
      <path d="M8 11h4M8 16h9M8 21h6" stroke="#61645E" strokeWidth="2" strokeLinecap="round" />
      <path d="M19 11h5M21 16h3M18 21h6" stroke="var(--sig)" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
