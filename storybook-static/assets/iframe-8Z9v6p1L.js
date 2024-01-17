import '../sb-preview/runtime.js';
(function () {
  const _ = document.createElement('link').relList;
  if (_ && _.supports && _.supports('modulepreload')) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) l(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === 'childList')
        for (const r of t.addedNodes) r.tagName === 'LINK' && r.rel === 'modulepreload' && l(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === 'use-credentials'
        ? (t.credentials = 'include')
        : e.crossOrigin === 'anonymous'
          ? (t.credentials = 'omit')
          : (t.credentials = 'same-origin'),
      t
    );
  }
  function l(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = s(e);
    fetch(e.href, t);
  }
})();
const d = 'modulepreload',
  p = function (i, _) {
    return new URL(i, _).href;
  },
  O = {},
  o = function (_, s, l) {
    let e = Promise.resolve();
    if (s && s.length > 0) {
      const t = document.getElementsByTagName('link');
      e = Promise.all(
        s.map((r) => {
          if (((r = p(r, l)), r in O)) return;
          O[r] = !0;
          const a = r.endsWith('.css'),
            E = a ? '[rel="stylesheet"]' : '';
          if (!!l)
            for (let c = t.length - 1; c >= 0; c--) {
              const m = t[c];
              if (m.href === r && (!a || m.rel === 'stylesheet')) return;
            }
          else if (document.querySelector(`link[href="${r}"]${E}`)) return;
          const n = document.createElement('link');
          if (
            ((n.rel = a ? 'stylesheet' : d),
            a || ((n.as = 'script'), (n.crossOrigin = '')),
            (n.href = r),
            document.head.appendChild(n),
            a)
          )
            return new Promise((c, m) => {
              n.addEventListener('load', c),
                n.addEventListener('error', () => m(new Error(`Unable to preload CSS for ${r}`)));
            });
        }),
      );
    }
    return e
      .then(() => _())
      .catch((t) => {
        const r = new Event('vite:preloadError', { cancelable: !0 });
        if (((r.payload = t), window.dispatchEvent(r), !r.defaultPrevented)) throw t;
      });
  },
  { createBrowserChannel: f } = __STORYBOOK_MODULE_CHANNELS__,
  { addons: R } = __STORYBOOK_MODULE_PREVIEW_API__,
  u = f({ page: 'preview' });
R.setChannel(u);
window.__STORYBOOK_ADDONS_CHANNEL__ = u;
window.CONFIG_TYPE === 'DEVELOPMENT' && (window.__STORYBOOK_SERVER_CHANNEL__ = u);
const w = {
  './lib/Button/Button.stories.ts': async () =>
    o(() => import('./Button.stories-ryOiCZQu.js'), __vite__mapDeps([0, 1, 2]), import.meta.url),
  './lib/ImageZoom/ImageZoom.stories.ts': async () =>
    o(
      () => import('./ImageZoom.stories-9iwP0l4S.js'),
      __vite__mapDeps([3, 1, 2, 4]),
      import.meta.url,
    ),
  './lib/ImageZoom/ImageZoom2.stories.tsx': async () =>
    o(
      () => import('./ImageZoom2.stories-G5wVhJ1f.js'),
      __vite__mapDeps([5, 1, 2, 4]),
      import.meta.url,
    ),
  './lib/ImageZoom/ImageZoom3.stories.tsx': async () =>
    o(
      () => import('./ImageZoom3.stories-O7IV0FSy.js'),
      __vite__mapDeps([6, 1, 2, 4]),
      import.meta.url,
    ),
};
async function P(i) {
  return w[i]();
}
const { composeConfigs: T, PreviewWeb: I, ClientApi: L } = __STORYBOOK_MODULE_PREVIEW_API__,
  S = async () => {
    const i = await Promise.all([
      o(() => import('./entry-preview-nBOAXpfX.js'), __vite__mapDeps([7, 2, 8]), import.meta.url),
      o(
        () => import('./entry-preview-docs-D8aCJcK0.js'),
        __vite__mapDeps([9, 10, 2, 11]),
        import.meta.url,
      ),
      o(() => import('./preview-r_Q11Vwu.js'), __vite__mapDeps([]), import.meta.url),
      o(() => import('./preview-FekBEZxm.js'), __vite__mapDeps([12, 11]), import.meta.url),
      o(() => import('./preview-TkXSQy1x.js'), __vite__mapDeps([]), import.meta.url),
      o(() => import('./preview-u8M_OEO2.js'), __vite__mapDeps([13, 11]), import.meta.url),
      o(() => import('./preview-bEa2SesL.js'), __vite__mapDeps([]), import.meta.url),
      o(() => import('./preview-OnO0tzRj.js'), __vite__mapDeps([14, 11]), import.meta.url),
      o(() => import('./preview-yQgQdU_L.js'), __vite__mapDeps([15, 16]), import.meta.url),
    ]);
    return T(i);
  };
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new I();
window.__STORYBOOK_STORY_STORE__ =
  window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
window.__STORYBOOK_CLIENT_API__ =
  window.__STORYBOOK_CLIENT_API__ || new L({ storyStore: window.__STORYBOOK_PREVIEW__.storyStore });
window.__STORYBOOK_PREVIEW__.initialize({ importFn: P, getProjectAnnotations: S });
export { o as _ };
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      './Button.stories-ryOiCZQu.js',
      './jsx-runtime-Q5kDp4vx.js',
      './index-DogsOklH.js',
      './ImageZoom.stories-9iwP0l4S.js',
      './cat-aY2xX4wz.js',
      './ImageZoom2.stories-G5wVhJ1f.js',
      './ImageZoom3.stories-O7IV0FSy.js',
      './entry-preview-nBOAXpfX.js',
      './react-18-qZm_vjb7.js',
      './entry-preview-docs-D8aCJcK0.js',
      './_getPrototype-KztV_HEV.js',
      './index-PPLHz8o0.js',
      './preview-FekBEZxm.js',
      './preview-u8M_OEO2.js',
      './preview-OnO0tzRj.js',
      './preview-yQgQdU_L.js',
      './preview-4j2CzFeU.css',
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
