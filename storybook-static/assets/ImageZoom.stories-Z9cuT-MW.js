import { j as v } from './jsx-runtime-Q5kDp4vx.js';
import { r as o, g as ee } from './index-DogsOklH.js';
const L = o.forwardRef(({ x: l, y: d, size: m, zoomScale: S }, c) =>
  v.jsx('div', {
    ref: c,
    style: {
      position: 'absolute',
      display: 'block',
      top: d,
      left: l,
      width: m,
      height: m,
      border: '1px solid #000',
      cursor: 'none',
      background: 'rgba(0, 0, 0, 0.25)',
      zIndex: 1e3,
      backfaceVisibility: 'hidden',
    },
  }),
);
L.displayName = 'MagnifyingGlass';
const te = L;
try {
  (L.displayName = 'MagnifyingGlass'),
    (L.__docgenInfo = {
      description: '',
      displayName: 'MagnifyingGlass',
      props: {
        x: {
          defaultValue: null,
          description: '',
          name: 'x',
          required: !0,
          type: { name: 'number' },
        },
        y: {
          defaultValue: null,
          description: '',
          name: 'y',
          required: !0,
          type: { name: 'number' },
        },
        size: {
          defaultValue: null,
          description: '',
          name: 'size',
          required: !0,
          type: { name: 'number' },
        },
      },
    });
} catch {}
var j = { exports: {} };
function J(l, d = 100, m = {}) {
  if (typeof l != 'function')
    throw new TypeError(`Expected the first parameter to be a function, got \`${typeof l}\`.`);
  if (d < 0) throw new RangeError('`wait` must not be negative.');
  const { immediate: S } = typeof m == 'boolean' ? { immediate: m } : m;
  let c, f, s, z, r;
  function E() {
    const h = Date.now() - z;
    if (h < d && h >= 0) s = setTimeout(E, d - h);
    else if (((s = void 0), !S)) {
      const i = c,
        w = f;
      (c = void 0), (f = void 0), (r = l.apply(i, w));
    }
  }
  const x = function (...h) {
    if (c && this !== c) throw new Error('Debounced method called with different contexts.');
    (c = this), (f = h), (z = Date.now());
    const i = S && !s;
    if ((s || (s = setTimeout(E, d)), i)) {
      const w = c,
        Z = f;
      (c = void 0), (f = void 0), (r = l.apply(w, Z));
    }
    return r;
  };
  return (
    (x.clear = () => {
      s && (clearTimeout(s), (s = void 0));
    }),
    (x.flush = () => {
      if (!s) return;
      const h = c,
        i = f;
      (c = void 0), (f = void 0), (r = l.apply(h, i)), clearTimeout(s), (s = void 0);
    }),
    x
  );
}
j.exports.debounce = J;
j.exports = J;
var oe = j.exports;
const ne = ee(oe),
  se = (l, d, m) => Math.min(Math.max(l, d), m),
  $ = ({
    src: l,
    alt: d,
    width: m,
    height: S,
    glassSize: c = { width: 40, height: 40 },
    zoomScale: f,
    zoomContainerGap: s = 20,
  }) => {
    var F;
    const z = f ?? 1,
      [r, E] = o.useState(c),
      [x, h] = o.useState({ x: 0, y: 0 }),
      [i, w] = o.useState(),
      [Z, q] = o.useState({ x: 0, y: 0 }),
      [D, G] = o.useState({ width: 0, height: 0 }),
      [le, M] = o.useState(!1),
      [P, K] = o.useState({ x: 0, y: 0 }),
      [R, H] = o.useState(z),
      b = o.useRef(null),
      W = o.useRef(null),
      I = o.useRef(null),
      _ = o.useRef(null),
      Q = o.useRef(null),
      N = o.useRef(null),
      A = () => M(!0),
      T = () => M(!1),
      Y = o.useMemo(
        () => (e) => {
          if (!b.current) return { x: 0, y: 0 };
          const a = b.current.getBoundingClientRect();
          let u = 0,
            t = 0;
          return (
            (u = e.pageX - a.left),
            (t = e.pageY - a.top),
            (u = u - window.scrollX),
            (t = t - window.scrollY),
            { x: u, y: t }
          );
        },
        [],
      ),
      V = o.useMemo(
        () => (e) => {
          if ((e.preventDefault(), !I.current || !b.current)) return;
          const a = b.current,
            u = Y(e),
            t = _.current;
          if (!t) return;
          let g = u.x - t.offsetWidth / 2,
            n = u.y - t.offsetHeight / 2;
          g > a.width - t.offsetWidth && (g = a.width - t.offsetWidth),
            g < 0 && (g = 0),
            n > a.height - t.offsetHeight && (n = a.height - t.offsetHeight),
            n < 0 && (n = 0),
            h({ x: g, y: n });
          const p = I.current;
          if (p) {
            const y = p.offsetWidth / t.offsetWidth,
              k = p.offsetHeight / t.offsetHeight;
            K({ x: g * y, y: n * k });
          }
        },
        [Y],
      ),
      B = o.useMemo(
        () =>
          ne((e) => {
            e.preventDefault();
            const a = 1 + e.deltaY * -1e-5,
              u = e.deltaY * a,
              t = se(u, -1, 1);
            console.log(t), H(t);
          }, 200),
        [],
      );
    return (
      o.useEffect(() => {
        var t, g;
        const e = b.current;
        if (!e) return;
        (e.onload = () => {
          if (((W.current = e), !e)) return;
          const n = I.current;
          let p, y;
          n
            ? ((p = n.offsetWidth / r.width), (y = n.offsetHeight / r.height))
            : ((p = e.width / r.width), (y = e.height / r.height)),
            G({ width: e.width * p, height: e.height * y }),
            w({ width: e.width, height: e.height });
          const k = e.getBoundingClientRect();
          q({ x: k.width + s, y: 0 }), console.log('Loaded');
        }),
          (t = _.current) == null || t.addEventListener('mousemove', V),
          e.addEventListener('mousemove', V),
          e.addEventListener('mouseenter', A),
          e.addEventListener('mouseleave', T),
          e.addEventListener('wheel', (n) => {
            n.preventDefault(), console.log(n.deltaY);
          }),
          (g = _.current) == null || g.addEventListener('wheel', B),
          (N.current = new ResizeObserver((n, p) => {
            for (const y of n) console.log(y);
          }));
        const a = N.current,
          u = Q.current;
        return (
          a.observe(e),
          () => {
            e.removeEventListener('mousemove', V),
              e.removeEventListener('mouseenter', A),
              e.removeEventListener('mouseleave', T),
              a == null || a.unobserve(e),
              u && cancelAnimationFrame(u);
          }
        );
      }, [w, q, G, H, V, r.height, r.width, R, s, B]),
      o.useEffect(() => {
        const e = r.width * R;
        E({ width: e, height: e });
      }, [R, r]),
      v.jsxs('div', {
        style: {
          position: 'relative',
          display: 'inline-block',
          transformOrigin: 0,
          backfaceVisibility: 'hidden',
        },
        children: [
          v.jsx(te, { ref: _, x: x.x, y: x.y, size: r.width }),
          v.jsx('img', {
            ref: b,
            src: l,
            width: m,
            height: S,
            alt: d,
            style: { display: 'block', backfaceVisibility: 'hidden' },
          }),
          (i == null ? void 0 : i.width) &&
            (i == null ? void 0 : i.height) &&
            v.jsx('div', {
              ref: I,
              style: {
                position: 'absolute',
                width: i.width,
                height: i.height,
                overflow: 'hidden',
                border: '1px solid #000',
                top: Z.y,
                left: Z.x,
              },
              children: v.jsx('div', {
                style: {
                  width: '100%',
                  height: '100%',
                  background: `url(${(F = W.current) == null ? void 0 : F.src}) no-repeat`,
                  backgroundSize: `${D.width}px ${D.height}px`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: `-${P.x}px -${P.y}px`,
                  transform: `scale(${R})`,
                  cursor: 'none',
                },
              }),
            }),
        ],
      })
    );
  },
  re = $;
