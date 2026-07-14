/* @ds-bundle: {"format":4,"namespace":"PECANetworkDesignSystem_971bd6","components":[{"name":"CalloutChip","sourcePath":"components/cards/FeatureCard.jsx"},{"name":"FeatureCard","sourcePath":"components/cards/FeatureCard.jsx"},{"name":"ContentCard","sourcePath":"components/cards/FeatureCard.jsx"},{"name":"PublicationCard","sourcePath":"components/cards/PublicationCard.jsx"},{"name":"MemberCard","sourcePath":"components/cards/PublicationCard.jsx"},{"name":"StatBlock","sourcePath":"components/cards/PublicationCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Badge.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Input.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Input.jsx"},{"name":"Footer","sourcePath":"components/layout/Footer.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"}],"sourceHashes":{"components/cards/FeatureCard.jsx":"355963aef091","components/cards/PublicationCard.jsx":"bcc2f7de3985","components/core/Button.jsx":"0282b1c72d99","components/feedback/Badge.jsx":"a44b6e0ed2de","components/forms/Input.jsx":"d82733caff66","components/layout/Footer.jsx":"88c9be63b2e7","components/navigation/TopNav.jsx":"ea9523e4971d","ui_kits/marketing-site/Hero.jsx":"19837dbe2ed6","ui_kits/marketing-site/Sections.jsx":"e815cbbb003f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PECANetworkDesignSystem_971bd6 = window.PECANetworkDesignSystem_971bd6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/FeatureCard.jsx
try { (() => {
const accentBg = {
  blue: 'var(--color-tint-blue)',
  violet: 'var(--color-tint-violet)',
  mint: 'var(--color-tint-mint)',
  peach: 'var(--color-tint-peach)'
};
const accentFg = {
  blue: 'var(--color-accent-blue-strong)',
  violet: '#5a52c9',
  mint: '#187c58',
  peach: '#b5551c'
};

/** Callout used to annotate a diagram/illustration — e.g. "Genomics", "Predictive analytics" pins on an anatomy graphic. */
function CalloutChip({
  label,
  description,
  accent = 'blue'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface-card)',
      border: 'var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      boxShadow: 'var(--shadow-card)',
      maxWidth: 220,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--color-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: accentFg[accent]
    }
  }), label), description && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 12.5,
      color: 'var(--color-muted)',
      lineHeight: 1.4
    }
  }, description));
}

/** Saturated accent-tint feature card with a title, body copy, and an optional network-diagram illustration slot. */
function FeatureCard({
  title,
  description,
  accent = 'blue',
  diagram = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: accentBg[accent] || accentBg.blue,
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-xl)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      minHeight: 220,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-title-md-size)',
      fontWeight: 'var(--text-title-md-weight)',
      color: 'var(--color-ink)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-md-size)',
      color: 'var(--color-body)',
      lineHeight: 'var(--text-body-md-leading)'
    }
  }, description), diagram && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      opacity: 0.9
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/network-diagram-accent.svg",
    alt: "",
    style: {
      width: '100%',
      height: 90,
      objectFit: 'contain'
    }
  })));
}

