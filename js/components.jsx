const { useState } = React;

function TopNav({ active }) {
  const links = [
    { label: 'Home', href: 'index.html' },
    { label: 'Research', href: 'research.html' },
    { label: 'Network', href: 'team.html' },
  ];
  return (
    <React.Fragment>
    <style>{`
      @media (max-width: 720px){
        .site-header{padding:0 16px !important}
        .site-header .nav-label{display:none}
        .site-header nav{gap:16px !important}
        .site-cta{display:none !important}
      }
      @media (max-width: 900px){
        .stats-grid{grid-template-columns:repeat(2,1fr) !important}
        .pillars-grid{grid-template-columns:1fr !important}
        .research-grid{grid-template-columns:1fr !important}
        .members-grid{grid-template-columns:repeat(2,1fr) !important}
      }
      @media (max-width: 640px){
        section{padding-left:20px !important;padding-right:20px !important}
        h1{font-size:32px !important;line-height:1.15 !important}
        .hero-title{font-size:38px !important}
        .item-card{flex-direction:column !important}
        .item-media{width:100% !important}
        .members-grid{grid-template-columns:1fr 1fr !important;gap:12px !important}
      }
      @media (max-width: 420px){
        .members-grid{grid-template-columns:1fr !important}
      }
    `}</style>
    <header className="site-header" style={{ height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', background: 'rgba(251,252,255,0.85)', backdropFilter: 'blur(10px)', borderBottom: 'var(--border-hairline)', fontFamily: 'var(--font-body)', position: 'sticky', top: 0, zIndex: 20 }}>
      <a href="index.html" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, letterSpacing: '-0.01em', color: 'var(--color-ink)', display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="4" cy="16" r="2.2" fill="#3b5cf5" />
          <circle cx="16" cy="4" r="2.2" fill="#8b85e8" />
          <circle cx="16" cy="16" r="2.2" fill="#4fceac" />
          <path d="M4 16L16 4M4 16L16 16" stroke="#0a0e1e" strokeOpacity="0.3" strokeWidth="1.2" />
        </svg>
        PECANetwork
      </a>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        {links.map((l) => (
          <a key={l.href} href={l.href} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 'var(--text-nav-size)', fontWeight: 'var(--text-nav-weight)', color: active === l.href ? 'var(--color-ink)' : 'var(--color-muted)', textDecoration: 'none' }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: active === l.href ? 'var(--color-accent-blue)' : 'var(--color-muted-soft)' }} />
            <span className="nav-label">{l.label}</span>
          </a>
        ))}
      </nav>
      <a href="team.html" className="site-cta" style={{ height: 40, padding: '0 18px', borderRadius: 'var(--radius-md)', background: 'var(--gradient-cta)', color: '#fff', border: 'none', fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)', display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
        Meet the network
      </a>
    </header>
    </React.Fragment>
  );
}

function Footer() {
  return (
    <footer style={{ background: 'var(--color-surface-soft)', fontFamily: 'var(--font-body)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '80px 32px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 320 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--color-ink)', marginBottom: 12 }}>PECANetwork</div>
            <p style={{ color: 'var(--color-muted)', fontSize: 'var(--text-body-sm-size)', lineHeight: 'var(--text-body-sm-leading)' }}>
              An international research network exploring clinical applications of the network approach to psychopathology.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 140 }}>
            <div style={{ fontSize: 'var(--text-caption-upper-size)', fontWeight: 'var(--text-caption-upper-weight)', letterSpacing: 'var(--text-caption-upper-tracking)', textTransform: 'uppercase', color: 'var(--color-muted-soft)' }}>Site</div>
            <a href="research.html" style={{ color: 'var(--color-body)', fontSize: 'var(--text-body-sm-size)', textDecoration: 'none' }}>Research</a>
            <a href="team.html" style={{ color: 'var(--color-body)', fontSize: 'var(--text-body-sm-size)', textDecoration: 'none' }}>Network</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 180 }}>
            <div style={{ fontSize: 'var(--text-caption-upper-size)', fontWeight: 'var(--text-caption-upper-weight)', letterSpacing: 'var(--text-caption-upper-tracking)', textTransform: 'uppercase', color: 'var(--color-muted-soft)' }}>Contact</div>
            <a href="mailto:campos.sindermann@gmail.com" style={{ color: 'var(--color-body)', fontSize: 'var(--text-body-sm-size)', textDecoration: 'none' }}>campos.sindermann@gmail.com</a>
          </div>
        </div>
        <div style={{ borderTop: 'var(--border-hairline)', marginTop: 56, paddingTop: 20, display: 'flex', justifyContent: 'space-between', color: 'var(--color-muted-soft)', fontSize: 'var(--text-body-sm-size)', flexWrap: 'wrap', gap: 8 }}>
          <span>© 2026 PECANetwork</span>
        </div>
      </div>
    </footer>
  );
}

