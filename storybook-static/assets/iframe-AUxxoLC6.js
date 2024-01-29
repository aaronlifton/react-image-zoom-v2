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
  m = {},
  o = function (_, s, l) {
    let e = Promise.resolve();
    if (s && s.length > 0) {
      const t = document.getElementsByTagName('link');
      e = Promise.all(
        s.map((r) => {
          if (((r = p(r, l)), r in m)) return;
          m[r] = !0;
          const c = r.endsWith('.css'),
            E = c ? '[rel="stylesheet"]' : '';
          if (!!l)
            for (let a = t.length - 1; a >= 0; a--) {
              const u = t[a];
              if (u.href === r && (!c || u.rel === 'stylesheet')) return;
            }
          else if (document.querySelector(`link[href="${r}"]${E}`)) return;
          const n = document.createElement('link');
          if (
            ((n.rel = c ? 'stylesheet' : d),
            c || ((n.as = 'script'), (n.crossOrigin = '')),
            (n.href = r),
            document.head.appendChild(n),
            c)
          )
            return new Promise((a, u) => {
              n.addEventListener('load', a),
                n.addEventListener('error', () => u(new Error(`Unable to preload CSS for ${r}`)));
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
  O = f({ page: 'preview' });
R.setChannel(O);
window.__STORYBOOK_ADDONS_CHANNEL__ = O;
window.CONFIG_TYPE === 'DEVELOPMENT' && (window.__STORYBOOK_SERVER_CHANNEL__ = O);
const w = {
  './lib/Button/Button.stories.ts': async () =>
    o(() => import('./Button.stories-zV5xiOVC.js'), __vite__mapDeps([0, 1, 2, 3]), import.meta.url),
  './lib/ImageZoom/ImageZoom.stories.tsx': async () =>
    o(
      () => import('./ImageZoom.stories-VACOH3ga.js'),
      __vite__mapDeps([4, 1, 2, 3, 5, 6, 7, 8, 9, 10]),
      import.meta.url,
    ),
};
async function P(i) {
  return w[i]();
}
const { composeConfigs: T, PreviewWeb: L, ClientApi: I } = __STORYBOOK_MODULE_PREVIEW_API__,
  S = async () => {
    const i = await Promise.all([
      o(
        () => import('./entry-preview-OIOrqgri.js'),
        __vite__mapDeps([11, 2, 3, 12, 10]),
        import.meta.url,
      ),
      o(
        () => import('./entry-preview-docs-cV61QPcr.js'),
        __vite__mapDeps([13, 14, 3, 5, 9, 2]),
        import.meta.url,
      ),
      o(() => import('./preview-J_kvO0cl.js'), __vite__mapDeps([]), import.meta.url),
      o(() => import('./preview-FekBEZxm.js'), __vite__mapDeps([15, 9]), import.meta.url),
      o(() => import('./preview-TkXSQy1x.js'), __vite__mapDeps([]), import.meta.url),
      o(() => import('./preview-u8M_OEO2.js'), __vite__mapDeps([16, 9]), import.meta.url),
      o(() => import('./preview-bEa2SesL.js'), __vite__mapDeps([]), import.meta.url),
      o(() => import('./preview-OnO0tzRj.js'), __vite__mapDeps([17, 9]), import.meta.url),
      o(() => import('./preview-URrWATvr.js'), __vite__mapDeps([18, 8, 3]), import.meta.url),
      o(() => import('./preview-JtxjCtWg.js'), __vite__mapDeps([19, 20]), import.meta.url),
    ]);
    return T(i);
  };
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new L();
window.__STORYBOOK_STORY_STORE__ =
  window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
window.__STORYBOOK_CLIENT_API__ =
  window.__STORYBOOK_CLIENT_API__ || new I({ storyStore: window.__STORYBOOK_PREVIEW__.storyStore });
window.__STORYBOOK_PREVIEW__.initialize({ importFn: P, getProjectAnnotations: S });
export { o as _ };
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      './Button.stories-zV5xiOVC.js',
      './jsx-runtime-vNq4Oc-g.js',
      './index-4g5l5LRQ.js',
      './_commonjsHelpers-4gQjN7DL.js',
      './ImageZoom.stories-VACOH3ga.js',
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
      './preview-JtxjCtWg.js',
      './preview-WuLG3M1X.css',
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
