// components/PoweredByBTV.tsx
// CLAUDE.md: Required on every client — mount in layout.tsx
export default function PoweredByBTV() {
  return (
    <div style={{
      background: '#0a0a0a',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      flexWrap: 'wrap' as const,
      fontSize: '12px',
    }}>
      <span style={{ color: 'rgba(255,255,255,0.3)' }}>Powered by</span>
      <a
        href="https://bluetubetv.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#c9a96e', textDecoration: 'none', fontWeight: 600 }}
      >
        BlueTubeTV
      </a>
      <span style={{ color: 'rgba(255,255,255,0.2)' }}>
        · Wilmington's Live Commerce Network
      </span>
    </div>
  )
}
