import { j as me } from './jsx-runtime-Q5kDp4vx.js';
import { R as he } from './index-DogsOklH.js';
function ce(e) {
  var r,
    o,
    t = '';
  if (typeof e == 'string' || typeof e == 'number') t += e;
  else if (typeof e == 'object')
    if (Array.isArray(e))
      for (r = 0; r < e.length; r++) e[r] && (o = ce(e[r])) && (t && (t += ' '), (t += o));
    else for (r in e) e[r] && (t && (t += ' '), (t += r));
  return t;
}
function ye() {
  for (var e, r, o = 0, t = ''; o < arguments.length; )
    (e = arguments[o++]) && (r = ce(e)) && (t && (t += ' '), (t += r));
  return t;
}
const F = '-';
function xe(e) {
  const r = ve(e),
    { conflictingClassGroups: o, conflictingClassGroupModifiers: t } = e;
  function a(s) {
    const l = s.split(F);
    return l[0] === '' && l.length !== 1 && l.shift(), de(l, r) || we(s);
  }
  function n(s, l) {
    const u = o[s] || [];
    return l && t[s] ? [...u, ...t[s]] : u;
  }
  return { getClassGroupId: a, getConflictingClassGroupIds: n };
}
function de(e, r) {
  var s;
  if (e.length === 0) return r.classGroupId;
  const o = e[0],
    t = r.nextPart.get(o),
    a = t ? de(e.slice(1), t) : void 0;
  if (a) return a;
  if (r.validators.length === 0) return;
  const n = e.join(F);
  return (s = r.validators.find(({ validator: l }) => l(n))) == null ? void 0 : s.classGroupId;
}
const re = /^\[(.+)\]$/;
function we(e) {
  if (re.test(e)) {
    const r = re.exec(e)[1],
      o = r == null ? void 0 : r.substring(0, r.indexOf(':'));
    if (o) return 'arbitrary..' + o;
  }
}
function ve(e) {
  const { theme: r, prefix: o } = e,
    t = { nextPart: new Map(), validators: [] };
  return (
    Ce(Object.entries(e.classGroups), o).forEach(([n, s]) => {
      q(s, t, n, r);
    }),
    t
  );
}
function q(e, r, o, t) {
  e.forEach((a) => {
    if (typeof a == 'string') {
      const n = a === '' ? r : te(r, a);
      n.classGroupId = o;
      return;
    }
    if (typeof a == 'function') {
      if (ke(a)) {
        q(a(t), r, o, t);
        return;
      }
      r.validators.push({ validator: a, classGroupId: o });
      return;
    }
    Object.entries(a).forEach(([n, s]) => {
      q(s, te(r, n), o, t);
    });
  });
}
function te(e, r) {
  let o = e;
  return (
    r.split(F).forEach((t) => {
      o.nextPart.has(t) || o.nextPart.set(t, { nextPart: new Map(), validators: [] }),
        (o = o.nextPart.get(t));
    }),
    o
  );
}
function ke(e) {
  return e.isThemeGetter;
}
function Ce(e, r) {
  return r
    ? e.map(([o, t]) => {
        const a = t.map((n) =>
          typeof n == 'string'
            ? r + n
            : typeof n == 'object'
              ? Object.fromEntries(Object.entries(n).map(([s, l]) => [r + s, l]))
              : n,
        );
        return [o, a];
      })
    : e;
}
function ze(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let r = 0,
    o = new Map(),
    t = new Map();
  function a(n, s) {
    o.set(n, s), r++, r > e && ((r = 0), (t = o), (o = new Map()));
  }
  return {
    get(n) {
      let s = o.get(n);
      if (s !== void 0) return s;
      if ((s = t.get(n)) !== void 0) return a(n, s), s;
    },
    set(n, s) {
      o.has(n) ? o.set(n, s) : a(n, s);
    },
  };
}
const ue = '!';
function Me(e) {
  const r = e.separator,
    o = r.length === 1,
    t = r[0],
    a = r.length;
  return function (s) {
    const l = [];
    let u = 0,
      b = 0,
      p;
    for (let f = 0; f < s.length; f++) {
      let m = s[f];
      if (u === 0) {
        if (m === t && (o || s.slice(f, f + a) === r)) {
          l.push(s.slice(b, f)), (b = f + a);
          continue;
        }
        if (m === '/') {
          p = f;
          continue;
        }
      }
      m === '[' ? u++ : m === ']' && u--;
    }
    const g = l.length === 0 ? s : s.substring(b),
      y = g.startsWith(ue),
      w = y ? g.substring(1) : g,
      M = p && p > b ? p - b : void 0;
    return {
      modifiers: l,
      hasImportantModifier: y,
      baseClassName: w,
      maybePostfixModifierPosition: M,
    };
  };
}
function Se(e) {
  if (e.length <= 1) return e;
  const r = [];
  let o = [];
  return (
    e.forEach((t) => {
      t[0] === '[' ? (r.push(...o.sort(), t), (o = [])) : o.push(t);
    }),
    r.push(...o.sort()),
    r
  );
}
function Ae(e) {
  return { cache: ze(e.cacheSize), splitModifiers: Me(e), ...xe(e) };
}
const Re = /\s+/;
function Ge(e, r) {
  const { splitModifiers: o, getClassGroupId: t, getConflictingClassGroupIds: a } = r,
    n = new Set();
  return e
    .trim()
    .split(Re)
    .map((s) => {
      const {
        modifiers: l,
        hasImportantModifier: u,
        baseClassName: b,
        maybePostfixModifierPosition: p,
      } = o(s);
      let g = t(p ? b.substring(0, p) : b),
        y = !!p;
      if (!g) {
        if (!p) return { isTailwindClass: !1, originalClassName: s };
        if (((g = t(b)), !g)) return { isTailwindClass: !1, originalClassName: s };
        y = !1;
      }
      const w = Se(l).join(':');
      return {
        isTailwindClass: !0,
        modifierId: u ? w + ue : w,
        classGroupId: g,
        originalClassName: s,
        hasPostfixModifier: y,
      };
    })
    .reverse()
    .filter((s) => {
      if (!s.isTailwindClass) return !0;
      const { modifierId: l, classGroupId: u, hasPostfixModifier: b } = s,
        p = l + u;
      return n.has(p) ? !1 : (n.add(p), a(u, b).forEach((g) => n.add(l + g)), !0);
    })
    .reverse()
    .map((s) => s.originalClassName)
    .join(' ');
}
function Ie() {
  let e = 0,
    r,
    o,
    t = '';
  for (; e < arguments.length; ) (r = arguments[e++]) && (o = pe(r)) && (t && (t += ' '), (t += o));
  return t;
}
function pe(e) {
  if (typeof e == 'string') return e;
  let r,
    o = '';
  for (let t = 0; t < e.length; t++) e[t] && (r = pe(e[t])) && (o && (o += ' '), (o += r));
  return o;
}
function Pe(e, ...r) {
  let o,
    t,
    a,
    n = s;
  function s(u) {
    const b = r.reduce((p, g) => g(p), e());
    return (o = Ae(b)), (t = o.cache.get), (a = o.cache.set), (n = l), l(u);
  }
  function l(u) {
    const b = t(u);
    if (b) return b;
    const p = Ge(u, o);
    return a(u, p), p;
  }
  return function () {
    return n(Ie.apply(null, arguments));
  };
}
function c(e) {
  const r = (o) => o[e] || [];
  return (r.isThemeGetter = !0), r;
}
const be = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Te = /^\d+\/\d+$/,
  je = new Set(['px', 'full', 'screen']),
  Ee = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  _e =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Be = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Le =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function h(e) {
  return z(e) || je.has(e) || Te.test(e);
}
function k(e) {
  return S(e, 'length', Fe);
}
function z(e) {
  return !!e && !Number.isNaN(Number(e));
}
function E(e) {
  return S(e, 'number', z);
}
function G(e) {
  return !!e && Number.isInteger(Number(e));
}
function Ne(e) {
  return e.endsWith('%') && z(e.slice(0, -1));
}
function i(e) {
  return be.test(e);
}
function C(e) {
  return Ee.test(e);
}
const Ve = new Set(['length', 'size', 'percentage']);
function We(e) {
  return S(e, Ve, fe);
}
function Oe(e) {
  return S(e, 'position', fe);
}
const $e = new Set(['image', 'url']);
function Ue(e) {
  return S(e, $e, Xe);
}
function qe(e) {
  return S(e, '', Je);
}
function I() {
  return !0;
}
function S(e, r, o) {
  const t = be.exec(e);
  return t ? (t[1] ? (typeof r == 'string' ? t[1] === r : r.has(t[1])) : o(t[2])) : !1;
}
function Fe(e) {
  return _e.test(e);
}
function fe() {
  return !1;
}
function Je(e) {
  return Be.test(e);
}
function Xe(e) {
  return Le.test(e);
}
function Ze() {
  const e = c('colors'),
    r = c('spacing'),
    o = c('blur'),
    t = c('brightness'),
    a = c('borderColor'),
    n = c('borderRadius'),
    s = c('borderSpacing'),
    l = c('borderWidth'),
    u = c('contrast'),
    b = c('grayscale'),
    p = c('hueRotate'),
    g = c('invert'),
    y = c('gap'),
    w = c('gradientColorStops'),
    M = c('gradientColorStopPositions'),
    f = c('inset'),
    m = c('margin'),
    v = c('opacity'),
    x = c('padding'),
    J = c('saturate'),
    N = c('scale'),
    X = c('sepia'),
    Z = c('skew'),
    H = c('space'),
    K = c('translate'),
    V = () => ['auto', 'contain', 'none'],
    W = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
    O = () => ['auto', i, r],
    d = () => [i, r],
    Q = () => ['', h, k],
    P = () => ['auto', z, i],
    Y = () => [
      'bottom',
      'center',
      'left',
      'left-bottom',
      'left-top',
      'right',
      'right-bottom',
      'right-top',
      'top',
    ],
    T = () => ['solid', 'dashed', 'dotted', 'double', 'none'],
    D = () => [
      'normal',
      'multiply',
      'screen',
      'overlay',
      'darken',
      'lighten',
      'color-dodge',
      'color-burn',
      'hard-light',
      'soft-light',
      'difference',
      'exclusion',
      'hue',
      'saturation',
      'color',
      'luminosity',
      'plus-lighter',
    ],
    $ = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'],
    A = () => ['', '0', i],
    ee = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
    R = () => [z, E],
    j = () => [z, i];
  return {
    cacheSize: 500,
    separator: ':',
    theme: {
      colors: [I],
      spacing: [h, k],
      blur: ['none', '', C, i],
      brightness: R(),
      borderColor: [e],
      borderRadius: ['none', '', 'full', C, i],
      borderSpacing: d(),
      borderWidth: Q(),
      contrast: R(),
      grayscale: A(),
      hueRotate: j(),
      invert: A(),
      gap: d(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ne, k],
      inset: O(),
      margin: O(),
      opacity: R(),
      padding: d(),
      saturate: R(),
      scale: R(),
      sepia: A(),
      skew: j(),
      space: d(),
      translate: d(),
    },
    classGroups: {
      aspect: [{ aspect: ['auto', 'square', 'video', i] }],
      container: ['container'],
      columns: [{ columns: [C] }],
      'break-after': [{ 'break-after': ee() }],
      'break-before': [{ 'break-before': ee() }],
      'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }],
      'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
      box: [{ box: ['border', 'content'] }],
      display: [
        'block',
        'inline-block',
        'inline',
        'flex',
        'inline-flex',
        'table',
        'inline-table',
        'table-caption',
        'table-cell',
        'table-column',
        'table-column-group',
        'table-footer-group',
        'table-header-group',
        'table-row-group',
        'table-row',
        'flow-root',
        'grid',
        'inline-grid',
        'contents',
        'list-item',
        'hidden',
      ],
      float: [{ float: ['right', 'left', 'none'] }],
      clear: [{ clear: ['left', 'right', 'both', 'none'] }],
      isolation: ['isolate', 'isolation-auto'],
      'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
      'object-position': [{ object: [...Y(), i] }],
      overflow: [{ overflow: W() }],
      'overflow-x': [{ 'overflow-x': W() }],
      'overflow-y': [{ 'overflow-y': W() }],
      overscroll: [{ overscroll: V() }],
      'overscroll-x': [{ 'overscroll-x': V() }],
      'overscroll-y': [{ 'overscroll-y': V() }],
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
      inset: [{ inset: [f] }],
      'inset-x': [{ 'inset-x': [f] }],
      'inset-y': [{ 'inset-y': [f] }],
      start: [{ start: [f] }],
      end: [{ end: [f] }],
      top: [{ top: [f] }],
      right: [{ right: [f] }],
      bottom: [{ bottom: [f] }],
      left: [{ left: [f] }],
      visibility: ['visible', 'invisible', 'collapse'],
      z: [{ z: ['auto', G, i] }],
      basis: [{ basis: O() }],
      'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
      'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
      flex: [{ flex: ['1', 'auto', 'initial', 'none', i] }],
      grow: [{ grow: A() }],
      shrink: [{ shrink: A() }],
      order: [{ order: ['first', 'last', 'none', G, i] }],
      'grid-cols': [{ 'grid-cols': [I] }],
      'col-start-end': [{ col: ['auto', { span: ['full', G, i] }, i] }],
      'col-start': [{ 'col-start': P() }],
      'col-end': [{ 'col-end': P() }],
      'grid-rows': [{ 'grid-rows': [I] }],
      'row-start-end': [{ row: ['auto', { span: [G, i] }, i] }],
      'row-start': [{ 'row-start': P() }],
      'row-end': [{ 'row-end': P() }],
      'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
      'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', i] }],
      'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', i] }],
      gap: [{ gap: [y] }],
      'gap-x': [{ 'gap-x': [y] }],
      'gap-y': [{ 'gap-y': [y] }],
      'justify-content': [{ justify: ['normal', ...$()] }],
      'justify-items': [{ 'justify-items': ['start', 'end', 'center', 'stretch'] }],
      'justify-self': [{ 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
      'align-content': [{ content: ['normal', ...$(), 'baseline'] }],
      'align-items': [{ items: ['start', 'end', 'center', 'baseline', 'stretch'] }],
      'align-self': [{ self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] }],
      'place-content': [{ 'place-content': [...$(), 'baseline'] }],
      'place-items': [{ 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] }],
      'place-self': [{ 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
      p: [{ p: [x] }],
      px: [{ px: [x] }],
      py: [{ py: [x] }],
      ps: [{ ps: [x] }],
      pe: [{ pe: [x] }],
      pt: [{ pt: [x] }],
      pr: [{ pr: [x] }],
      pb: [{ pb: [x] }],
      pl: [{ pl: [x] }],
      m: [{ m: [m] }],
      mx: [{ mx: [m] }],
      my: [{ my: [m] }],
      ms: [{ ms: [m] }],
      me: [{ me: [m] }],
      mt: [{ mt: [m] }],
      mr: [{ mr: [m] }],
      mb: [{ mb: [m] }],
      ml: [{ ml: [m] }],
      'space-x': [{ 'space-x': [H] }],
      'space-x-reverse': ['space-x-reverse'],
      'space-y': [{ 'space-y': [H] }],
      'space-y-reverse': ['space-y-reverse'],
      w: [{ w: ['auto', 'min', 'max', 'fit', i, r] }],
      'min-w': [{ 'min-w': ['min', 'max', 'fit', i, h] }],
      'max-w': [
        { 'max-w': ['0', 'none', 'full', 'min', 'max', 'fit', 'prose', { screen: [C] }, C, i] },
      ],
      h: [{ h: [i, r, 'auto', 'min', 'max', 'fit'] }],
      'min-h': [{ 'min-h': ['min', 'max', 'fit', h, i] }],
      'max-h': [{ 'max-h': [i, r, 'min', 'max', 'fit'] }],
      'font-size': [{ text: ['base', C, k] }],
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],
      'font-style': ['italic', 'not-italic'],
      'font-weight': [
        {
          font: [
            'thin',
            'extralight',
            'light',
            'normal',
            'medium',
            'semibold',
            'bold',
            'extrabold',
            'black',
            E,
          ],
        },
      ],
      'font-family': [{ font: [I] }],
      'fvn-normal': ['normal-nums'],
      'fvn-ordinal': ['ordinal'],
      'fvn-slashed-zero': ['slashed-zero'],
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
      tracking: [{ tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', i] }],
      'line-clamp': [{ 'line-clamp': ['none', z, E] }],
      leading: [{ leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', h, i] }],
      'list-image': [{ 'list-image': ['none', i] }],
      'list-style-type': [{ list: ['none', 'disc', 'decimal', i] }],
      'list-style-position': [{ list: ['inside', 'outside'] }],
      'placeholder-color': [{ placeholder: [e] }],
      'placeholder-opacity': [{ 'placeholder-opacity': [v] }],
      'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
      'text-color': [{ text: [e] }],
      'text-opacity': [{ 'text-opacity': [v] }],
      'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
      'text-decoration-style': [{ decoration: [...T(), 'wavy'] }],
      'text-decoration-thickness': [{ decoration: ['auto', 'from-font', h, k] }],
      'underline-offset': [{ 'underline-offset': ['auto', h, i] }],
      'text-decoration-color': [{ decoration: [e] }],
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
      indent: [{ indent: d() }],
      'vertical-align': [
        {
          align: [
            'baseline',
            'top',
            'middle',
            'bottom',
            'text-top',
            'text-bottom',
            'sub',
            'super',
            i,
          ],
        },
      ],
      whitespace: [
        { whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] },
      ],
      break: [{ break: ['normal', 'words', 'all', 'keep'] }],
      hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
      content: [{ content: ['none', i] }],
      'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
      'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
      'bg-opacity': [{ 'bg-opacity': [v] }],
      'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
      'bg-position': [{ bg: [...Y(), Oe] }],
      'bg-repeat': [{ bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] }],
      'bg-size': [{ bg: ['auto', 'cover', 'contain', We] }],
      'bg-image': [
        { bg: ['none', { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, Ue] },
      ],
      'bg-color': [{ bg: [e] }],
      'gradient-from-pos': [{ from: [M] }],
      'gradient-via-pos': [{ via: [M] }],
      'gradient-to-pos': [{ to: [M] }],
      'gradient-from': [{ from: [w] }],
      'gradient-via': [{ via: [w] }],
      'gradient-to': [{ to: [w] }],
      rounded: [{ rounded: [n] }],
      'rounded-s': [{ 'rounded-s': [n] }],
      'rounded-e': [{ 'rounded-e': [n] }],
      'rounded-t': [{ 'rounded-t': [n] }],
      'rounded-r': [{ 'rounded-r': [n] }],
      'rounded-b': [{ 'rounded-b': [n] }],
      'rounded-l': [{ 'rounded-l': [n] }],
      'rounded-ss': [{ 'rounded-ss': [n] }],
      'rounded-se': [{ 'rounded-se': [n] }],
      'rounded-ee': [{ 'rounded-ee': [n] }],
      'rounded-es': [{ 'rounded-es': [n] }],
      'rounded-tl': [{ 'rounded-tl': [n] }],
      'rounded-tr': [{ 'rounded-tr': [n] }],
      'rounded-br': [{ 'rounded-br': [n] }],
      'rounded-bl': [{ 'rounded-bl': [n] }],
      'border-w': [{ border: [l] }],
      'border-w-x': [{ 'border-x': [l] }],
      'border-w-y': [{ 'border-y': [l] }],
      'border-w-s': [{ 'border-s': [l] }],
      'border-w-e': [{ 'border-e': [l] }],
      'border-w-t': [{ 'border-t': [l] }],
      'border-w-r': [{ 'border-r': [l] }],
      'border-w-b': [{ 'border-b': [l] }],
      'border-w-l': [{ 'border-l': [l] }],
      'border-opacity': [{ 'border-opacity': [v] }],
      'border-style': [{ border: [...T(), 'hidden'] }],
      'divide-x': [{ 'divide-x': [l] }],
      'divide-x-reverse': ['divide-x-reverse'],
      'divide-y': [{ 'divide-y': [l] }],
      'divide-y-reverse': ['divide-y-reverse'],
      'divide-opacity': [{ 'divide-opacity': [v] }],
      'divide-style': [{ divide: T() }],
      'border-color': [{ border: [a] }],
      'border-color-x': [{ 'border-x': [a] }],
      'border-color-y': [{ 'border-y': [a] }],
      'border-color-t': [{ 'border-t': [a] }],
      'border-color-r': [{ 'border-r': [a] }],
      'border-color-b': [{ 'border-b': [a] }],
      'border-color-l': [{ 'border-l': [a] }],
      'divide-color': [{ divide: [a] }],
      'outline-style': [{ outline: ['', ...T()] }],
      'outline-offset': [{ 'outline-offset': [h, i] }],
      'outline-w': [{ outline: [h, k] }],
      'outline-color': [{ outline: [e] }],
      'ring-w': [{ ring: Q() }],
      'ring-w-inset': ['ring-inset'],
      'ring-color': [{ ring: [e] }],
      'ring-opacity': [{ 'ring-opacity': [v] }],
      'ring-offset-w': [{ 'ring-offset': [h, k] }],
      'ring-offset-color': [{ 'ring-offset': [e] }],
      shadow: [{ shadow: ['', 'inner', 'none', C, qe] }],
      'shadow-color': [{ shadow: [I] }],
      opacity: [{ opacity: [v] }],
      'mix-blend': [{ 'mix-blend': D() }],
      'bg-blend': [{ 'bg-blend': D() }],
      filter: [{ filter: ['', 'none'] }],
      blur: [{ blur: [o] }],
      brightness: [{ brightness: [t] }],
      contrast: [{ contrast: [u] }],
      'drop-shadow': [{ 'drop-shadow': ['', 'none', C, i] }],
      grayscale: [{ grayscale: [b] }],
      'hue-rotate': [{ 'hue-rotate': [p] }],
      invert: [{ invert: [g] }],
      saturate: [{ saturate: [J] }],
      sepia: [{ sepia: [X] }],
      'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
      'backdrop-blur': [{ 'backdrop-blur': [o] }],
      'backdrop-brightness': [{ 'backdrop-brightness': [t] }],
      'backdrop-contrast': [{ 'backdrop-contrast': [u] }],
      'backdrop-grayscale': [{ 'backdrop-grayscale': [b] }],
      'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [p] }],
      'backdrop-invert': [{ 'backdrop-invert': [g] }],
      'backdrop-opacity': [{ 'backdrop-opacity': [v] }],
      'backdrop-saturate': [{ 'backdrop-saturate': [J] }],
      'backdrop-sepia': [{ 'backdrop-sepia': [X] }],
      'border-collapse': [{ border: ['collapse', 'separate'] }],
      'border-spacing': [{ 'border-spacing': [s] }],
      'border-spacing-x': [{ 'border-spacing-x': [s] }],
      'border-spacing-y': [{ 'border-spacing-y': [s] }],
      'table-layout': [{ table: ['auto', 'fixed'] }],
      caption: [{ caption: ['top', 'bottom'] }],
      transition: [
        { transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', i] },
      ],
      duration: [{ duration: j() }],
      ease: [{ ease: ['linear', 'in', 'out', 'in-out', i] }],
      delay: [{ delay: j() }],
      animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', i] }],
      transform: [{ transform: ['', 'gpu', 'none'] }],
      scale: [{ scale: [N] }],
      'scale-x': [{ 'scale-x': [N] }],
      'scale-y': [{ 'scale-y': [N] }],
      rotate: [{ rotate: [G, i] }],
      'translate-x': [{ 'translate-x': [K] }],
      'translate-y': [{ 'translate-y': [K] }],
      'skew-x': [{ 'skew-x': [Z] }],
      'skew-y': [{ 'skew-y': [Z] }],
      'transform-origin': [
        {
          origin: [
            'center',
            'top',
            'top-right',
            'right',
            'bottom-right',
            'bottom',
            'bottom-left',
            'left',
            'top-left',
            i,
          ],
        },
      ],
      accent: [{ accent: ['auto', e] }],
      appearance: ['appearance-none'],
      cursor: [
        {
          cursor: [
            'auto',
            'default',
            'pointer',
            'wait',
            'text',
            'move',
            'help',
            'not-allowed',
            'none',
            'context-menu',
            'progress',
            'cell',
            'crosshair',
            'vertical-text',
            'alias',
            'copy',
            'no-drop',
            'grab',
            'grabbing',
            'all-scroll',
            'col-resize',
            'row-resize',
            'n-resize',
            'e-resize',
            's-resize',
            'w-resize',
            'ne-resize',
            'nw-resize',
            'se-resize',
            'sw-resize',
            'ew-resize',
            'ns-resize',
            'nesw-resize',
            'nwse-resize',
            'zoom-in',
            'zoom-out',
            i,
          ],
        },
      ],
      'caret-color': [{ caret: [e] }],
      'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
      resize: [{ resize: ['none', 'y', 'x', ''] }],
      'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
      'scroll-m': [{ 'scroll-m': d() }],
      'scroll-mx': [{ 'scroll-mx': d() }],
      'scroll-my': [{ 'scroll-my': d() }],
      'scroll-ms': [{ 'scroll-ms': d() }],
      'scroll-me': [{ 'scroll-me': d() }],
      'scroll-mt': [{ 'scroll-mt': d() }],
      'scroll-mr': [{ 'scroll-mr': d() }],
      'scroll-mb': [{ 'scroll-mb': d() }],
      'scroll-ml': [{ 'scroll-ml': d() }],
      'scroll-p': [{ 'scroll-p': d() }],
      'scroll-px': [{ 'scroll-px': d() }],
      'scroll-py': [{ 'scroll-py': d() }],
      'scroll-ps': [{ 'scroll-ps': d() }],
      'scroll-pe': [{ 'scroll-pe': d() }],
      'scroll-pt': [{ 'scroll-pt': d() }],
      'scroll-pr': [{ 'scroll-pr': d() }],
      'scroll-pb': [{ 'scroll-pb': d() }],
      'scroll-pl': [{ 'scroll-pl': d() }],
      'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
      'snap-stop': [{ snap: ['normal', 'always'] }],
      'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
      'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
      touch: [{ touch: ['auto', 'none', 'manipulation'] }],
      'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
      'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
      'touch-pz': ['touch-pinch-zoom'],
      select: [{ select: ['none', 'text', 'all', 'auto'] }],
      'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', i] }],
      fill: [{ fill: [e, 'none'] }],
      'stroke-w': [{ stroke: [h, k, E] }],
      stroke: [{ stroke: [e, 'none'] }],
      sr: ['sr-only', 'not-sr-only'],
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      'font-size': ['leading'],
      'fvn-normal': [
        'fvn-ordinal',
        'fvn-slashed-zero',
        'fvn-figure',
        'fvn-spacing',
        'fvn-fraction',
      ],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      'line-clamp': ['display', 'overflow'],
      rounded: [
        'rounded-s',
        'rounded-e',
        'rounded-t',
        'rounded-r',
        'rounded-b',
        'rounded-l',
        'rounded-ss',
        'rounded-se',
        'rounded-ee',
        'rounded-es',
        'rounded-tl',
        'rounded-tr',
        'rounded-br',
        'rounded-bl',
      ],
      'rounded-s': ['rounded-ss', 'rounded-es'],
      'rounded-e': ['rounded-se', 'rounded-ee'],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': [
        'border-w-s',
        'border-w-e',
        'border-w-t',
        'border-w-r',
        'border-w-b',
        'border-w-l',
      ],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': ['border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      'scroll-m': [
        'scroll-mx',
        'scroll-my',
        'scroll-ms',
        'scroll-me',
        'scroll-mt',
        'scroll-mr',
        'scroll-mb',
        'scroll-ml',
      ],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': [
        'scroll-px',
        'scroll-py',
        'scroll-ps',
        'scroll-pe',
        'scroll-pt',
        'scroll-pr',
        'scroll-pb',
        'scroll-pl',
      ],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb'],
      touch: ['touch-x', 'touch-y', 'touch-pz'],
      'touch-x': ['touch'],
      'touch-y': ['touch'],
      'touch-pz': ['touch'],
    },
    conflictingClassGroupModifiers: { 'font-size': ['leading'] },
  };
}
const He = Pe(Ze),
  U = {
    base: 'text-white rounded-md transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 disabled:opacity-50 disabled:pointer-event-none',
    primary: 'bg-indigo-500 hover:bg-indigo-500/90',
    success: 'bg-green-500 hover:bg-green-500/90',
    info: 'bg-blue-500 hover:bg-blue-500/90',
    warning: 'bg-amber-500 hover:bg-amber-500/90',
    error: 'bg-red-500 hover:bg-red-500/90',
    small: 'px-2.5 py-1.5 text-xs',
    medium: 'px-3.5 py-2 text-sm',
    large: 'px-4 py-2 text-base',
  },
  L = he.forwardRef(({ color: e = 'primary', size: r = 'medium', className: o, ...t }, a) =>
    me.jsx('button', { ref: a, className: He(ye(U.base, U[e], U[r], o)), ...t }),
  );