/** Plain content card on canvas — used for lower-emphasis features and process steps. */
function ContentCard({
  title,
  description,
  icon
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface-card)',
      border: 'var(--border-hairline)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      fontFamily: 'var(--font-body)'
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-title-sm-size)',
      fontWeight: 'var(--text-title-sm-weight)',
      color: 'var(--color-ink)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm-size)',
      color: 'var(--color-muted)',
      lineHeight: 'var(--text-body-sm-leading)'
    }
  }, description));
}
Object.assign(__ds_scope, { CalloutChip, FeatureCard, ContentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/PublicationCard.jsx
try { (() => {
function PublicationCard({
  title,
  authors,
  date,
  journal,
  badge = 'Open access',
  imageAccent = 'blue'
}) {
  const grad = {
    blue: 'linear-gradient(135deg, #dde7ff, #eef3ff)',
    violet: 'linear-gradient(135deg, #e9e7fb, #f5f3ff)',
    mint: 'linear-gradient(135deg, #dff5ee, #f0fbf7)'
  }[imageAccent] || 'linear-gradient(135deg, #dde7ff, #eef3ff)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 160,
      borderRadius: 'var(--radius-lg)',
      background: grad,
      overflow: 'hidden',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/network-diagram-accent.svg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      background: 'var(--color-ink)',
      color: '#fff',
      fontSize: 11,
      fontWeight: 600,
      padding: '5px 10px',
      borderRadius: 'var(--radius-pill)'
    }
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-title-sm-size)',
      fontWeight: 'var(--text-title-sm-weight)',
      color: 'var(--color-ink)',
      marginBottom: 8,
      lineHeight: 1.35
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm-size)',
      color: 'var(--color-muted)',
      marginBottom: 10
    }
  }, journal), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--text-caption-size)',
      color: 'var(--color-muted-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", null, authors), /*#__PURE__*/React.createElement("span", null, date)));
}
function MemberCard({
  name,
  role,
  institution,
  avatarColor = '#dde7ff'
}) {
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface-card)',
      border: 'var(--border-hairline)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: avatarColor,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--color-ink)'
    }
  }, initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-title-sm-size)',
      color: 'var(--color-ink)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm-size)',
      color: 'var(--color-muted)'
    }
  }, role), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-caption-size)',
      color: 'var(--color-muted-soft)',
      marginTop: 2
    }
  }, institution)), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 'var(--text-body-sm-size)',
      fontWeight: 600,
      color: 'var(--color-accent-blue-strong)',
      textDecoration: 'none'
    }
  }, "View profile \u2192"));
}
function StatBlock({
  value,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display-sm-size)',
      fontWeight: 700,
      color: 'var(--color-ink)',
      letterSpacing: '-0.01em'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm-size)',
      color: 'var(--color-muted)',
      marginTop: 4
    }
  }, label));
}
Object.assign(__ds_scope, { PublicationCard, MemberCard, StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PublicationCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizeStyles = {
  md: {
    height: 44,
    padding: '0 20px',
    fontSize: 'var(--text-button-size)'
  },
  lg: {
    height: 52,
    padding: '0 26px',
    fontSize: '15px'
  },
  sm: {
    height: 36,
    padding: '0 16px',
    fontSize: '13px'
  }
};
const variantStyles = {
  primary: {
    background: 'var(--gradient-cta)',
    color: 'var(--color-on-primary)',
    border: '1px solid transparent'
  },
  secondary: {
    background: 'var(--color-canvas)',
    color: 'var(--color-ink)',
    border: 'var(--border-hairline)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-ink)',
    border: '1px solid transparent'
  },
  onColor: {
    background: 'var(--color-on-primary)',
    color: 'var(--color-ink)',
    border: '1px solid transparent'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  disabled = false,
  onClick,
  type = 'button',
  style
}) {
  const v = variantStyles[variant] || variantStyles.primary;
  const s = sizeStyles[size] || sizeStyles.md;
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--text-button-weight)',
      letterSpacing: 0,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'transform 0.15s ease, opacity 0.15s ease',
      whiteSpace: 'nowrap',
      ...s,
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, icon && iconPosition === 'left' ? icon : null, children, icon && iconPosition === 'right' ? icon : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
const kindStyles = {
  neutral: {
    background: 'var(--color-surface-strong)',
    color: 'var(--color-body-strong)'
  },
  blue: {
    background: 'var(--color-tint-blue)',
    color: 'var(--color-accent-blue-strong)'
  },
  violet: {
    background: 'var(--color-tint-violet)',
    color: '#5a52c9'
  },
  mint: {
    background: 'var(--color-tint-mint)',
    color: '#187c58'
  },
  peach: {
    background: 'var(--color-tint-peach)',
    color: '#b5551c'
  },
  dark: {
    background: 'var(--color-surface-dark)',
    color: 'var(--color-on-dark)'
  }
};
function Badge({
  children,
  kind = 'neutral',
  uppercase = false
}) {
  const k = kindStyles[kind] || kindStyles.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: uppercase ? '5px 10px' : '4px 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: uppercase ? 'var(--text-caption-upper-size)' : 'var(--text-caption-size)',
      fontWeight: uppercase ? 'var(--text-caption-upper-weight)' : 'var(--text-caption-weight)',
      letterSpacing: uppercase ? 'var(--text-caption-upper-tracking)' : 0,
      textTransform: uppercase ? 'uppercase' : 'none',
      ...k
    }
  }, children);
}
function Tag({
  children,
  active = false,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      border: active ? '1px solid transparent' : 'var(--border-hairline)',
      background: active ? 'var(--color-ink)' : 'transparent',
      color: active ? 'var(--color-on-primary)' : 'var(--color-muted)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-nav-size)',
      fontWeight: 'var(--text-nav-weight)',
      cursor: 'pointer',
      transition: 'background 0.15s ease, color 0.15s ease'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge, Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  focused: forceFocused
}) {
  const [focused, setFocused] = React.useState(false);
  const isFocused = forceFocused ?? focused;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-title-sm-size)',
      fontWeight: 600,
      color: 'var(--color-ink)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      height: 44,
      padding: '0 16px',
      borderRadius: 'var(--radius-md)',
      border: isFocused ? '1px solid var(--color-ink)' : 'var(--border-hairline)',
      background: 'var(--color-canvas)',
      color: 'var(--color-ink)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-md-size)',
      outline: 'none',
      transition: 'border-color 0.15s ease'
    }
  }));
}
function Select({
  label,
  options = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-title-sm-size)',
      fontWeight: 600,
      color: 'var(--color-ink)'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    style: {
      height: 44,
      padding: '0 14px',
      borderRadius: 'var(--radius-md)',
      border: 'var(--border-hairline)',
      background: 'var(--color-canvas)',
      color: 'var(--color-ink)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-md-size)',
      outline: 'none'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
function Checkbox({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-xs)',
      border: checked ? 'none' : 'var(--border-hairline)',
      background: checked ? 'var(--color-ink)' : 'var(--color-canvas)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background 0.15s ease'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6l3 3 5-6",
    stroke: "white",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-md-size)',
      color: 'var(--color-body)'
    }
  }, label));
}
function Radio({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(true),
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-full)',
      border: checked ? '1px solid var(--color-ink)' : 'var(--border-hairline)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--color-ink)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-md-size)',
      color: 'var(--color-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Input, Select, Checkbox, Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/layout/Footer.jsx
try { (() => {
function Footer({
  columns = [],
  logo = 'PECANetwork'
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-surface-soft)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '80px 32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 48,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 280
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--color-ink)',
      marginBottom: 12
    }
  }, logo), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--color-muted)',
      fontSize: 'var(--text-body-sm-size)',
      lineHeight: 'var(--text-body-sm-leading)'
    }
  }, "An international research network exploring clinical applications of the network approach to psychopathology.")), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      minWidth: 140
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-caption-upper-size)',
      fontWeight: 'var(--text-caption-upper-weight)',
      letterSpacing: 'var(--text-caption-upper-tracking)',
      textTransform: 'uppercase',
      color: 'var(--color-muted-soft)'
    }
  }, col.title), col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: 'var(--color-body)',
      fontSize: 'var(--text-body-sm-size)',
      textDecoration: 'none'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: 'var(--border-hairline)',
      marginTop: 56,
      paddingTop: 20,
      display: 'flex',
      justifyContent: 'space-between',
      color: 'var(--color-muted-soft)',
      fontSize: 'var(--text-body-sm-size)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 PECANetwork"), /*#__PURE__*/React.createElement("span", null, "Funded by participating member institutions"))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
