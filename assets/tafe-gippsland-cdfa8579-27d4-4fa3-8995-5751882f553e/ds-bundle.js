/* @ds-bundle: {"format":4,"namespace":"TAFEGippsland_cdfa85","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"ColourPanel","sourcePath":"components/brand/ColourPanel.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"PageTurn","sourcePath":"components/brand/PageTurn.jsx"},{"name":"BulletList","sourcePath":"components/content/BulletList.jsx"},{"name":"CourseListing","sourcePath":"components/content/CourseListing.jsx"},{"name":"ProofPoint","sourcePath":"components/content/ProofPoint.jsx"},{"name":"RuledTable","sourcePath":"components/content/RuledTable.jsx"},{"name":"BrandFooter","sourcePath":"components/layout/BrandFooter.jsx"},{"name":"Body","sourcePath":"components/type/Body.jsx"},{"name":"Heading","sourcePath":"components/type/Heading.jsx"},{"name":"SubHeading","sourcePath":"components/type/SubHeading.jsx"},{"name":"Testimonial","sourcePath":"components/type/Testimonial.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"652281b6e09e","components/brand/ColourPanel.jsx":"e46bb3191b0b","components/brand/Logo.jsx":"7a4a4e889f4a","components/brand/PageTurn.jsx":"6fd8da35a8d8","components/content/BulletList.jsx":"a86d97ed087e","components/content/CourseListing.jsx":"72a50a7f4d16","components/content/ProofPoint.jsx":"85ae93ead0bc","components/content/RuledTable.jsx":"6fd305352593","components/layout/BrandFooter.jsx":"84e30718a5f2","components/type/Body.jsx":"29403eb586de","components/type/Heading.jsx":"388593bc9a85","components/type/SubHeading.jsx":"ba7bfc7fece2","components/type/Testimonial.jsx":"61bf8fbb0e82"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TAFEGippsland_cdfa85 = window.TAFEGippsland_cdfa85 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Website call to action (tafegippsland.edu.au): solid dark green rectangle, white
   Bold sans label, right-pointing arrow, square corners. */
function Button({
  children,
  variant = "primary",
  arrow = true,
  size = "medium",
  href,
  disabled = false,
  style,
  ...rest
}) {
  const pad = size === "small" ? "8px 14px" : size === "large" ? "16px 26px" : "12px 20px";
  const palette = {
    primary: {
      background: "var(--button-bg)",
      color: "var(--button-text)",
      border: "1px solid transparent"
    },
    secondary: {
      background: "transparent",
      color: "var(--green-3302)",
      border: "1px solid var(--green-3302)"
    },
    reversed: {
      background: "var(--white)",
      color: "var(--green-3302)",
      border: "1px solid transparent"
    }
  }[variant];
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    "aria-disabled": disabled || undefined,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-4)",
      justifyContent: "space-between",
      minWidth: size === "small" ? 0 : 150,
      padding: pad,
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-body-bold)",
      fontSize: size === "small" ? "var(--size-caption)" : "var(--size-screen-small)",
      letterSpacing: "-.01em",
      textDecoration: "none",
      borderRadius: "var(--radius-none)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? "var(--opacity-disabled)" : 1,
      transition: "background var(--duration-base) var(--ease-standard)",
      ...palette,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), arrow ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192") : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const files = {
  primary: "../../assets/logo/tafe-gippsland-logo-transparent.png",
  reversed: "../../assets/logo/tafe-gippsland-logo-reversed.png"
};

/* The master logo. Raster only — see readme.md "Logo" for the vector caveat.
   Clear space is the cap height of the N in GIPPSLAND ≈ 0.28 × logo height (2.1.2). */
function Logo({
  variant = "primary",
  width = 180,
  clearSpace = false,
  src,
  style,
  ...rest
}) {
  const pad = clearSpace ? Math.round(width * 0.11) : 0;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      padding: pad,
      lineHeight: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src || files[variant] || files.primary,
    alt: "TAFE Gippsland",
    style: {
      display: "block",
      width,
      height: "auto"
    }
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/PageTurn.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The page turning device (2.4). Two flat triangles in the bottom right corner:
   the revealed page beneath (`shade`) and the lifted page (`fold`).
   Size, apex position and colour pairing are all variable by design. */
function PageTurn({
  size = 240,
  fold = "var(--magenta-239)",
  shade = "var(--purple-526)",
  apex = 0.42,
  corner = "bottom-right",
  style,
  ...rest
}) {
  const flipX = corner === "bottom-left" || corner === "top-left";
  const flipY = corner === "top-right" || corner === "top-left";
  const pos = {
    position: "absolute",
    width: size,
    height: size,
    [flipY ? "top" : "bottom"]: 0,
    [flipX ? "left" : "right"]: 0,
    pointerEvents: "none",
    transform: `scale(${flipX ? -1 : 1},${flipY ? -1 : 1})`,
    transformOrigin: "center",
    overflow: "hidden",
    ...style
  };
  const layer = {
    position: "absolute",
    inset: 0
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: pos,
    "aria-hidden": "true"
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      ...layer,
      background: shade,
      clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...layer,
      background: fold,
      clipPath: `polygon(100% 0%, 100% 100%, ${apex * 100}% 100%)`
    }
  }));
}
Object.assign(__ds_scope, { PageTurn });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PageTurn.jsx", error: String((e && e.message) || e) }); }