L.displayName = 'Button';
try {
  (L.displayName = 'Button'),
    (L.__docgenInfo = {
      description: '',
      displayName: 'Button',
      props: {
        color: {
          defaultValue: { value: 'primary' },
          description: 'The color of the button.',
          name: 'color',
          required: !1,
          type: {
            name: 'enum',
            value: [
              { value: '"primary"' },
              { value: '"success"' },
              { value: '"info"' },
              { value: '"warning"' },
              { value: '"error"' },
            ],
          },
        },
        size: {
          defaultValue: { value: 'medium' },
          description: 'The size of the button.',
          name: 'size',
          required: !1,
          type: {
            name: 'enum',
            value: [{ value: '"small"' }, { value: '"medium"' }, { value: '"large"' }],
          },
        },
      },
    });
} catch {}
const Ye = {
    title: 'Components/Button',
    component: L,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
      color: {
        options: ['primary', 'success', 'info', 'warning', 'error'],
        control: { type: 'select' },
      },
      size: { options: ['small', 'medium', 'large'], control: { type: 'select' } },
    },
  },
  ge = { color: 'primary', size: 'medium' },
  _ = { args: { ...ge, children: 'Click Me!' } },
  B = { args: { ...ge, children: 'Click Me!', disabled: !0 } };
var oe, ne, se;
_.parameters = {
  ..._.parameters,
  docs: {
    ...((oe = _.parameters) == null ? void 0 : oe.docs),
    source: {
      originalSource: `{
  args: {
    ...defaultProps,
    children: 'Click Me!'
  }
}`,
      ...((se = (ne = _.parameters) == null ? void 0 : ne.docs) == null ? void 0 : se.source),
    },
  },
};
var ie, ae, le;
B.parameters = {
  ...B.parameters,
  docs: {
    ...((ie = B.parameters) == null ? void 0 : ie.docs),
    source: {
      originalSource: `{
  args: {
    ...defaultProps,
    children: 'Click Me!',
    disabled: true
  }
}`,
      ...((le = (ae = B.parameters) == null ? void 0 : ae.docs) == null ? void 0 : le.source),
    },
  },
};
const De = ['DefaultButton', 'DisabledButton'];
export { _ as DefaultButton, B as DisabledButton, De as __namedExportsOrder, Ye as default };