function TopNav({
  logo = 'PECANetwork',
  links = [],
  activeHref,
  onNavigate,
  ctaLabel = 'Join network'
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px',
      background: 'rgba(251,252,255,0.85)',
      backdropFilter: 'blur(10px)',
      borderBottom: 'var(--border-hairline)',
      fontFamily: 'var(--font-body)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      letterSpacing: '-0.01em',
      color: 'var(--color-ink)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "4",
    cy: "16",
    r: "2.2",
    fill: "#3b5cf5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "4",
    r: "2.2",
    fill: "#8b85e8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "2.2",
    fill: "#4fceac"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 16L16 4M4 16L16 16",
    stroke: "#0a0e1e",
    strokeOpacity: "0.3",
    strokeWidth: "1.2"
  })), logo), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(l.href);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 'var(--text-nav-size)',
      fontWeight: 'var(--text-nav-weight)',
      color: activeHref === l.href ? 'var(--color-ink)' : 'var(--color-muted)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: activeHref === l.href ? 'var(--color-accent-blue)' : 'var(--color-muted-soft)'
    }
  }), l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 'var(--text-nav-size)',
      fontWeight: 500,
      color: 'var(--color-ink)',
      textDecoration: 'none'
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("button", {
    style: {
      height: 40,
      padding: '0 18px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--gradient-cta)',
      color: '#fff',
      border: 'none',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)'
    }
  }, ctaLabel)));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Hero.jsx
