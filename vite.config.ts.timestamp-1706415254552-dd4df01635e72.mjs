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
    globals: true,
    environment: 'jsdom',
    setupFiles: './lib/test/setup.ts',
    coverage: {
      all: false,
      enabled: true,
    },
  },
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2Fhcm9uL0NvZGUvcHJvamVjdHMvcmVhY3Qtc2ltcGxlLWltYWdlLXpvb20tdjIvcmVhY3Qtc2l6LXY0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYWFyb24vQ29kZS9wcm9qZWN0cy9yZWFjdC1zaW1wbGUtaW1hZ2Utem9vbS12Mi9yZWFjdC1zaXotdjQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2Fhcm9uL0NvZGUvcHJvamVjdHMvcmVhY3Qtc2ltcGxlLWltYWdlLXpvb20tdjIvcmVhY3Qtc2l6LXY0L3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuaW1wb3J0IHsgam9pbiwgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuXG5pbXBvcnQgeyBwZWVyRGVwZW5kZW5jaWVzIH0gZnJvbSAnLi9wYWNrYWdlLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBkdHMoeyByb2xsdXBUeXBlczogdHJ1ZSB9KSwgLy8gT3V0cHV0IC5kLnRzIGZpbGVzXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiAnZXNuZXh0JyxcbiAgICBtaW5pZnk6IGZhbHNlLFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCBqb2luKCdsaWInLCAnaW5kZXgudHMnKSksXG4gICAgICBmaWxlTmFtZTogJ2luZGV4JyxcbiAgICAgIGZvcm1hdHM6IFsnZXMnLCAnY2pzJ10sXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAvLyBFeGNsdWRlIHBlZXIgZGVwZW5kZW5jaWVzIGZyb20gdGhlIGJ1bmRsZSB0byByZWR1Y2UgYnVuZGxlIHNpemVcbiAgICAgIGV4dGVybmFsOiBbJ3JlYWN0L2pzeC1ydW50aW1lJywgLi4uT2JqZWN0LmtleXMocGVlckRlcGVuZGVuY2llcyldLFxuICAgIH0sXG4gIH0sXG4gIHRlc3Q6IHtcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgIHNldHVwRmlsZXM6ICcuL2xpYi90ZXN0L3NldHVwLnRzJyxcbiAgICBjb3ZlcmFnZToge1xuICAgICAgYWxsOiBmYWxzZSxcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbn0pO1xuIiwgIntcbiAgXCJuYW1lXCI6IFwidml0ZS1yZWFjdC1jb21wb25lbnQtbGlicmFyeS1zdGFydGVyXCIsXG4gIFwicHJpdmF0ZVwiOiB0cnVlLFxuICBcInZlcnNpb25cIjogXCIwLjAuMFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQSB0ZW1wbGF0ZSBmb3IgY3JlYXRpbmcgUmVhY3QgY29tcG9uZW50IGxpYnJhcmllcyB3aXRoIFZpdGUsIFRhaWx3aW5kLCBhbmQgU3Rvcnlib29rLlwiLFxuICBcImF1dGhvclwiOiBcInJheXlhbWhrXCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJmaWxlc1wiOiBbXG4gICAgXCJkaXN0XCJcbiAgXSxcbiAgXCJzaWRlRWZmZWN0c1wiOiBbXG4gICAgXCIqKi8qLmNzc1wiXG4gIF0sXG4gIFwibWFpblwiOiBcIi4vZGlzdC9pbmRleC5janNcIixcbiAgXCJtb2R1bGVcIjogXCIuL2Rpc3QvaW5kZXguanNcIixcbiAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9pbmRleC5kLnRzXCIsXG4gIFwiZXhwb3J0c1wiOiB7XG4gICAgXCIuXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IHtcbiAgICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9pbmRleC5kLnRzXCIsXG4gICAgICAgIFwiZGVmYXVsdFwiOiBcIi4vZGlzdC9pbmRleC5qc1wiXG4gICAgICB9LFxuICAgICAgXCJyZXF1aXJlXCI6IHtcbiAgICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9pbmRleC5kLnRzXCIsXG4gICAgICAgIFwiZGVmYXVsdFwiOiBcIi4vZGlzdC9pbmRleC5janNcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCIuL2Nzc1wiOiBcIi4vZGlzdC9zdHlsZS5jc3NcIlxuICB9LFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiZGV2XCI6IFwic3Rvcnlib29rIGRldiAtcCA2MDA2XCIsXG4gICAgXCJ0ZXN0XCI6IFwidml0ZXN0IHJ1blwiLFxuICAgIFwidGVzdDp3YXRjaFwiOiBcInZpdGVzdFwiLFxuICAgIFwidGVzdDp1aVwiOiBcInZpdGVzdCAtLXVpXCIsXG4gICAgXCJ0ZXN0OmNvdmVyYWdlXCI6IFwidml0ZXN0IHJ1biAtLWNvdmVyYWdlXCIsXG4gICAgXCJidWlsZFwiOiBcInN0b3J5Ym9vayBidWlsZFwiLFxuICAgIFwiYnVpbGQ6bGliXCI6IFwidHNjICYmIHZpdGUgYnVpbGRcIixcbiAgICBcImxpbnRcIjogXCJlc2xpbnQgLiAtLWV4dCB0cyx0c3ggLS1yZXBvcnQtdW51c2VkLWRpc2FibGUtZGlyZWN0aXZlcyAtLW1heC13YXJuaW5ncyAwXCIsXG4gICAgXCJmb3JtYXRcIjogXCJwcmV0dGllciAuIC0td3JpdGUgLS1pZ25vcmUtdW5rbm93blwiLFxuICAgIFwicHJlcGFyZVwiOiBcImh1c2t5IGluc3RhbGxcIixcbiAgICBcInRlc3Qtc3Rvcnlib29rXCI6IFwidGVzdC1zdG9yeWJvb2tcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLWFjdGlvbnNcIjogXCJeNy42LjEwXCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLWVzc2VudGlhbHNcIjogXCJeNy42LjEwXCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLWludGVyYWN0aW9uc1wiOiBcIl43LjYuMTBcIixcbiAgICBcIkBzdG9yeWJvb2svYmxvY2tzXCI6IFwiXjcuNi4xMFwiLFxuICAgIFwiQHN0b3J5Ym9vay9qZXN0XCI6IFwiXjAuMi4zXCIsXG4gICAgXCJAc3Rvcnlib29rL3JlYWN0XCI6IFwiXjcuNi4xMFwiLFxuICAgIFwiQHN0b3J5Ym9vay9yZWFjdC12aXRlXCI6IFwiXjcuNi4xMFwiLFxuICAgIFwiQHN0b3J5Ym9vay90ZXN0LXJ1bm5lclwiOiBcIl4wLjE2LjBcIixcbiAgICBcIkBzdG9yeWJvb2svdGVzdGluZy1saWJyYXJ5XCI6IFwiXjAuMi4yXCIsXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L2plc3QtZG9tXCI6IFwiXjYuMS41XCIsXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L3JlYWN0XCI6IFwiXjE0LjEuMlwiLFxuICAgIFwiQHRlc3RpbmctbGlicmFyeS91c2VyLWV2ZW50XCI6IFwiXjE0LjUuMVwiLFxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjAuMTAuNFwiLFxuICAgIFwiQHR5cGVzL3JlYWN0XCI6IFwiXjE4LjIuNDNcIixcbiAgICBcIkB0eXBlcy9yZWFjdC1kb21cIjogXCJeMTguMi4xN1wiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L2VzbGludC1wbHVnaW5cIjogXCJeNi4xNC4wXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyXCI6IFwiXjYuMTQuMFwiLFxuICAgIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI6IFwiXjMuNS4wXCIsXG4gICAgXCJAdml0ZXN0L2NvdmVyYWdlLXY4XCI6IFwiXjEuMC40XCIsXG4gICAgXCJAdml0ZXN0L3VpXCI6IFwiXjEuMC40XCIsXG4gICAgXCJhdXRvcHJlZml4ZXJcIjogXCJeMTAuNC4xNlwiLFxuICAgIFwiY2xzeFwiOiBcIl4yLjAuMFwiLFxuICAgIFwiZXNsaW50XCI6IFwiXjguNTUuMFwiLFxuICAgIFwiZXNsaW50LWNvbmZpZy1wcmV0dGllclwiOiBcIl45LjEuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1qZXN0LWRvbVwiOiBcIl41LjEuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdFwiOiBcIl43LjMzLjJcIixcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3QtaG9va3NcIjogXCJeNC42LjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3QtcmVmcmVzaFwiOiBcIl4wLjQuNVwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1zdG9yeWJvb2tcIjogXCJeMC42LjE1XCIsXG4gICAgXCJodXNreVwiOiBcIl44LjAuMFwiLFxuICAgIFwianNkb21cIjogXCJeMjMuMC4xXCIsXG4gICAgXCJwb3N0Y3NzXCI6IFwiXjguNC4zMlwiLFxuICAgIFwicHJldHRpZXJcIjogXCJeMy4xLjFcIixcbiAgICBcInJlYWN0XCI6IFwiXjE4LjIuMFwiLFxuICAgIFwicmVhY3QtZG9tXCI6IFwiXjE4LjIuMFwiLFxuICAgIFwic3Rvcnlib29rXCI6IFwiXjcuNi4xMFwiLFxuICAgIFwidGFpbHdpbmQtbWVyZ2VcIjogXCJeMi4xLjBcIixcbiAgICBcInRhaWx3aW5kY3NzXCI6IFwiXjMuMy42XCIsXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuMi4yXCIsXG4gICAgXCJ2aXRlXCI6IFwiXjUuMC44XCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1kdHNcIjogXCJeMy42LjRcIixcbiAgICBcInZpdGVzdFwiOiBcIl4xLjAuNFwiXG4gIH0sXG4gIFwicGVlckRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJyZWFjdFwiOiBcIl4xOC4yLjBcIixcbiAgICBcInJlYWN0LWRvbVwiOiBcIl4xOC4yLjBcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJkZWJvdW5jZVwiOiBcIl4yLjAuMFwiXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLE1BQU0sZUFBZTtBQUM5QixPQUFPLFdBQVc7QUFDbEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTOzs7QUNtRmQsdUJBQW9CO0FBQUEsRUFDbEIsT0FBUztBQUFBLEVBQ1QsYUFBYTtBQUNmOzs7QUQxRkYsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sSUFBSSxFQUFFLGFBQWEsS0FBSyxDQUFDO0FBQUE7QUFBQSxFQUMzQjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLEtBQUssT0FBTyxVQUFVLENBQUM7QUFBQSxNQUNqRCxVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsSUFDdkI7QUFBQSxJQUNBLGVBQWU7QUFBQTtBQUFBLE1BRWIsVUFBVSxDQUFDLHFCQUFxQixHQUFHLE9BQU8sS0FBSyxnQkFBZ0IsQ0FBQztBQUFBLElBQ2xFO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsWUFBWTtBQUFBLElBQ1osVUFBVTtBQUFBLE1BQ1IsS0FBSztBQUFBLE1BQ0wsU0FBUztBQUFBLElBQ1g7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