// components/brand/ColourPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A flat, full-bleed colour or image field — the brand's basic building block for
   covers, banners and slides (4.3.1, 4.4.1). No radius, no shadow, no gradient. */
function ColourPanel({
  background = "var(--green-3302)",
  image,
  scrim = false,
  turn,
  padding = "var(--space-7)",
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      overflow: "hidden",
      background,
      backgroundImage: image ? `url(${image})` : undefined,
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "var(--text-on-dark)",
      padding,
      ...style
    }
  }, rest), scrim ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-dark)"
    },
    "aria-hidden": "true"
  }) : null, turn ? /*#__PURE__*/React.createElement(__ds_scope.PageTurn, turn) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, children));
}
Object.assign(__ds_scope, { ColourPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ColourPanel.jsx", error: String((e && e.message) || e) }); }

// components/content/BulletList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Body_dot bullet (2.6, styles 8 and 9): 3mm indent, 1mm between items, 3mm after the
   last. Editorial rule (3.3): lower case items, full stop on the last point only. */
function BulletList({
  items = [],
  reversed = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ul", _extends({
    style: {
      margin: "0 0 var(--space-after-body)",
      paddingLeft: "3mm",
      listStyle: "none",
      display: "grid",
      gap: "var(--space-after-bullet)",
      ...style
    }
  }, rest), items.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body)",
      lineHeight: "var(--leading-body)",
      letterSpacing: "var(--track-body)",
      color: reversed ? "var(--text-on-dark)" : "var(--text-body)",
      display: "grid",
      gridTemplateColumns: "3mm 1fr"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2022"), /*#__PURE__*/React.createElement("span", null, item))));
}
Object.assign(__ds_scope, { BulletList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BulletList.jsx", error: String((e && e.message) || e) }); }

// components/content/CourseListing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Course listing as used on the standard A4 course flyer (4.5.0): course title and
   national code, then campus, duration and career outcomes as labelled lines. */
function CourseListing({
  title,
  code,
  campus,
  duration,
  careers,
  style,
  ...rest
}) {
  const line = {
    fontFamily: "var(--font-body)",
    fontSize: "var(--size-body)",
    lineHeight: "var(--leading-body)",
    letterSpacing: "var(--track-body)",
    color: "var(--text-body)",
    margin: 0
  };
  const label = {
    fontWeight: "var(--weight-body-black)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gap: "1mm",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-body-black)",
      fontSize: "var(--size-sub2)",
      lineHeight: "var(--leading-sub2)",
      letterSpacing: "var(--track-sub2)",
      color: "var(--text-body)"
    }
  }, title, code ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--weight-body-regular)"
    }
  }, " ", code) : null), campus ? /*#__PURE__*/React.createElement("p", {
    style: line
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Campus:"), " ", campus) : null, duration ? /*#__PURE__*/React.createElement("p", {
    style: line
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Duration:"), " ", duration) : null, careers ? /*#__PURE__*/React.createElement("p", {
    style: line
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Career Opportunities:"), " ", careers) : null);
}
Object.assign(__ds_scope, { CourseListing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CourseListing.jsx", error: String((e && e.message) || e) }); }

// components/content/ProofPoint.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Proof point info graphic (2.9). A statistic set large in the display face on a flat
   brand colour, with a short explanatory paragraph beneath. */
function ProofPoint({
  statistic,
  detail,
  footnote,
  background = "var(--green-3302)",
  reversed = true,
  align = "left",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background,
      color: reversed ? "var(--text-on-dark)" : "var(--text-body)",
      padding: "var(--space-6)",
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-display-regular)",
      fontSize: "var(--size-display-md)",
      lineHeight: 1.02,
      letterSpacing: "-.02em",
      textWrap: "balance"
    }
  }, statistic), detail ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-4) 0 0",
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body)",
      lineHeight: "var(--leading-body)",
      letterSpacing: "var(--track-body)",
      maxWidth: "46ch"
    }
  }, detail) : null, footnote ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-3) 0 0",
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-caption)",
      lineHeight: "var(--leading-caption)",
      opacity: 0.8
    }
  }, footnote) : null);
}
Object.assign(__ds_scope, { ProofPoint });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProofPoint.jsx", error: String((e && e.message) || e) }); }