try { (() => {
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--gradient-mesh-hero)',
      overflow: 'hidden',
      padding: 'var(--space-section) 32px 96px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/network-mesh.svg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.8,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 780,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(255,255,255,0.7)',
      border: 'var(--border-hairline)',
      fontSize: 'var(--text-caption-size)',
      fontWeight: 600,
      color: 'var(--color-accent-blue-strong)',
      marginBottom: 24,
      fontFamily: 'var(--font-body)'
    }
  }, "International research network"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display-xl-size)',
      fontWeight: 'var(--text-display-xl-weight)',
      lineHeight: 'var(--text-display-xl-leading)',
      letterSpacing: 'var(--text-display-xl-tracking)',
      color: 'var(--color-ink)',
      margin: '0 0 20px'
    }
  }, "Mapping the networks", /*#__PURE__*/React.createElement("br", null), "behind psychopathology"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-title-md-size)',
      color: 'var(--color-body)',
      lineHeight: 1.6,
      margin: '0 auto 36px',
      maxWidth: 560
    }
  }, "PECANetwork connects researchers and clinicians studying mental disorders as systems of interacting symptoms \u2014 and testing what that means for treatment."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      height: 48,
      padding: '0 24px',
      borderRadius: 'var(--radius-md)',
      border: 'none',
      background: 'var(--gradient-cta)',
      color: '#fff',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      cursor: 'pointer'
    }
  }, "Join the network"), /*#__PURE__*/React.createElement("button", {
    style: {
      height: 48,
      padding: '0 24px',
      borderRadius: 'var(--radius-md)',
      border: 'var(--border-hairline)',
      background: 'var(--color-canvas)',
      color: 'var(--color-ink)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      cursor: 'pointer'
    }
  }, "Read our research"))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatsStrip({
  StatBlock
}) {
  const stats = [{
    value: '40+',
    label: 'Member institutions'
  }, {
    value: '18',
    label: 'Countries'
  }, {
    value: '120+',
    label: 'Publications'
  }, {
    value: '2013',
    label: 'Network founded'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-canvas)',
      padding: '48px 32px',
      borderTop: 'var(--border-hairline)',
      borderBottom: 'var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24
    }
  }, stats.map(s => /*#__PURE__*/React.createElement(StatBlock, {
    key: s.label,
    value: s.value,
    label: s.label
  }))));
}
function ResearchAreas({
  FeatureCard
}) {
  const items = [{
    title: 'Idiographic networks',
    description: 'PECAN maps symptom networks unique to each patient, using perceived causal relations rather than population averages.',
    accent: 'blue'
  }, {
    title: 'Network intervention',
    description: 'Sequencing treatment by targeting the symptoms most central to a patient\u2019s network.',
    accent: 'violet'
  }, {
    title: 'Momentary assessment',
    description: 'Dense time-series data collected from daily life, modeled with multilevel vector autoregression.',
    accent: 'mint'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "research",
    style: {
      padding: 'var(--space-section) 32px',
      background: 'var(--color-canvas)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Research",
    title: "How the network approach works in practice"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20,
      marginTop: 48
    }
  }, items.map(it => /*#__PURE__*/React.createElement(FeatureCard, _extends({
    key: it.title
  }, it))))));
}
function DiagramSection({
  CalloutChip
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-section) 32px',
      background: 'var(--color-surface-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Method",
    title: "Every symptom network tells you something different",
    align: "left"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--color-body)',
      fontSize: 16,
      lineHeight: 1.6,
      marginTop: 16,
      maxWidth: 460
    }
  }, "Centrality, connectivity, and hysteresis describe not just which symptoms are present, but how they hold a disorder in place \u2014 and where an intervention is most likely to work.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 320,
      borderRadius: 'var(--radius-xl)',
      background: 'var(--color-tint-blue)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/network-mesh.svg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.55
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 28,
      left: 28
    }
  }, /*#__PURE__*/React.createElement(CalloutChip, {
    label: "Centrality",
    description: "Which symptoms sit at the network's core",
    accent: "blue"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 120,
      right: 32
    }
  }, /*#__PURE__*/React.createElement(CalloutChip, {
    label: "Connectivity",
    description: "Strength of links between symptoms",
    accent: "violet"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 28,
      left: 60
    }
  }, /*#__PURE__*/React.createElement(CalloutChip, {
    label: "Hysteresis",
    description: "Why dense networks resist change",
    accent: "mint"
  })))));
}
function PublicationsPreview({
  PublicationCard,
  Badge
}) {
  const pubs = [{
    title: 'Network intervention analysis in comorbid insomnia and depression',
    journal: 'Psychotherapy and Psychosomatics',
    authors: 'Blanken et al.',
    date: '2024',
    badge: 'Open access',
    imageAccent: 'violet'
  }, {
    title: 'A network theory of mental disorders',
    journal: 'World Psychiatry',
    authors: 'Borsboom',
    date: '2023',
    badge: 'Review',
    imageAccent: 'blue'
  }, {
    title: 'Robustness and replicability of psychopathology networks',
    journal: 'World Psychiatry',
    authors: 'Borsboom et al.',
    date: '2023',
    badge: 'Open access',
    imageAccent: 'mint'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "publications",
    style: {
      padding: 'var(--space-section) 32px',
      background: 'var(--color-canvas)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Publications",
    title: "Recent work from the network",
    align: "left"
  }), /*#__PURE__*/React.createElement("a", {
    href: "publications.html",
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--color-accent-blue-strong)',
      textDecoration: 'none'
    }
  }, "View all \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 28,
      marginTop: 44
    }
  }, pubs.map(p => /*#__PURE__*/React.createElement(PublicationCard, _extends({
    key: p.title
  }, p))))));
}
function MembersPreview({
  MemberCard
}) {
  const members = [{
    name: 'Denny Borsboom',
    role: 'Principal Investigator',
    institution: 'University of Amsterdam',
    avatarColor: '#dde7ff'
  }, {
    name: 'Eiko Fried',
    role: 'Co-Investigator',
    institution: 'Leiden University',
    avatarColor: '#e9e7fb'
  }, {
    name: 'Laura Bringmann',
    role: 'Co-Investigator',
    institution: 'University of Groningen',
    avatarColor: '#dff5ee'
  }, {
    name: 'Sacha Epskamp',
    role: 'Methods Lead',
    institution: 'University of Amsterdam',
    avatarColor: '#ffe9db'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "network",
    style: {
      padding: 'var(--space-section) 32px',
      background: 'var(--color-surface-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Network",
    title: "Researchers across 18 countries",
    align: "left"
  }), /*#__PURE__*/React.createElement("a", {
    href: "members.html",
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--color-accent-blue-strong)',
      textDecoration: 'none'
    }
  }, "View all members \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20,
      marginTop: 44
    }
  }, members.map(m => /*#__PURE__*/React.createElement(MemberCard, _extends({
    key: m.name
  }, m))))));
}
function CTABand({
  Button
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-section) 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      borderRadius: 'var(--radius-xl)',
      background: 'var(--gradient-mesh-hero)',
      padding: '72px 48px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/network-mesh.svg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display-md-size)',
      fontWeight: 'var(--text-display-md-weight)',
      letterSpacing: 'var(--text-display-md-tracking)',
      color: 'var(--color-ink)',
      margin: '0 0 16px'
    }
  }, "Join the network approach"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--color-body)',
      fontSize: 16,
      margin: '0 0 28px'
    }
  }, "For researchers and clinicians building the next decade of network-based methods."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Apply for membership"))));
}
function SectionHeading({
  eyebrow,
  title,
  align = 'center'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth: align === 'center' ? 620 : 'none',
      margin: align === 'center' ? '0 auto' : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption-upper-size)',
      fontWeight: 'var(--text-caption-upper-weight)',
      letterSpacing: 'var(--text-caption-upper-tracking)',
      textTransform: 'uppercase',
      color: 'var(--color-accent-blue-strong)',
      marginBottom: 12
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display-sm-size)',
      fontWeight: 'var(--text-display-sm-weight)',
      letterSpacing: 'var(--text-display-sm-tracking)',
      color: 'var(--color-ink)',
      margin: 0
    }
  }, title));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CalloutChip = __ds_scope.CalloutChip;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.ContentCard = __ds_scope.ContentCard;

__ds_ns.PublicationCard = __ds_scope.PublicationCard;

__ds_ns.MemberCard = __ds_scope.MemberCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.TopNav = __ds_scope.TopNav;

})();