try {
  ($.displayName = 'ImageZoom'),
    ($.__docgenInfo = {
      description: '',
      displayName: 'ImageZoom',
      props: {
        src: {
          defaultValue: null,
          description: '',
          name: 'src',
          required: !0,
          type: { name: 'string' },
        },
        alt: {
          defaultValue: null,
          description: '',
          name: 'alt',
          required: !1,
          type: { name: 'string' },
        },
        width: {
          defaultValue: null,
          description: '',
          name: 'width',
          required: !1,
          type: { name: 'number' },
        },
        height: {
          defaultValue: null,
          description: '',
          name: 'height',
          required: !1,
          type: { name: 'number' },
        },
        glassSize: {
          defaultValue: null,
          description: '',
          name: 'glassSize',
          required: !0,
          type: { name: '{ width: number; height: number; }' },
        },
        zoomScale: {
          defaultValue: null,
          description: '',
          name: 'zoomScale',
          required: !0,
          type: { name: 'number' },
        },
        zoomContainerGap: {
          defaultValue: { value: '20' },
          description: '',
          name: 'zoomContainerGap',
          required: !1,
          type: { name: 'number' },
        },
      },
    });
} catch {}
const ie = '' + new URL('cat-HJ6cedL9.jpg', import.meta.url).href,
  de = {
    title: 'Components/ImageZoom',
    component: re,
    parameters: { layout: 'fullscreen' },
    tags: ['autodocs'],
  },
  ae = {
    src: ie,
    glassSize: { width: 40, height: 40 },
    zoomScale: 1,
    width: 200,
    height: 200,
    zoomContainerGap: 20,
  },
  C = { args: { ...ae } };
var O, U, X;
C.parameters = {
  ...C.parameters,
  docs: {
    ...((O = C.parameters) == null ? void 0 : O.docs),
    source: {
      originalSource: `{
  args: {
    ...defaultProps
  }
}`,
      ...((X = (U = C.parameters) == null ? void 0 : U.docs) == null ? void 0 : X.source),
    },
  },
};
const me = ['DefaultButtonImageZoom'];
export { C as DefaultButtonImageZoom, me as __namedExportsOrder, de as default };