// components/content/RuledTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Body_table (2.6, styles 13 and 14): 0.5pt rules at -60% black above each row,
   plus a rule below the last row. Two columns, value right aligned. */
function RuledTable({
  caption,
  rows = [],
  style,
  ...rest
}) {
  const cell = {
    fontFamily: "var(--font-body)",
    fontSize: "var(--size-body)",
    lineHeight: "var(--leading-body)",
    letterSpacing: "var(--track-body)",
    color: "var(--text-body)",
    padding: "2mm 0"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), caption ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 1mm",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-body-black)",
      fontSize: "var(--size-body)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)"
    }
  }, caption) : null, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderTop: "0.5pt solid var(--rule)",
      borderBottom: i === rows.length - 1 ? "0.5pt solid var(--rule)" : undefined
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: cell
  }, row.label), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      textAlign: "right",
      whiteSpace: "nowrap",
      paddingLeft: "var(--space-5)"
    }
  }, row.value))))));
}
Object.assign(__ds_scope, { RuledTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/RuledTable.jsx", error: String((e && e.message) || e) }); }

// components/layout/BrandFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CAMPUSES = ["Leongatha", "Warragul", "Yallourn", "Morwell", "Traralgon", "Sale", "Bairnsdale", "Forestec", "Lakes Entrance Seamec"];

/* Standard back page / sign-off block (4.3.3, 4.4.3): contact details, campus list,
   National Provider Number and Marketing job number. Two colour options only. */
function BrandFooter({
  tone = "green",
  campuses = CAMPUSES,
  phone = "1300 133 717",
  address = "PO Box 3279 GMC, Morwell 3841",
  email = "enquiries@tafegippsland.edu.au",
  url = "tafegippsland.edu.au",
  jobNumber,
  providerNumber = "0417",
  style,
  ...rest
}) {
  const dark = tone === "green";
  const line = {
    margin: 0,
    fontFamily: "var(--font-body)",
    fontSize: "var(--size-body)",
    lineHeight: "var(--leading-body)",
    letterSpacing: "var(--track-body)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: dark ? "var(--green-3302)" : "var(--warm-grey-1)",
      color: dark ? "var(--text-on-dark)" : "var(--text-body)",
      padding: "var(--space-6)",
      display: "grid",
      gap: "var(--space-5)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "0.5mm"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...line,
      fontWeight: "var(--weight-body-bold)"
    }
  }, phone), /*#__PURE__*/React.createElement("p", {
    style: line
  }, address), /*#__PURE__*/React.createElement("p", {
    style: line
  }, email), /*#__PURE__*/React.createElement("p", {
    style: line
  }, url)), /*#__PURE__*/React.createElement("p", {
    style: {
      ...line,
      maxWidth: "48ch"
    }
  }, campuses.join(" | ")), /*#__PURE__*/React.createElement("p", {
    style: {
      ...line,
      fontSize: "var(--size-caption)",
      lineHeight: "var(--leading-caption)",
      opacity: 0.85
    }
  }, "National Provider Number ", providerNumber, jobNumber ? ` | ${jobNumber}` : ""));
}
Object.assign(__ds_scope, { BrandFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/BrandFooter.jsx", error: String((e && e.message) || e) }); }

// components/type/Body.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const scale = {
  intro: {
    fontSize: "var(--size-intro)",
    lineHeight: "var(--leading-intro)",
    letterSpacing: "var(--track-intro)",
    fontWeight: "var(--weight-body-medium)",
    maxWidth: "var(--measure-intro)"
  },
  body: {
    fontSize: "var(--size-body)",
    lineHeight: "var(--leading-body)",
    letterSpacing: "var(--track-body)",
    fontWeight: "var(--weight-body-regular)",
    maxWidth: "var(--measure-body)"
  },
  caption: {
    fontSize: "var(--size-caption)",
    lineHeight: "var(--leading-caption)",
    letterSpacing: "var(--track-caption)",
    fontWeight: "var(--weight-body-regular)",
    maxWidth: "var(--measure-body)"
  }
};

/* Intro body / Body / Captions (2.6). Left aligned, single spaced, 3mm space after. */
function Body({
  variant = "body",
  reversed = false,
  black = false,
  as = "p",
  children,
  style,
  ...rest
}) {
  const Tag = as;
  const colour = variant === "caption" ? "var(--text-caption)" : "var(--text-body)";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: "var(--font-body)",
      color: reversed ? "var(--text-on-dark)" : colour,
      margin: "0 0 var(--space-after-body)",
      textAlign: "left",
      textWrap: "pretty",
      ...scale[variant],
      ...(black ? {
        fontWeight: "var(--weight-body-black)"
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Body });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/Body.jsx", error: String((e && e.message) || e) }); }

// components/type/Heading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const scale = {
  1: {
    fontSize: "var(--size-h1)",
    lineHeight: "var(--leading-h1)",
    letterSpacing: "var(--track-h1)",
    marginBottom: "var(--space-after-h1)"
  },
  2: {
    fontSize: "var(--size-h2)",
    lineHeight: "var(--leading-h2)",
    letterSpacing: "var(--track-h2)",
    marginBottom: "var(--space-after-h2)"
  }
};

/* Heading_01 / Heading_02 — display face, sentence case, never used for body copy (2.5, 2.6). */
function Heading({
  level = 1,
  medium = false,
  reversed = false,
  as,
  children,
  style,
  ...rest
}) {
  const Tag = as || (level === 1 ? "h1" : "h2");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: medium ? "var(--weight-display-medium)" : "var(--weight-display-regular)",
      color: reversed ? "var(--text-on-dark)" : "var(--text-heading)",
      margin: 0,
      textWrap: "pretty",
      ...scale[level],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Heading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/Heading.jsx", error: String((e && e.message) || e) }); }

// components/type/SubHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const scale = {
  1: {
    fontSize: "var(--size-sub1)",
    lineHeight: "var(--leading-sub1)",
    letterSpacing: "var(--track-sub1)",
    fontWeight: "var(--weight-body-black)",
    marginTop: "3mm",
    marginBottom: "1mm"
  },
  2: {
    fontSize: "var(--size-sub2)",
    lineHeight: "var(--leading-sub2)",
    letterSpacing: "var(--track-sub2)",
    fontWeight: "var(--weight-body-black)",
    marginTop: "1mm",
    marginBottom: "2mm"
  },
  3: {
    fontSize: "var(--size-sub3)",
    lineHeight: "var(--leading-sub3)",
    letterSpacing: "var(--track-sub3)",
    fontWeight: "var(--weight-body-semibold)",
    marginTop: "1mm",
    marginBottom: "2mm"
  }
};

/* Sub heading_01 / _02 / _03 — body face, sentence case (2.6). */
function SubHeading({
  level = 1,
  reversed = false,
  as = "h3",
  children,
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: "var(--font-body)",
      color: reversed ? "var(--text-on-dark)" : "var(--text-body)",
      ...scale[level],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { SubHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/SubHeading.jsx", error: String((e && e.message) || e) }); }

// components/type/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Testimonial (2.6, style 10): display face 14pt/15pt, with oversized quote marks
   set at 36pt on a -18pt baseline shift, and a caption line under the closing mark. */
function Testimonial({
  quote,
  attribution,
  reversed = false,
  style,
  ...rest
}) {
  const mark = {
    fontFamily: "var(--font-display)",
    fontSize: "var(--size-quote-mark)",
    lineHeight: 0,
    position: "relative",
    top: "0.18em",
    color: reversed ? "var(--text-on-dark)" : "var(--text-heading)"
  };
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      maxWidth: "34ch",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-display-regular)",
      fontSize: "var(--size-quote)",
      lineHeight: "var(--leading-quote)",
      letterSpacing: "var(--track-quote)",
      color: reversed ? "var(--text-on-dark)" : "var(--text-body)",
      textWrap: "pretty"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: mark
  }, "\u201C"), " ", quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-2)",
      marginTop: "2mm",
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-caption)",
      lineHeight: "var(--leading-caption)",
      letterSpacing: "var(--track-caption)",
      color: reversed ? "var(--text-on-dark)" : "var(--text-caption)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...mark,
      top: "0.42em"
    }
  }, "\u201D"), /*#__PURE__*/React.createElement("span", null, attribution)));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/Testimonial.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ColourPanel = __ds_scope.ColourPanel;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PageTurn = __ds_scope.PageTurn;

__ds_ns.BulletList = __ds_scope.BulletList;

__ds_ns.CourseListing = __ds_scope.CourseListing;

__ds_ns.ProofPoint = __ds_scope.ProofPoint;

__ds_ns.RuledTable = __ds_scope.RuledTable;

__ds_ns.BrandFooter = __ds_scope.BrandFooter;

__ds_ns.Body = __ds_scope.Body;

__ds_ns.Heading = __ds_scope.Heading;

__ds_ns.SubHeading = __ds_scope.SubHeading;

__ds_ns.Testimonial = __ds_scope.Testimonial;

})();
