import { _ as t } from './iframe-sPFgdBi-.js';
import '../sb-preview/runtime.js';
var _ = {
  docs: {
    renderer: async () => {
      let { DocsRenderer: r } = await t(
        () => import('./DocsRenderer-NNNQARDV-Bn4JY49K.js').then((e) => e.D),
        __vite__mapDeps([0, 1, 2, 3, 4, 5]),
        import.meta.url,
      );
      return new r();
    },
  },
};
export { _ as parameters };
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      './DocsRenderer-NNNQARDV-Bn4JY49K.js',
      './iframe-sPFgdBi-.js',
      './index-DogsOklH.js',
      './react-18-qZm_vjb7.js',
      './_getPrototype-KztV_HEV.js',
      './index-PPLHz8o0.js',
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
