// vite.config.ts
import { join, resolve } from 'node:path';
import react from 'file:///Users/aaron/Code/projects/react-simple-image-zoom-v2/react-siz-v4/node_modules/.pnpm/@vitejs+plugin-react-swc@3.5.0_vite@5.0.8/node_modules/@vitejs/plugin-react-swc/index.mjs';
import { defineConfig } from 'file:///Users/aaron/Code/projects/react-simple-image-zoom-v2/react-siz-v4/node_modules/.pnpm/vite@5.0.8_@types+node@20.10.4/node_modules/vite/dist/node/index.js';
import dts from 'file:///Users/aaron/Code/projects/react-simple-image-zoom-v2/react-siz-v4/node_modules/.pnpm/vite-plugin-dts@3.6.4_@types+node@20.10.4_typescript@5.2.2_vite@5.0.8/node_modules/vite-plugin-dts/dist/index.mjs';

// package.json
var peerDependencies = {
  react: '^18.2.0',
  'react-dom': '^18.2.0',
};

// vite.config.ts
var __vite_injected_original_dirname =
  '/Users/aaron/Code/projects/react-simple-image-zoom-v2/react-siz-v4';
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({ rollupTypes: true }),
    // Output .d.ts files
  ],
  build: {
    target: 'esnext',
    minify: false,
    lib: {
      entry: resolve(__vite_injected_original_dirname, join('lib', 'index.ts')),
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // Exclude peer dependencies from the bundle to reduce bundle size
      external: ['react/jsx-runtime', ...Object.keys(peerDependencies)],
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './lib/test/setup.ts',
    coverage: {
      all: false,
      enabled: true,
    },
  },
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2Fhcm9uL0NvZGUvcHJvamVjdHMvcmVhY3Qtc2ltcGxlLWltYWdlLXpvb20tdjIvcmVhY3Qtc2l6LXY0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYWFyb24vQ29kZS9wcm9qZWN0cy9yZWFjdC1zaW1wbGUtaW1hZ2Utem9vbS12Mi9yZWFjdC1zaXotdjQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2Fhcm9uL0NvZGUvcHJvamVjdHMvcmVhY3Qtc2ltcGxlLWltYWdlLXpvb20tdjIvcmVhY3Qtc2l6LXY0L3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuaW1wb3J0IHsgam9pbiwgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuXG5pbXBvcnQgeyBwZWVyRGVwZW5kZW5jaWVzIH0gZnJvbSAnLi9wYWNrYWdlLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBkdHMoeyByb2xsdXBUeXBlczogdHJ1ZSB9KSwgLy8gT3V0cHV0IC5kLnRzIGZpbGVzXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiAnZXNuZXh0JyxcbiAgICBtaW5pZnk6IGZhbHNlLFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCBqb2luKCdsaWInLCAnaW5kZXgudHMnKSksXG4gICAgICBmaWxlTmFtZTogJ2luZGV4JyxcbiAgICAgIGZvcm1hdHM6IFsnZXMnLCAnY2pzJ10sXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAvLyBFeGNsdWRlIHBlZXIgZGVwZW5kZW5jaWVzIGZyb20gdGhlIGJ1bmRsZSB0byByZWR1Y2UgYnVuZGxlIHNpemVcbiAgICAgIGV4dGVybmFsOiBbJ3JlYWN0L2pzeC1ydW50aW1lJywgLi4uT2JqZWN0LmtleXMocGVlckRlcGVuZGVuY2llcyldLFxuICAgIH0sXG4gIH0sXG4gIHRlc3Q6IHtcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgICBzZXR1cEZpbGVzOiAnLi9saWIvdGVzdC9zZXR1cC50cycsXG4gICAgY292ZXJhZ2U6IHtcbiAgICAgIGFsbDogZmFsc2UsXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG59KTtcbiIsICJ7XG4gIFwibmFtZVwiOiBcInZpdGUtcmVhY3QtY29tcG9uZW50LWxpYnJhcnktc3RhcnRlclwiLFxuICBcInByaXZhdGVcIjogdHJ1ZSxcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjBcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkEgdGVtcGxhdGUgZm9yIGNyZWF0aW5nIFJlYWN0IGNvbXBvbmVudCBsaWJyYXJpZXMgd2l0aCBWaXRlLCBUYWlsd2luZCwgYW5kIFN0b3J5Ym9vay5cIixcbiAgXCJhdXRob3JcIjogXCJyYXl5YW1oa1wiLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwiZmlsZXNcIjogW1xuICAgIFwiZGlzdFwiXG4gIF0sXG4gIFwic2lkZUVmZmVjdHNcIjogW1xuICAgIFwiKiovKi5jc3NcIlxuICBdLFxuICBcIm1haW5cIjogXCIuL2Rpc3QvaW5kZXguY2pzXCIsXG4gIFwibW9kdWxlXCI6IFwiLi9kaXN0L2luZGV4LmpzXCIsXG4gIFwidHlwZXNcIjogXCIuL2Rpc3QvaW5kZXguZC50c1wiLFxuICBcImV4cG9ydHNcIjoge1xuICAgIFwiLlwiOiB7XG4gICAgICBcImltcG9ydFwiOiB7XG4gICAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvaW5kZXguZC50c1wiLFxuICAgICAgICBcImRlZmF1bHRcIjogXCIuL2Rpc3QvaW5kZXguanNcIlxuICAgICAgfSxcbiAgICAgIFwicmVxdWlyZVwiOiB7XG4gICAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvaW5kZXguZC50c1wiLFxuICAgICAgICBcImRlZmF1bHRcIjogXCIuL2Rpc3QvaW5kZXguY2pzXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiLi9jc3NcIjogXCIuL2Rpc3Qvc3R5bGUuY3NzXCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImRldlwiOiBcInN0b3J5Ym9vayBkZXYgLXAgNjAwNlwiLFxuICAgIFwidGVzdFwiOiBcInZpdGVzdCBydW5cIixcbiAgICBcInRlc3Q6d2F0Y2hcIjogXCJ2aXRlc3RcIixcbiAgICBcInRlc3Q6dWlcIjogXCJ2aXRlc3QgLS11aVwiLFxuICAgIFwidGVzdDpjb3ZlcmFnZVwiOiBcInZpdGVzdCBydW4gLS1jb3ZlcmFnZVwiLFxuICAgIFwiYnVpbGRcIjogXCJzdG9yeWJvb2sgYnVpbGRcIixcbiAgICBcImJ1aWxkOmxpYlwiOiBcInRzYyAmJiB2aXRlIGJ1aWxkXCIsXG4gICAgXCJsaW50XCI6IFwiZXNsaW50IC4gLS1leHQgdHMsdHN4IC0tcmVwb3J0LXVudXNlZC1kaXNhYmxlLWRpcmVjdGl2ZXMgLS1tYXgtd2FybmluZ3MgMFwiLFxuICAgIFwiZm9ybWF0XCI6IFwicHJldHRpZXIgLiAtLXdyaXRlIC0taWdub3JlLXVua25vd25cIixcbiAgICBcInByZXBhcmVcIjogXCJodXNreSBpbnN0YWxsXCIsXG4gICAgXCJ0ZXN0LXN0b3J5Ym9va1wiOiBcInRlc3Qtc3Rvcnlib29rXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1hY3Rpb25zXCI6IFwiXjcuNi4xMFwiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1lc3NlbnRpYWxzXCI6IFwiXjcuNi4xMFwiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1pbnRlcmFjdGlvbnNcIjogXCJeNy42LjEwXCIsXG4gICAgXCJAc3Rvcnlib29rL2Jsb2Nrc1wiOiBcIl43LjYuMTBcIixcbiAgICBcIkBzdG9yeWJvb2svamVzdFwiOiBcIl4wLjIuM1wiLFxuICAgIFwiQHN0b3J5Ym9vay9yZWFjdFwiOiBcIl43LjYuMTBcIixcbiAgICBcIkBzdG9yeWJvb2svcmVhY3Qtdml0ZVwiOiBcIl43LjYuMTBcIixcbiAgICBcIkBzdG9yeWJvb2svdGVzdC1ydW5uZXJcIjogXCJeMC4xNi4wXCIsXG4gICAgXCJAc3Rvcnlib29rL3Rlc3RpbmctbGlicmFyeVwiOiBcIl4wLjIuMlwiLFxuICAgIFwiQHRlc3RpbmctbGlicmFyeS9qZXN0LWRvbVwiOiBcIl42LjEuNVwiLFxuICAgIFwiQHRlc3RpbmctbGlicmFyeS9yZWFjdFwiOiBcIl4xNC4xLjJcIixcbiAgICBcIkB0ZXN0aW5nLWxpYnJhcnkvdXNlci1ldmVudFwiOiBcIl4xNC41LjFcIixcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiXjIwLjEwLjRcIixcbiAgICBcIkB0eXBlcy9yZWFjdFwiOiBcIl4xOC4yLjQzXCIsXG4gICAgXCJAdHlwZXMvcmVhY3QtZG9tXCI6IFwiXjE4LjIuMTdcIixcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9lc2xpbnQtcGx1Z2luXCI6IFwiXjYuMTQuMFwiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L3BhcnNlclwiOiBcIl42LjE0LjBcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiOiBcIl4zLjUuMFwiLFxuICAgIFwiQHZpdGVzdC9jb3ZlcmFnZS12OFwiOiBcIl4xLjAuNFwiLFxuICAgIFwiQHZpdGVzdC91aVwiOiBcIl4xLjAuNFwiLFxuICAgIFwiYXV0b3ByZWZpeGVyXCI6IFwiXjEwLjQuMTZcIixcbiAgICBcImNsc3hcIjogXCJeMi4wLjBcIixcbiAgICBcImVzbGludFwiOiBcIl44LjU1LjBcIixcbiAgICBcImVzbGludC1jb25maWctcHJldHRpZXJcIjogXCJeOS4xLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tamVzdC1kb21cIjogXCJeNS4xLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3RcIjogXCJeNy4zMy4yXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0LWhvb2tzXCI6IFwiXjQuNi4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0LXJlZnJlc2hcIjogXCJeMC40LjVcIixcbiAgICBcImVzbGludC1wbHVnaW4tc3Rvcnlib29rXCI6IFwiXjAuNi4xNVwiLFxuICAgIFwiaHVza3lcIjogXCJeOC4wLjBcIixcbiAgICBcImpzZG9tXCI6IFwiXjIzLjAuMVwiLFxuICAgIFwicG9zdGNzc1wiOiBcIl44LjQuMzJcIixcbiAgICBcInByZXR0aWVyXCI6IFwiXjMuMS4xXCIsXG4gICAgXCJyZWFjdFwiOiBcIl4xOC4yLjBcIixcbiAgICBcInJlYWN0LWRvbVwiOiBcIl4xOC4yLjBcIixcbiAgICBcInN0b3J5Ym9va1wiOiBcIl43LjYuMTBcIixcbiAgICBcInRhaWx3aW5kLW1lcmdlXCI6IFwiXjIuMS4wXCIsXG4gICAgXCJ0YWlsd2luZGNzc1wiOiBcIl4zLjMuNlwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl41LjIuMlwiLFxuICAgIFwidml0ZVwiOiBcIl41LjAuOFwiLFxuICAgIFwidml0ZS1wbHVnaW4tZHRzXCI6IFwiXjMuNi40XCIsXG4gICAgXCJ2aXRlc3RcIjogXCJeMS4wLjRcIlxuICB9LFxuICBcInBlZXJEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwicmVhY3RcIjogXCJeMTguMi4wXCIsXG4gICAgXCJyZWFjdC1kb21cIjogXCJeMTguMi4wXCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiZGVib3VuY2VcIjogXCJeMi4wLjBcIlxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxNQUFNLGVBQWU7QUFDOUIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUzs7O0FDbUZkLHVCQUFvQjtBQUFBLEVBQ2xCLE9BQVM7QUFBQSxFQUNULGFBQWE7QUFDZjs7O0FEMUZGLElBQU0sbUNBQW1DO0FBUXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLElBQUksRUFBRSxhQUFhLEtBQUssQ0FBQztBQUFBO0FBQUEsRUFDM0I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyxLQUFLLE9BQU8sVUFBVSxDQUFDO0FBQUEsTUFDakQsVUFBVTtBQUFBLE1BQ1YsU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLElBQ3ZCO0FBQUEsSUFDQSxlQUFlO0FBQUE7QUFBQSxNQUViLFVBQVUsQ0FBQyxxQkFBcUIsR0FBRyxPQUFPLEtBQUssZ0JBQWdCLENBQUM7QUFBQSxJQUNsRTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLGFBQWE7QUFBQSxJQUNiLFlBQVk7QUFBQSxJQUNaLFVBQVU7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
