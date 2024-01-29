# React image zoom V2

This is an image zoom component for React that supports mousewheel and touch interactions.
[Storybook.js] is used for development and testing.

## Features

- mousewheel zoom
- ability to zoom on click
- show/hide zoom window on hover
- render zoom window into a React portal
- TODO: touch zoom

### TODO:

- touch zooom
- chunking - `(!) Some chunks are larger than 500 kB after minification.`
- - Using dynamic import() to code-split the application
- - Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-ma
- - Adjust chunk size limit for this warning via build.chunkSizeWarningLim
