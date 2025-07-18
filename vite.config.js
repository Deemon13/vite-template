import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/

/// <reference types="vitest" />
export default defineConfig({
  base: "vite-template",
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
