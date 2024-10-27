import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom', // required for React components
    setupFiles: './vitest.setup.ts', // setup file to include testing library extensions
  },
  plugins: [react()],
});