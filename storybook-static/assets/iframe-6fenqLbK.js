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
const E = 'modulepreload',
  f = function (i, _) {
    return new URL(i, _).href;
  },
  m = {},
  o = function (_, s, l) {
    let e = Promise.resolve();
    if (s && s.length > 0) {
      const t = document.getElementsByTagName('link');
      e = Promise.all(
        s.map((r) => {
          if (((r = f(r, l)), r in m)) return;
          m[r] = !0;
          const c = r.endsWith('.css'),
            d = c ? '[rel="stylesheet"]' : '';
          if (!!l)
            for (let a = t.length - 1; a >= 0; a--) {
              const O = t[a];
              if (O.href === r && (!c || O.rel === 'stylesheet')) return;
            }
          else if (document.querySelector(`link[href="${r}"]${d}`)) return;
          const n = document.createElement('link');
          if (
            ((n.rel = c ? 'stylesheet' : E),
            c || ((n.as = 'script'), (n.crossOrigin = '')),
            (n.href = r),
            document.head.appendChild(n),
            c)
          )
            return new Promise((a, O) => {
              n.addEventListener('load', a),
                n.addEventListener('error', () => O(new Error(`Unable to preload CSS for ${r}`)));
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
  { createBrowserChannel: p } = __STORYBOOK_MODULE_CHANNELS__,
  { addons: R } = __STORYBOOK_MODULE_PREVIEW_API__,
  u = p({ page: 'preview' });
R.setChannel(u);
window.__STORYBOOK_ADDONS_CHANNEL__ = u;
window.CONFIG_TYPE === 'DEVELOPMENT' && (window.__STORYBOOK_SERVER_CHANNEL__ = u);
const w = {
  './lib/ImageZoom/ImageZoom.stories.tsx': async () =>
    o(
      () => import('./ImageZoom.stories-bLwX5BBp.js'),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
      import.meta.url,
    ),
};
async function P(i) {
  return w[i]();
}
const { composeConfigs: T, PreviewWeb: L, ClientApi: S } = __STORYBOOK_MODULE_PREVIEW_API__,
  I = async () => {
    const i = await Promise.all([
      o(
        () => import('./entry-preview-OIOrqgri.js'),
        __vite__mapDeps([9, 1, 2, 10, 8]),
        import.meta.url,
      ),
      o(
        () => import('./entry-preview-docs-cV61QPcr.js'),
        __vite__mapDeps([11, 12, 2, 3, 7, 1]),
        import.meta.url,
      ),
      o(() => import('./preview-MnjEAu1y.js'), __vite__mapDeps([]), import.meta.url),
      o(() => import('./preview-FekBEZxm.js'), __vite__mapDeps([13, 7]), import.meta.url),
      o(() => import('./preview-TkXSQy1x.js'), __vite__mapDeps([]), import.meta.url),
      o(() => import('./preview-u8M_OEO2.js'), __vite__mapDeps([14, 7]), import.meta.url),
      o(() => import('./preview-bEa2SesL.js'), __vite__mapDeps([]), import.meta.url),
      o(() => import('./preview-OnO0tzRj.js'), __vite__mapDeps([15, 7]), import.meta.url),
      o(() => import('./preview-URrWATvr.js'), __vite__mapDeps([16, 6, 2]), import.meta.url),
      o(() => import('./preview-PC9Qes4W.js'), __vite__mapDeps([17, 18]), import.meta.url),
    ]);
    return T(i);
  };
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new L();
window.__STORYBOOK_STORY_STORE__ =
  window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
window.__STORYBOOK_CLIENT_API__ =
  window.__STORYBOOK_CLIENT_API__ || new S({ storyStore: window.__STORYBOOK_PREVIEW__.storyStore });
window.__STORYBOOK_PREVIEW__.initialize({ importFn: P, getProjectAnnotations: I });
export { o as _ };
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      './ImageZoom.stories-bLwX5BBp.js',
      './index-4g5l5LRQ.js',
      './_commonjsHelpers-4gQjN7DL.js',
      './_baseIsEqual-CFr8iVHd.js',
      './index-oRJpL3FP.js',
      './uniq-DjaUhnlG.js',
      './index-AKtXjuxE.js',
      './index-PPLHz8o0.js',
      './index-jmm5gWkb.js',
      './entry-preview-OIOrqgri.js',
      './react-18-ba7OOUbL.js',
      './entry-preview-docs-cV61QPcr.js',
      './_getPrototype-MXemwaK5.js',
      './preview-FekBEZxm.js',
      './preview-u8M_OEO2.js',
      './preview-OnO0tzRj.js',
      './preview-URrWATvr.js',
      './preview-PC9Qes4W.js',
      './preview--O6_ljzc.css',
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