function Button({ children, variant = 'primary', size = 'md', href, onClick, style }) {
  const sizeStyles = { md: { height: 44, padding: '0 20px', fontSize: 'var(--text-button-size)' }, lg: { height: 52, padding: '0 26px', fontSize: '15px' }, sm: { height: 36, padding: '0 16px', fontSize: '13px' } };
  const variantStyles = {
    primary: { background: 'var(--gradient-cta)', color: 'var(--color-on-primary)', border: '1px solid transparent' },
    secondary: { background: 'var(--color-canvas)', color: 'var(--color-ink)', border: 'var(--border-hairline)' },
  };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} onClick={onClick} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: 'var(--font-body)', fontWeight: 600, borderRadius: 'var(--radius-md)', cursor: 'pointer', transition: 'transform 0.15s ease', whiteSpace: 'nowrap', textDecoration: 'none', ...sizeStyles[size], ...variantStyles[variant], ...style }}
      onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.97)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
      {children}
    </Tag>
  );
}

function Badge({ children, kind = 'neutral' }) {
  const kindStyles = {
    neutral: { background: 'var(--color-surface-strong)', color: 'var(--color-body-strong)' },
    blue: { background: 'var(--color-tint-blue)', color: 'var(--color-accent-blue-strong)' },
    violet: { background: 'var(--color-tint-violet)', color: '#5a52c9' },
    mint: { background: 'var(--color-tint-mint)', color: '#187c58' },
  };
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px', borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-caption-size)', fontWeight: 'var(--text-caption-weight)', ...kindStyles[kind] }}>
      {children}
    </span>
  );
}

function Tag({ children, active = false, onClick }) {
  return (
    <button onClick={onClick} style={{ display: 'inline-flex', alignItems: 'center', padding: '10px 20px', borderRadius: 'var(--radius-pill)', border: active ? '1px solid transparent' : 'var(--border-hairline)', background: active ? 'var(--color-ink)' : 'var(--color-canvas)', color: active ? 'var(--color-on-primary)' : 'var(--color-muted)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-nav-size)', fontWeight: 600, cursor: 'pointer', transition: 'background 0.15s ease, color 0.15s ease' }}>
      {children}
    </button>
  );
}

function CalloutChip({ label, description, accent = 'blue' }) {
  const accentFg = { blue: 'var(--color-accent-blue-strong)', violet: '#5a52c9', mint: '#187c58', peach: '#b5551c' };
  return (
    <div style={{ background: 'var(--color-surface-card)', border: 'var(--border-hairline)', borderRadius: 'var(--radius-md)', padding: '12px 16px', boxShadow: 'var(--shadow-card)', maxWidth: 220, fontFamily: 'var(--font-body)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'var(--color-ink)' }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: accentFg[accent] }} />{label}
      </div>
      {description && <div style={{ marginTop: 4, fontSize: 12.5, color: 'var(--color-muted)', lineHeight: 1.4 }}>{description}</div>}
    </div>
  );
}

function FeatureCard({ title, description, accent = 'blue' }) {
  const accentBg = { blue: 'var(--color-tint-blue)', violet: 'var(--color-tint-violet)', mint: 'var(--color-tint-mint)', peach: 'var(--color-tint-peach)' };
  return (
    <div style={{ background: accentBg[accent], borderRadius: 'var(--radius-xl)', padding: 'var(--space-xl)', display: 'flex', flexDirection: 'column', gap: 16, minHeight: 200, fontFamily: 'var(--font-body)' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-md-size)', fontWeight: 'var(--text-title-md-weight)', color: 'var(--color-ink)' }}>{title}</div>
      <div style={{ fontSize: 'var(--text-body-md-size)', color: 'var(--color-body)', lineHeight: 'var(--text-body-md-leading)' }}>{description}</div>
    </div>
  );
}

function ContentCard({ title, description }) {
  return (
    <div style={{ background: 'var(--color-surface-card)', border: 'var(--border-hairline)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 12, fontFamily: 'var(--font-body)' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-sm-size)', fontWeight: 'var(--text-title-sm-weight)', color: 'var(--color-ink)' }}>{title}</div>
      <div style={{ fontSize: 'var(--text-body-sm-size)', color: 'var(--color-muted)', lineHeight: 'var(--text-body-sm-leading)' }}>{description}</div>
    </div>
  );
}

function StatBlock({ value, label }) {
  return (
    <div style={{ fontFamily: 'var(--font-body)', textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-lg-size)', fontWeight: 700, color: 'var(--color-ink)', letterSpacing: '-0.01em' }}>{value}</div>
      <div style={{ fontSize: 'var(--text-body-sm-size)', color: 'var(--color-muted)', marginTop: 4 }}>{label}</div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div style={{ textAlign: align, maxWidth: align === 'center' ? 680 : 'none', margin: align === 'center' ? '0 auto' : 0 }}>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-caption-upper-size)', fontWeight: 'var(--text-caption-upper-weight)', letterSpacing: 'var(--text-caption-upper-tracking)', textTransform: 'uppercase', color: 'var(--color-accent-blue-strong)', marginBottom: 12 }}>{eyebrow}</div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-sm-size)', fontWeight: 'var(--text-display-sm-weight)', letterSpacing: 'var(--text-display-sm-tracking)', color: 'var(--color-ink)', margin: 0 }}>{title}</h2>
      {subtitle && <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-body)', fontSize: 16, lineHeight: 1.6, marginTop: 16 }}>{subtitle}</p>}
    </div>
  );
}

Object.assign(window, { TopNav, Footer, Button, Badge, Tag, CalloutChip, FeatureCard, ContentCard, StatBlock, SectionHeading });
