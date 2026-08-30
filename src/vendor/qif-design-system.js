// VENDORÉ — sortie compilée du design system QiF.
// Ne pas éditer à la main : la source vit dans le projet de design.
// Ré-exporter puis relancer `python3 tools/unpack.py` pour mettre à jour.
//
// Le bundle attend React et RES en globales : on les pose avant de l'évaluer.
import React from "react";
import { RES } from "../resources.js";

const g = typeof window !== "undefined" ? window : globalThis;
g.React = g.React || React;
g.RES = RES;

/* @ds-bundle: {"format":4,"namespace":"QIFDesignSystem_5be1b3","components":[{"name":"Alien","sourcePath":"components/core/Alien.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"DisplayTitle","sourcePath":"components/core/DisplayTitle.jsx"},{"name":"GradientPanel","sourcePath":"components/core/GradientPanel.jsx"},{"name":"LinkTile","sourcePath":"components/core/LinkTile.jsx"},{"name":"QifMark","sourcePath":"components/core/QifMark.jsx"},{"name":"ScheduleRow","sourcePath":"components/core/ScheduleRow.jsx"},{"name":"Star","sourcePath":"components/core/Star.jsx"},{"name":"TeamMember","sourcePath":"components/core/TeamMember.jsx"}],"sourceHashes":{"components/core/Alien.jsx":"81772ffbbd71","components/core/Avatar.jsx":"f0328dc526dc","components/core/Button.jsx":"084973c7084b","components/core/DisplayTitle.jsx":"f7679df698de","components/core/GradientPanel.jsx":"8244a3e7b288","components/core/LinkTile.jsx":"33390f918bcc","components/core/QifMark.jsx":"61717a88f6a7","components/core/ScheduleRow.jsx":"a9ed8f54daea","components/core/Star.jsx":"05ea0841bdbd","components/core/TeamMember.jsx":"866d75b97a36","ui_kits/website/sections.jsx":"727c899d7e38","ui_kits/website/sections2.jsx":"faedb9b06e43"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.QIFDesignSystem_5be1b3 = window.QIFDesignSystem_5be1b3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Alien.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Official alien illustration (assets/alien.svg, provided by the team) — brand gradients + sparkles, grain baked in. Never redraw it.
function Alien({
  size = 300,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: RES(RES("../../assets/alien.svg")),
    alt: "Alien QiF",
    width: size,
    height: Math.round(size * 0.784),
    style: {
      display: "block",
      ...style
    }
  }, rest));
}
function alienAssetBase() {
  const el = typeof document !== "undefined" && document.querySelector('script[src*="_ds_bundle.js"]');
  if (el) {
    const src = el.getAttribute("src");
    return src.slice(0, src.lastIndexOf("_ds_bundle.js"));
  }
  return "";
}
Object.assign(__ds_scope, { Alien });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Alien.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Avatar({
  src,
  alt = "",
  size = 176,
  ring = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: alt,
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      objectFit: "cover",
      outline: ring ? "4px solid #FFFFFF" : "none",
      outlineOffset: -4,
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Intentional addition: the Figma file has no web CTA — styled from the Linktree gradient tiles.
function Button({
  children,
  variant = "primary",
  href,
  onClick,
  size = "md",
  style,
  ...rest
}) {
  const backgrounds = {
    primary: "var(--grad-blob)",
    ghost: "transparent"
  };
  const pads = {
    md: "14px 32px",
    lg: "20px 44px"
  };
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      background: backgrounds[variant],
      border: variant === "ghost" ? "3px dashed var(--qif-white-pink)" : "none",
      color: "var(--qif-white-pink)",
      textDecoration: "none",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: size === "lg" ? 26 : 21,
      padding: pads[size],
      borderRadius: 0,
      cursor: "pointer",
      transition: "transform 0.25s var(--ease-drift)",
      ...style
    },
    onMouseOver: e => {
      e.currentTarget.style.transform = "rotate(-2deg) scale(1.03)";
    },
    onMouseOut: e => {
      e.currentTarget.style.transform = "none";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/DisplayTitle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DisplayTitle({
  top = "QUEER",
  middle = "interstellaire",
  bottom = "FESTIVAL",
  align = "center",
  scale = 1,
  color = "var(--qif-white-pink)",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      color,
      lineHeight: 1,
      ...style
    }
  }, rest), top ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 76 * scale
    }
  }, top) : null, middle ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontStyle: "italic",
      fontSize: 60 * scale
    }
  }, middle) : null, bottom ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 68 * scale
    }
  }, bottom) : null);
}
Object.assign(__ds_scope, { DisplayTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/DisplayTitle.jsx", error: String((e && e.message) || e) }); }

// components/core/GradientPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Gradient variants from tokens/effects.css */
const qifGradients = {
  sky: "var(--grad-sky)",
  skySoft: "var(--grad-sky-soft)",
  nebula: "var(--grad-nebula)",
  blob: "var(--grad-blob)",
  pale: "var(--grad-sky-pale)"
};
function GradientPanel({
  variant = "sky",
  noise = true,
  style,
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: (noise ? "qif-noise " : "") + className,
    style: {
      position: "relative",
      background: qifGradients[variant] || qifGradients.sky,
      overflow: "hidden",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GradientPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GradientPanel.jsx", error: String((e && e.message) || e) }); }

// components/core/LinkTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tileGradients = {
  blob: "var(--grad-blob)",
  nebula: "var(--grad-nebula)",
  pink: "linear-gradient(220.87deg, var(--qif-white-warm) -26.07%, var(--qif-pink) 94.44%)",
  blue: "linear-gradient(47.68deg, var(--qif-white-warm) -20.15%, var(--qif-blue) 74.17%)"
};
function LinkTile({
  icon,
  label,
  gradient = "blob",
  size = 88,
  href,
  onClick,
  style,
  ...rest
}) {
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    "aria-label": label,
    title: label,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      border: "none",
      cursor: "pointer",
      background: tileGradients[gradient] || tileGradients.blob,
      borderRadius: 0,
      padding: 0,
      transition: "transform 0.25s var(--ease-drift), filter 0.25s",
      ...style
    },
    onMouseOver: e => {
      e.currentTarget.style.transform = "rotate(-3deg) scale(1.04)";
    },
    onMouseOut: e => {
      e.currentTarget.style.transform = "none";
    }
  }, rest), typeof icon === "string" ? /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    style: {
      width: size * 0.5,
      height: size * 0.5
    }
  }) : icon);
}
Object.assign(__ds_scope, { LinkTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LinkTile.jsx", error: String((e && e.message) || e) }); }

// components/core/QifMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// The official QiF logo — hand-drawn gradient mark provided by the team (assets/qif-logo.svg). Never redraw it.
function QifMark({
  size = 200,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: RES(RES("../../assets/qif-logo.svg")),
    alt: "QiF",
    width: size,
    height: Math.round(size * 0.924),
    style: {
      display: "block",
      ...style
    }
  }, rest));
}
function qifAssetBase() {
  const el = typeof document !== "undefined" && document.querySelector('script[src*="_ds_bundle.js"]');
  if (el) {
    const src = el.getAttribute("src");
    return src.slice(0, src.lastIndexOf("_ds_bundle.js"));
  }
  return "";
}
Object.assign(__ds_scope, { QifMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/QifMark.jsx", error: String((e && e.message) || e) }); }

// components/core/ScheduleRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ScheduleRow({
  time,
  title,
  detail,
  accent = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 20,
      background: accent ? "var(--qif-pink-hot)" : "var(--surface-row)",
      color: accent ? "var(--qif-white-pink)" : "var(--text-body)",
      padding: "14px 22px",
      borderRadius: 0,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 22,
      whiteSpace: "nowrap"
    }
  }, time), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 24
    }
  }, title), detail ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      fontSize: 20,
      color: accent ? "var(--qif-white-pink)" : "var(--text-accent)"
    }
  }, detail) : null);
}
Object.assign(__ds_scope, { ScheduleRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ScheduleRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Star.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Star({
  size = 48,
  color = "var(--qif-white-pink)",
  rotate = 0,
  style,
  ...rest
}) {
  // Official hand-drawn star (assets/shapes/qifstar.svg, provided by the team) used as a mask so it can be tinted.
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      width: size,
      height: size * 1.052,
      background: color,
      WebkitMask: "url('" + RES(RES("../../assets/shapes/qifstar.svg")) + "') center / contain no-repeat",
      mask: "url('" + RES(RES("../../assets/shapes/qifstar.svg")) + "') center / contain no-repeat",
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
      flexShrink: 0,
      ...style
    }
  }, rest));
}

