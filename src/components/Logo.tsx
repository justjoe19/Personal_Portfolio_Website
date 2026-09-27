// The // mark from the brand suite (public/favicon.svg), flattened for inline use.
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect x="1.5" y="1.5" width="97" height="97" rx="22" fill="#141821" stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
      <polygon points="42.5,23 55,23 36.5,77 24,77" fill="#8cc8ff" />
      <polygon points="63.5,23 76,23 57.5,77 45,77" fill="#86e39a" />
    </svg>
  );
}
