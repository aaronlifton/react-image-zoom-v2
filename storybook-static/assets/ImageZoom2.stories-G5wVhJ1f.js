import { j as t } from './jsx-runtime-Q5kDp4vx.js';
import { r as o } from './index-DogsOklH.js';
import { c as _ } from './cat-aY2xX4wz.js';
const b = ({ src: r, alt: l }) => {
    const [h, v] = o.useState(!1),
      [[i, c], f] = o.useState([0, 0]),
      [[x, y], g] = o.useState([0, 0]),
      [I, p] = o.useState(!1);
    return t.jsxs('div', {
      style: { position: 'relative', height: '400px', width: '400px' },
      onMouseEnter: () => p(!0),
      onMouseLeave: () => p(!1),
      onMouseMove: (e) => {
        const { width: n, height: s } = e.currentTarget.getBoundingClientRect(),
          w = e.pageX - e.currentTarget.offsetLeft,
          S = e.pageY - e.currentTarget.offsetTop;
        f([w, S]), g([n, s]);
      },
      children: [
        t.jsx('img', {
          width: 400,
          src: r,
          alt: l,
          onLoad: (e) => {
            const { width: n, height: s } = e.currentTarget.getBoundingClientRect();
            g([n, s]);
          },
        }),
        I &&
          t.jsx('div', {
            style: {
              display: h ? 'block' : 'none',
              position: 'absolute',
              pointerEvents: 'none',
              height: '100px',
              width: '100px',
              border: '1px solid lightgray',
              backgroundColor: 'white',
              opacity: 0.5,
              top: `${c - 50}px`,
              left: `${i - 50}px`,
            },
            children: t.jsx('div', {
              style: {
                width: '100%',
                height: '100%',
                backgroundImage: `url(${r})`,
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: `${-i * 2 + x / 2}px`,
                backgroundPositionY: `${-c * 2 + y / 2}px`,
                backgroundSize: '400px 400px',
              },
            }),
          }),
      ],
    });
  },
  Z = b;
try {
  (ImageZoom2.displayName = 'ImageZoom2'),
    (ImageZoom2.__docgenInfo = {
      description: '',
      displayName: 'ImageZoom2',
      props: {
        src: {
          defaultValue: null,
          description: '',
          name: 'src',
          required: !0,
          type: { name: 'any' },
        },
        alt: {
          defaultValue: null,
          description: '',
          name: 'alt',
          required: !0,
          type: { name: 'any' },
        },
      },
    });
} catch {}
const C = {
    title: 'Components/ImageZoom2',
    component: Z,
    parameters: { layout: 'fullscreen' },
    tags: ['autodocs'],
  },
  k = { src: _, alt: 'Cat' },
  a = { args: { ...k } };
var u, m, d;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((u = a.parameters) == null ? void 0 : u.docs),
    source: {
      originalSource: `{
  args: {
    ...defaultProps
  }
}`,
      ...((d = (m = a.parameters) == null ? void 0 : m.docs) == null ? void 0 : d.source),
    },
  },
};
const E = ['DefaultButtonImageZoom'];
export { a as DefaultButtonImageZoom, E as __namedExportsOrder, C as default };