// Resolve asset path relative to the design-system root regardless of page depth.
function assetBase() {
  const el = typeof document !== "undefined" && document.querySelector('script[src*="_ds_bundle.js"]');
  if (el) {
    const src = el.getAttribute("src");
    return src.slice(0, src.lastIndexOf("_ds_bundle.js"));
  }
  return "";
}
Object.assign(__ds_scope, { Star });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Star.jsx", error: String((e && e.message) || e) }); }

// components/core/TeamMember.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TeamMember({
  src,
  name,
  pronouns,
  role,
  color = "var(--qif-white-warm)",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "qif-tm",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: src,
    size: 120
  }), /*#__PURE__*/React.createElement("div", {
    className: "qif-tm-txt",
    style: {
      color,
      lineHeight: 1.15
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "qif-tm-name",
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 28
    }
  }, name, pronouns ? /*#__PURE__*/React.createElement("span", {
    className: "qif-tm-pro",
    style: {
      fontWeight: 400,
      fontStyle: "italic",
      fontSize: 20,
      marginLeft: 10
    }
  }, "(", pronouns, ")") : null), role ? /*#__PURE__*/React.createElement("div", {
    className: "qif-tm-role",
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 400,
      fontSize: 20,
      marginTop: 4,
      whiteSpace: "pre-line"
    }
  }, role) : null));
}
Object.assign(__ds_scope, { TeamMember });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TeamMember.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
const {
  GradientPanel,
  QifMark,
  DisplayTitle,
  Button,
  Star,
  ScheduleRow,
  Alien,
  Avatar
} = window.QIFDesignSystem_5be1b3;
function SiteHeader({
  onNav
}) {
  const links = [["programme", "Programme"], ["infos", "Infos pratiques"], ["team", "La team"], ["editions", "Anciennes éditions"]];
  return /*#__PURE__*/React.createElement("header", {
    className: "qif-head",
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      padding: "8px 28px",
      gap: 28,
      background: "rgba(249,247,255,0.82)",
      backdropFilter: "blur(10px)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      onNav("top");
    },
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(QifMark, {
    size: 54
  })), /*#__PURE__*/React.createElement("nav", {
    className: "qif-nav",
    style: {
      display: "flex",
      gap: 24,
      marginLeft: 8,
      minWidth: 0,
      flexShrink: 1,
      overflow: "hidden"
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#" + id,
    onClick: e => {
      e.preventDefault();
      onNav(id);
    },
    style: {
      color: "var(--qif-pink-hot)",
      textDecoration: "none",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 18
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "qif-head-cta",
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 12,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "md",
    variant: "ghost",
    onClick: () => onNav("rejoindre"),
    style: {
      boxSizing: "border-box",
      background: "var(--qif-white)",
      padding: "10px 20px",
      fontSize: 18,
      lineHeight: 1.15,
      border: "3px dashed var(--qif-pink)",
      color: "var(--qif-pink-hot)",
      whiteSpace: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: RES("../../assets/icons/volunteer_activism-pink.svg"),
    alt: "",
    style: {
      width: 20,
      height: 20,
      display: "block"
    }
  }), "Devenir b\xE9n\xE9vole"), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    href: "https://www.helloasso.com/associations/les-heures-joyeuxses-bar-associatif-feministe-et/evenements/qif-2026-queer-interstellaire-festival-open-air-2",
    style: {
      boxSizing: "border-box",
      padding: "13px 25px",
      fontSize: 18,
      lineHeight: 1.15,
      whiteSpace: "nowrap",
      flexShrink: 0
    }
  }, "Billetterie")));
}
function Marquee({
  text,
  bg,
  color,
  rotate = 0,
  speed = 26,
  size = 28,
  style
}) {
  const run = (text + " ✶ ").repeat(4);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      transform: "rotate(" + rotate + "deg)",
      overflow: "hidden",
      padding: "10px 0",
      whiteSpace: "nowrap",
      width: "110vw",
      marginLeft: "-5vw",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-block",
      animation: "qif-marquee " + speed + "s linear infinite",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: size,
      color,
      letterSpacing: "0.03em"
    }
  }, /*#__PURE__*/React.createElement("span", null, run), /*#__PURE__*/React.createElement("span", null, run)));
}
function Floaty({
  left,
  right,
  top,
  bottom,
  delay = 0,
  dur = 5,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left,
      right,
      top,
      bottom,
      animation: "qif-float " + dur + "s ease-in-out " + delay + "s infinite",
      pointerEvents: "none",
      zIndex: 1
    }
  }, children);
}
function Hero() {
  return /*#__PURE__*/React.createElement("div", {
    className: "qif-hero",
    style: {
      position: "relative",
      minHeight: "100vh",
      background: "var(--grad-sky-pale)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "clamp(190px,24vh,280px) 0 130px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Floaty, {
    left: "7%",
    top: "15%",
    dur: 6
  }, /*#__PURE__*/React.createElement(Star, {
    size: 64,
    rotate: -14,
    color: "var(--qif-pink)"
  })), /*#__PURE__*/React.createElement(Floaty, {
    right: "9%",
    top: "17%",
    delay: 0.6,
    dur: 5.5
  }, /*#__PURE__*/React.createElement(Star, {
    size: 48,
    rotate: 10,
    color: "var(--qif-pink)"
  })), /*#__PURE__*/React.createElement(Floaty, {
    right: "20%",
    top: "60%",
    delay: 2,
    dur: 4
  }, /*#__PURE__*/React.createElement(Star, {
    size: 26,
    rotate: -20,
    color: "var(--qif-blue)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 22,
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement(Marquee, {
    text: "DRAG SHOWS \u2736 CONCERTS \u2736 DJ SETS \u2736 SC\xC8NE OUVERTE \u2736 ATELIERS \u2736 BROCANTE \u2736 STANDS",
    bg: "var(--qif-blue)",
    color: "var(--qif-blue-deep)",
    rotate: 1.6,
    speed: 34,
    style: {
      position: "absolute",
      bottom: 0
    }
  }), /*#__PURE__*/React.createElement(Marquee, {
    text: "QUEER INTERSTELLAIRE FESTIVAL \u2736 SAM. 12 SEPT. 2026 \u2736 VILLEURBANNE",
    bg: "var(--qif-pink)",
    color: "var(--qif-white-pink)",
    rotate: -1.8,
    speed: 28,
    style: {
      position: "absolute",
      bottom: 0
    }
  })), /*#__PURE__*/React.createElement("img", {
    className: "qif-alien",
    src: RES("../../assets/alien2.png"),
    alt: "",
    style: {
      width: "38vw",
      maxWidth: 555,
      transform: "rotate(-6deg)",
      position: "absolute",
      right: "-2%",
      top: "18%",
      zIndex: 1,
      animation: "qif-float-r 7s ease-in-out .8s infinite",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("img", {
    className: "qif-alien",
    src: RES("../../assets/alien2.png"),
    alt: "",
    style: {
      width: "33vw",
      maxWidth: 483,
      transform: "rotate(8deg) scaleX(-1)",
      position: "absolute",
      left: "2%",
      top: "11%",
      zIndex: 1,
      animation: "qif-float-l 6s ease-in-out 1.6s infinite",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement(Star, {
    className: "qif-deco",
    size: 48,
    rotate: 10,
    color: "var(--qif-pink)",
    style: {
      position: "absolute",
      left: 1232,
      top: 765
    }
  }), /*#__PURE__*/React.createElement(Star, {
    className: "qif-deco",
    size: 48,
    rotate: 10,
    color: "var(--qif-pink)",
    style: {
      position: "absolute",
      left: 115,
      top: 833
    }
  }), /*#__PURE__*/React.createElement(Star, {
    className: "qif-deco",
    size: 93,
    rotate: 22,
    color: "var(--qif-blue)",
    style: {
      position: "absolute",
      left: 719,
      top: 901
    }
  }), /*#__PURE__*/React.createElement(Star, {
    className: "qif-deco",
    size: 93,
    rotate: 22,
    color: "var(--qif-blue)",
    style: {
      position: "absolute",
      left: 249,
      top: 819
    }
  }), /*#__PURE__*/React.createElement(Star, {
    className: "qif-deco",
    size: 93,
    rotate: 22,
    color: "var(--qif-blue)",
    style: {
      position: "absolute",
      left: 807,
      top: 224
    }
  }), /*#__PURE__*/React.createElement("img", {
    className: "qif-saucer",
    src: RES("../../assets/soucoupe.png"),
    alt: "",
    style: {
      position: "absolute",
      top: 92,
      left: "46%",
      width: "clamp(240px,26vw,426px)",
      animation: "qif-fly 22s linear -5.5s infinite",
      pointerEvents: "none",
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-block",
      background: "var(--qif-pink)",
      color: "var(--qif-white-pink)",
      fontFamily: "var(--font-body)",
      fontStyle: "italic",
      fontWeight: 700,
      fontSize: "clamp(20px,2.4vw,30px)",
      padding: "8px 26px",
      transform: "rotate(-4deg)",
      marginBottom: 18
    }
  }, "Sam. 12 SEPT. 2026 \u2014 Villeurbanne"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(76px,15vw,212px)",
      lineHeight: 0.84,
      color: "var(--qif-pink)",
      letterSpacing: "-0.01em",
      marginBottom: 10
    }
  }, "QUE\xB7ER"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display-alt)",
      fontStyle: "italic",
      fontSize: "clamp(46px,10vw,142px)",
      lineHeight: 1.06,
      backgroundImage: "var(--grad-blob)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      color: "var(--qif-pink)",
      transform: "rotate(-2.5deg)",
      margin: "-0.08em 0"
    }
  }, "interstellaire"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(76px,11vw,156px)",
      lineHeight: 0.84,
      color: "var(--qif-pink)",
      letterSpacing: "-0.01em",
      paddingTop: 18
    }
  }, "FESTIVAL"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 22,
      marginTop: 44,
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    href: "https://www.helloasso.com/associations/les-heures-joyeuxses-bar-associatif-feministe-et/evenements/qif-2026-queer-interstellaire-festival-open-air-2",
    style: {
      fontSize: 26,
      padding: "18px 44px"
    }
  }, "Billetterie"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    href: "#programme",
    style: {
      background: "var(--qif-white)",
      border: "3px dashed var(--qif-pink)",
      color: "var(--qif-pink-hot)",
      fontSize: 26,
      padding: "18px 44px"
    },
    onClick: e => {
      e.preventDefault();
      window.scrollTo({
        top: document.getElementById("programme").offsetTop - 70,
        behavior: "smooth"
      });
    }
  }, "Le programme")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontStyle: "italic",
      fontSize: 22,
      color: "var(--qif-pink-hot)",
      marginTop: 26,
      transform: "rotate(1.5deg)"
    }
  }, "de 15H00 \xE0 2H00 \u2014 36 rue Emile Decorps")));
}
function Preview({
  trackId,
  dark
}) {
  const [src, setSrc] = React.useState(null);
  const [playing, setPlaying] = React.useState(false);
  const audio = React.useRef(null);
  React.useEffect(() => {
    const cb = "qifdz" + trackId;
    window[cb] = res => {
      if (res && res.preview) setSrc(res.preview);
    };
    const sc = document.createElement("script");
    sc.src = "https://api.deezer.com/track/" + trackId + "?output=jsonp&callback=" + cb;
    document.head.appendChild(sc);
    return () => {
      sc.remove();
      delete window[cb];
    };
  }, [trackId]);
  const toggle = () => {
    const a = audio.current;
    if (!a) return;
    if (a.paused) {
      document.querySelectorAll("audio").forEach(o => {
        if (o !== a) o.pause();
      });
      a.play();
      setPlaying(true);
    } else {
      a.pause();
      setPlaying(false);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggle,
    disabled: !src,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      marginTop: 10,
      border: "none",
      cursor: src ? "pointer" : "default",
      opacity: src ? 1 : 0.55,
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 17,
      padding: "7px 14px",
      color: dark ? "var(--qif-pink-hot)" : "var(--qif-white-pink)",
      background: dark ? "var(--qif-white)" : "var(--qif-pink-hot)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: (playing ? "../../assets/icons/pause" : "../../assets/icons/play") + (dark ? "-pink.svg" : ".svg"),
    alt: "",
    style: {
      width: 18,
      height: 18,
      display: "block"
    }
  }), playing ? "Mettre en pause" : "Écouter un extrait"), src && /*#__PURE__*/React.createElement("audio", {
    ref: audio,
    src: src,
    preload: "none",
    onEnded: () => setPlaying(false),
    onPause: () => setPlaying(false),
    onPlay: () => setPlaying(true)
  }));
}
function Programme() {
  const P = "../../assets/photos/";
  const aprem = [["15h00 – 15H30", "Emma", "Broderie résistante", P + "prog-emma.png"], ["15H30 – 16h00", "Thomas", "Partage sur l'archive queer", P + "prog-thomas.png"], ["16h00 – 17H30", "Queerbaku", "Initiation au Shibari", P + "prog-queerbaku.png"], ["16H30 – 18h00", "Makatiass", "Twerk danse et culture", P + "prog-makatiass.png"], ["16H30 – 18h00", "Mille", "Atelier d'écriture", P + "prog-mille.png"]];
  const soiree = [["18H30 – 19H30", "Ici Modesta", "pop", [P + "prog-icimodesta.png"], ["Deezer", "4070195691", "https://www.deezer.com/fr/track/4070195691"]], ["19h30 – 20H30", "Blue Laika", "electro pop", [P + "prog-bluelaika.png"], ["Deezer", "3913333141", "https://www.deezer.com/fr/track/3913333141"]], ["21h – 22h", "June Exactly, Peaky Binder,\nMata Hata, Pétrole Désamour", "drag shows", [P + "prog-juneexactly.png", P + "prog-peakybinder.png", P + "prog-matahata.png", P + "prog-petrole.png"], null], ["22h – 23h", "Single ladies", "punk", [P + "prog-singleladies.png"], ["Deezer", "2120212977", "https://www.deezer.com/fr/track/2120212977"]], ["23h30 – 01h00", "DJ Fantastik", "afro dembo baile funk raggarton cumbia pop", [P + "prog-djfantastik.png"], ["SoundCloud", null, "https://soundcloud.com/search?q=DJ%20Fantastik"]], ["01h00 – 02h30", "DJ Ravi·e", "afro dembo baile funk raggarton cumbia pop", [P + "prog-ravie.png"], ["SoundCloud", null, "https://soundcloud.com/search?q=DJ%20Ravi-e"]]];
  const timeChip = {
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    fontSize: 17,
    lineHeight: 1.25,
    color: "var(--qif-white-pink)",
    background: "var(--qif-pink)",
    padding: "12px 14px",
    flexShrink: 0,
    minWidth: 116,
    textAlign: "center"
  };
  const partTitle = {
    fontFamily: "var(--font-display-alt)",
    fontStyle: "italic",
    fontSize: "clamp(46px,6vw,80px)",
    lineHeight: 1,
    color: "var(--qif-pink)",
    margin: "0 0 26px"
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "programme",
    style: {
      position: "relative",
      background: "var(--qif-white)",
      padding: "90px 24px 100px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Star, {
    size: 120,
    rotate: 14,
    color: "var(--qif-pink-pale)",
    style: {
      position: "absolute",
      right: "-30px",
      top: "40px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 940,
      margin: "0 auto",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(DisplayTitle, {
    top: "",
    middle: "programme",
    bottom: "",
    align: "left",
    scale: 1.1,
    color: "var(--qif-pink)",
    style: {
      marginBottom: 46
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: partTitle
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 2,
      background: "var(--qif-blue-pale)",
      padding: "22px 24px",
      display: "flex",
      gap: 22,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 320px",
      fontFamily: "var(--font-body)",
      fontSize: 21,
      lineHeight: 1.35,
      color: "var(--qif-blue-deep)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display-alt)",
      fontStyle: "italic",
      fontSize: 27,
      color: "var(--qif-blue-deep)",
      display: "block",
      marginBottom: 4
    }
  }, "Billetterie ateliers"), "Les ateliers sont \xE0 r\xE9server en plus de son billet, places limit\xE9es."), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    href: "https://www.helloasso.com/associations/les-heures-joyeuxses-bar-associatif-feministe-et/evenements/inscriptions-ateliers-qif-2026",
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/React.createElement("img", {
    src: RES("../../assets/icons/edit_note.svg"),
    alt: "",
    style: {
      width: 24,
      height: 24,
      display: "block"
    }
  }), "R\xE9server un atelier")), aprem.map(([time, who, what, img], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "qif-row",
    style: {
      display: "flex",
      alignItems: "stretch",
      gap: 12,
      transform: "rotate(" + (i % 2 ? 0.4 : -0.4) + "deg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "qif-time",
    style: {
      ...timeChip,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, time), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "stretch",
      gap: 18,
      background: "var(--qif-pink-pale)",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 92,
      alignSelf: "stretch",
      flexShrink: 0,
      position: "relative",
      minHeight: 84
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 18px 12px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display-alt)",
      fontStyle: "italic",
      fontSize: 27,
      lineHeight: 1,
      color: "var(--qif-pink-hot)"
    }
  }, who), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 21,
      color: "var(--qif-purple-deep)",
      marginTop: 3
    }
  }, what)))))), /*#__PURE__*/React.createElement("div", {
    className: "qif-row",
    style: {
      display: "flex",
      gap: 12,
      marginTop: 14,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "qif-time",
    style: {
      ...timeChip,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, "18H00\n18H30"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: "var(--qif-pink)",
      padding: "14px 22px",
      color: "var(--qif-white-pink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display-alt)",
      fontStyle: "italic",
      fontSize: 27,
      lineHeight: 1
    }
  }, "Sc\xE8ne ouverte"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 21,
      marginTop: 3
    }
  }, "inscriptions le jour J"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      background: "var(--qif-pink-pale)",
      padding: "14px 22px",
      fontFamily: "var(--font-body)",
      fontSize: 21,
      color: "var(--qif-purple-deep)"
    }
  }, /*#__PURE__*/React.createElement("em", {
    style: {
      fontFamily: "var(--font-display-alt)",
      fontStyle: "italic",
      fontSize: 24,
      color: "var(--qif-pink-hot)"
    }
  }, "+ les stands :"), " illustrations, livres, merch, pr\xE9vention et brocante"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...partTitle,
      margin: "64px 0 26px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, soiree.map(([time, who, what, imgs, listen], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "qif-row",
    style: {
      display: "flex",
      alignItems: "stretch",
      gap: 12,
      transform: "rotate(" + (i % 2 ? 0.4 : -0.4) + "deg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "qif-time",
    style: {
      ...timeChip,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, time), /*#__PURE__*/React.createElement("div", {
    className: "qif-act",
    style: {
      flex: 1,
      display: "flex",
      alignItems: "stretch",
      background: i % 2 ? "var(--qif-pink-pale)" : "var(--qif-pink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "16px 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display-alt)",
      fontStyle: "italic",
      fontSize: 27,
      lineHeight: 1.1,
      whiteSpace: "pre-line",
      color: i % 2 ? "var(--qif-pink-hot)" : "var(--qif-white-pink)"
    }
  }, who), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 21,
      marginTop: 4,
      color: i % 2 ? "var(--qif-purple-deep)" : "var(--qif-white-pink)"
    }
  }, what), listen && (listen[1] ? /*#__PURE__*/React.createElement(Preview, {
    trackId: listen[1],
    dark: i % 2 === 0
  }) : /*#__PURE__*/React.createElement("a", {
    href: listen[2],
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      marginTop: 10,
      textDecoration: "none",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 17,
      padding: "7px 14px",
      color: i % 2 ? "var(--qif-white-pink)" : "var(--qif-pink-hot)",
      background: i % 2 ? "var(--qif-pink-hot)" : "var(--qif-white)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: i % 2 ? RES("../../assets/icons/play.svg") : RES("../../assets/icons/play-pink.svg"),
    alt: "",
    style: {
      width: 18,
      height: 18,
      display: "block"
    }
  }), "\xC9couter sur ", listen[0]))), /*#__PURE__*/React.createElement("div", {
    className: "qif-prog-imgs",
    style: {
      display: "flex",
      flexShrink: 0,
      alignSelf: "stretch",
      position: "relative",
      width: imgs.length > 1 ? 62 * imgs.length : 148
    }
  }, imgs.map((src, j) => /*#__PURE__*/React.createElement("img", {
    key: j,
    src: src,
    alt: "",
    style: {
      flex: 1,
      minWidth: 0,
      height: "100%",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: j * 100 / imgs.length + "%",
      width: 100 / imgs.length + "%",
      objectFit: "cover",
      display: "block"
    }
  })))))))));
}
Object.assign(window, {
  SiteHeader,
  Hero,
  Programme,
  Marquee
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections2.jsx
try { (() => {
const {
  GradientPanel,
  DisplayTitle,
  Button,
  LinkTile,
  TeamMember,
  Avatar,
  Star,
  QifMark
} = window.QIFDesignSystem_5be1b3;
function Infos() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--qif-pink-pale)",
      padding: "80px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: "infos",
    style: {
      maxWidth: 900,
      margin: "0 auto",
      color: "var(--qif-pink-hot)"
    }
  }, /*#__PURE__*/React.createElement(DisplayTitle, {
    top: "",
    middle: "infos pratiques",
    bottom: "",
    align: "left",
    scale: 0.9,
    color: "var(--qif-pink-hot)",
    style: {
      marginBottom: 34
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "qif-infos-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "28px 40px",
      fontFamily: "var(--font-body)",
      fontSize: 22,
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 26
    }
  }, "Quand ?"), /*#__PURE__*/React.createElement("div", null, "Sam. 12 SEPT. 2026, de 15H00 \xE0 2H00"), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    href: "https://www.facebook.com/events/5499551526935753/",
    target: "_blank",
    rel: "noreferrer",
    style: {
      marginTop: 14,
      fontSize: 19,
      padding: "11px 22px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: RES("../../assets/icons/event.svg"),
    alt: "",
    style: {
      width: 22,
      height: 22,
      display: "block"
    }
  }), "L'event Facebook")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 26
    }
  }, "O\xF9 ?"), /*#__PURE__*/React.createElement("div", null, "36 rue Emile Decorps, Villeurbanne", /*#__PURE__*/React.createElement("br", null), "(proche P\xF4le Pixel)"), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    href: "https://www.google.com/maps/dir/?api=1&destination=36+rue+Emile+Decorps,+69100+Villeurbanne",
    target: "_blank",
    rel: "noreferrer",
    style: {
      marginTop: 14,
      fontSize: 19,
      padding: "11px 22px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: RES("../../assets/icons/directions.svg"),
    alt: "",
    style: {
      width: 22,
      height: 22,
      display: "block"
    }
  }), "Y aller")), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 26
    }
  }), /*#__PURE__*/React.createElement("div", null))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      transform: "rotate(-0.4deg)"
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "Carte \u2014 36 rue Emile Decorps, Villeurbanne",
    src: "https://www.openstreetmap.org/export/embed.html?bbox=4.8909%2C45.7523%2C4.9069%2C45.7623&layer=mapnik&marker=45.75728%2C4.89891",
    style: {
      display: "block",
      width: "100%",
      height: 340,
      border: "4px solid var(--qif-white)",
      boxSizing: "border-box",
      filter: "grayscale(1) sepia(1) hue-rotate(270deg) saturate(2.2) brightness(1.06)"
    },
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24,
      marginTop: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.openstreetmap.org/?mlat=45.75728&mlon=4.89891#map=16/45.75728/4.89891",
    target: "_blank",
    rel: "noreferrer",
    style: {
      fontFamily: "var(--font-body)",
      fontStyle: "italic",
      fontSize: 18,
      color: "var(--qif-pink-hot)"
    }
  }, "36 rue Emile Decorps, Villeurbanne (P\xF4le Pixel)"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display-alt)",
      fontStyle: "italic",
      fontSize: "clamp(34px,4vw,54px)",
      lineHeight: 1,
      color: "var(--qif-pink-hot)",
      margin: "48px 0 22px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 26,
      fontStyle: "normal",
      fontWeight: 700
    }
  }, "Nos tarifs")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, [["réduit", "10€", "var(--qif-white)", "var(--qif-pink-hot)"], ["normal", "13,12€", "var(--qif-blue)", "var(--qif-white)"], ["soutien", "15€", "var(--qif-pink)", "var(--qif-white-pink)"], ["précaire", "sur demande", "var(--qif-white)", "var(--qif-blue-deep)"]].map(([label, price, bg, fg], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: bg,
      color: fg,
      padding: "16px 26px",
      minWidth: 150,
      transform: "rotate(" + (i % 2 ? 1.2 : -1.2) + "deg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display-alt)",
      fontStyle: "italic",
      fontSize: 24,
      lineHeight: 1
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: price.length > 6 ? 24 : 40,
      lineHeight: 1.1,
      marginTop: 4
    }
  }, price)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: "flex",
      gap: 16,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "md",
    href: "https://www.helloasso.com/associations/les-heures-joyeuxses-bar-associatif-feministe-et/evenements/qif-2026-queer-interstellaire-festival-open-air-2",
    target: "_blank",
    rel: "noreferrer"
  }, "Prendre son billet sur HelloAsso"), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    variant: "ghost",
    href: "https://www.helloasso.com/associations/les-heures-joyeuxses-bar-associatif-feministe-et/evenements/inscriptions-ateliers-qif-2026",
    target: "_blank",
    rel: "noreferrer",
    style: {
      border: "3px dashed var(--qif-pink)",
      color: "var(--qif-pink-hot)"
    }
  }, "R\xE9server un atelier"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontStyle: "italic",
      fontSize: 19,
      color: "var(--qif-pink-hot)",
      maxWidth: 420
    }
  }, "Les ateliers sont \xE0 r\xE9server en plus de son billet."))));
}
function Equipe() {
  const team = [[RES("./elea-mtaj0heb-4vd8.png"), "ELEA", "elle", "Co-organisatrice du festival\nPrésidente des Heures Joyeu..x·ses"], [RES("./frame-2609264-mtaj15y6-r7pt.png"), "MAN", "iel/accords masc ou neutres", "Co-organisateur du festival\nResponsable Programmation"], [RES("./mathi-mtaj2quy-ou48.png"), "MATHILDE", "elle", "Graphiste"], [RES("./anouch-mtaj34bs-seil.png"), "ANOUCHKA", "elle", "Responsable communication"]];
  const technique = [[RES("../../assets/photos/tech-matt.png"), "MATT", "il", "Régisseur son"], [RES("../../assets/photos/tech-virginie.png"), "VIRGINIE", "elle", "Régisseuse lumière"], [RES("./fleur-mtfx33mw-6hzi.png"), "FLEUR", "elle", "Technicienne lumière"], [RES("./lucil-mtfx39ri-7rpy.png"), "LUCILE", "elle", "Technicienne lumière"]];
  const Card = ({
    title,
    people
  }) => /*#__PURE__*/React.createElement("div", {
    className: "qif-card",
    style: {
      flex: "1 1 380px",
      background: "var(--qif-white)",
      padding: "34px 30px 36px",
      boxShadow: "0 2px 0 var(--qif-blue)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display-alt)",
      fontStyle: "italic",
      fontSize: "clamp(34px,3.4vw,50px)",
      lineHeight: 1,
      color: "var(--qif-blue-deep)",
      marginBottom: 28
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "qif-tm-list",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 26
    }
  }, people.map(([src, name, pronouns, role], i) => /*#__PURE__*/React.createElement(TeamMember, {
    key: i,
    src: src,
    name: name,
    pronouns: pronouns,
    role: role,
    color: "var(--qif-blue-deep)",
    style: {
      transform: "rotate(" + (i % 2 ? 0.5 : -0.5) + "deg)"
    }
  }))));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--qif-blue-pale)",
      padding: "80px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: "team",
    style: {
      maxWidth: 1080,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display-alt)",
      fontStyle: "italic",
      fontSize: "clamp(56px,8vw,96px)",
      lineHeight: 1,
      color: "var(--qif-blue-deep)",
      marginBottom: 40
    }
  }, "la team"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 26,
      flexWrap: "wrap",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "les orgas",
    people: team
  }), /*#__PURE__*/React.createElement(Card, {
    title: "la technique",
    people: technique
  })), /*#__PURE__*/React.createElement("div", {
    id: "rejoindre",
    className: "qif-card",
    style: {
      marginTop: 34,
      background: "var(--qif-white)",
      padding: "34px 30px 36px",
      boxShadow: "0 2px 0 var(--qif-blue)",
      display: "flex",
      gap: 26,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 340px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display-alt)",
      fontStyle: "italic",
      fontSize: "clamp(34px,3.4vw,50px)",
      lineHeight: 1,
      color: "var(--qif-blue-deep)",
      marginBottom: 12
    }
  }, "nous rejoindre"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 21,
      lineHeight: 1.35,
      color: "var(--qif-blue-deep)"
    }
  }, "Le festival tourne gr\xE2ce aux b\xE9n\xE9voles : accueil, bar, stands, r\xE9gie, montage et d\xE9montage.")), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfK-sAdGh9s-fgKim4zqcU2_azSPB6Dqc_nRwOdurHAycVSxA/viewform",
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/React.createElement("img", {
    src: RES("../../assets/icons/volunteer_activism.svg"),
    alt: "",
    style: {
      width: 24,
      height: 24,
      display: "block"
    }
  }), "Devenir b\xE9n\xE9vole"))));
}
function Editions() {
  const all = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"].map(n => "../../assets/photos/qif-" + n + ".jpg");
  const rowA = all.slice(0, 6),
    rowB = all.slice(6);
  const Row = ({
    list,
    reverse,
    height
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "qif-gal",
    style: {
      animationDirection: reverse ? "reverse" : "normal"
    }
  }, list.concat(list).map((src, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: src,
    alt: "Photo d'une ancienne \xE9dition",
    style: {
      height
    }
  }))));
  return /*#__PURE__*/React.createElement("section", {
    id: "editions",
    style: {
      position: "relative",
      background: "var(--qif-white)",
      padding: "90px 0 100px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "qif-saucer-ed",
    src: RES("../../assets/soucoupe.png"),
    alt: "",
    style: {
      position: "absolute",
      right: "5%",
      top: 26,
      width: 180,
      transform: "rotate(6deg)",
      animation: "qif-float 6s ease-in-out infinite",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1020,
      margin: "0 auto",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement(DisplayTitle, {
    top: "",
    middle: "anciennes \xE9ditions",
    bottom: "",
    align: "left",
    scale: 0.9,
    color: "var(--qif-pink)",
    style: {
      marginBottom: 44
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 0
    }
  }, /*#__PURE__*/React.createElement(Row, {
    list: rowA,
    height: 250
  }), /*#__PURE__*/React.createElement(Row, {
    list: rowB,
    reverse: true,
    height: 200
  })));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement(GradientPanel, {
    variant: "pale",
    noise: false,
    style: {
      padding: "56px 24px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "qif-foot",
    style: {
      maxWidth: 900,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: 30,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(QifMark, {
    size: 120
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--qif-pink-hot)",
      fontSize: 18,
      lineHeight: 1.5
    }
  }, "Queer Interstellaire Festival : Samedi 12 Septembre 2026", /*#__PURE__*/React.createElement("br", null), "36 rue Emile Decorps, Villeurbanne", /*#__PURE__*/React.createElement("br", null), "avec Les Heures Joyeu..x\xB7ses et le collectif Outrage"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(LinkTile, {
    icon: RES("../../assets/icons/instagram-white.png"),
    label: "Instagram",
    gradient: "blob",
    size: 64,
    href: "https://www.instagram.com"
  }), /*#__PURE__*/React.createElement(LinkTile, {
    icon: RES("../../assets/icons/confirmation_number.svg"),
    label: "HelloAsso",
    gradient: "blob",
    size: 64,
    href: "https://www.helloasso.com/associations/les-heures-joyeuxses-bar-associatif-feministe-et/evenements/qif-2026-queer-interstellaire-festival-open-air-2"
  }))));
}
Object.assign(window, {
  Infos,
  Equipe,
  Editions,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections2.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Alien = __ds_scope.Alien;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.DisplayTitle = __ds_scope.DisplayTitle;

__ds_ns.GradientPanel = __ds_scope.GradientPanel;

__ds_ns.LinkTile = __ds_scope.LinkTile;

__ds_ns.QifMark = __ds_scope.QifMark;

__ds_ns.ScheduleRow = __ds_scope.ScheduleRow;

__ds_ns.Star = __ds_scope.Star;

__ds_ns.TeamMember = __ds_scope.TeamMember;

})();


export const {
  Alien,
  Avatar,
  Button,
  DisplayTitle,
  GradientPanel,
  LinkTile,
  QifMark,
  ScheduleRow,
  Star,
  TeamMember,
} = g.QIFDesignSystem_5be1b3;
