import { j as m } from './jsx-runtime-Q5kDp4vx.js';
import { r as t } from './index-DogsOklH.js';
import { c as x } from './cat-aY2xX4wz.js';
const I = ({ imgSrc: s }) => {
    const [l, r] = t.useState(!1),
      [a, p] = t.useState({ x: 0, y: 0 }),
      e = t.useRef(),
      d = (n) => {
        l &&
          e.current &&
          p({
            x: n.nativeEvent.offsetX - e.current.offsetWidth / 2,
            y: n.nativeEvent.offsetY - e.current.offsetHeight / 2,
          });
      },
      f = () => {
        r(!0);
      },
      g = () => {
        r(!1);
      };
    return m.jsx('div', {
      style: { overflow: 'hidden', width: '200px', height: '200px' },
      onMouseMove: d,
      onMouseEnter: f,
      onMouseLeave: g,
      children: m.jsx('img', {
        ref: e,
        src: s,
        alt: 'img',
        style: {
          transform: `translate(${a.x}px, ${a.y}px) scale(2)`,
          transition: 'transform 0.5s ease',
        },
      }),
    });
  },
  h = I;
try {
  (ImageZoom3.displayName = 'ImageZoom3'),
    (ImageZoom3.__docgenInfo = {
      description: '',
      displayName: 'ImageZoom3',
      props: {
        imgSrc: {
          defaultValue: null,
          description: '',
          name: 'imgSrc',
          required: !0,
          type: { name: 'string' },
        },
      },
    });
} catch {}
const M = {
    title: 'Components/ImageZoom3',
    component: h,
    parameters: { layout: 'fullscreen' },
    tags: ['autodocs'],
  },
  y = { imgSrc: x },
  o = { args: { ...y } };
var c, i, u;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((c = o.parameters) == null ? void 0 : c.docs),
    source: {
      originalSource: `{
  args: {
    ...defaultProps
  }
}`,
      ...((u = (i = o.parameters) == null ? void 0 : i.docs) == null ? void 0 : u.source),
    },
  },
};
const E = ['DefaultButtonImageZoom'];
export { o as DefaultButtonImageZoom, E as __namedExportsOrder, M as default };
