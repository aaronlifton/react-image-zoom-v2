import { j as m } from './jsx-runtime-Q5kDp4vx.js';
import { r as t } from './index-DogsOklH.js';
import { c as J } from './cat-aY2xX4wz.js';
const v = t.forwardRef(({ x: u, y, size: h }, x) =>
    m.jsx('div', {
      ref: x,
      style: {
        position: 'absolute',
        display: 'block',
        top: y,
        left: u,
        width: h,
        height: h,
        border: '1px solid #000',
        cursor: 'none',
        background: 'rgba(0, 0, 0, 0.25)',
        zIndex: 1e3,
      },
    }),
  ),
  K = v;
try {
  (v.displayName = 'MagnifyingGlass'),
    (v.__docgenInfo = {
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
        ref: {
          defaultValue: null,
          description: '',
          name: 'ref',
          required: !0,
          type: { name: 'MutableRefObject<HTMLDivElement>' },
        },
      },
    });
} catch {}
const S = ({
    src: u,
    alt: y,
    width: h,
    height: x,
    glassSize: M = { width: 40, height: 40 },
    zoomScale: C,
  }) => {
    var j;
    const _ = C ?? 1,
      [w, B] = t.useState(M),
      [z, D] = t.useState({ x: 0, y: 0 }),
      [s, N] = t.useState(),
      [Z, O] = t.useState({ x: 0, y: 0 }),
      [f, I] = t.useState({ width: 0, height: 0 }),
      [te, R] = t.useState(!1),
      [V, X] = t.useState({ x: 0, y: 0 }),
      [g, q] = t.useState({ x: _, y: _ }),
      l = t.useRef(),
      c = t.useRef(),
      d = t.useRef(),
      b = t.useRef();
    t.useRef();
    const E = t.useRef(),
      L = new ResizeObserver((e, n) => {
        for (const r of e) console.log(r);
      }),
      P = () => R(!0),
      k = () => R(!1),
      Y = (e) => (c.current ? (c.current.naturalWidth * g.x) / e : 1),
      F = (e) => (c.current ? (c.current.naturalHeight * g.y) / (e || c.current.height) : 1);
    t.useEffect(() => {
      const e = l.current;
      if (!e) return;
      let n, r;
      return (
        (e.onload = () => {
          if (((c.current = e), !e)) return;
          (n = Y(e.width)), (r = F(e.height));
          const o = e.width / w.width,
            a = e.height / w.height;
          I({ width: e.width * o, height: e.height * a }),
            console.log('Loaded'),
            N({ width: e.width, height: e.height });
          const i = e.getBoundingClientRect();
          O({ x: i.width + 20, y: 0 });
        }),
        q({ x: n, y: r }),
        e.addEventListener('mousemove', $),
        e.addEventListener('mouseenter', P),
        e.addEventListener('mouseleave', k),
        L.observe(e),
        () => {
          e.removeEventListener('mousemove', $),
            e.removeEventListener('mouseenter', P),
            e.removeEventListener('mouseleave', k),
            L.unobserve(e),
            cancelAnimationFrame(E.current);
        }
      );
    }, [l.current, c.current, d.current, b.current, I, B, q]);
    const A = (e) => {
        if (!l.current) return { x: 0, y: 0 };
        const n = l.current.getBoundingClientRect();
        let r = 0,
          o = 0;
        return (
          (r = e.pageX - n.left),
          (o = e.pageY - n.top),
          (r = r - window.scrollX),
          (o = o - window.scrollY),
          { x: r, y: o }
        );
      },
      $ = (e) => {
        if ((e.preventDefault(), !d.current || !l.current)) return;
        console.log('moveLens');
        const n = l.current,
          r = A(e);
        let o,
          a,
          i = b.current;
        (o = r.x - i.offsetWidth / 2),
          (a = r.y - i.offsetHeight / 2),
          o > n.width - i.offsetWidth && (o = n.width - i.offsetWidth),
          o < 0 && (o = 0),
          a > n.height - i.offsetHeight && (a = n.height - i.offsetHeight),
          a < 0 && (a = 0),
          (E.current = requestAnimationFrame(() => {
            D({ x: o, y: a }),
              console.log({ w2: s.offsetWidth, h2: s.offsetHeight, w: f.width, h: f.height });
            const T = d.current.offsetWidth / i.offsetWidth,
              U = d.current.offsetHeight / i.offsetHeight;
            X({ x: o * T, y: a * U });
          }));
      };
    return m.jsxs('div', {
      style: { position: 'relative', display: 'inline-block', '-webkit-transform-origin': 0 },
      children: [
        m.jsx(K, { ref: b, x: z.x, y: z.y, size: w.width }),
        m.jsx('img', { ref: l, src: u, width: h, height: x, alt: y, style: { display: 'block' } }),
        (s == null ? void 0 : s.width) &&
          (s == null ? void 0 : s.height) &&
          m.jsx('div', {
            ref: d,
            style: {
              position: 'absolute',
              width: s.width,
              height: s.height,
              border: '1px solid #000',
              background: `url(${(j = c.current) == null ? void 0 : j.src}) no-repeat`,
              backgroundSize: `${f.width}px ${f.height}px`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: `-${V.x}px -${V.y}px`,
              top: Z.y,
              left: Z.x,
              transform: `scale(${g.x}, ${g.y})`,
              cursor: 'none',
            },
          }),
      ],
    });
  },
  Q = S;
try {
  (S.displayName = 'ImageZoom'),
    (S.__docgenInfo = {
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
      },
    });
} catch {}
const se = {
    title: 'Components/ImageZoom',
    component: Q,
    parameters: { layout: 'fullscreen' },
    tags: ['autodocs'],
  },
  ee = { src: J, glassSize: { width: 40, height: 40 }, zoomScale: 1, width: 200, height: 200 },
  p = { args: { ...ee } };
var H, W, G;
p.parameters = {
  ...p.parameters,
  docs: {
    ...((H = p.parameters) == null ? void 0 : H.docs),
    source: {
      originalSource: `{
  args: {
    ...defaultProps
  }
}`,
      ...((G = (W = p.parameters) == null ? void 0 : W.docs) == null ? void 0 : G.source),
    },
  },
};
const ie = ['DefaultButtonImageZoom'];
export { p as DefaultButtonImageZoom, ie as __namedExportsOrder, se as default };
